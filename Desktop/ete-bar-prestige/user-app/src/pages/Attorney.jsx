import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function Attorney() {
  const { token, setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ attorneyName: '', attorneyNationalId: '', attorneyPhone: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { user } = await api.setAttorney(form, token);
      setUser(user);
      navigate('/documents');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="تنظیم وکالت‌نامه" subtitle="اطلاعات وکیل خود را وارد کنید">
      <form onSubmit={submit} className="space-y-4">
        <input className="input-dark" placeholder="نام وکیل" value={form.attorneyName} onChange={(e) => setForm({ ...form, attorneyName: e.target.value })} />
        <input className="input-dark" placeholder="کد ملی وکیل" inputMode="numeric" maxLength={10} value={form.attorneyNationalId} onChange={(e) => setForm({ ...form, attorneyNationalId: e.target.value.replace(/\D/g, '') })} dir="ltr" />
        <input className="input-dark" placeholder="شماره تماس وکیل" inputMode="numeric" maxLength={11} value={form.attorneyPhone} onChange={(e) => setForm({ ...form, attorneyPhone: e.target.value.replace(/\D/g, '') })} dir="ltr" />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال ثبت…' : 'ثبت وکالت‌نامه'}
        </button>
      </form>
    </Layout>
  );
}