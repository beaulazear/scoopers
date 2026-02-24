import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update meta tags
    document.title = 'FAQ - Scoopers NYC | Frequently Asked Questions'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about Scoopers NYC - subscription service, pricing, walkers, what we clean, and more.')
    }

    // Cleanup function to restore original meta tags
    return () => {
      document.title = 'Scoopers NYC - Dog Walkers Keeping Your Block Clean'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Subscribe to your block for daily or weekly dog waste cleanup by professional dog walkers. GPS & photo verified. Spring 2026 launch in NYC.')
      }
    }
  }, [])

  return (
    <div className="legal-page">
      {/* Header */}
      <header className="legal-header">
        <div className="container">
          <Link to="/" className="back-link">← Back to Home</Link>
          <h1>Frequently Asked Questions</h1>
          <p className="legal-updated">Your questions answered</p>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="legal-content">
        <div className="container">

          {/* How It Works */}
          <section className="faq-section">
            <h2>📍 How It Works</h2>

            <div className="faq-item">
              <h3>What is Scoopers?</h3>
              <p>Scoopers is a subscription service. You subscribe to your block, a dog walker is assigned to you, and your block stays clean. Like a cleaning service for your home, except it's for your sidewalk.</p>
              <p><strong>Not a marketplace. Not a job board. Not a community platform.</strong> Just a service you subscribe to.</p>
            </div>

            <div className="faq-item">
              <h3>How does it work?</h3>
              <p>Simple:</p>
              <ol>
                <li><strong>Subscribe</strong> - Choose daily or weekly sweeps for your block</li>
                <li><strong>Assessment</strong> - A walker sweeps your block on day one to determine how much cleanup is needed</li>
                <li><strong>Pricing set</strong> - Your monthly price is based on your block's tier (Light, Moderate, Heavy, or Extreme)</li>
                <li><strong>Ongoing sweeps</strong> - Your assigned walker cleans your block on schedule, every week</li>
              </ol>
              <p>You get after photos, pickup counts, and a dashboard showing your block's improvement over time.</p>
            </div>

            <div className="faq-item">
              <h3>When does it launch?</h3>
              <p>Spring 2026 in Brooklyn and Manhattan. iOS app first. Coming to all of NYC soon. Join the waitlist at scoopersnyc.com to be first to know.</p>
            </div>

            <div className="faq-item">
              <h3>How do I become a walker?</h3>
              <p>We're selectively recruiting professional dog walkers in NYC. If you're a dog walker interested in joining, email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '700' }}>beau@scoopersnyc.com</a> with your neighborhood coverage and client references.</p>
            </div>
          </section>

          {/* Pricing */}
          <section className="faq-section">
            <h2>💰 Pricing</h2>

            <div className="faq-item">
              <h3>How much does it cost?</h3>
              <p>Pricing is based on your block's condition and how often you want it cleaned. We offer two plans:</p>
              <p><strong>Daily Plan:</strong> Your walker sweeps your block every day.</p>
              <p><strong>Weekly Plan:</strong> Your walker sweeps your block once per week.</p>
              <p>Your exact price is determined after an initial assessment sweep of your block. The walker evaluates how much cleanup is needed and your block is assigned a tier (Light, Moderate, Heavy, or Extreme). We'll share pricing details when you subscribe.</p>
            </div>

            <div className="faq-item">
              <h3>What are the tiers?</h3>
              <p>Your block's tier is determined by the assessment sweep (first visit) based on how many piles are found. The four tiers are:</p>
              <ul>
                <li><strong>Light:</strong> Minimal cleanup needed (0-3 piles)</li>
                <li><strong>Moderate:</strong> Average maintenance needed (4-8 piles)</li>
                <li><strong>Heavy:</strong> Significant cleanup needed (9-15 piles)</li>
                <li><strong>Extreme:</strong> Extensive cleanup needed (16+ piles)</li>
              </ul>
              <p>After the assessment, you'll get a notification with your tier and final monthly price.</p>
            </div>

            <div className="faq-item">
              <h3>Does the price change over time?</h3>
              <p>Yes! If your block improves consistently for 30 days, your tier automatically adjusts down and your price drops. You'll get a notification when your block improves to a lower tier.</p>
              <p>If conditions worsen (rare with daily maintenance), your tier may adjust up. You can cancel if you disagree.</p>
            </div>

            <div className="faq-item">
              <h3>Can I subscribe to multiple blocks?</h3>
              <p>Yes! You get a volume discount at 3+ blocks:</p>
              <ul>
                <li>3 blocks: 10% off total</li>
                <li>5 blocks: 15% off total</li>
                <li>10+ blocks: 20% off total</li>
              </ul>
              <p>Perfect for covering your walk to the train or multiple blocks in your neighborhood.</p>
            </div>

            <div className="faq-item">
              <h3>Can I cancel anytime?</h3>
              <p>Yes. No contracts, no commitments. Cancel in the app and your subscription ends at the end of your current billing period. No refunds for partial months.</p>
            </div>
          </section>

          {/* Walkers */}
          <section className="faq-section">
            <h2>🐕 Your Walker</h2>

            <div className="faq-item">
              <h3>Who is my walker?</h3>
              <p>After you subscribe, we assign a dog walker who covers your neighborhood. You'll see their profile in the app:</p>
              <ul>
                <li>First name and photo</li>
                <li>Business name (if they have one, like "Pocket Walks")</li>
                <li>Instagram handle (clickable—serves as a trust signal)</li>
                <li>Rating and number of reviews</li>
                <li>Total sweeps completed</li>
              </ul>
              <p>You don't choose your walker—we assign them based on their coverage area. But you can rate them monthly and cancel if you're not happy.</p>
            </div>

            <div className="faq-item">
              <h3>What if my walker can't do a sweep?</h3>
              <p>If your walker is sick, on vacation, or unavailable, we'll either assign a backup walker or notify you that your sweep will be delayed. You'll get a push notification: "Your regular walker is off today. [Backup walker] will cover your block." Or if no backup: "Your walker is off today. Your block will be swept tomorrow."</p>
            </div>

            <div className="faq-item">
              <h3>Can I switch walkers?</h3>
              <p>Not directly. Walkers are assigned based on their coverage areas. But if you're unhappy with your walker's service, you can cancel your subscription and resubscribe later to see if a different walker is available.</p>
            </div>

            <div className="faq-item">
              <h3>How do I rate my walker?</h3>
              <p>Once per month, you'll get a push notification: "How's your block looking? Rate [Walker]'s service this month." You rate 4 categories (Quality, Thoroughness, Timeliness, Communication) on a 1-5 star scale, plus leave an optional comment.</p>
            </div>
          </section>

          {/* What We Clean */}
          <section className="faq-section">
            <h2>🚫 What We Clean (Important!)</h2>

            <div className="faq-item">
              <h3>What do you clean?</h3>
              <p><strong>Dog waste only.</strong> Solid poop on public sidewalks. That's it.</p>
              <p>Scoopers is a poop-only platform. We don't clean litter, trash, or any other debris. Just dog poop.</p>
            </div>

            <div className="faq-item">
              <h3>What do you NOT clean?</h3>
              <p><strong>We do NOT clean:</strong></p>
              <ul>
                <li><strong>Litter, trash, or debris</strong> - Poop only, not general cleanup</li>
                <li><strong>Diarrhea or liquid waste</strong> - Cannot be bagged, health hazard</li>
                <li><strong>Vomit</strong> - Health hazard, requires specialized cleaning</li>
                <li><strong>Blood or bodily fluids</strong> - Health hazard, biohazard cleanup required</li>
                <li><strong>Needles or sharps</strong> - Dangerous, requires special disposal</li>
                <li><strong>Large items</strong> - Furniture, mattresses, appliances (use 311)</li>
                <li><strong>Hazardous materials</strong> - Chemicals, paint, batteries, etc.</li>
                <li><strong>Dead animals</strong> - Contact NYC 311 for removal</li>
                <li><strong>Private property</strong> - Public sidewalks only (curb to building line)</li>
                <li><strong>Non-dog animal waste</strong> - Dog poop only</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>What if the mess is on private property?</h3>
              <p>Scoopers only clean public sidewalks and streets. We cannot enter private property (stoops, yards, building entrances) without permission.</p>
            </div>

            <div className="faq-item">
              <h3>What is a "block"?</h3>
              <p>A block is the area bounded by two cross streets and two avenues (or equivalent in non-grid neighborhoods). When you subscribe, you select which block you want cleaned. Your walker sweeps the entire sidewalk perimeter of that block.</p>
            </div>

            <div className="faq-item">
              <h3>Can I choose just part of a block?</h3>
              <p>Yes! You can select specific segments: Northwest, Northeast, Southwest, Southeast. If you only care about the side of the block in front of your building, just select that segment. The price is the same—you're just reducing the area your walker needs to cover.</p>
            </div>
          </section>

          {/* The Dashboard */}
          <section className="faq-section">
            <h2>📊 Your Dashboard</h2>

            <div className="faq-item">
              <h3>What do I see in my dashboard?</h3>
              <p>Your subscriber dashboard ("My Block" view) shows:</p>
              <ul>
                <li><strong>Walker card</strong> - Name, photo, rating, Instagram, next sweep time</li>
                <li><strong>Streak counter</strong> - Consecutive days your block has been swept</li>
                <li><strong>Improvement percentage</strong> - How much cleaner your block is vs. week one</li>
                <li><strong>Monthly trend chart</strong> - 4 weeks of average daily pickup counts</li>
                <li><strong>Recent sweeps timeline</strong> - Last 7 sweeps with pickup counts and after photos</li>
              </ul>
            </div>

            <div className="faq-item">
              <h3>What are streaks?</h3>
              <p>Streaks count consecutive days your block has been swept. If a sweep is missed (walker absence with no backup), the streak resets. You'll get milestone notifications at 7, 14, 30, 60, 90, and 365 days.</p>
              <p>Zero-pickup days count toward the streak—the block was clean, which is a success!</p>
            </div>

            <div className="faq-item">
              <h3>Do I see photos of every sweep?</h3>
              <p>You see after photos. Daily sweeps require one after photo. Assessment sweeps require both before and after photos. Photos are GPS-verified and stored for 90 days.</p>
            </div>
          </section>

          {/* Privacy & Safety */}
          <section className="faq-section">
            <h2>🔒 Privacy & Safety</h2>

            <div className="faq-item">
              <h3>Do you share my address?</h3>
              <p>No. Everything operates at the <strong>block level</strong>, never the address level. You select a block on the map, not a specific address. Your assigned walker sees the block boundary, not your home address.</p>
            </div>

            <div className="faq-item">
              <h3>Can I see my walker's location in real time?</h3>
              <p>No. There's no real-time walker tracking. You'll get a push notification when your walker starts and completes a sweep, but you can't track their location during the sweep.</p>
            </div>

            <div className="faq-item">
              <h3>What information is visible to walkers?</h3>
              <p>Walkers see:</p>
              <ul>
                <li>Your first name only</li>
                <li>The block boundary (not your specific address)</li>
                <li>Your plan (daily or weekly)</li>
                <li>Your subscription tier</li>
              </ul>
              <p>They do NOT see your full name, address, phone number, or payment info.</p>
            </div>

            <div className="faq-item">
              <h3>Do you background check walkers?</h3>
              <p>Not at launch. At launch, we're manually onboarding a small group of dog walkers we know personally. As we scale, we'll implement background checks for all new walkers.</p>
            </div>
          </section>

          {/* Technical */}
          <section className="faq-section">
            <h2>📱 The App</h2>

            <div className="faq-item">
              <h3>Is there an app?</h3>
              <p>Yes! iOS app launching Spring 2026. Android coming later. Join the waitlist to be notified when it's available.</p>
            </div>

            <div className="faq-item">
              <h3>Where does it work?</h3>
              <p>Launching in Brooklyn and Manhattan in Spring 2026. Queens, Bronx, and Staten Island coming soon.</p>
            </div>

            <div className="faq-item">
              <h3>Do I need to download the app?</h3>
              <p>Yes. Both subscribers and walkers need the iOS app. The entire experience is built around GPS, photos, and real-time updates.</p>
            </div>

            <div className="faq-item">
              <h3>What about businesses?</h3>
              <p>Businesses can subscribe to the block in front of their location. Same pricing, same service. Great way to show you care about the community and keep your storefront clean.</p>
            </div>
          </section>

          {/* Still have questions? */}
          <section className="faq-section">
            <h2>💬 Still Have Questions?</h2>
            <p>Email us at <a href="mailto:beau@scoopersnyc.com" style={{ color: 'var(--green)', fontWeight: '700' }}>beau@scoopersnyc.com</a></p>
            <p>We'll get back to you within 24 hours.</p>
          </section>

        </div>
      </main>

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
