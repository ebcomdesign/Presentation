import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function OtpVerify() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const phone = state?.phone;
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(120);

  useEffect(() => {
    if (!phone) navigate('/');
  }, [phone, navigate]);

  useEffect(() => {
    if (timer <= 0) return;
    const t = setInterval(() => setTimer((v) => v - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (code.length !== 6) {
      setError('کد باید ۶ رقم باشد');
      return;
    }
    setLoading(true);
    try {
      const { token, user } = await api.verifyOtp(phone, code);
      login(token, user);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const resend = async () => {
    try {
      await api.sendOtp(phone);
      setTimer(120);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Layout title="کد تایید" subtitle={`کد ۶ رقمی ارسال شده به ${phone} را وارد کنید`}>
      <form onSubmit={submit} className="space-y-4">
        <input
          className="input-dark text-center text-2xl tracking-[0.5em]"
          placeholder="------"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
          inputMode="numeric"
          dir="ltr"
        />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        {state?.devCode && (
          <p className="text-xs text-gray-500">کد تست: {state.devCode}</p>
        )}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال بررسی…' : 'تایید و ورود'}
        </button>
        <button
          type="button"
          onClick={resend}
          disabled={timer > 0}
          className="btn-outline w-full"
        >
          {timer > 0 ? `ارسال مجدد در ${timer} ثانیه` : 'ارسال مجدد کد'}
        </button>
      </form>
    </Layout>
  );
}