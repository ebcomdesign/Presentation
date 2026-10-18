import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function DocumentInfo() {
  const { token, setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ verificationCode: '', documentId: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const numeric = (key) => (e) =>
    setForm({ ...form, [key]: e.target.value.replace(/\D/g, '') });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.verificationCode) {
      setError('رمز تصدیق را وارد کنید (فقط عدد)');
      return;
    }
    if (!form.documentId) {
      setError('شناسه سند را وارد کنید (فقط عدد)');
      return;
    }
    setLoading(true);
    try {
      const { user } = await api.setDocuments(form, token);
      setUser(user);
      navigate('/final');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="رمز تصدیق و شناسه سند" subtitle="هر دو فیلد فقط عدد هستند">
      <form onSubmit={submit} className="space-y-4">
        <div>
          <label className="text-xs text-gray-400 block mb-1">رمز تصدیق (فقط عدد)</label>
          <input
            className="input-dark text-center tracking-widest"
            inputMode="numeric"
            placeholder="12345"
            value={form.verificationCode}
            onChange={numeric('verificationCode')}
            dir="ltr"
          />
        </div>
        <div>
          <label className="text-xs text-gray-400 block mb-1">شناسه سند (فقط عدد)</label>
          <input
            className="input-dark text-center tracking-widest"
            inputMode="numeric"
            placeholder="987654"
            value={form.documentId}
            onChange={numeric('documentId')}
            dir="ltr"
          />
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال ارسال…' : 'ارسال نهایی'}
        </button>
      </form>
    </Layout>
  );
}