import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function IdentityVerify() {
  const { token, setUser } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', nationalId: '', birthDate: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const { user } = await api.submitIdentity(form, token);
      setUser(user);
      navigate('/terms');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="تایید اطلاعات هویتی" subtitle="اطلاعات خود را با دقت وارد کنید">
      <form onSubmit={submit} className="space-y-4">
        <input className="input-dark" placeholder="نام و نام خانوادگی" value={form.fullName} onChange={set('fullName')} />
        <input className="input-dark" placeholder="کد ملی (۱۰ رقم)" inputMode="numeric" maxLength={10} value={form.nationalId} onChange={(e) => setForm({ ...form, nationalId: e.target.value.replace(/\D/g, '') })} dir="ltr" />
        <input className="input-dark" type="date" value={form.birthDate} onChange={set('birthDate')} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال ارسال…' : 'تایید و ادامه'}
        </button>
      </form>
    </Layout>
  );
}