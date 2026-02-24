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
            Last Updated: February 24, 2026
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
          <Alert>
            <P style={{ marginBottom: '0.5rem', fontWeight: '700' }}>TL;DR — The Short Version</P>
            <P style={{ marginBottom: 0 }}>We collect your name, email, location (block-level only), and payment info to provide the subscription service. Walkers see your block boundary (not your home address). We don't track you in real time. We don't sell your data to advertisers. Photos are GPS-verified and stored for 90 days. You can cancel anytime and request data deletion.</P>
          </Alert>
        </Section>

        <Section>
          <H2>1. Information We Collect</H2>

          <H3>Account Information</H3>
          <P>When you create an account, we collect:</P>
          <UL>
            <li><strong>Personal details:</strong> Name, email address, phone number (optional), profile photo (optional)</li>
            <li><strong>Age verification:</strong> You must be 18+ to use Scoopers (required by our payment processor, Stripe)</li>
            <li><strong>Account credentials:</strong> Email, password (encrypted), authentication tokens</li>
            <li><strong>For walkers:</strong> Business name (optional), Instagram handle (optional), neighborhoods you cover</li>
          </UL>

          <H3>Location Data</H3>
          <P>Scoopers is a location-based service. We collect GPS coordinates to make the platform work:</P>
          <UL>
            <li><strong>Block selection:</strong> Which block you subscribe to (block-level, not address-level)</li>
            <li><strong>Walker coverage areas:</strong> Neighborhoods where walkers are willing to work</li>
            <li><strong>GPS verification during sweeps:</strong> Confirms walkers are present at the block during cleanup (check-in and check-out coordinates)</li>
          </UL>
          <P><strong>We do NOT track walkers in real time.</strong> GPS is only used for check-in/check-out verification, not live location tracking. Subscribers cannot see walker location during sweeps.</P>
          <P><strong>We only access your location when you're actively using the app.</strong> We do not collect background location data when the app is closed.</P>

          <H3>Photos</H3>
          <UL>
            <li><strong>Assessment sweeps:</strong> Before and after photos (walkers)</li>
            <li><strong>Regular sweeps:</strong> After photos (walkers)</li>
            <li><strong>Profile photos:</strong> Optional user profile images</li>
          </UL>
          <P>All sweep photos are geotagged (include GPS coordinates) and timestamped. EXIF GPS data is stripped before storage for privacy. Photos are stored for 90 days, then automatically deleted.</P>

          <H3>Payment Information</H3>
          <UL>
            <li><strong>Subscribers:</strong> Credit/debit card details processed and stored securely by Stripe (we never see or store your full card number)</li>
            <li><strong>Walkers:</strong> Bank account or debit card details for payouts, processed through Stripe Connect</li>
            <li><strong>Transaction history:</strong> Subscriptions, payments, payouts, platform fees</li>
          </UL>

          <H3>Usage Data</H3>
          <UL>
            <li>Sweeps completed (pickup counts, photos, timestamps)</li>
            <li>Subscription status (active, paused, cancelled)</li>
            <li>Ratings and reviews given and received (monthly walker ratings)</li>
            <li>App usage patterns (features used, pages visited, session duration)</li>
            <li>Device information (device type, OS version, app version)</li>
          </UL>
        </Section>

        <Section>
          <H2>2. How We Use Your Information</H2>
          <P>We use your data to provide and improve the Scoopers subscription service:</P>
          <UL>
            <li><strong>Assign walkers:</strong> Match subscribers with walkers based on coverage areas</li>
            <li><strong>Process payments:</strong> Charge subscribers, pay walkers, handle refunds</li>
            <li><strong>Verify sweeps:</strong> Use GPS and photo verification to confirm walkers complete work as described</li>
            <li><strong>Show progress:</strong> Display pickup counts, streaks, improvement stats on subscriber dashboards</li>
            <li><strong>Send notifications:</strong> Push notifications for sweep completion, milestones, ratings prompts</li>
            <li><strong>Provide support:</strong> Respond to customer service inquiries</li>
            <li><strong>Prevent fraud:</strong> Detect fake accounts, fraudulent photos, or payment abuse</li>
            <li><strong>Improve the service:</strong> Analyze usage patterns to fix bugs and build better features</li>
          </UL>
        </Section>

        <Section>
          <H2>3. What Information Is Visible to Others</H2>

          <H3>Subscribers See (about their assigned walker):</H3>
          <UL>
            <li>Walker's first name, profile photo, business name (if provided), Instagram handle (if provided)</li>
            <li>Walker's rating and total sweeps completed</li>
            <li>Sweep completion notifications and after photos</li>
            <li>Pickup counts and sweep history for your block</li>
          </UL>

          <H3>Walkers See (about their assigned subscribers):</H3>
          <UL>
            <li>Subscriber's first name only</li>
            <li>Block boundary (not specific address)</li>
            <li>Subscription plan (daily or weekly) and tier (Light, Moderate, Heavy, Extreme)</li>
            <li>Block segments to clean (NW, NE, SW, SE)</li>
          </UL>

          <H3>What Is NOT Visible:</H3>
          <UL>
            <li>Subscribers do NOT see walkers' home addresses, phone numbers, or real-time location</li>
            <li>Walkers do NOT see subscribers' home addresses, phone numbers, or payment info</li>
            <li>No public profiles or directories (walkers are assigned, not browsed)</li>
          </UL>
        </Section>

        <Section>
          <H2>4. Who We Share Your Information With</H2>

          <H3>Service Providers</H3>
          <P>We share data with trusted service providers who help us operate Scoopers:</P>
          <UL>
            <li><strong>Stripe:</strong> Payment processing and payouts (PCI-DSS compliant)</li>
            <li><strong>Cloud hosting:</strong> Servers that store app data (AWS, Render, or similar)</li>
            <li><strong>Analytics:</strong> Tools to understand how users interact with the app (e.g., usage metrics, crash reports)</li>
            <li><strong>Email & notifications:</strong> Services that send emails and push notifications</li>
          </UL>
          <P>These providers are bound by contracts to protect your data and use it only for Scoopers-related purposes.</P>

          <H3>Legal Requirements</H3>
          <P>We may disclose your information if required by law:</P>
          <UL>
            <li>To comply with subpoenas, court orders, or legal processes</li>
            <li>To protect against fraud, abuse, or violations of our Terms</li>
            <li>To protect the safety of users or the public</li>
          </UL>

          <Alert>
            <P style={{ marginBottom: 0, fontWeight: '700' }}>We do NOT sell, rent, or trade your personal information to advertisers, data brokers, or third parties. Your data is used only to provide the Scoopers service.</P>
          </Alert>
        </Section>

        <Section>
          <H2>5. How Long We Keep Your Data</H2>
          <UL>
            <li><strong>Active accounts:</strong> Data retained as long as your account is active</li>
            <li><strong>Deleted accounts:</strong> Personal data deleted within 30 days of account deletion (except data we're required to keep for legal/tax purposes)</li>
            <li><strong>Sweep photos:</strong> Stored for 90 days, then automatically deleted</li>
            <li><strong>Payment records:</strong> Retained for 7 years for tax and accounting compliance (required by law)</li>
            <li><strong>GPS data:</strong> Verification coordinates stored for 90 days, then deleted</li>
          </UL>
        </Section>

        <Section>
          <H2>6. Your Privacy Rights</H2>
          <P>You have the right to:</P>
          <UL>
            <li><strong>Access your data:</strong> Request a copy of all personal information we have about you</li>
            <li><strong>Correct your data:</strong> Update or fix incorrect information in your account settings</li>
            <li><strong>Delete your data:</strong> Request full account deletion (we'll delete everything except records we're legally required to keep)</li>
            <li><strong>Export your data:</strong> Download your subscription history, sweep records, and photos</li>
            <li><strong>Opt out of emails:</strong> Unsubscribe from marketing emails (you'll still receive service-related notifications like sweep completion)</li>
            <li><strong>Revoke location access:</strong> Turn off location permissions in device settings (note: app won't work without location access)</li>
          </UL>
          <P>To exercise these rights, email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>. We'll respond within 30 days.</P>
        </Section>

        <Section>
          <H2>7. Security</H2>
          <P>We implement industry-standard security practices to protect your data:</P>
          <UL>
            <li>Passwords are encrypted using bcrypt hashing</li>
            <li>All data transmitted over HTTPS (encrypted in transit)</li>
            <li>Payment data handled exclusively by Stripe (PCI-DSS Level 1 certified)</li>
            <li>Access to user data restricted to authorized employees only</li>
            <li>Regular security audits and vulnerability testing</li>
          </UL>
          <P><strong>However, no system is 100% secure.</strong> While we use industry-standard practices, we cannot guarantee absolute security. You are responsible for protecting your account credentials and for any consequences of unauthorized access to your account.</P>
        </Section>

        <Section>
          <H2>8. Children's Privacy</H2>
          <P><strong>Scoopers is for users 18 years or older.</strong> We do not knowingly collect data from anyone under 18. Our payment processor (Stripe) requires users to be at least 18 to send or receive payments.</P>
          <P>If we discover that a minor has created an account, we will immediately delete it and all associated data. If you believe a minor is using Scoopers, please contact us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>.</P>
        </Section>

        <Section>
          <H2>9. International Data Transfers</H2>
          <P>Scoopers is based in New York, USA. If you use Scoopers from outside the United States, your data will be transferred to and processed in the USA.</P>
          <P>By using Scoopers, you consent to the transfer and processing of your data in the USA, which may have different data protection laws than your home country.</P>
        </Section>

        <Section>
          <H2>10. Third-Party Links</H2>
          <P>Scoopers may contain links to third-party websites or services (e.g., Stripe, Instagram, external resources). We are not responsible for the privacy practices of these third parties. Review their privacy policies before providing any personal information.</P>
        </Section>

        <Section>
          <H2>11. Changes to This Privacy Policy</H2>
          <P>Scoopers LLC may update this Privacy Policy at any time. We'll notify users of significant changes via:</P>
          <UL>
            <li>Email to your registered email address</li>
            <li>In-app notification when you next open Scoopers</li>
            <li>Update date at the top of this policy</li>
          </UL>
          <P>Continued use of Scoopers after changes means you accept the updated Privacy Policy. If you don't agree, you must stop using Scoopers and delete your account.</P>
        </Section>

        <Section>
          <H2>12. California Privacy Rights (CCPA)</H2>
          <P>If you're a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</P>
          <UL>
            <li>Right to know what personal information we collect and how we use it</li>
            <li>Right to request deletion of your personal information</li>
            <li>Right to opt out of the "sale" of personal information (note: we do NOT sell your data)</li>
            <li>Right to non-discrimination for exercising your privacy rights</li>
          </UL>
          <P>To exercise these rights, email <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a> with "CCPA Request" in the subject line.</P>
        </Section>

        <Section>
          <H2>13. Contact</H2>
          <P>Questions about this Privacy Policy or how we handle your data?</P>
          <P>
            Email: <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>
          </P>
          <P style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5', color: '#999' }}>
            Scoopers LLC<br />
            Brooklyn, NY<br />
            beau@scoopersnyc.com
          </P>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{
        background: 'var(--dark)',
        padding: '40px 20px',
        borderTop: '1px solid #e5e5e5',
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#999',
            marginBottom: '16px',
          }}>
            Made with 💩 in Brooklyn
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '16px',
          }}>
            <Link to="/faq" style={{ color: 'var(--green)', textDecoration: 'none', fontSize: '0.95rem' }}>FAQ</Link>
            <Link to="/privacy" style={{ color: 'var(--green)', textDecoration: 'none', fontSize: '0.95rem' }}>Privacy</Link>
            <Link to="/terms" style={{ color: 'var(--green)', textDecoration: 'none', fontSize: '0.95rem' }}>Terms</Link>
          </div>
          <p style={{
            fontSize: '0.85rem',
            color: '#666',
          }}>© 2026 Scoopers LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
