import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update meta tags for SEO
    document.title = "About Beau Lazear - Founder of Scoopers NYC | Brooklyn Dog Walker"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Meet Beau Lazear, Brooklyn dog walker, software developer, and founder of Scoopers NYC - a block sponsorship platform where dog walkers keep NYC blocks clean. Owner of Beau's Animal Care, walking 50+ dogs weekly. Tired of stepping in everyone else's sh*t.")
    }

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', "About Beau Lazear - Founder of Scoopers NYC | Beau's Animal Care Dog Walker")
    }

    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', "Meet Beau Lazear, Brooklyn dog walker, software developer, and founder of Scoopers - a job board on a map for NYC cleanup. Owner of Beau's Animal Care walking 50+ dogs weekly.")
    }

    // Cleanup function to restore default meta tags
    return () => {
      document.title = "Scoopers NYC - Sponsor Your Block | Dog Walkers Keep NYC Blocks Clean | Beau Lazear"
      if (metaDescription) {
        metaDescription.setAttribute('content', "Sponsor your block for weekly cleanups by dog walkers ($40-$60/month) or post one-off jobs for dog waste, litter, and trash ($5-$20). Business sponsors show up on the public map. GPS tracking, photo verification, instant payment. Founded by Beau Lazear, Brooklyn dog walker. Spring 2026.")
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', "Scoopers - Clean blocks. Happy neighbors. Easy money.")
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', "Sponsor your block for weekly cleanups by dog walkers ($40-$60/month). Or post one-off jobs for dog waste, litter, and trash ($5-$20). Business sponsors show up on the public map. GPS tracking, photo verification, instant payment. Founded by Beau Lazear, Brooklyn dog walker. Launching Spring 2026.")
      }
    }
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
            marginBottom: '0.5rem',
            color: 'var(--green)',
          }}>
            Scoopers NYC
          </h1>
          <p style={{ fontSize: '1.4rem', color: 'var(--off-white)', fontWeight: '700', opacity: 0.95, marginBottom: '0.5rem' }}>
            by Beau Lazear
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--off-white)', fontWeight: '600', opacity: 0.85 }}>
            Brooklyn Dog Walker & Founder of Beau's Animal Care
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
            I'm a dog walker in Brooklyn. I run Beau's Animal Care and walk 50+ dogs every week. Every day I see piles of dog waste on the same blocks. Nobody cleans them up. I was tired of stepping in everyone else's sh*t.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            So I built Scoopers — a platform where residents sponsor their block for weekly cleanups by dog walkers ($40–$60/month), or post one-off jobs for those messes they see every day ($5–$20). Business sponsors show up on the map. GPS-tracked. Photo-verified. Instant payment.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm also a software developer. Built apps for my business and co-founded Voxxy. But Scoopers is different — it's solving a real problem I step in every single day. Launching Spring 2026 in NYC.
          </p>

          <div style={{
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            textAlign: 'center'
          }}>
            <img
              src="/beau-walking.png"
              alt="Beau walking dogs in Brooklyn"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '4px solid var(--dark)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
              }}
            />
            <div>
              <p style={{ fontSize: '1.1rem', marginBottom: '0.75rem', fontWeight: '600' }}>
                Want to see me in action?
              </p>
              <a
                href="https://instagram.com/beaus.animal.care"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: 'var(--green)',
                  fontSize: '1.2rem',
                  fontWeight: '800',
                  textDecoration: 'none',
                  borderBottom: '2px solid var(--green)',
                  paddingBottom: '2px',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
              >
                Follow @beaus.animal.care on Instagram →
              </a>
            </div>
          </div>

          <div style={{
            paddingTop: '2rem',
            borderTop: '2px solid #ddd',
          }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Questions? Email <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '700' }}>beau@scoopersnyc.com</a>
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
