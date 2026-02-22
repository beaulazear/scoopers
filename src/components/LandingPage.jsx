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
            Clean blocks. Happy neighbors. Easy money.
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
                Launching Spring 2026 in NYC (all 5 boroughs).
              </p>
            </>
          ) : (
            <>
              <div className="success-message">
                You're on the list! We'll email you when we launch.
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
          <h2 id="problem-heading" className="problem-title">Every block has that one spot.</h2>
          <p className="problem-text">
            Everyone walks around it. Nobody does anything.
          </p>
          <p className="problem-text-big">
            Until now.
          </p>
        </div>
      </section>

      {/* Block Sponsorship */}
      <section className="sponsorship" aria-labelledby="sponsorship-heading">
        <div className="container">
          <div className="section-divider"></div>
          <h2 id="sponsorship-heading" className="sponsorship-title">
            Sponsor your block.
          </h2>
          <p className="sponsorship-description">
            Hire a dog walker to keep your block clean every week. They're already walking it 3x a day. Pay them $40-$60/month to sweep it on a schedule. Your block gets a green badge on the map. Neighbors can chip in.
          </p>
          <div className="sponsorship-grid">
            <div className="sponsorship-benefit">
              <h3>Weekly maintenance</h3>
              <p>Professional dog walkers sweep your block weekly or biweekly.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Public proof</h3>
              <p>Your block shows green on the map. Everyone sees it's sponsored.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Split the cost</h3>
              <p>Neighbors contribute $5-$25/month. Your cost drops.</p>
            </div>
            <div className="sponsorship-benefit">
              <h3>Track results</h3>
              <p>See every pickup. This week, this month, all time.</p>
            </div>
          </div>
          <div className="sponsorship-callout">
            Pay dog walkers to clean the blocks they already walk. Recurring maintenance beats one-off cleanups.
          </div>
        </div>
      </section>

      {/* One-Off Jobs */}
      <section className="how-it-works" aria-labelledby="how-it-works-heading">
        <div className="container">
          <div className="section-divider"></div>
          <h2 id="how-it-works-heading" className="how-works-title">Or post a one-off job.</h2>
          <p className="how-works-subtitle">
            Dog waste, litter, trash piles — those messes you see every day. Set a price. Someone claims it. It's gone.
          </p>
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
            Most jobs are $5-$20. Jobs appear on a live map. Scoopers arrive within 60 minutes and submit before/after photos.
          </p>
        </div>
      </section>

      {/* Business Sponsors */}
      <section className="earn-money" aria-labelledby="business-sponsor-heading">
        <div className="container">
          <div className="earn-content">
            <h2 id="business-sponsor-heading" className="earn-title">Business sponsors show up on the map.</h2>
            <p className="earn-description">
              Your neighbors see you're helping keep the neighborhood clean. Public proof you care about the community.
            </p>
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
              Residents post jobs. Scoopers claim them. Blocks get clean. Do it enough and people notice. Kids play outside. Neighbors talk. The block changes.
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
            <Link to="/about">About</Link>
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
