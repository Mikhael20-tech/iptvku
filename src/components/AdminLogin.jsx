import { useState } from 'react';
import { Lock, Eye, EyeOff, Tv, Shield } from 'lucide-react';

// Password admin bisa diubah di sini
const ADMIN_PASSWORD = 'streamvault123';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (password === ADMIN_PASSWORD) {
        onLogin(true);
        setError('');
      } else {
        setError('Password salah. Coba lagi.');
      }
      setLoading(false);
    }, 600);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 50%, rgba(108,99,255,0.12) 0%, var(--bg-primary) 70%)',
      padding: 'var(--space-xl)',
    }}>
      <div style={{
        background: 'var(--bg-card)', border: '1px solid var(--bg-glass-border)', borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-3xl)', maxWidth: 400, width: '100%',
        boxShadow: '0 40px 80px rgba(0,0,0,0.7)',
        animation: 'slideUp 0.3s ease',
      }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div style={{
            width: 64, height: 64, background: 'var(--accent-gradient)', borderRadius: 'var(--radius-lg)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--space-md)',
            boxShadow: 'var(--shadow-glow)',
          }}>
            <Shield size={28} color="white" />
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: 4 }}>Admin Panel</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>StreamVault Management</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
          <div>
            <label htmlFor="admin-password" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 'var(--space-xs)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Password Admin
            </label>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                <Lock size={16} />
              </div>
              <input
                id="admin-password"
                type={show ? 'text' : 'password'}
                value={password}
                onChange={e => { setPassword(e.target.value); setError(''); }}
                placeholder="Masukkan password admin"
                autoFocus
                style={{
                  width: '100%', background: 'var(--bg-glass)', border: `1px solid ${error ? 'rgba(255,100,100,0.5)' : 'var(--bg-glass-border)'}`,
                  borderRadius: 'var(--radius-md)', padding: '12px 44px',
                  color: 'var(--text-primary)', fontFamily: 'var(--font-family)', fontSize: '0.9rem', outline: 'none',
                  transition: 'border-color var(--transition-fast)',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent-primary)'}
                onBlur={e => e.target.style.borderColor = error ? 'rgba(255,100,100,0.5)' : 'var(--bg-glass-border)'}
              />
              <button
                type="button"
                id="btn-toggle-password"
                onClick={() => setShow(s => !s)}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
              >
                {show ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
            {error && <p style={{ color: '#ff7070', fontSize: '0.78rem', marginTop: 6 }}>{error}</p>}
          </div>

          <button
            id="btn-admin-login"
            type="submit"
            disabled={loading || !password}
            className="btn-primary"
            style={{ justifyContent: 'center', marginTop: 'var(--space-sm)', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? (
              <><div className="spinner" style={{ width: 16, height: 16 }} /> Memeriksa...</>
            ) : (
              <><Shield size={16} /> Masuk ke Admin</>
            )}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 'var(--space-xl)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Default password: <code style={{ color: 'var(--accent-primary)', background: 'rgba(108,99,255,0.1)', padding: '2px 6px', borderRadius: 4 }}>streamvault123</code>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
