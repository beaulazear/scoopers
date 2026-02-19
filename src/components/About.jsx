import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update meta tags for SEO
    document.title = "About Beau Lazear - Founder of Scoopers NYC Job Board | Brooklyn Dog Walker"

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', "Meet Beau Lazear, Brooklyn dog walker, software developer, and founder of Scoopers NYC - a real-time job board on a map for street cleanup. Owner of Beau's Animal Care, walking 50+ dogs weekly. Built a two-sided marketplace solving NYC's dog waste and litter problem.")
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
      document.title = "Scoopers NYC - Real-Time Cleanup Job Board | Post Jobs, Earn Money Cleaning | Beau Lazear"
      if (metaDescription) {
        metaDescription.setAttribute('content', "NYC's live job board on a map for street cleanup. Post dog waste & litter removal jobs on your block, or claim jobs and earn $5-$20 per cleanup. Real-time GPS tracking, photo verification, instant payment. Mobile app for posters & scoopers. Founded by Beau Lazear, Brooklyn dog walker. Spring 2026.")
      }
      if (ogTitle) {
        ogTitle.setAttribute('content', "Scoopers - Job Board on a Map for NYC Street Cleanup | Beau Lazear")
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', "Live job board for NYC cleanup. Post dog waste & litter jobs on your block ($5-$20), or earn money claiming jobs. Real-time GPS tracking, photo verification, instant payment through app. Two-sided marketplace connecting neighbors with local scoopers. Founded by Beau Lazear, Brooklyn dog walker & founder of Beau's Animal Care. Launching Spring 2026.")
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
            marginBottom: '1rem',
            color: 'var(--green)',
          }}>
            About Beau Lazear & Scoopers NYC
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--off-white)', fontWeight: '600', opacity: 0.9 }}>
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
            I'm a dog walker in Brooklyn. I run Beau's Animal Care and walk 50+ dogs every week. Every day I see piles of dog waste on the same blocks. Nobody cleans them up.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            So I built Scoopers — a job board on a map. Residents post cleanup jobs with a price ($5–$20). Jobs appear live on a map. Dog walkers and locals claim jobs, clean, submit before/after photos, and get paid instantly. GPS-tracked. Photo-verified. Real-time.
          </p>

          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            I'm also a software developer. Built apps for my business and co-founded Voxxy. But Scoopers is different — it's a two-sided marketplace solving a real problem I see every single day. Launching Spring 2026 in NYC.
          </p>

          <div style={{ marginBottom: '2.5rem' }}>
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

          <div style={{
            paddingTop: '2rem',
            borderTop: '2px solid #ddd',
          }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              Questions? Email <a href="mailto:beaulazear@gmail.com" style={{ color: 'var(--green)', fontWeight: '700' }}>beaulazear@gmail.com</a>
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
