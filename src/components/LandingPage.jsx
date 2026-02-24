import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'https://dog-walking-app.onrender.com'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [introPhase, setIntroPhase] = useState(0)
  const [triggerIntro, setTriggerIntro] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    // Check URL params to force show intro
    const urlParams = new URLSearchParams(window.location.search)
    const forceIntro = urlParams.get('intro')

    // Check if user has seen the intro before (unless forced)
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro && forceIntro !== 'true' && triggerIntro === 0) {
      setShowIntro(false)
      setShowMainContent(true)
      return
    }

    // Reset to phase 0 when starting
    setIntroPhase(0)

    // Intro animation sequence
    const timers = []

    // Phase 1: Show problem statement (0.5s delay)
    timers.push(setTimeout(() => setIntroPhase(1), 500))

    // Phase 2: Fade out problem (3s total)
    timers.push(setTimeout(() => setIntroPhase(2), 3000))

    // Phase 3: End intro, show main content (3.5s total)
    timers.push(setTimeout(() => {
      setShowIntro(false)
      setShowMainContent(true)
      sessionStorage.setItem('hasSeenIntro', 'true')
    }, 3500))

    return () => timers.forEach(timer => clearTimeout(timer))
  }, [triggerIntro])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      const response = await fetch(`${API_URL}/waitlist_signups`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          waitlist_signup: {
            email: email
          }
        })
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitted(true)
        setEmail('')
      } else {
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to connect. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Intro animation overlay
  if (showIntro) {
    return (
      <div className="intro-overlay">
        <div className="intro-content">
          {introPhase >= 1 && introPhase < 2 && (
            <h1 className={`intro-line intro-line-1 ${introPhase >= 1 ? 'fade-in' : ''} ${introPhase >= 2 ? 'fade-out' : ''}`}>
              Tired of stepping in dog sh*t?
            </h1>
          )}
        </div>
        <button
          className="skip-intro"
          onClick={() => {
            setShowIntro(false)
            setShowMainContent(true)
            sessionStorage.setItem('hasSeenIntro', 'true')
          }}
          aria-label="Skip intro"
        >
          Skip →
        </button>
      </div>
    )
  }

  return (
    <div className={`app ${showMainContent ? 'fade-in-content' : ''}`}>
      {/* Hero Section */}
      <section className="hero" aria-label="Main hero section">
        {/* iOS Badge - Top Right Corner */}
        <div className="ios-badge-corner">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="ios-icon-corner">
            <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
          </svg>
          <div className="ios-badge-corner-text">
            <span className="ios-badge-coming-corner">COMING SOON</span>
            <span className="ios-badge-platform-corner">iOS App</span>
          </div>
        </div>

        <div className="container">
          <h1 className="hero-title">
            SCOOPERS
          </h1>
          <p className="hero-subtitle" role="doc-subtitle">
            Dog walkers keeping your block clean.
          </p>
          <p className="hero-tagline-secondary">
            Clean blocks. Happy neighbors.
          </p>

          <p className="hero-tagline">
            Made with 💩 in Brooklyn
          </p>

          {!submitted ? (
            <>
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  required
                  disabled={isSubmitting}
                  className="email-input"
                />
                <button type="submit" className="cta-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
              {error && (
                <p style={{ color: 'var(--orange)', fontWeight: '700', marginTop: '1rem' }}>
                  {error}
                </p>
              )}
              <p className="hero-note" style={{ marginTop: error ? '0.5rem' : '1.5rem' }}>
                Coming Spring 2026 in Brooklyn and Manhattan.
              </p>
            </>
          ) : (
            <>
              <div className="success-message">
                You're on the list! We'll email you when we launch.
              </div>
              <p className="hero-note">
                Launching Spring 2026 in Brooklyn and Manhattan. Coming to all of NYC soon.
              </p>
            </>
          )}
        </div>
      </section>

      {/* The Problem */}
      <section className="problem" aria-labelledby="problem-heading">
        <div className="container">
          <h2 id="problem-heading" className="problem-title">Every block has that one spot.</h2>
          <p className="problem-text">
            Everyone walks around it. Nobody does anything.
          </p>
          <p className="problem-text-big">
            Until now.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-divider"></div>
          <h2 id="how-it-works-heading" className="how-works-title">How it works.</h2>
          <p className="how-works-subtitle">
            Subscribe to your block. A dog walker is assigned. Your block stays clean.
          </p>
          <div className="how-simple" role="list">
            <div className="simple-step" role="listitem">
              <p>Subscribe</p>
            </div>
            <div className="simple-arrow" aria-hidden="true">→</div>
            <div className="simple-step" role="listitem">
              <p>Walker assigned</p>
            </div>
            <div className="simple-arrow" aria-hidden="true">→</div>
            <div className="simple-step" role="listitem">
              <p>Block stays clean</p>
            </div>
          </div>
          <p className="how-note">
            Like a cleaning service for your home, except it's for your sidewalk. No marketplace, no job board, no community reporting. Just a service you subscribe to.
          </p>
        </div>
      </section>

      {/* Two Plans */}
      <section className="sponsorship" aria-labelledby="plans-heading">
        <div className="container">
          <div className="section-divider"></div>
          <h2 id="plans-heading" className="sponsorship-title">
            Two plans. Assessment-based pricing.
          </h2>
          <p className="sponsorship-description">
            Choose daily or weekly sweeps. We'll assess your block's condition on day one, then set your price based on how much cleanup is needed.
          </p>
          <div className="sponsorship-grid">
            <div className="sponsorship-benefit">
              <h3>Daily Plan</h3>
              <p>Every day, your walker sweeps your block. Perfect for high-traffic blocks. Your price is set after the initial assessment sweep.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Weekly Plan</h3>
              <p>Once a week, thorough cleanup. Good for lighter blocks. Your price is set after the initial assessment sweep.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Tier-based pricing</h3>
              <p>First sweep determines your tier: Light, Moderate, Heavy, or Extreme. Your price adjusts automatically if conditions improve.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Track everything</h3>
              <p>See pickup counts, after photos, and your block's improvement over time. Cancel anytime.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community" aria-labelledby="community-heading">
        <div className="container">
          <div className="section-divider"></div>
          <div className="community-content">
            <h2 id="community-heading" className="community-title">Cleaner blocks. Happier neighbors.</h2>
            <p className="community-text">
              Daily sweeps prevent accumulation. Your block improves week after week. Do it long enough and people notice. Kids play outside. Neighbors talk. The block changes.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta" aria-labelledby="final-cta-heading" aria-label="Join waitlist for NYC dog waste cleanup service">
        <div className="container">
          <h2 id="final-cta-heading" className="final-cta-title">Your block won't clean itself.</h2>

          {!submitted ? (
            <>
              <form className="email-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setError('')
                  }}
                  required
                  disabled={isSubmitting}
                  className="email-input"
                />
                <button type="submit" className="cta-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </button>
              </form>
              {error && (
                <p style={{ color: 'var(--orange)', fontWeight: '700', marginTop: '1rem' }}>
                  {error}
                </p>
              )}
            </>
          ) : (
            <div className="success-message">
              You're on the list! We'll email you when we launch.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-tagline">Made with 💩 in Brooklyn</p>
          <div className="footer-links">
            <Link to="/faq">FAQ</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <p className="footer-copyright">© 2026 Scoopers LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
