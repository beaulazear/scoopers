import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { login, authApiCall, logout, isAuthenticated } from '../utils/api'

export default function PoopStreats() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [error, setError] = useState('')
  const [waitlist, setWaitlist] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      fetchWaitlist()
    }
  }, [token])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const data = await login(username, password)

      if (data.user && data.user.admin) {
        setToken(data.token)
        setError('')
      } else {
        logout() // Clear token if not admin
        setError('Admin access required')
      }
    } catch (err) {
      setError(err.message || 'Failed to connect')
    } finally {
      setLoading(false)
    }
  }

  const fetchWaitlist = async () => {
    setLoading(true)
    try {
      const data = await authApiCall('/waitlist_signups')
      setWaitlist(data)
    } catch (err) {
      if (err.message.includes('401') || err.message.includes('403') || err.message.includes('No authentication token')) {
        setError('Session expired - please log in again')
        handleLogout()
      } else {
        setError(err.message || 'Failed to fetch waitlist')
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    logout()
    setToken(null)
    setWaitlist([])
    setUsername('')
    setPassword('')
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (!token) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'var(--dark)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        <div style={{
          background: 'var(--off-white)',
          padding: '40px',
          borderRadius: '12px',
          border: '3px solid var(--green)',
          maxWidth: '400px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: '900',
            marginBottom: '0.5rem',
            color: 'var(--dark)',
            textAlign: 'center'
          }}>
            Admin Login
          </h1>
          <p style={{
            fontSize: '0.9rem',
            color: '#666',
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            Waitlist Management
          </p>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                border: '2px solid var(--dark)',
                borderRadius: '8px',
                marginBottom: '1rem',
                fontFamily: 'inherit'
              }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                border: '2px solid var(--dark)',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                fontFamily: 'inherit'
              }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '1rem',
                fontWeight: '700',
                background: 'var(--green)',
                color: 'var(--dark)',
                border: '2px solid var(--dark)',
                borderRadius: '8px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1
              }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          {error && (
            <p style={{
              color: 'var(--orange)',
              fontWeight: '700',
              marginTop: '1rem',
              textAlign: 'center',
              fontSize: '0.9rem'
            }}>
              {error}
            </p>
          )}

          <button
            onClick={() => navigate('/')}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '0.9rem',
              fontWeight: '600',
              background: 'transparent',
              color: '#666',
              border: 'none',
              marginTop: '1.5rem',
              cursor: 'pointer'
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--dark)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '900',
              color: 'var(--green)',
              marginBottom: '0.5rem'
            }}>
              Waitlist Signups
            </h1>
            <p style={{ color: 'var(--off-white)', fontSize: '1rem' }}>
              {waitlist.length} total signups
            </p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: '700',
              background: 'var(--orange)',
              color: 'var(--dark)',
              border: '2px solid var(--off-white)',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>

        {loading ? (
          <p style={{ color: 'var(--off-white)', textAlign: 'center' }}>
            Loading...
          </p>
        ) : waitlist.length === 0 ? (
          <p style={{ color: 'var(--off-white)', textAlign: 'center' }}>
            No signups yet
          </p>
        ) : (
          <div style={{
            background: 'var(--off-white)',
            borderRadius: '12px',
            border: '3px solid var(--green)',
            overflow: 'hidden'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{ background: 'var(--green)' }}>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>
                    Email
                  </th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>
                    Signed Up
                  </th>
                  <th style={{ padding: '16px', textAlign: 'left', fontWeight: '900', color: 'var(--dark)' }}>
                    IP Address
                  </th>
                </tr>
              </thead>
              <tbody>
                {waitlist.map((signup, index) => (
                  <tr
                    key={signup.id}
                    style={{
                      borderBottom: index < waitlist.length - 1 ? '1px solid #ddd' : 'none'
                    }}
                  >
                    <td style={{ padding: '16px', fontWeight: '600' }}>
                      {signup.email}
                    </td>
                    <td style={{ padding: '16px', color: '#666' }}>
                      {formatDate(signup.created_at)}
                    </td>
                    <td style={{ padding: '16px', color: '#666', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                      {signup.ip_address}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {error && (
          <p style={{
            color: 'var(--orange)',
            fontWeight: '700',
            marginTop: '1rem',
            textAlign: 'center'
          }}>
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
