import { Link } from 'react-router-dom'

const SUPPORT_EMAIL = 'bantu.ryan@gmail.com'
const DELETE_MAIL = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
  'Cardilyn account deletion request',
)}&body=${encodeURIComponent(
  'Please delete my Cardilyn account and associated data.\n\nAccount email: \n',
)}`

/**
 * Public account-deletion instructions for Google Play / App Store Data safety.
 */
export default function DeleteAccount() {
  return (
    <div className="privacy-page">
      <header className="privacy-top">
        <Link to="/" className="privacy-brand" aria-label="Cardilyn home">
          <img src="/cardilyn-icon.png" alt="" width={36} height={36} />
          <span>Cardilyn</span>
        </Link>
        <Link to="/" className="privacy-back">
          ← Home
        </Link>
      </header>

      <main className="privacy-main">
        <h1>Delete your Cardilyn account</h1>
        <p className="privacy-meta">
          Last updated: September 25, 2026 · Contact:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>

        <section className="privacy-card">
          <h2>Delete in the app (fastest)</h2>
          <ol>
            <li>Open Cardilyn and sign in with the account you want to remove</li>
            <li>Go to <strong>Settings</strong></li>
            <li>Tap <strong>Delete account</strong> and confirm</li>
          </ol>
          <p>
            If Firebase asks you to re-authenticate, sign out, sign back in, then try Delete
            account again.
          </p>
        </section>

        <section className="privacy-card">
          <h2>Request deletion by email</h2>
          <p>
            If you cannot open the app, email{' '}
            <a href={DELETE_MAIL}>{SUPPORT_EMAIL}</a> from the address on your Cardilyn
            account with the subject “Cardilyn account deletion request.”
          </p>
          <p>
            We will verify ownership and delete your account and associated data within{' '}
            <strong>30 days</strong> of a verified request.
          </p>
        </section>

        <section className="privacy-card">
          <h2>What is deleted</h2>
          <ul>
            <li>Your Firebase Authentication account</li>
            <li>
              Your Cardilyn profile and family membership data tied to that account
            </li>
            <li>
              Medications, logs, vitals, appointments, notes, and other health records
              stored for your account / family space (when you are the owner and no other
              members remain)
            </li>
            <li>Doctor verification materials you submitted under that account</li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>What is not deleted automatically</h2>
          <ul>
            <li>
              Health data that remains only on your device in Apple Health or Health
              Connect (revoke access in system settings if you want)
            </li>
            <li>
              Reports or files you already shared outside Cardilyn (for example Email or
              WhatsApp)
            </li>
            <li>
              Limited security or abuse logs that we may retain for a short period where
              required by law
            </li>
          </ul>
        </section>

        <section className="privacy-card">
          <h2>Family owners</h2>
          <p>
            If you own a family with other members, remove or transfer members first (or
            ask them to leave), then delete your account. Otherwise deletion may be blocked
            until the family space is cleared.
          </p>
        </section>

        <p className="privacy-footer-note">
          See also our{' '}
          <Link to="/privacy/">Privacy policy</Link>. Questions:{' '}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
        </p>
      </main>
    </div>
  )
}
