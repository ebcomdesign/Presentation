import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Stepper from '../components/Stepper';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const nextStep = () => {
    switch (user?.status) {
      case 'phone_verified':
        return navigate('/identity');
      case 'identity_verified':
        return navigate('/terms');
      case 'terms_accepted':
        return navigate('/attorney');
      case 'attorney_set':
        return navigate('/documents');
      default:
        return navigate('/final');
    }
  };

  return (
    <Layout title="داشبورد" subtitle="مراحل تکمیل پرونده">
      <Stepper current={user?.status} />
      <button onClick={nextStep} className="btn-gold w-full">
        ادامه فرآیند
      </button>
      <button onClick={logout} className="btn-outline w-full mt-3">
        خروج
      </button>
    </Layout>
  );
}