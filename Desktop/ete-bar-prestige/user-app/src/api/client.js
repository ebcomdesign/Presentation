const BASE = 'http://localhost:4000';

async function request(path, { method = 'GET', body, token } = {}) {
  const res = await fetch(BASE + path, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'خطای شبکه');
  return data;
}

export const api = {
  sendOtp: (phone) => request('/api/auth/send-otp', { method: 'POST', body: { phone } }),
  verifyOtp: (phone, code) =>
    request('/api/auth/verify-otp', { method: 'POST', body: { phone, code } }),
  me: (token) => request('/api/me', { token }),
  submitIdentity: (payload, token) =>
    request('/api/kyc/identity', { method: 'POST', body: payload, token }),
  acceptTerms: (payload, token) =>
    request('/api/terms/accept', { method: 'POST', body: payload, token }),
  setAttorney: (payload, token) =>
    request('/api/attorney/set', { method: 'POST', body: payload, token }),
  setDocuments: (payload, token) =>
    request('/api/documents/set', { method: 'POST', body: payload, token }),
  finalStatus: (token) => request('/api/final-status', { token }),
};