const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

const FEATURES = [
  {
    n: '01',
    title: 'Create your account',
    body: "Open Cardilyn → sign up or sign in with email or Google. You'll get your own family health space automatically.",
  },
  {
    n: '02',
    title: 'Invite family',
    body: 'Home → Family members → enter their email → send invite. They install Cardilyn, sign in with that email, and join the shared space. Everyone invited can view and update the shared data.',
  },
  {
    n: '03',
    title: 'Add medications',
    body: "Home → Medication reminders → + → name, dose, times (e.g. 08:00, 20:00) → save. Turn reminders on in Settings if needed. When a reminder fires, mark taken / skip as you go.",
  },
  {
    n: '04',
    title: 'Log vitals',
    body: 'Home → Health log → + → pick date/time → choose meal timing (pre/post breakfast, lunch, dinner) → enter BP, glucose, weight, pulse, temp → add symptoms/notes → save.',
  },
  {
    n: '05',
    title: 'Check home stats',
    body: 'On Home, see latest BP, glucose, weight, pulse, steps, and ECG at a glance. Pull to refresh Apple Health when connected.',
  },
  {
    n: '06',
    title: 'Connect Apple Health',
    body: 'Home → Apple Health → Connect Apple Health → allow heart rate, steps, and ECG. Tap refresh anytime to pull the latest readings into your family space. ECG needs an Apple Watch.',
    highlight: true,
  },
  {
    n: '07',
    title: 'Add your doctors',
    body: 'Home → Doctors & visits → + → name, specialty, contact, notes → save.',
  },
  {
    n: '08',
    title: 'Schedule a visit',
    body: "Open a doctor → Schedule a visit (or use Appointments) → pick time and reminder → save. You'll get a visit reminder before the appointment.",
  },
  {
    n: '09',
    title: 'Share a health report',
    body: 'Doctors → open a clinician → Share health information → choose Medication list, Vitals log, or Complete report → set dates if needed → Share with [doctor]. Send the PDF by Mail, WhatsApp, Files, etc.',
  },
  {
    n: '10',
    title: 'Stay available offline',
    body: "If you're offline, Cardilyn still shows saved family data. Changes sync when you're back online (banner appears when offline).",
  },
  {
    n: '11',
    title: 'Settings & trust',
    body: 'Home → gear → medication reminders on/off, Privacy / Terms / Disclaimer, send feedback, or delete your account.',
  },
]

function AppleWatchSync() {
  return (
    <div className="watch-sync" aria-label="Animation of Apple Watch syncing health data to Cardilyn">
      <div className="watch-sync-stage">
        <div className="watch-device" aria-hidden="true">
          <div className="watch-band watch-band-top" />
          <div className="watch-case">
            <div className="watch-crown" />
            <div className="watch-screen">
              <div className="watch-face">
                <p className="watch-face-label">Heart Rate</p>
                <p className="watch-face-bpm">
                  <span className="watch-bpm-num">72</span>
                  <span className="watch-bpm-unit">BPM</span>
                </p>
                <svg className="watch-ecg" viewBox="0 0 120 36" preserveAspectRatio="none">
                  <path
                    className="watch-ecg-path"
                    d="M0,22 L18,22 L24,22 L28,8 L32,30 L36,14 L40,22 L58,22 L64,22 L68,6 L72,32 L76,16 L80,22 L120,22"
                    fill="none"
                    stroke="#FF2D55"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="watch-sync-pulse" />
              </div>
            </div>
          </div>
          <div className="watch-band watch-band-bottom" />
        </div>

        <div className="watch-sync-beam" aria-hidden="true">
          <span className="watch-sync-dot" />
          <span className="watch-sync-dot" />
          <span className="watch-sync-dot" />
        </div>

        <div className="phone-device" aria-hidden="true">
          <div className="phone-notch" />
          <div className="phone-screen">
            <p className="phone-app-name">Cardilyn</p>
            <p className="phone-sync-status">Syncing Apple Health…</p>
            <div className="phone-metrics">
              <div className="phone-metric phone-metric-hr">
                <span className="phone-metric-label">Heart</span>
                <span className="phone-metric-value">72</span>
              </div>
              <div className="phone-metric phone-metric-steps">
                <span className="phone-metric-label">Steps</span>
                <span className="phone-metric-value">8,420</span>
              </div>
              <div className="phone-metric phone-metric-ecg">
                <span className="phone-metric-label">ECG</span>
                <span className="phone-metric-value">Sinus</span>
              </div>
            </div>
            <div className="phone-progress">
              <div className="phone-progress-bar" />
            </div>
          </div>
        </div>
      </div>
      <p className="watch-sync-caption">
        Apple Watch readings flow into Cardilyn through Apple Health — heart rate, steps, and ECG.
      </p>
    </div>
  )
}

export default function Companion({ onLearnHeart }) {
  return (
    <div className="companion-page">
      <section className="companion" aria-labelledby="companion-title">
        <div className="companion-card">
          <a
            href={TESTFLIGHT_URL}
            className="companion-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join Cardilyn on TestFlight"
          >
            <img
              src="/cardilyn-icon.png"
              alt="Cardilyn app icon"
              className="companion-icon"
              width={160}
              height={160}
            />
          </a>
          <p className="companion-kicker">iOS beta</p>
          <h1 id="companion-title" className="companion-title">
            Cardilyn Companion
          </h1>
          <p className="companion-lede">
            A personal companion for learning about your heart. Join the TestFlight beta to try
            the iOS app.
          </p>
          <div className="companion-actions">
            <a
              href={TESTFLIGHT_URL}
              className="companion-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in TestFlight
            </a>
            <button type="button" className="companion-secondary" onClick={onLearnHeart}>
              Learn more about the Heart
            </button>
          </div>
          <p className="companion-note">
            Requires an iPhone or iPad with the{' '}
            <a
              href="https://apps.apple.com/app/testflight/id899247664"
              target="_blank"
              rel="noopener noreferrer"
              className="email-link"
            >
              TestFlight
            </a>{' '}
            app installed.
          </p>
        </div>
      </section>

      <section className="companion-sync" aria-labelledby="sync-title">
        <div className="companion-sync-copy">
          <p className="companion-kicker">Apple Health</p>
          <h2 id="sync-title" className="companion-section-title">
            Sync from your Apple Watch
          </h2>
          <p className="companion-section-lede">
            Connect Apple Health once, then heart rate, steps, and ECG flow into your family space —
            ready to share with the people who care for you.
          </p>
        </div>
        <AppleWatchSync />
      </section>

      <section className="companion-features" aria-labelledby="features-title">
        <header className="companion-features-head">
          <p className="companion-kicker">Guide</p>
          <h2 id="features-title" className="companion-section-title">
            Features + how to use them
          </h2>
        </header>

        <ol className="feature-list">
          {FEATURES.map((feature) => (
            <li
              key={feature.n}
              className={'feature-item' + (feature.highlight ? ' feature-item-highlight' : '')}
            >
              <span className="feature-num" aria-hidden="true">
                {feature.n}
              </span>
              <div className="feature-body">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="companion-caption">
          <p>
            Cardilyn helps families keep medications, vitals, doctors, and visits in one place —
            with Apple Health and shareable reports for clinicians. Invite the people you trust,
            log what matters, and walk into appointments prepared.
          </p>
        </blockquote>
      </section>
    </div>
  )
}
