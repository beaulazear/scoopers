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

const H3 = ({ children }) => (
  <h3 style={{
    fontSize: '1.2rem',
    fontWeight: '700',
    marginTop: '1.5rem',
    marginBottom: '0.75rem',
    color: '#000'
  }}>{children}</h3>
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

const Alert = ({ children, type = 'warning' }) => {
  const styles = {
    warning: {
      background: '#fef2f2',
      border: '1px solid #fecaca',
      color: '#991b1b'
    },
    info: {
      background: '#fef3c7',
      border: '1px solid #fde68a',
      color: '#78350f'
    }
  }

  const style = styles[type]

  return (
    <div style={{
      ...style,
      padding: '24px',
      borderRadius: '8px',
      marginBottom: '1.5rem'
    }}>{children}</div>
  )
}

export default function Terms() {
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
            Terms of Service
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
          <H2>1. Acceptance of Terms</H2>
          <P>By using Scoopers ("the App"), you agree to these Terms of Service. If you don't agree, don't use the App.</P>
        </Section>

        <Section>
          <H2>2. The Service</H2>
          <P>Scoopers is a platform that connects people who want their street cleaned ("Posters") with people willing to clean it for payment ("Scoopers"). We provide the platform. We don't clean anything ourselves.</P>
        </Section>

        <Section>
          <H2 color="#dc2626">3. Safety & Liability — READ THIS</H2>

          <Alert type="warning">
            <H3>SCOOPERS ASSUME ALL RISK</H3>
            <P><strong>If you accept a cleanup job, you are responsible for your own safety.</strong> You assume all risk of injury, illness, or harm from contact with waste, chemicals, bodily fluids, sharp objects, or any other hazardous materials.</P>
            <P><strong>Scoopers Inc. is NOT liable for:</strong></P>
            <UL>
              <li>Injuries sustained during cleanup</li>
              <li>Illness from contact with waste products</li>
              <li>Exposure to hazardous or toxic materials</li>
              <li>Bites, scratches, or attacks from animals</li>
              <li>Slips, falls, or any physical injuries</li>
              <li>Property damage caused by you or to you</li>
              <li>Any harm resulting from your participation in cleanup jobs</li>
            </UL>
            <P style={{ marginBottom: 0 }}><strong>By accepting a job, you release Scoopers Inc., its owners, employees, and users from ALL liability.</strong></P>
          </Alert>

          <H3>Required Safety Practices</H3>
          <P>All Scoopers MUST:</P>
          <UL>
            <li><strong>Wear proper PPE (Personal Protective Equipment)</strong> including gloves at minimum</li>
            <li><strong>Bring your own cleanup supplies</strong> (bags, gloves, etc.)</li>
            <li><strong>Assess jobs before accepting</strong> — if it looks unsafe, don't do it</li>
            <li><strong>Never handle large items, hazardous materials, or anything you're uncomfortable with</strong></li>
            <li><strong>Leave and report jobs that are mislabeled or more hazardous than described</strong></li>
          </UL>

          <H3>What We DON'T Cover</H3>
          <P>Scoopers are NOT to handle:</P>
          <UL>
            <li>Large furniture or appliances</li>
            <li>Hazardous chemicals or medical waste</li>
            <li>Broken glass (unless properly equipped)</li>
            <li>Dead animals</li>
            <li>Anything illegal</li>
          </UL>
          <P><strong>If a job involves any of the above, DO NOT accept it. If you discover it after accepting, leave immediately and report it through the app.</strong></P>
        </Section>

        <Section>
          <H2>4. Payment</H2>
          <P>Posters set the price. Scoopers accept or decline. Payment is processed through the app. If a job isn't completed, you don't pay.</P>
          <P>We take a service fee from each completed job. You'll see this before accepting.</P>
        </Section>

        <Section>
          <H2>5. User Conduct</H2>
          <P>Don't be a jerk. Specifically:</P>
          <UL>
            <li>Don't post fake jobs</li>
            <li>Don't accept jobs you don't intend to complete</li>
            <li>Don't harass other users</li>
            <li>Don't post jobs for illegal cleanups</li>
            <li>Don't misrepresent the nature or danger level of a cleanup job</li>
          </UL>
          <P>We can ban you for violating these rules.</P>
        </Section>

        <Section>
          <H2>6. Independent Contractors</H2>
          <P>Scoopers are independent contractors, not employees of Scoopers Inc. You're responsible for your own taxes, insurance, and compliance with local laws.</P>
        </Section>

        <Section>
          <H2>7. Disputes</H2>
          <P>If there's a problem between a Poster and a Scooper, we'll try to help. But you agree to resolve disputes between yourselves first. If it goes legal, you agree to arbitration in New York, NY.</P>
        </Section>

        <Section>
          <H2>8. Changes to Terms</H2>
          <P>We can update these terms anytime. Continued use means you accept the new terms.</P>
        </Section>

        <Section>
          <H2>9. Contact</H2>
          <P>Questions? Email us at <a href="mailto:hello@scoopers.app" style={{ color: 'var(--green)', fontWeight: '600' }}>hello@scoopers.app</a></P>
        </Section>

        <Alert type="info">
          <P style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Bottom line:</P>
          <P style={{ marginBottom: 0 }}>Use common sense. Protect yourself. Don't do anything dangerous. We're not responsible if you get hurt.</P>
        </Alert>

      </div>
    </div>
  )
}
