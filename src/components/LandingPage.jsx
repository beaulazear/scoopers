import { useState } from 'react'
import { Link } from 'react-router-dom'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">
            SCOOPERS
          </h1>
          <p className="hero-subtitle">
            Clean blocks. Happy neighbors. Paid walkers.
          </p>
          <div className="ios-badge">
            <div className="ios-badge-inner">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="ios-icon">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="ios-badge-text">
                <span className="ios-badge-coming">COMING SOON</span>
                <span className="ios-badge-platform">iOS App Store</span>
              </span>
            </div>
          </div>
          <p className="hero-description">
            Post a cleanup job for your block. A nearby scooper comes and cleans it. Dog waste, litter, trash — gone.
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
                Launching in NYC this spring. Coming soon on iOS.
              </p>
            </>
          ) : (
            <>
              <div className="success-message">
                ✓ You're on the list! We'll email you when we launch.
              </div>
              <p className="hero-note">
                Launching in NYC this spring. Coming soon on iOS.
              </p>
            </>
          )}
        </div>
      </section>

      {/* The Problem */}
      <section className="problem">
        <div className="container">
          <h2 className="problem-title">Tired of stepping in dog sh*t?</h2>
          <p className="problem-text">
            Yeah, we all are. Every block has that one spot. You know the one. Everyone walks around it. Nobody does anything about it.
          </p>
          <p className="problem-text-big">
            Until now.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="how-simple">
            <div className="simple-step">
              <p>See a mess</p>
            </div>
            <div className="simple-arrow">→</div>
            <div className="simple-step">
              <p>Post a price</p>
            </div>
            <div className="simple-arrow">→</div>
            <div className="simple-step">
              <p>It's gone</p>
            </div>
          </div>
          <p className="how-note">
            Dog waste, trash piles, litter — you decide what it's worth. Most jobs are $5-$20.
          </p>
        </div>
      </section>

      {/* Earn Money */}
      <section className="earn-money">
        <div className="container">
          <div className="earn-content">
            <h2 className="earn-title">Dog walkers: Get paid to clean up what you're already walking past</h2>
            <p className="earn-description">
              You're out there 3x a day anyway. Someone just posted $15 to clean up that pile on the corner. Takes you 2 minutes. Easy money.
            </p>
            <div className="earn-callout">
              Most jobs pay $5-$20. You bring the bags. We bring the cash.
            </div>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="community">
        <div className="container">
          <div className="community-content">
            <h2 className="community-title">Your block. Your neighborhood. Your city.</h2>
            <p className="community-text">
              Every cleanup makes your street a little better. Do it enough times and people notice. Kids can play. Neighbors actually want to be outside. It's not complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="faq">
        <div className="container">
          <div className="faq-grid-new">
            <div className="faq-large">
              <h3 className="faq-q-large">How much does it cost?</h3>
              <p className="faq-a-large">You set the price. Small pile? $5. Big mess? $20. Scattered trash? $10. You decide what a clean block is worth to you.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">What kind of messes?</h3>
              <p className="faq-a-small">Dog waste, trash piles, litter. Whatever's making your block gross.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">What if nobody does it?</h3>
              <p className="faq-a-small">Then you don't pay. But trust us, someone will.</p>
            </div>

            <div className="faq-small">
              <h3 className="faq-q-small">When can I use this?</h3>
              <p className="faq-a-small">Spring 2026 in NYC. Join the waitlist.</p>
            </div>

            <div className="faq-small faq-disclaimer">
              <h3 className="faq-q-small">What we don't do</h3>
              <p className="faq-a-small">No large items, no hazardous materials. Just waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta-title">Your block won't clean itself.</h2>

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
          <p className="footer-tagline">Made with 💚 in NYC</p>
          <div className="footer-links">
            <Link to="/about">About</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
