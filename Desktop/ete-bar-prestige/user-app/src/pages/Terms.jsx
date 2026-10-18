import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

export default function Terms() {
  const { token, setUser } = useAuth();
  const navigate = useNavigate();
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedCollateral, setAcceptedCollateral] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!acceptedTerms || !acceptedCollateral) {
      setError('برای ادامه باید هر دو مورد را تایید کنید');
      return;
    }
    setLoading(true);
    try {
      const { user } = await api.acceptTerms({ acceptedTerms, acceptedCollateral }, token);
      setUser(user);
      navigate('/attorney');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title="شرایط و قوانین" subtitle="لطفاً با دقت مطالعه و تایید کنید">
      <form onSubmit={submit} className="space-y-4">
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" checked={acceptedTerms} onChange={(e) => setAcceptedTerms(e.target.checked)} className="mt-1" />
          <span>شرایط و قوانین سرویس اعتبار پرستیژ را مطالعه کرده و می‌پذیرم.</span>
        </label>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" checked={acceptedCollateral} onChange={(e) => setAcceptedCollateral(e.target.checked)} className="mt-1" />
          <span>شرایط وثیقه را مطالعه کرده و می‌پذیرم.</span>
        </label>
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="btn-gold w-full" disabled={loading}>
          {loading ? 'در حال ثبت…' : 'تایید و ادامه'}
        </button>
      </form>
    </Layout>
  );
}