import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PhoneEntry from './pages/PhoneEntry';
import OtpVerify from './pages/OtpVerify';
import Dashboard from './pages/Dashboard';
import IdentityVerify from './pages/IdentityVerify';
import Terms from './pages/Terms';
import Attorney from './pages/Attorney';
import DocumentInfo from './pages/DocumentInfo';
import FinalMessage from './pages/FinalMessage';

function PrivateRoute({ children }) {
  const { token, loading } = useAuth();
  if (loading) return <div className="p-10 text-center">در حال بارگذاری…</div>;
  return token ? children : <Navigate to="/" replace />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PhoneEntry />} />
      <Route path="/otp" element={<OtpVerify />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/identity" element={<PrivateRoute><IdentityVerify /></PrivateRoute>} />
      <Route path="/terms" element={<PrivateRoute><Terms /></PrivateRoute>} />
      <Route path="/attorney" element={<PrivateRoute><Attorney /></PrivateRoute>} />
      <Route path="/documents" element={<PrivateRoute><DocumentInfo /></PrivateRoute>} />
      <Route path="/final" element={<PrivateRoute><FinalMessage /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}