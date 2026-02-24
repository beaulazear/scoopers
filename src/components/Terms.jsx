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
          <H2>1. Acceptance of Terms</H2>
          <P>By using Scoopers ("the App"), you agree to these Terms of Service. If you don't agree, don't use the App.</P>
          <P><strong>You must be 18 years or older to use Scoopers.</strong> Our payment processor (Stripe) requires users to be at least 18 years old. By using the App, you confirm that you meet this age requirement.</P>
        </Section>

        <Section>
          <H2>2. The Service</H2>
          <P>Scoopers is a subscription service for dog waste cleanup on public sidewalks. Subscribers pay a monthly fee for recurring sweeps of their selected block. Dog walkers perform the sweeps and receive payment through the platform.</P>
          <P><strong>What Scoopers is:</strong></P>
          <UL>
            <li>A subscription service connecting subscribers with dog walkers for recurring block cleanup</li>
            <li>Assessment-based pricing: your block's tier (Light, Moderate, Heavy, Extreme) determines your monthly cost</li>
            <li>Two plan options: Daily sweeps or Weekly sweeps</li>
            <li>GPS and photo-verified cleanup service</li>
          </UL>
          <P><strong>What Scoopers is NOT:</strong></P>
          <UL>
            <li>Not a marketplace or job board (no posting, bidding, or claiming jobs)</li>
            <li>Not a community reporting platform (no sightings or public reporting)</li>
            <li>Not a one-off gig service (subscriptions only)</li>
            <li>Not a litter or trash cleanup service (dog poop only)</li>
            <li>Not a backyard or private property service (public sidewalks only)</li>
          </UL>
          <P>We provide the platform and payment processing. We don't clean anything ourselves, and we don't employ any walkers. Dog walkers are independent contractors.</P>
        </Section>

        <Section>
          <H2 color="#dc2626">3. Scope of Service — What We Clean</H2>

          <H3>Dog Waste Only</H3>
          <P><strong>Scoopers clean dog waste (poop) ONLY.</strong> Solid dog waste piles on public sidewalks that can be picked up with a bag.</P>

          <P><strong>We do NOT clean:</strong></P>
          <UL>
            <li><strong>Litter, trash, or debris</strong> — Poop only, not general cleanup</li>
            <li><strong>Diarrhea or liquid waste</strong> — Cannot be bagged, health hazard</li>
            <li><strong>Vomit</strong> — Health hazard, requires specialized cleaning</li>
            <li><strong>Blood or bodily fluids</strong> — Health hazard, biohazard cleanup required</li>
            <li><strong>Needles or sharps</strong> — Dangerous, requires special disposal</li>
            <li><strong>Large items</strong> — Furniture, mattresses, appliances (use 311)</li>
            <li><strong>Hazardous materials</strong> — Chemicals, paint, batteries, etc.</li>
            <li><strong>Dead animals</strong> — Contact NYC 311 for removal</li>
            <li><strong>Private property</strong> — Public sidewalks only (curb to building line)</li>
            <li><strong>Non-dog animal waste</strong> — Dog poop only</li>
          </UL>

          <H3>Coverage Area</H3>
          <P>Sweeps cover sidewalks only — from the curb to the building line. A "block" is the area bounded by two cross streets and two avenues. Subscribers can select the entire block or specific segments (NW, NE, SW, SE).</P>
        </Section>

        <Section>
          <H2 color="#dc2626">4. Safety & Liability — READ THIS</H2>

          <Alert type="warning">
            <H3>WALKERS ASSUME ALL RISK</H3>
            <P><strong>If you accept walker assignments, you are responsible for your own safety.</strong> You assume all risk of injury, illness, or harm from contact with waste, sharp objects, animals, or any other hazardous materials or conditions.</P>
            <P><strong>Scoopers LLC is NOT liable for:</strong></P>
            <UL>
              <li>Injuries sustained during cleanup (cuts, punctures, sprains, falls, etc.)</li>
              <li>Illness from contact with waste products (bacterial infections, parasites, diseases)</li>
              <li>Exposure to hazardous, toxic, or biohazardous materials</li>
              <li>Bites, scratches, or attacks from animals (dogs, rats, etc.)</li>
              <li>Slips, trips, falls, or any physical injuries</li>
              <li>Property damage caused by you or to you during a sweep</li>
              <li>Any harm, loss, or damages resulting from your participation in sweeps</li>
            </UL>
            <P style={{ marginBottom: 0 }}><strong>By accepting walker assignments, you release Scoopers LLC, its owners, founders, employees, contractors, and all users from ALL liability related to your participation in cleanup work.</strong></P>
          </Alert>

          <H3>Required Safety Practices</H3>
          <P>All walkers MUST:</P>
          <UL>
            <li><strong>Wear proper PPE (Personal Protective Equipment)</strong> including disposable or reusable gloves at minimum</li>
            <li><strong>Bring your own cleanup supplies:</strong> gloves, dog waste bags, hand sanitizer</li>
            <li><strong>Sanitize hands after each sweep</strong> using hand sanitizer or soap and water</li>
            <li><strong>Never handle materials you're uncomfortable with or that pose a health risk</strong></li>
            <li><strong>Report hazardous conditions</strong> (needles, liquid waste, etc.) in your sweep notes</li>
          </UL>
          <P><strong>Scoopers LLC does not provide, supply, or reimburse for any equipment, PPE, or cleaning supplies. You are solely responsible for obtaining and using proper safety equipment.</strong></P>
        </Section>

        <Section>
          <H2>5. Subscriptions</H2>

          <H3>How Subscriptions Work</H3>
          <UL>
            <li><strong>Choose a plan:</strong> Daily sweeps or Weekly sweeps</li>
            <li><strong>Assessment sweep:</strong> Your assigned walker sweeps your block on day one to determine tier (Light, Moderate, Heavy, or Extreme)</li>
            <li><strong>Pricing:</strong> Your monthly price is set based on your tier after the assessment sweep.</li>
            <li><strong>Ongoing sweeps:</strong> Your walker cleans your block on schedule. You get after photos, pickup counts, and progress tracking.</li>
            <li><strong>Tier adjustments:</strong> If your block improves or worsens consistently for 30 days, your tier adjusts automatically.</li>
          </UL>

          <H3>Walker Assignment</H3>
          <P><strong>You do not choose your walker.</strong> Walkers are assigned based on their coverage areas. After subscribing, you'll see your walker's profile (first name, photo, rating, business name, Instagram). You can rate your walker monthly and cancel if you're not satisfied.</P>

          <H3>Multi-Block Subscriptions</H3>
          <P>Subscribe to multiple blocks and receive volume discounts:</P>
          <UL>
            <li>3 blocks: 10% off total</li>
            <li>5 blocks: 15% off total</li>
            <li>10+ blocks: 20% off total</li>
          </UL>
        </Section>

        <Section>
          <H2>6. Payment & Fees</H2>

          <H3>Subscriber Payments</H3>
          <UL>
            <li>Assessment fee charged upfront</li>
            <li>Monthly subscription charged after assessment (price set by tier)</li>
            <li>Recurring monthly billing until you cancel</li>
            <li>All payments processed through Stripe</li>
          </UL>

          <H3>Walker Payments</H3>
          <UL>
            <li>Walkers receive a percentage of subscription revenue (platform fee applies)</li>
            <li>Payouts processed through Stripe Connect to walker's bank account</li>
            <li>Monthly payouts for all active subscriptions</li>
          </UL>

          <H3>Refunds</H3>
          <P>No refunds for partial months. If you cancel, your service continues through the end of your current billing period.</P>
        </Section>

        <Section>
          <H2>7. GPS Tracking & Photo Verification</H2>
          <P>All sweeps are GPS and photo-verified:</P>
          <UL>
            <li>Walkers check in via GPS when starting a sweep</li>
            <li>Assessment sweeps require before and after photos</li>
            <li>Regular sweeps require after photos</li>
            <li>Photos stored for 90 days</li>
            <li>GPS data used for verification only (not shared with subscribers)</li>
          </UL>
        </Section>

        <Section>
          <H2>8. User Conduct</H2>
          <P>You agree NOT to:</P>
          <UL>
            <li>Post fake or misleading information</li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Use the platform for any illegal activity</li>
            <li>Submit fraudulent photos or GPS data</li>
            <li>Attempt to circumvent payment processing</li>
            <li>Create multiple accounts to abuse promotions</li>
            <li>Share login credentials</li>
          </UL>
          <P>Violations may result in account suspension or termination without refund.</P>
        </Section>

        <Section>
          <H2>9. Cancellation Policy</H2>

          <H3>Subscribers Can Cancel:</H3>
          <UL>
            <li>Anytime in the app</li>
            <li>Service continues through end of current billing period</li>
            <li>No refunds for partial months</li>
          </UL>

          <H3>Walkers Can Cancel:</H3>
          <UL>
            <li>Decline new block assignments</li>
            <li>Cancel existing assignments with 7 days notice</li>
            <li>Mark themselves unavailable for specific dates</li>
          </UL>

          <H3>Scoopers LLC Can Cancel:</H3>
          <UL>
            <li>Any subscription or walker assignment for violations of Terms</li>
            <li>Accounts for fraudulent activity</li>
            <li>Service in areas where we can't maintain walker coverage</li>
          </UL>
        </Section>

        <Section>
          <H2>10. Independent Contractors</H2>
          <P><strong>Dog walkers are independent contractors, not employees.</strong> Scoopers LLC does not:</P>
          <UL>
            <li>Employ dog walkers</li>
            <li>Provide benefits, insurance, or workers' compensation</li>
            <li>Withhold taxes from walker payments</li>
            <li>Control how walkers perform sweeps (beyond photo/GPS requirements)</li>
            <li>Guarantee walker availability or performance</li>
          </UL>
          <P>Walkers set their own schedules, methods, and tools. Walkers are responsible for their own taxes, insurance, and business expenses.</P>
        </Section>

        <Section>
          <H2>11. Ratings & Reviews</H2>

          <H3>Monthly Ratings</H3>
          <P>Subscribers rate walkers once per month across 4 categories (Quality, Thoroughness, Timeliness, Communication). Ratings are public and visible on walker profiles.</P>

          <H3>Review Guidelines</H3>
          <UL>
            <li>Reviews must be honest and based on actual service</li>
            <li>No abusive, threatening, or discriminatory language</li>
            <li>No reviews for services not received</li>
            <li>Scoopers LLC may remove reviews that violate guidelines</li>
          </UL>
        </Section>

        <Section>
          <H2>12. Account Suspension & Termination</H2>
          <P>Scoopers LLC may suspend or terminate accounts for:</P>
          <UL>
            <li>Violations of these Terms</li>
            <li>Fraudulent activity or payment disputes</li>
            <li>Abusive behavior toward other users</li>
            <li>Submitting fake photos or GPS data</li>
            <li>Repeated low ratings (walkers only)</li>
            <li>Failure to pay subscription fees</li>
          </UL>
          <P>Suspended or terminated users forfeit all subscriptions and payments with no refund.</P>
        </Section>

        <Section>
          <H2 color="#dc2626">13. LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES</H2>

          <Alert type="warning">
            <H3>NO WARRANTIES</H3>
            <P><strong>SCOOPERS IS PROVIDED "AS IS" WITHOUT ANY WARRANTIES.</strong> Scoopers LLC makes no guarantees about:</P>
            <UL>
              <li>Quality, thoroughness, or results of sweeps</li>
              <li>Walker availability or reliability</li>
              <li>Block cleanliness or improvement</li>
              <li>Accuracy of photos or GPS data</li>
              <li>Uninterrupted service</li>
            </UL>
          </Alert>

          <Alert type="warning">
            <H3>LIMITATION OF LIABILITY</H3>
            <P><strong>SCOOPERS LLC'S TOTAL LIABILITY IS LIMITED TO THE AMOUNT YOU PAID IN THE LAST 12 MONTHS (max $1,800).</strong></P>
            <P><strong>Scoopers LLC is NOT liable for:</strong></P>
            <UL>
              <li>Injuries, illness, or harm to walkers or subscribers</li>
              <li>Property damage during sweeps</li>
              <li>Disputes between subscribers and walkers</li>
              <li>Lost or stolen property</li>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits or business</li>
              <li>Emotional distress or mental anguish</li>
            </UL>
            <P style={{ marginBottom: 0 }}><strong>BY USING SCOOPERS, YOU AGREE TO THESE LIMITATIONS. If you don't agree, don't use the service.</strong></P>
          </Alert>
        </Section>

        <Section>
          <H2>14. Arbitration & Governing Law</H2>
          <P>These Terms are governed by New York law. Any disputes will be resolved through binding arbitration in New York County, NY (not court). You waive your right to a jury trial or class action lawsuit.</P>
          <P>Exception: Either party may bring claims in small claims court (under $10,000).</P>
        </Section>

        <Section>
          <H2>15. Changes to These Terms</H2>
          <P>Scoopers LLC may update these Terms at any time. We'll notify users via email or in-app notification. Continued use after changes means you accept the new Terms.</P>
        </Section>

        <Section>
          <H2>16. Privacy</H2>
          <P>Your use of Scoopers is subject to our <Link to="/privacy" style={{ color: 'var(--green)', fontWeight: '700' }}>Privacy Policy</Link>.</P>
        </Section>

        <Section>
          <H2>17. Contact</H2>
          <P>Questions about these Terms? Email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '700' }}>beau@scoopersnyc.com</a></P>
          <P style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid #e5e5e5', color: '#999' }}>
            Scoopers LLC<br />
            Brooklyn, NY<br />
            © 2026 All rights reserved
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
          }}>
            © 2026 Scoopers LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
