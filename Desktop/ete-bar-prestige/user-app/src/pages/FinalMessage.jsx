import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { api } from '../api/client';
import { useAuth } from '../context/AuthContext';

const styles = {
  success: 'border-green-500 text-green-400',
  error: 'border-red-500 text-red-400',
  pending: 'border-gold-brand text-gold-brand',
  info: 'border-teal-brand text-teal-brand',
};

export default function FinalMessage() {
  const { token, logout } = useAuth();
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    api
      .finalStatus(token)
      .then(({ message }) => setMessage(message))
      .catch(() => setMessage({ type: 'error', title: 'خطا', text: 'خطا در دریافت وضعیت' }))
      .finally(() => setLoading(false));
  }, [token]);

  if (loading) return <Layout title="در حال بارگذاری…"><p>لطفاً صبر کنید</p></Layout>;
  if (!message) return null;

  return (
    <Layout>
      <div className={`card-dark border-2 ${styles[message.type] || styles.info} text-center`}>
        <h2 className="text-xl font-bold mb-3">{message.title}</h2>
        <p className="text-sm text-gray-300">{message.text}</p>
      </div>
      <button onClick={() => navigate('/dashboard')} className="btn-outline w-full mt-6">
        بازگشت به داشبورد
      </button>
      <button onClick={logout} className="btn-gold w-full mt-3">
        خروج
      </button>
    </Layout>
  );
}