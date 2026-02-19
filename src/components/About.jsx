import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--dark)',
      padding: '60px 20px 60px',
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
      }}>
        <Link to="/" style={{
          display: 'inline-block',
          marginBottom: '30px',
          color: 'var(--dark)',
          fontWeight: '800',
          fontSize: '1.1rem',
          textDecoration: 'none',
          background: 'var(--green)',
          padding: '12px 24px',
          borderRadius: '12px',
          border: '3px solid var(--off-white)',
        }}>
          ← Back to Home
        </Link>

        <div style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '900',
            marginBottom: '1rem',
            color: 'var(--green)',
          }}>
            About Scoopers
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--off-white)', fontWeight: '600', opacity: 0.9 }}>
            Built by a dog walker who got tired of stepping in it
          </p>
        </div>

        <div style={{
          background: 'var(--off-white)',
          padding: '40px',
          borderRadius: '12px',
          border: '3px solid var(--dark)',
        }}>

          <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1.5rem', color: 'var(--dark)' }}>
            Hi, I'm Beau
          </h2>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            I'm a dog walker in Brooklyn. I run Beau's Animal Care and walk 50+ dogs every week. Every day I see piles of dog waste on the same blocks. Nobody cleans them up.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            So I built Scoopers. Post a cleanup job, someone nearby claims it and gets paid. That's it.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm also a software developer. Built apps for my business and co-founded Voxxy. But this one's different — it's about solving a real problem I see every single day.
          </p>

          <div style={{
            background: 'var(--green)',
            padding: '2.5rem',
            borderRadius: '12px',
            marginBottom: '2.5rem',
            border: '3px solid var(--dark)',
          }}>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--dark)' }}>
              @beaus.animal.care
            </h3>
            <div style={{
              maxWidth: '100%',
              margin: '0 auto',
              background: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              border: '2px solid var(--dark)',
            }}>
              <iframe
                src="https://www.instagram.com/beaus.animal.care/embed"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                style={{ border: 'none', overflow: 'hidden' }}
              />
            </div>
          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '2px solid #ddd',
          }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Questions? Email <a href="mailto:hello@scoopers.app" style={{ color: 'var(--green)', fontWeight: '700' }}>hello@scoopers.app</a>
            </p>
            <p style={{ fontSize: '1rem' }}>
              <a href="https://beaulazear.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: '700' }}>beaulazear.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
