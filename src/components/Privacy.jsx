import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Section = ({ children, style }) => (
  <section style={{ marginBottom: '3.5rem', ...style }}>{children}</section>
)

const H2 = ({ children, color }) => (
  <h2 style={{
    fontSize: '1.5rem',
    fontWeight: '700',
    marginBottom: '1rem',
    color: color || '#000',
    letterSpacing: '-0.01em'
  }}>{children}</h2>
)

const P = ({ children, style }) => (
  <p style={{
    fontSize: '1rem',
    lineHeight: '1.7',
    color: '#535353',
    marginBottom: '1rem',
    ...style
  }}>{children}</p>
)

const UL = ({ children }) => (
  <ul style={{
    marginLeft: '1.5rem',
    marginBottom: '1rem',
    color: '#535353'
  }}>{children}</ul>
)

const Alert = ({ children }) => {
  return (
    <div style={{
      background: '#dcfce7',
      border: '1px solid #86efac',
      color: '#14532d',
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '1.5rem'
    }}>{children}</div>
  )
}

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
    }}>
      {/* Header */}
      <div style={{
        background: 'var(--dark)',
        padding: '40px 20px',
        borderBottom: '1px solid #e5e5e5',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          <Link to="/" style={{
            display: 'inline-block',
            color: 'var(--green)',
            fontWeight: '600',
            fontSize: '0.95rem',
            textDecoration: 'none',
            marginBottom: '20px',
          }}>
            ← Back to Scoopers
          </Link>
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            margin: '0',
            color: 'var(--off-white)',
            letterSpacing: '-0.02em',
          }}>
            Privacy Policy
          </h1>
          <p style={{
            fontSize: '0.95rem',
            color: '#999',
            marginTop: '12px',
            fontWeight: '400',
          }}>
            Last Updated: February 19, 2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '60px 20px 100px',
      }}>

        <Section>
          <H2>1. What We Collect</H2>
          <P>To make Scoopers work, we collect:</P>
          <UL>
            <li><strong>Account info:</strong> Name, email, phone number, profile photo</li>
            <li><strong>Location data:</strong> Where you post jobs and where Scoopers are located</li>
            <li><strong>Payment info:</strong> Processed securely through Stripe (we don't store your credit card)</li>
            <li><strong>Photos:</strong> Before/after photos of cleanup jobs</li>
            <li><strong>Usage data:</strong> How you use the app, jobs posted, jobs completed</li>
          </UL>
        </Section>

        <Section>
          <H2>2. How We Use Your Data</H2>
          <P>We use your information to:</P>
          <UL>
            <li>Connect Posters with Scoopers</li>
            <li>Process payments</li>
            <li>Show you nearby cleanup jobs (if you're a Scooper)</li>
            <li>Verify completed jobs</li>
            <li>Prevent fraud and enforce our Terms</li>
            <li>Send you notifications about jobs and account activity</li>
            <li>Improve the app</li>
          </UL>
        </Section>

        <Section>
          <H2>3. Location Data</H2>
          <P>We use your location to show you jobs near you and to help Posters find nearby Scoopers. You can turn off location access anytime, but the app won't work without it.</P>
          <P><strong>We don't track your location when you're not using the app.</strong></P>
        </Section>

        <Section>
          <H2>4. Who We Share Data With</H2>
          <P>We share your data with:</P>
          <UL>
            <li><strong>Other users:</strong> Posters see Scooper names/photos. Scoopers see Poster names/locations.</li>
            <li><strong>Payment processors:</strong> Stripe handles all payments securely.</li>
            <li><strong>Service providers:</strong> Cloud hosting, analytics, customer support tools.</li>
            <li><strong>Law enforcement:</strong> Only if required by law or to prevent harm.</li>
          </UL>
          <P><strong>We don't sell your data to advertisers or third parties.</strong></P>
        </Section>

        <Section>
          <H2>5. Your Rights</H2>
          <P>You can:</P>
          <UL>
            <li>Access your data</li>
            <li>Update or correct your data</li>
            <li>Delete your account (this deletes all your data)</li>
            <li>Opt out of marketing emails (but you'll still get important account notifications)</li>
          </UL>
          <P>To exercise these rights, email us at <a href="mailto:privacy@scoopers.app" style={{ color: 'var(--green)', fontWeight: '600' }}>privacy@scoopers.app</a></P>
        </Section>

        <Section>
          <H2>6. Data Security</H2>
          <P>We use industry-standard security practices to protect your data. But no system is 100% secure. Use a strong password and don't share your account.</P>
        </Section>

        <Section>
          <H2>7. Children's Privacy</H2>
          <P>Scoopers is for users 18+. We don't knowingly collect data from minors. If we find out a minor is using the app, we'll delete their account.</P>
        </Section>

        <Section>
          <H2>8. Changes to This Policy</H2>
          <P>We may update this Privacy Policy. We'll notify you of major changes via email or in-app notification.</P>
        </Section>

        <Section>
          <H2>9. Contact Us</H2>
          <P>Questions about privacy? Email <a href="mailto:privacy@scoopers.app" style={{ color: 'var(--green)', fontWeight: '600' }}>privacy@scoopers.app</a></P>
        </Section>

        <Alert>
          <P style={{ fontWeight: '600', marginBottom: '0.5rem' }}>TL;DR:</P>
          <P style={{ marginBottom: 0 }}>We collect what we need to make the app work. We don't sell your data. You can delete your account anytime.</P>
        </Alert>

      </div>
    </div>
  )
}
