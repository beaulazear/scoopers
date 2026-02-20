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

    // Phase 3: Show Beau photo AND greeting together (3.5s total)
    timers.push(setTimeout(() => setIntroPhase(3), 3500))

    // Phase 4: Show story text (5s total)
    timers.push(setTimeout(() => setIntroPhase(4), 5000))

    // Phase 5: Fade out Beau slide (8s total)
    timers.push(setTimeout(() => setIntroPhase(5), 8000))

    // Phase 6: End intro, show main content (9s total)
    timers.push(setTimeout(() => {
      setShowIntro(false)
      setShowMainContent(true)
      sessionStorage.setItem('hasSeenIntro', 'true')
    }, 9000))

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
          {introPhase >= 3 && (
            <div className={`intro-beau-slide ${introPhase >= 5 ? 'fade-out' : ''}`}>
              <img
                src="/beau-walking.png"
                alt="Beau walking dogs in Brooklyn"
                className={`intro-beau-photo ${introPhase >= 3 ? 'fade-in' : ''}`}
                loading="eager"
              />
              <div className="intro-beau-text-container">
                <p className={`intro-beau-greeting ${introPhase >= 3 ? 'fade-in' : ''}`}>
                  So was Beau.
                </p>
                <p className={`intro-beau-story ${introPhase >= 4 ? 'fade-in' : ''}`}>
                  A dog walker always cleaning up after himself, yet still stepping in sh*t.
                </p>
              </div>
            </div>
          )}
        </div>
        <button
          className="skip-intro"
          onClick={() => {
            setShowIntro(false)
            sessionStorage.setItem('hasSeenIntro', 'true')
          }}
          aria-label="Skip intro"
        >
          Skip →
        </button>
      </div>
    )
  }

  const replayIntro = () => {
    sessionStorage.removeItem('hasSeenIntro')
    setShowIntro(true)
    setShowMainContent(false)
    setTriggerIntro(prev => prev + 1) // This triggers the useEffect to restart the animation
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
            Clean blocks. Happy New Yorkers.
          </p>

          {/* Testing button - remove before production */}
          <button
            onClick={replayIntro}
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '20px',
              background: 'var(--orange)',
              color: 'var(--dark)',
              border: 'none',
              padding: '12px 20px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '0.9rem',
              cursor: 'pointer',
              zIndex: 1000,
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
            }}
          >
            🎬 Replay Intro
          </button>

          <p className="hero-description">
            Post cleanup jobs for your block. Or claim jobs and earn money.
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
                Launching Spring 2026 in NYC (all 5 boroughs).
              </p>
            </>
          ) : (
            <>
              <div className="success-message">
                ✓ You're on the list! We'll email you when we launch.
              </div>
              <p className="hero-note">
                Launching Spring 2026 in NYC (all 5 boroughs).
              </p>
            </>
          )}
        </div>
      </section>

      {/* The Problem */}
      <section className="problem" aria-labelledby="problem-heading">
        <div className="container">
          <h2 id="problem-heading" className="problem-title">Tired of stepping in dog sh*t?</h2>
          <p className="problem-text">
            Yeah, we all are. Every block has that one spot. You know the one. Everyone walks around it. Nobody does anything about it.
          </p>
          <p className="problem-text-big">
            Until now.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <h2 id="how-it-works-heading" className="visually-hidden">How Our Dog Waste Cleanup Service Works</h2>
          <div className="how-simple" role="list">
            <div className="simple-step" role="listitem">
              <p>See a mess</p>
            </div>
            <div className="simple-arrow" aria-hidden="true">→</div>
            <div className="simple-step" role="listitem">
              <p>Post a price</p>
            </div>
            <div className="simple-arrow" aria-hidden="true">→</div>
            <div className="simple-step" role="listitem">
              <p>It's gone</p>
            </div>
          </div>
          <p className="how-note">
            Dog waste, trash piles, litter — you decide what it's worth. Most jobs are $5-$20. Jobs appear on a live map. Scoopers claim jobs, arrive within 60 minutes, and submit before/after photos for verification.
          </p>
        </div>
      </section>

      {/* Earn Money */}
      <section className="earn-money" aria-labelledby="earn-money-heading">
        <div className="container">
          <div className="earn-content">
            <h2 id="earn-money-heading" className="earn-title">Dog Walkers NYC: Browse Jobs on the Map, Claim, Clean, Get Paid</h2>
            <p className="earn-description">
              Open the app. See cleanup jobs on a live map. Claim one, arrive within 60 minutes, take before/after photos, submit. Payment hits your account instantly through Stripe. You're out there 3x a day anyway — earn $15 in 2 minutes.
            </p>
            <div className="earn-callout" role="note">
              Most jobs pay $5-$20. You bring the bags. We bring the GPS tracking, photo verification, and instant payment.
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community" aria-labelledby="community-heading">
        <div className="container">
          <div className="community-content">
            <h2 id="community-heading" className="community-title">Two-Sided Marketplace for Cleaner NYC Blocks</h2>
            <p className="community-text">
              Residents who want clean blocks meet scoopers who want to earn. Every job posted connects neighbors. Every job claimed cleans a street. Do it enough times and people notice. Kids can play. Neighbors actually want to be outside. The app makes it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="faq" aria-labelledby="faq-heading">
        <div className="container">
          <h2 id="faq-heading" className="visually-hidden">Frequently Asked Questions About Scoopers NYC</h2>
          <div className="faq-grid-new">
            <div className="faq-large">
              <h3 className="faq-q-large">How does the app work?</h3>
              <p className="faq-a-large">It's a job board on a map. Posters drop a pin on their block, upload photos, set a price ($5-$20), and post. Jobs appear live on the map. Scoopers browse jobs, claim one, arrive within 60 minutes, clean, submit before/after photos, and get paid instantly through Stripe. GPS-verified. Photo-verified. Simple.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">What kind of messes?</h3>
              <p className="faq-a-small">Dog waste, litter, trash piles. No large items, no hazardous materials, no liquids.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">What if nobody claims my job?</h3>
              <p className="faq-a-small">Jobs expire after 24 hours. You don't pay unless a scooper completes the work. Bump the price to attract more scoopers.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">How do scoopers get paid?</h3>
              <p className="faq-a-small">Instantly through Stripe after the poster confirms completion. Payment goes directly to your bank account.</p>
            </div>

            <div className="faq-small faq-disclaimer">
              <h3 className="faq-q-small">When does it launch?</h3>
              <p className="faq-a-small">Spring 2026 in NYC (all 5 boroughs). iOS app. Join the waitlist to be first.</p>
            </div>
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
              ✓ You're on the list! We'll email you when we launch.
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-tagline">Made with 💩 in NYC</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
          <p className="footer-copyright">© 2026 Scoopers LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
