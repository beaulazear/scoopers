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
            Last Updated: February 21, 2026
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
          <H2>1. Information We Collect</H2>

          <H3>Account Information</H3>
          <P>When you create an account, we collect:</P>
          <UL>
            <li><strong>Personal details:</strong> Name, email address, phone number, profile photo</li>
            <li><strong>Age verification:</strong> You must be 18+ to use Scoopers (required by our payment processor, Stripe)</li>
            <li><strong>Account credentials:</strong> Username, password (encrypted), authentication tokens</li>
          </UL>

          <H3>Location Data</H3>
          <P>Scoopers is a location-based service. We collect GPS coordinates to make the platform work:</P>
          <UL>
            <li><strong>Job posting locations:</strong> Where Posters drop pins and post cleanup jobs</li>
            <li><strong>Scooper coverage areas:</strong> Regions where Scoopers are willing to work</li>
            <li><strong>Real-time tracking during active jobs:</strong> Scooper's live GPS location while en route and actively cleaning (visible to the Poster)</li>
            <li><strong>GPS verification:</strong> Confirms Scoopers arrive at the job location and are present while cleaning</li>
          </UL>
          <P><strong>We only track your location when you're actively using the app.</strong> We do not collect background location data when the app is closed or not in use.</P>

          <H3>Photos & Media</H3>
          <UL>
            <li><strong>Before photos (Posters):</strong> Photos of the mess/block before cleanup, geotagged and timestamped</li>
            <li><strong>After photos (Scoopers):</strong> Photos of the cleaned block, geotagged and timestamped to match before photos</li>
            <li><strong>Profile photos:</strong> Optional user profile images</li>
          </UL>
          <P>All job photos are geotagged (include GPS coordinates) and timestamped (include date/time). This is required for verification and fraud prevention.</P>

          <H3>Payment Information</H3>
          <UL>
            <li><strong>Posters:</strong> Credit/debit card details processed and stored securely by Stripe (we never see or store your full card number)</li>
            <li><strong>Scoopers:</strong> Bank account or debit card details for payouts, processed through Stripe Connect</li>
            <li><strong>Transaction history:</strong> Jobs posted, jobs completed, amounts paid/earned, platform fees, tips</li>
          </UL>
          <P>Stripe handles all sensitive payment data. We only receive tokens and metadata needed to process transactions.</P>

          <H3>Block Sponsorship Data</H3>
          <UL>
            <li><strong>Sponsor information:</strong> Display preference (first name, business name, or anonymous), selected block, schedule, monthly budget</li>
            <li><strong>Dog walker information:</strong> Name, rating, neighborhoods served, Instagram handle, business name</li>
            <li><strong>Sweep data:</strong> GPS verification of sweeps, pickup counts, photos, completion timestamps</li>
            <li><strong>Contributions:</strong> Neighbor contribution amounts, payment history, contributor names (if public)</li>
            <li><strong>Monthly ratings:</strong> Sponsor ratings of dog walker performance (quality, thoroughness, timeliness, communication)</li>
          </UL>

          <H3>Usage & Activity Data</H3>
          <UL>
            <li>Jobs posted, claimed, completed, cancelled, disputed</li>
            <li>Block sponsorships created, claimed, paused, cancelled</li>
            <li>Sweeps performed and logged</li>
            <li>Ratings and reviews given and received (one-off jobs and monthly sponsorship ratings)</li>
            <li>In-app messages sent during active jobs</li>
            <li>Pickup counts and job itemization details</li>
            <li>App navigation, feature usage, and interaction patterns</li>
            <li>Device type, operating system, app version</li>
            <li>IP address, browser type, network connection</li>
          </UL>
        </Section>

        <Section>
          <H2>2. How We Use Your Information</H2>
          <P>We use your data to provide and improve the Scoopers platform:</P>
          <UL>
            <li><strong>Connect Posters with Scoopers:</strong> Match jobs with nearby workers based on location and coverage areas</li>
            <li><strong>Process payments:</strong> Charge Posters, hold funds, release payments to Scoopers, handle tips and refunds</li>
            <li><strong>Verify jobs:</strong> Use GPS tracking and photo verification to confirm Scoopers arrive and complete work as described</li>
            <li><strong>Show nearby jobs:</strong> Display available cleanup jobs on the map based on your current location (if you're a Scooper)</li>
            <li><strong>Prevent fraud & abuse:</strong> Detect fake jobs, fake completions, duplicate accounts, payment fraud, and policy violations</li>
            <li><strong>Resolve disputes:</strong> Review evidence (photos, GPS data, chat logs, ratings) when users report issues</li>
            <li><strong>Send notifications:</strong> Push notifications about job claims, completions, confirmations, payments, and important account activity</li>
            <li><strong>Enable communication:</strong> Facilitate in-app messaging between Posters and Scoopers during active jobs</li>
            <li><strong>Calculate ratings & stats:</strong> Display user profiles with ratings, total jobs, pickup counts, and reliability scores</li>
            <li><strong>Improve the platform:</strong> Analyze usage patterns to fix bugs, optimize features, and enhance user experience</li>
            <li><strong>Comply with legal obligations:</strong> Respond to legal requests, enforce our Terms of Service, protect our rights</li>
          </UL>
        </Section>

        <Section>
          <H2>3. GPS Tracking & Location Privacy</H2>

          <H3>When We Track Your Location</H3>
          <P><strong>Posters:</strong></P>
          <UL>
            <li>When you drop a pin to post a job (location saved with the job)</li>
            <li>When you take before photos (photos are geotagged)</li>
          </UL>
          <P><strong>Scoopers:</strong></P>
          <UL>
            <li>When you browse jobs (to show nearby jobs on the map)</li>
            <li>When you're en route to a claimed job (live GPS tracking visible to the Poster)</li>
            <li>When you arrive on the block (GPS verification to confirm presence)</li>
            <li>While actively cleaning (live GPS tracking to verify you're on the correct block segment)</li>
            <li>When you take after photos (photos are geotagged)</li>
          </UL>

          <H3>When We Don't Track Your Location</H3>
          <UL>
            <li>When the app is closed or running in the background</li>
            <li>When you're not actively working on a job</li>
            <li>When you turn off location services (the app won't function without location access)</li>
          </UL>

          <P><strong>Location data is essential to Scoopers.</strong> You can turn off location access anytime in your device settings, but the app will not work without it. We don't sell or share location data with advertisers.</P>
        </Section>

        <Section>
          <H2>4. Who We Share Your Data With</H2>

          <H3>Other Users</H3>
          <P>Some information is visible to other users to make the platform work:</P>
          <UL>
            <li><strong>Posters see (when you claim their job):</strong> Your name, profile photo, rating, completed job count, live GPS location while en route/cleaning</li>
            <li><strong>Scoopers see (when browsing jobs):</strong> Poster's name (or "Anonymous" if they choose), job location, photos, description, price</li>
            <li><strong>Public profiles:</strong> Name, photo, ratings, review history, total jobs, pickup counts, reliability score</li>
            <li><strong>Sponsored blocks (public map):</strong> Sponsor's chosen display name (first name, business name, or "A neighbor"), dog walker's name and profile, pickup stats, schedule, "Supported by X neighbors" count</li>
            <li><strong>Business sponsors:</strong> If you choose to display your business name on a sponsored block, your business name is publicly visible on the map to promote community visibility</li>
            <li><strong>Contributors:</strong> If you contribute to a block sponsorship, your support is counted publicly ("Supported by 3 neighbors") but your name/amount may or may not be shown depending on settings</li>
          </UL>

          <H3>Payment Processors (Stripe)</H3>
          <P>We use Stripe to process all payments. Stripe receives:</P>
          <UL>
            <li>Your payment method details (credit/debit card or bank account)</li>
            <li>Identity verification information (name, date of birth, SSN/EIN for Scoopers earning income)</li>
            <li>Transaction amounts, dates, and metadata</li>
          </UL>
          <P>Stripe's privacy policy governs how they handle your payment data: <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--green)', fontWeight: '600' }}>stripe.com/privacy</a></P>

          <H3>Service Providers</H3>
          <P>We share data with trusted service providers who help us operate Scoopers:</P>
          <UL>
            <li><strong>Cloud hosting:</strong> Servers that store app data, photos, and databases</li>
            <li><strong>Analytics tools:</strong> Services that help us understand app usage and fix bugs</li>
            <li><strong>Push notification services:</strong> Apple (APNS) and Google (FCM) for sending notifications</li>
            <li><strong>Customer support tools:</strong> If you contact us for help, we may use support platforms to manage your request</li>
          </UL>
          <P>All service providers are contractually required to protect your data and use it only for the purposes we specify.</P>

          <H3>Law Enforcement & Legal Requests</H3>
          <P>We may disclose your information if required by law or to:</P>
          <UL>
            <li>Comply with a subpoena, court order, or legal process</li>
            <li>Respond to government requests or investigations</li>
            <li>Protect the safety of our users or the public</li>
            <li>Prevent fraud, illegal activity, or violations of our Terms of Service</li>
          </UL>

          <Alert>
            <P style={{ fontWeight: '600', marginBottom: '0.5rem' }}>We Don't Sell Your Data</P>
            <P style={{ marginBottom: 0 }}>We do not sell, rent, or trade your personal information to advertisers, data brokers, or third parties. Your data is used only to provide the Scoopers service.</P>
          </Alert>
        </Section>

        <Section>
          <H2>5. Photo & Image Data</H2>
          <P>All job photos (before and after) include metadata:</P>
          <UL>
            <li><strong>GPS coordinates:</strong> Exact location where the photo was taken</li>
            <li><strong>Timestamp:</strong> Date and time the photo was taken</li>
            <li><strong>Device info:</strong> Camera/phone model (if available)</li>
          </UL>
          <P>Photos are validated to ensure they're recent (within 30 minutes for before photos) and taken at the job location. This prevents fake submissions.</P>
          <P><strong>Photo visibility:</strong></P>
          <UL>
            <li>Before photos are visible to Scoopers browsing jobs and to the Scooper who claims the job</li>
            <li>After photos are visible to the Poster for confirmation</li>
            <li>Completed jobs (with before/after photos) may be visible on the map for 24 hours as "recently completed" to show community impact</li>
          </UL>
          <P>We may use anonymized before/after photos in marketing materials or case studies. No personal info (name, exact address) is shared in these cases.</P>
        </Section>

        <Section>
          <H2>6. Data Retention — How Long We Keep Your Info</H2>
          <UL>
            <li><strong>Account data:</strong> Kept as long as your account is active. Deleted when you delete your account.</li>
            <li><strong>Job history & photos:</strong> Kept for 90 days after job completion (for dispute resolution). Then deleted or anonymized.</li>
            <li><strong>Payment records:</strong> Kept for 7 years (required by tax and financial regulations).</li>
            <li><strong>Chat messages:</strong> Deleted 30 days after job completion.</li>
            <li><strong>Ratings & reviews:</strong> Kept permanently (or until you delete your account) to maintain trust and transparency.</li>
            <li><strong>GPS tracking logs:</strong> Deleted 90 days after job completion.</li>
          </UL>
          <P>When you delete your account, all your personal data is permanently deleted within 30 days, except for payment records required by law.</P>
        </Section>

        <Section>
          <H2>7. Your Privacy Rights</H2>
          <P>You have the right to:</P>
          <UL>
            <li><strong>Access your data:</strong> Request a copy of all data we have about you</li>
            <li><strong>Update or correct your data:</strong> Edit your profile, payment methods, and settings in the app</li>
            <li><strong>Delete your account:</strong> Permanently remove your account and all associated data (except records required by law)</li>
            <li><strong>Opt out of marketing emails:</strong> Unsubscribe from promotional emails (you'll still receive important account notifications)</li>
            <li><strong>Restrict data processing:</strong> Request that we limit how we use your data (may limit app functionality)</li>
            <li><strong>Data portability:</strong> Request your data in a machine-readable format to transfer to another service</li>
          </UL>
          <P>To exercise these rights, email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>. We'll respond within 30 days.</P>
        </Section>

        <Section>
          <H2>8. Data Security</H2>
          <P>We use industry-standard security practices to protect your data:</P>
          <UL>
            <li>Encryption in transit (HTTPS/TLS) for all data transferred between your device and our servers</li>
            <li>Encryption at rest for sensitive data stored in our databases</li>
            <li>Secure authentication with encrypted passwords (never stored in plain text)</li>
            <li>Regular security audits and vulnerability testing</li>
            <li>Access controls to limit who can view your data internally</li>
          </UL>
          <P><strong>However, no system is 100% secure.</strong> We can't guarantee absolute security. Use a strong, unique password, enable two-factor authentication if available, and never share your account credentials.</P>
        </Section>

        <Section>
          <H2>9. Children's Privacy</H2>
          <P><strong>Scoopers is for users 18 years or older.</strong> We do not knowingly collect data from anyone under 18. Our payment processor (Stripe) requires users to be at least 18 to send or receive payments.</P>
          <P>If we discover that a minor has created an account, we will immediately delete it and all associated data. If you believe a minor is using Scoopers, please contact us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>.</P>
        </Section>

        <Section>
          <H2>10. International Users & Data Transfers</H2>
          <P>Scoopers is based in New York, USA. If you use Scoopers from outside the United States, your data will be transferred to and processed in the USA.</P>
          <P>By using Scoopers, you consent to the transfer and processing of your data in the USA, which may have different data protection laws than your home country.</P>
        </Section>

        <Section>
          <H2>11. Third-Party Links</H2>
          <P>Scoopers may contain links to third-party websites or services (e.g., Stripe, Instagram, external resources). We are not responsible for the privacy practices of these third parties. Review their privacy policies before providing any personal information.</P>
        </Section>

        <Section>
          <H2>12. Changes to This Privacy Policy</H2>
          <P>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements.</P>
          <P>We'll notify you of major changes via:</P>
          <UL>
            <li>Email to your registered email address</li>
            <li>In-app notification when you next open Scoopers</li>
            <li>Updated "Last Updated" date at the top of this policy</li>
          </UL>
          <P>Continued use of Scoopers after changes means you accept the updated Privacy Policy. If you don't agree, you must stop using Scoopers and delete your account.</P>
        </Section>

        <Section>
          <H2>13. Disclaimer of Liability</H2>
          <P><strong>SCOOPERS LLC IS NOT LIABLE FOR:</strong></P>
          <UL>
            <li>Any unauthorized access to or disclosure of your personal information due to hacking, data breaches, or security vulnerabilities</li>
            <li>Any loss, theft, misuse, or unauthorized disclosure of your data by third-party service providers (including Stripe, cloud hosting providers, or analytics services)</li>
            <li>Any privacy violations or data misuse by other users of the platform</li>
            <li>Any consequences arising from your sharing of personal information with other users (photos, location, messages, etc.)</li>
            <li>Any damages resulting from GPS tracking, photo sharing, or public visibility of your sponsorships, jobs, or profile</li>
            <li>Identity theft, fraud, or any criminal activity involving your account or data</li>
            <li>Any failure to protect your data to the fullest extent, despite our security measures</li>
          </UL>
          <P><strong>YOU USE SCOOPERS AT YOUR OWN RISK. WE MAKE NO GUARANTEES ABOUT THE PRIVACY OR SECURITY OF YOUR DATA.</strong> While we implement industry-standard security practices, no system is 100% secure. You are responsible for protecting your account credentials and for any consequences of sharing your location, photos, or personal information through the platform.</P>
          <P><strong>By using Scoopers, you acknowledge and accept these privacy risks and release Scoopers LLC from any liability related to data security, privacy violations, or unauthorized access to your information.</strong></P>
        </Section>

        <Section>
          <H2>14. Contact Us</H2>
          <P>Questions or concerns about your privacy? Want to exercise your privacy rights? Contact us:</P>
          <P style={{ marginTop: '1.5rem', fontSize: '1rem', fontWeight: '600' }}>
            Email: <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a>
          </P>
          <P style={{ fontSize: '0.9rem', color: '#888' }}>
            Scoopers LLC<br />
            Brooklyn, New York<br />
            beau@scoopersnyc.com
          </P>
          <P>We'll respond to all privacy requests within 30 days.</P>
        </Section>

      </div>

      {/* Footer */}
      <footer style={{
        padding: '40px 20px',
        background: 'var(--dark)',
        color: 'var(--off-white)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{
            fontSize: '1.1rem',
            marginBottom: '1rem',
          }}>Made with 💩 in Brooklyn</p>
          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1rem',
          }}>
            <Link to="/about" style={{ color: 'var(--off-white)', textDecoration: 'none', opacity: 0.8 }}>About</Link>
            <Link to="/privacy" style={{ color: 'var(--off-white)', textDecoration: 'none', opacity: 0.8 }}>Privacy</Link>
            <Link to="/terms" style={{ color: 'var(--off-white)', textDecoration: 'none', opacity: 0.8 }}>Terms</Link>
          </div>
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--off-white)',
            opacity: 0.6,
            marginTop: '1rem',
            fontWeight: '500',
          }}>© 2026 Scoopers LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
