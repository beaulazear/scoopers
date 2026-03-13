import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0)

    // Update meta tags
    document.title = 'FAQ - Scoopers | Dog Walking Business Platform'

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frequently asked questions about Scoopers - the dog walking business management platform for professional dog walkers.')
    }

    // Cleanup function to restore original meta tags
    return () => {
      document.title = 'Scoopers - Dog Walking Business Platform'
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Professional dog walking business management app. Manage clients, schedule walks, track earnings, and invoice seamlessly. iOS app launching Spring 2026.')
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

          {/* About Scoopers */}
          <section className="faq-section">
            <h2>📱 About Scoopers</h2>

            <div className="faq-item">
              <h3>What is Scoopers?</h3>
              <p>Scoopers is software for independent dog walkers to manage their business and keep neighborhoods clean.</p>
              <p><strong>For clients:</strong> Find vetted dog walkers who keep your block clean through our platform.</p>
              <p><strong>For dog walkers:</strong> Get business management tools to handle clients, schedules, invoices, and earn extra income by cleaning blocks (Scoop feature).</p>
            </div>

            <div className="faq-item">
              <h3>Who is it for?</h3>
              <p><strong>Clients & Businesses:</strong> Anyone tired of stepping in dog waste who wants to hire professional dog walkers to keep their block clean.</p>
              <p><strong>Dog Walkers:</strong> Independent dog walkers who want to stop using spreadsheets, paper calendars, and scattered notes apps. Manage your business and earn extra income keeping neighborhoods spotless.</p>
            </div>

            <div className="faq-item">
              <h3>When does it launch?</h3>
              <p>Spring 2026. iOS app first, Android coming later. Join the waitlist at scoopersnyc.com to be notified when we launch.</p>
            </div>

            <div className="faq-item">
              <h3>How much does it cost?</h3>
              <p>Pricing will be announced closer to launch. We're committed to keeping it affordable for independent dog walkers and small businesses.</p>
            </div>
          </section>

          {/* Features */}
          <section className="faq-section">
            <h2>✨ Features</h2>

            <div className="faq-item">
              <h3>Client & Pet Management</h3>
              <p>Add unlimited clients with contact info (email, phone). Create detailed pet profiles with names, birthdays, sex, behavioral notes, allergies, supplies locations, and primary addresses. All the info you need in one place.</p>
            </div>

            <div className="faq-item">
              <h3>Schedule Management</h3>
              <p>Schedule one-time or recurring walks. Set walk types (group, solo, training, sibling walks). Define custom rates for different walk durations (30, 45, 60 minutes) and types. See today's schedule at a glance with chronological sorting.</p>
            </div>

            <div className="faq-item">
              <h3>Walk Completion & Invoicing</h3>
              <p>Complete walks with one tap. Adjust walk duration or add upcharges/discounts if needed. Automatically generate invoices tied to each completed walk. Track paid and unpaid invoices per pet or client.</p>
            </div>

            <div className="faq-item">
              <h3>Earnings Dashboard</h3>
              <p>See your weekly recurring income from all recurring walks. View monthly and weekly averages. See projected yearly earnings based on your actual performance. Filter by year to track growth over time.</p>
            </div>

            <div className="faq-item">
              <h3>Pet Sitting</h3>
              <p>Schedule multi-day pet sits with daily rates. Track pet sits alongside your regular walks. Generate invoices for completed pet sitting jobs.</p>
            </div>
          </section>

          {/* Scoop Feature */}
          <section className="faq-section">
            <h2>💚 Scoop (Block Cleaning)</h2>

            <div className="faq-item">
              <h3>What is Scoop?</h3>
              <p>Scoop is a feature that lets dog walkers earn extra income by cleaning blocks while they're already out walking dogs. It's how we keep neighborhoods spotless and help walkers increase their earnings.</p>
              <p><strong>Coming Soon.</strong> The Scoop tab will show a "coming soon" screen until we launch block cleaning features.</p>
            </div>

            <div className="faq-item">
              <h3>How does Scoop work?</h3>
              <p>Dog walkers enable Scoop in their Settings, which gives them access to block cleaning jobs in their area. Clients and businesses can hire walkers through the platform to keep specific blocks clean. Walkers earn additional income while helping their community.</p>
            </div>

            <div className="faq-item">
              <h3>Is Scoop required?</h3>
              <p>No! Scoop is optional. Dog walkers can use Scoopers just for business management (clients, schedules, invoices) and disable Scoop if they prefer to focus only on dog walking.</p>
            </div>

            <div className="faq-item">
              <h3>When will Scoop launch?</h3>
              <p>We'll announce the Scoop launch date closer to the iOS app release in Spring 2026. Dog walking business features and Scoop block cleaning features will both be part of the initial launch.</p>
            </div>
          </section>

          {/* For Clients & Businesses */}
          <section className="faq-section">
            <h2>🏢 For Clients & Businesses</h2>

            <div className="faq-item">
              <h3>How do I hire a dog walker to clean my block?</h3>
              <p>Join the waitlist at scoopersnyc.com. When we launch in Spring 2026, you'll be able to browse vetted dog walkers in your area who offer block cleaning services through Scoop. Book them to keep your block clean on a recurring or one-time basis.</p>
            </div>

            <div className="faq-item">
              <h3>How much does block cleaning cost?</h3>
              <p>Pricing varies by dog walker and block size. Each walker sets their own rates for block cleaning services. You'll see transparent pricing when browsing walkers in your area.</p>
            </div>

            <div className="faq-item">
              <h3>Are dog walkers vetted?</h3>
              <p>Yes. All dog walkers on the Scoopers platform are independent professionals who manage their own businesses. When Scoop launches, we'll provide walker profiles with reviews, experience, and credentials so you can make informed hiring decisions.</p>
            </div>

            <div className="faq-item">
              <h3>Can I hire a dog walker for just my block?</h3>
              <p>Absolutely! Whether you're a building manager, business owner, or resident who wants a cleaner block, you can hire dog walkers through Scoop to clean specific areas on a schedule that works for you.</p>
            </div>
          </section>

          {/* Using the App - For Dog Walkers */}
          <section className="faq-section">
            <h2>📱 Using the App (For Dog Walkers)</h2>

            <div className="faq-item">
              <h3>How do I add a new client?</h3>
              <p>Go to Clients tab → Tap the + button → Enter their name, email, and phone number. You can add pets to that client right away or later.</p>
            </div>

            <div className="faq-item">
              <h3>How do I schedule a walk?</h3>
              <p>Go to Schedule tab → Tap the + button → Select a pet → Choose walk type and duration → Set the time → For recurring walks, select which days of the week.</p>
            </div>

            <div className="faq-item">
              <h3>How do I complete a walk?</h3>
              <p>On your Today screen, tap a walk card → Complete button opens → Confirm the duration (or adjust if needed) → Add upcharge/discount if applicable → Tap Complete. An invoice is automatically generated.</p>
            </div>

            <div className="faq-item">
              <h3>How do I track invoices?</h3>
              <p>Go to any Pet detail screen → Invoices tab → See unpaid and paid invoices → Tap "Mark Paid" when you receive payment. You can also copy invoice details to clipboard or mark all paid at once.</p>
            </div>

            <div className="faq-item">
              <h3>Can I see my earnings?</h3>
              <p>Yes! Go to Profile → See "This Month" stats for walks and earnings → Scroll to "Financial Overview" for weekly recurring income, monthly averages, and projected yearly earnings.</p>
            </div>
          </section>

          {/* Technical */}
          <section className="faq-section">
            <h2>🔧 Technical</h2>

            <div className="faq-item">
              <h3>What platforms does Scoopers support?</h3>
              <p>iOS first, launching Spring 2026. Android coming later in 2026. We're starting with iOS to ensure quality before expanding.</p>
            </div>

            <div className="faq-item">
              <h3>Does my data sync across devices?</h3>
              <p>Yes. Your clients, pets, schedules, and invoices are stored in the cloud and sync automatically. If you get a new phone, just log in and everything is there.</p>
            </div>

            <div className="faq-item">
              <h3>Can I export my data?</h3>
              <p>Yes. You can export invoice data, client lists, and financial reports. We believe you should own your data.</p>
            </div>

            <div className="faq-item">
              <h3>Is my data secure?</h3>
              <p>Yes. All data is encrypted in transit and at rest. We use industry-standard security practices. Your client information is never shared with third parties.</p>
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
          <p className="footer-tagline">Made with 🤍 in Brooklyn</p>
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
