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
            Last Updated: February 20, 2026
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
          <P>Scoopers is a job board on a map that connects people who want their street cleaned ("Posters") with people willing to clean it for payment ("Scoopers"). We provide the platform and payment processing. We don't clean anything ourselves, and we don't employ any cleaners.</P>
          <P>A single user can be both a Poster and a Scooper. You can post jobs for your own block and claim jobs on other blocks.</P>
        </Section>

        <Section>
          <H2 color="#dc2626">3. Scope of Work — What Scoopers Clean</H2>

          <H3>Acceptable Job Types</H3>
          <P>Scoopers handle street-level cleanup only:</P>
          <UL>
            <li><strong>Dog waste (poop):</strong> Solid dog waste piles on sidewalks. Must be solid enough to pick up with a bag.</li>
            <li><strong>Litter:</strong> Cigarette butts, food wrappers, cups, bottles, plastic bags, and similar street-level litter.</li>
            <li><strong>Combination jobs:</strong> Both dog waste and litter on the same block.</li>
          </UL>

          <H3>Coverage Area</H3>
          <P>Jobs cover sidewalks only — from the curb to the building line, plus the curb/gutter edge. Jobs are divided into block segments (north side west half, north side east half, south side west half, south side east half). Posters select which segments to clean.</P>
          <P><strong>Scoopers DO NOT clean:</strong></P>
          <UL>
            <li>The street itself (only sidewalks)</li>
            <li>Private property or building interiors</li>
            <li>Parks, playgrounds, or non-sidewalk public spaces</li>
          </UL>

          <Alert type="warning">
            <H3>EXPLICIT EXCLUSIONS — DO NOT HANDLE</H3>
            <P><strong>Scoopers must NOT handle the following materials. If you encounter these, skip them and note it in your completion log:</strong></P>
            <UL>
              <li><strong>Liquid waste or diarrhea:</strong> Cannot be picked up with a bag, requires specialized cleaning equipment</li>
              <li><strong>Hypodermic needles or sharps:</strong> Medical hazard, requires specialized disposal</li>
              <li><strong>Broken glass:</strong> Unless you bring proper cut-resistant gloves and equipment</li>
              <li><strong>Large items:</strong> Furniture, appliances, mattresses, construction debris, or anything requiring a truck</li>
              <li><strong>Hazardous materials:</strong> Chemicals, paint, motor oil, biohazard waste, or anything labeled toxic</li>
              <li><strong>Dead animals:</strong> Requires specialized removal by city services</li>
              <li><strong>Anything illegal:</strong> Drug paraphernalia, stolen goods, etc.</li>
            </UL>
            <P style={{ marginBottom: 0 }}><strong>If a job consists entirely of excluded materials (e.g., liquid waste that wasn't visible in photos), you may cancel with no penalty.</strong></P>
          </Alert>

          <H3>Disposal</H3>
          <P>Scoopers carry their own trash bag during cleanup, collect all waste, and dispose of it in the nearest public city receptacle. If the nearest bin is full, walk to the next available one. You are responsible for proper disposal — do not leave collected waste on the street.</P>
        </Section>

        <Section>
          <H2 color="#dc2626">4. Safety & Liability — READ THIS</H2>

          <Alert type="warning">
            <H3>SCOOPERS ASSUME ALL RISK</H3>
            <P><strong>If you accept a cleanup job, you are responsible for your own safety.</strong> You assume all risk of injury, illness, or harm from contact with waste, chemicals, bodily fluids, sharp objects, animals, or any other hazardous materials or conditions.</P>
            <P><strong>Scoopers LLC is NOT liable for:</strong></P>
            <UL>
              <li>Injuries sustained during cleanup (cuts, punctures, sprains, falls, etc.)</li>
              <li>Illness from contact with waste products (bacterial infections, parasites, diseases)</li>
              <li>Exposure to hazardous, toxic, or biohazardous materials</li>
              <li>Bites, scratches, or attacks from animals (dogs, rats, etc.)</li>
              <li>Slips, trips, falls, or any physical injuries</li>
              <li>Property damage caused by you or to you during a job</li>
              <li>Any harm, loss, or damages resulting from your participation in cleanup jobs</li>
            </UL>
            <P style={{ marginBottom: 0 }}><strong>By accepting a job, you release Scoopers LLC, its owners, founders, employees, contractors, and all users from ALL liability related to your participation in cleanup work.</strong></P>
          </Alert>

          <H3>Required Safety Practices</H3>
          <P>All Scoopers MUST:</P>
          <UL>
            <li><strong>Wear proper PPE (Personal Protective Equipment)</strong> including disposable or reusable gloves at minimum</li>
            <li><strong>Bring your own cleanup supplies:</strong> gloves, dog waste bags or pickup bags, and a larger carry bag for collected waste</li>
            <li><strong>Sanitize hands after each job</strong> using hand sanitizer or soap and water</li>
            <li><strong>Assess jobs before accepting:</strong> If a job looks unsafe based on the photos or description, don't accept it</li>
            <li><strong>Never handle materials you're uncomfortable with or that pose a health risk</strong></li>
            <li><strong>Leave and report jobs that are mislabeled, more hazardous than described, or contain excluded materials</strong></li>
          </UL>
          <P><strong>Scoopers LLC does not provide, supply, or reimburse for any equipment, PPE, or cleaning supplies. You are solely responsible for obtaining and using proper safety equipment.</strong></P>
        </Section>

        <Section>
          <H2>5. Payment & Fees</H2>
          <P>Posters set the price for each job. Scoopers see the price and their take-home earnings (after platform fee) before accepting.</P>
          <P><strong>Platform Fee:</strong> Scoopers LLC charges an 18% service fee on each completed job, deducted from the scooper's earnings. Posters pay the full job price they set.</P>
          <P><strong>Payment Processing:</strong> All payments are processed securely through Stripe. Posters pay with a credit/debit card. Scoopers receive earnings via direct deposit to their bank account or debit card.</P>
          <P><strong>When Payment Happens:</strong></P>
          <UL>
            <li>When a Poster posts a job, Stripe places a hold on their payment method (not a charge)</li>
            <li>When a Scooper completes a job and the Poster confirms completion, the hold converts to a charge and the Scooper is paid instantly</li>
            <li>If a Poster doesn't confirm within 2 hours, the job auto-confirms and payment releases to the Scooper</li>
            <li>If a job is cancelled or disputed, payment holds are released or adjusted based on the cancellation policy (see Section 8)</li>
          </UL>
          <P><strong>Tips:</strong> Posters can tip Scoopers after job completion. Tips go 100% to the Scooper with no platform fee.</P>
        </Section>

        <Section>
          <H2>6. GPS Tracking & Photo Verification</H2>
          <P>All jobs use GPS tracking and photo verification to ensure trust and accountability:</P>
          <UL>
            <li><strong>Posters</strong> must provide at least 1 photo (max 4) when posting a job. Photos must be recent (within 30 minutes) and geotagged at the job location.</li>
            <li><strong>Scoopers</strong> must arrive at the job location within 60 minutes. GPS verifies arrival on the block.</li>
            <li><strong>Scoopers</strong> submit at least 1 after photo (max 4) matching the angles of the Poster's before photos. Photos must be geotagged and timestamped at the job location.</li>
            <li>GPS tracking is active while a Scooper is en route and actively cleaning. Posters can see the Scooper's live location during this time.</li>
          </UL>
          <P>By using Scoopers, you consent to GPS tracking and photo collection as described in our Privacy Policy.</P>
        </Section>

        <Section>
          <H2>7. User Conduct</H2>
          <P>Don't be a jerk. Specifically:</P>
          <UL>
            <li>Don't post fake jobs or jobs for blocks that don't need cleaning</li>
            <li>Don't accept jobs you don't intend to complete</li>
            <li>Don't harass, threaten, or abuse other users</li>
            <li>Don't post jobs for illegal activities or materials</li>
            <li>Don't misrepresent the nature, scope, or danger level of a cleanup job</li>
            <li>Don't submit fake before/after photos or manipulate verification systems</li>
            <li>Don't use the app for any purpose other than posting or claiming legitimate cleanup jobs</li>
          </UL>
          <P>We can suspend or ban your account for violating these rules. Repeat offenders or severe violations result in permanent bans.</P>
        </Section>

        <Section>
          <H2>8. Cancellation Policy</H2>

          <H3>Poster Cancellations</H3>
          <UL>
            <li><strong>Before a Scooper claims:</strong> Free cancellation. Payment hold is released.</li>
            <li><strong>After a Scooper claims but before arrival:</strong> 20% of the job price is paid to the Scooper as compensation. Remaining hold is released.</li>
            <li><strong>After a Scooper arrives and confirms conditions:</strong> 50% of the job price is paid to the Scooper. Remaining hold is released.</li>
            <li><strong>After a Scooper starts cleaning:</strong> Cancellation is BLOCKED. The job must proceed to completion or dispute resolution.</li>
          </UL>

          <H3>Scooper Cancellations</H3>
          <UL>
            <li><strong>Before arriving:</strong> Job returns to "open" on the map. Occasional cancellations are allowed, but frequent cancellations (3+ in a week) result in warnings and reliability score hits.</li>
            <li><strong>At arrival — safety or accuracy issue:</strong> If the job involves excluded materials (liquid waste, needles, hazardous materials) or is significantly worse than described, the Scooper can cancel with no penalty. The job returns to the map.</li>
            <li><strong>At arrival — personal reason:</strong> Scooper can cancel for personal emergencies or other reasons, but this counts toward their reliability score.</li>
            <li><strong>Abandonment without cancellation:</strong> If a Scooper claims a job and doesn't arrive within 60 minutes or cancel, the job auto-releases and the Scooper receives a significant reliability score penalty.</li>
          </UL>
        </Section>

        <Section>
          <H2>9. Disputes & Resolution</H2>
          <P>If a Poster or Scooper has an issue with a completed job, they can report it through the app:</P>
          <UL>
            <li><strong>Poster disputes:</strong> "Scooper didn't clean," "Block still dirty," "Photos don't match," or "Other"</li>
            <li><strong>Scooper disputes:</strong> "Job was worse than described," "Poster didn't pay," "Unfair rating," or "Other"</li>
          </UL>
          <P>When a dispute is filed, the job enters "Under Review" status. Payment stays held (or is reversed if already released). Both parties are notified.</P>
          <P><strong>Resolution Process:</strong> Scoopers LLC reviews all evidence including before/after photos, GPS tracking data, job descriptions, itemization, chat history, and both parties' explanations. We will make a decision within 3 business days and release payment, issue a partial refund, or issue a full refund based on the evidence.</P>
          <P>Dispute outcomes may affect user ratings and reliability scores. Repeated false disputes or abuse of the dispute system can result in account suspension.</P>
        </Section>

        <Section>
          <H2>10. Independent Contractors</H2>
          <P>Scoopers are independent contractors, NOT employees of Scoopers LLC. You are solely responsible for:</P>
          <UL>
            <li>Paying your own taxes (federal, state, and local)</li>
            <li>Obtaining your own insurance (health, liability, etc.) if desired</li>
            <li>Complying with all local, state, and federal laws related to cleanup work</li>
            <li>Providing your own equipment and supplies</li>
          </UL>
          <P>Scoopers LLC does not withhold taxes, provide benefits, or treat Scoopers as employees in any way.</P>
        </Section>

        <Section>
          <H2>11. Ratings & Reviews</H2>
          <P>Both Posters and Scoopers rate each other after job completion using category-based ratings (1–5 stars):</P>
          <UL>
            <li><strong>Scoopers are rated on:</strong> Quality of cleanup, thoroughness, timeliness, and communication</li>
            <li><strong>Posters are rated on:</strong> Accuracy of job description, fair pricing, responsiveness, and communication</li>
          </UL>
          <P>Ratings and reviews are public and visible on user profiles. You may not post false, defamatory, or abusive reviews. We reserve the right to remove reviews that violate our policies.</P>
        </Section>

        <Section>
          <H2>12. Account Suspension & Termination</H2>
          <P>We reserve the right to suspend or terminate your account at any time for:</P>
          <UL>
            <li>Violation of these Terms of Service</li>
            <li>Fraudulent activity or payment disputes</li>
            <li>Abuse of other users or the platform</li>
            <li>Repeated low ratings or reliability issues</li>
            <li>Any activity that harms the platform or community</li>
          </UL>
          <P>You may delete your account at any time through the app settings. Deleting your account removes all your data permanently.</P>
        </Section>

        <Section>
          <H2>13. Limitation of Liability</H2>
          <P><strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, SCOOPERS LLC, ITS FOUNDERS, EMPLOYEES, AND CONTRACTORS ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE APP, INCLUDING BUT NOT LIMITED TO INJURIES, ILLNESSES, PROPERTY DAMAGE, LOSS OF EARNINGS, OR ANY OTHER DAMAGES.</strong></P>
          <P><strong>OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM ARISING FROM YOUR USE OF SCOOPERS SHALL NOT EXCEED THE AMOUNT YOU PAID TO SCOOPERS IN THE PAST 12 MONTHS, OR $100, WHICHEVER IS LESS.</strong></P>
        </Section>

        <Section>
          <H2>14. Arbitration & Governing Law</H2>
          <P>These Terms are governed by the laws of the State of New York, USA, without regard to conflict of law principles.</P>
          <P><strong>Arbitration Agreement:</strong> Any dispute arising from these Terms or your use of Scoopers shall be resolved through binding arbitration in New York, NY, rather than in court. You waive your right to a jury trial or to participate in a class action lawsuit.</P>
          <P>This arbitration agreement does not prevent you from bringing issues to the attention of federal, state, or local agencies. Such agencies can, if the law allows, seek relief against us on your behalf.</P>
        </Section>

        <Section>
          <H2>15. Changes to These Terms</H2>
          <P>We may update these Terms of Service at any time. We'll notify you of major changes via email or in-app notification. Continued use of the app after changes means you accept the new terms.</P>
          <P>If you don't agree to updated terms, you must stop using Scoopers and delete your account.</P>
        </Section>

        <Section>
          <H2>16. Contact</H2>
          <P>Questions about these Terms? Email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '600' }}>beau@scoopersnyc.com</a></P>
          <P style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#888' }}>
            Scoopers LLC<br />
            Brooklyn, New York<br />
            beau@scoopersnyc.com
          </P>
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
          }}>Made with 💩 in NYC</p>
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
