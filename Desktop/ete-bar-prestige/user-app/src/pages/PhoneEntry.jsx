import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';

export default function PhoneEntry() {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!/^09\d{9}$/.test(phone)) {
      setError('شماره موبایل باید با ۰۹ شروع شده و ۱۱ رقم باشد');
      return;
    }
    setLoading(true);
    try {
      const res = await api.sendOtp(phone);
      navigate('/otp', { state: { phone, devCode: res.devCode } });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="ورود به اعتبار پرستیژ" subtitle="شماره موبایل خود را وارد کنید">
      <form onSubmit={submit} className="space-y-4">
        <input
          className="input-dark text-center tracking-widest"
          placeholder="09123456789"
          value={phone}
          onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
          inputMode="numeric"
          maxLength={11}
          dir="ltr"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال ارسال…' : 'دریافت کد تایید'}
        </button>
      </form>
    </Layout>
  );
}