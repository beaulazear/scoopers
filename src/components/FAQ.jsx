import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update meta tags
    document.title = 'FAQ - Scoopers NYC | Frequently Asked Questions'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about Scoopers NYC - block sponsorships, one-off cleanups, payments, what we clean, and more.')
    }

    // Cleanup function to restore original meta tags
    return () => {
      document.title = 'Scoopers NYC - Sponsor Your Block | Dog Walkers Keep NYC Blocks Clean'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Sponsor your NYC block for weekly dog waste cleanup by professional dog walkers. Or post one-off jobs for instant cleanup. GPS & photo verified. Spring 2026 launch.')
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
            <h2>📍 How This Works</h2>

            <div className="faq-item">
              <h3>How does Scoopers work?</h3>
              <p>Three ways:</p>
              <p><strong>1. Sightings (Community Reporting)</strong> - See dog poop on your block? Report it to the public map. No login required. Just snap a photo and drop a pin. Anyone can see it and anyone can convert it to a paid cleanup job. Sightings create social pressure and drive action.</p>
              <p><strong>2. One-Off Jobs</strong> - Convert a sighting to a paid job or post directly. Set a price ($5-$20). Dog walkers claim it, clean within 60 minutes, submit before/after photos, get paid instantly through Stripe.</p>
              <p><strong>3. Block Sponsorships (Recurring)</strong> - Hire a dog walker to sweep your block for poop on a schedule. Pay $20-$60/month for biweekly or weekly sweeps. Your block gets a green badge on the map. Neighbors can chip in to lower your cost.</p>
              <p>Everything is GPS-verified and photo-verified.</p>
            </div>

            <div className="faq-item">
              <h3>When does it launch?</h3>
              <p>Spring 2026 in all 5 NYC boroughs. iOS app first. Join the waitlist at scoopersnyc.com to be first to know.</p>
            </div>

            <div className="faq-item">
              <h3>How do I become a scooper?</h3>
              <p>Join the waitlist at scoopersnyc.com. When we launch, you'll download the app, create a profile, and start claiming jobs. Dog walkers can also claim block sponsorships for recurring monthly income.</p>
            </div>
          </section>

          {/* Sightings */}
          <section className="faq-section">
            <h2>👀 Sightings & Community Reporting</h2>

            <div className="faq-item">
              <h3>What are sightings?</h3>
              <p>Sightings are community reports of dog poop on public sidewalks. Anyone can report them—no login required. Just open the app, snap a photo, select the block, and submit. The sighting appears on the public map for everyone to see.</p>
            </div>

            <div className="faq-item">
              <h3>Who can see sightings?</h3>
              <p>Everyone. The map is public. No login required to view. This creates community accountability—dirty blocks are visible to the whole neighborhood.</p>
            </div>

            <div className="faq-item">
              <h3>How long do sightings last?</h3>
              <p>Sightings expire after 48 hours. But if others tap "I've Seen This Too," the expiration timer extends. High-confirmation sightings stay visible longer and create more urgency for cleanup.</p>
            </div>

            <div className="faq-item">
              <h3>Can I convert a sighting to a paid job?</h3>
              <p>Yes! Anyone can tap "Clean This Up" on a sighting to convert it to a paid job. The photo and location are pre-filled. You just set a price and confirm payment. You don't have to be the person who originally reported it.</p>
            </div>

            <div className="faq-item">
              <h3>Can I tag businesses in sightings?</h3>
              <p>Yes. If the poop is in front of a business, you can tag it. The business name appears on the sighting. This creates social pressure for businesses to sponsor their block or take action.</p>
            </div>
          </section>

          {/* What We Clean */}
          <section className="faq-section">
            <h2>🚫 What We DON'T Clean (Important!)</h2>

            <div className="faq-item">
              <h3>What kind of messes do you clean?</h3>
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
              <p>Scoopers only clean public sidewalks and streets. We cannot enter private property (stoops, yards, building entrances) without permission. For private property, contact the property owner.</p>
            </div>
          </section>

          {/* Payments */}
          <section className="faq-section">
            <h2>💰 Making Money</h2>

            <div className="faq-item">
              <h3>How much does it cost?</h3>
              <p><strong>Sightings:</strong> Free to report. Anyone can report dog poop sightings on the public map at no cost.</p>
              <p><strong>One-Off Jobs:</strong> You set the price. Most jobs are $5-$20 depending on the size of the mess.</p>
              <p><strong>Block Sponsorships:</strong> $20-$60/month depending on block size and frequency. Biweekly is recommended and cheaper than weekly. Neighbors can contribute $5-$25/month to lower your cost.</p>
            </div>

            <div className="faq-item">
              <h3>How do scoopers get paid?</h3>
              <p>Scoopers get paid instantly through Stripe after you confirm the job is complete. Payment goes directly to their bank account. Scoopers keep 82% of the job price (18% platform fee).</p>
            </div>

            <div className="faq-item">
              <h3>What if nobody claims my job?</h3>
              <p>Jobs expire after 24 hours. You don't pay unless a scooper completes the work. If nobody claims it, try increasing the price to attract more scoopers.</p>
            </div>

            <div className="faq-item">
              <h3>Can I get a refund?</h3>
              <p><strong>One-off jobs:</strong> If the scooper doesn't complete the work or you reject the photos, you don't pay. No refund needed.</p>
              <p><strong>Block sponsorships:</strong> You can cancel anytime. You're billed monthly, and cancellation takes effect at the end of your current billing period. No refunds for partial months.</p>
            </div>
          </section>

          {/* Block Sponsorships */}
          <section className="faq-section">
            <h2>🏘️ Block Sponsorships</h2>

            <div className="faq-item">
              <h3>What is a block sponsorship?</h3>
              <p>You hire a dog walker to keep your block clean on a recurring schedule (weekly or biweekly). They sweep the block for dog waste while they're already walking dogs in the area. Your block shows green on the map, and neighbors can see you're sponsoring it.</p>
            </div>

            <div className="faq-item">
              <h3>Can neighbors contribute to the sponsorship?</h3>
              <p>Yes! Neighbors can contribute $5-$25/month to help cover the cost. Their contributions lower your monthly payment. You can choose to show contributor names publicly or keep them anonymous.</p>
            </div>

            <div className="faq-item">
              <h3>What if my dog walker stops cleaning?</h3>
              <p>You can rate your dog walker monthly. If they're not performing, you can cancel the sponsorship or switch to a different dog walker. You're never locked in.</p>
            </div>

            <div className="faq-item">
              <h3>Can businesses sponsor blocks?</h3>
              <p>Absolutely! Business sponsors get their business name displayed on the map ("Sponsored by Smith's Coffee Shop"). Great way to show you care about the community and get local visibility.</p>
            </div>
          </section>

          {/* Safety & Quality */}
          <section className="faq-section">
            <h2>✅ Safety & Quality</h2>

            <div className="faq-item">
              <h3>Do you background check scoopers?</h3>
              <p>No. Scoopers are independent contractors, not employees. We are a platform that connects people, not a cleanup service. You choose which scoopers to hire based on their ratings and reviews.</p>
            </div>

            <div className="faq-item">
              <h3>How do I know the job was actually done?</h3>
              <p>All jobs require before/after photos and GPS verification. You review the photos before confirming payment. If you're not satisfied, you can reject the job and the scooper doesn't get paid.</p>
            </div>

            <div className="faq-item">
              <h3>What if I'm not satisfied with the cleanup?</h3>
              <p>Reject the job. The scooper doesn't get paid, and you don't pay. You can then repost the job with a different scooper or adjust the price.</p>
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
              <p>All 5 NYC boroughs: Manhattan, Brooklyn, Queens, Bronx, Staten Island. Launching everywhere at once in Spring 2026.</p>
            </div>

            <div className="faq-item">
              <h3>Do I need to download the app to use it?</h3>
              <p>Yes. Both posters and scoopers need the iOS app. We're mobile-first because the entire experience is built around GPS, photos, and real-time map updates.</p>
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
