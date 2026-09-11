import AppShowcase from './AppShowcase.jsx'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

const FEATURES = [
  {
    n: '01',
    title: 'Create your account',
    body: 'Sign up or sign in with email or Google. Cardilyn creates your family health space automatically.',
    path: 'Open Cardilyn → Sign up',
  },
  {
    n: '02',
    title: 'Invite family',
    body: 'Send an invite by email. They install the app, sign in with that address, and join the same shared space — everyone invited can view and update it.',
    path: 'Home → Family members → Send invite',
  },
  {
    n: '03',
    title: 'Add medications',
    body: 'Save each medicine with dose and times (e.g. 08:00, 20:00). Turn reminders on in Settings if needed, then mark taken or skip when one fires.',
    path: 'Home → Medication reminders → +',
  },
  {
    n: '04',
    title: 'Log vitals',
    body: 'Pick date, time, and meal timing, then enter BP, glucose, weight, pulse, or temperature — plus symptoms or notes if you want.',
    path: 'Home → Health log → +',
  },
  {
    n: '05',
    title: 'Check home stats',
    body: 'See the latest BP, glucose, weight, pulse, steps, and ECG at a glance. Pull to refresh Apple Health when connected.',
    path: 'Home',
  },
  {
    n: '06',
    title: 'Connect Apple Health',
    body: 'Allow heart rate, steps, and ECG, then refresh anytime. ECG needs an Apple Watch — readings sync into your family space.',
    path: 'Home → Apple Health → Connect',
    highlight: true,
  },
  {
    n: '07',
    title: 'Add your doctors',
    body: 'Save name, specialty, contact, and notes once. Scheduling and PDF reports both use this directory.',
    path: 'Home → Doctors & visits → +',
  },
  {
    n: '08',
    title: 'Schedule a visit',
    body: 'Open a doctor, pick a time and reminder, then save. Cardilyn reminds you before the appointment.',
    path: 'Doctor → Schedule a visit',
  },
  {
    n: '09',
    title: 'Share a health report',
    body: 'Choose a medication list, vitals log, or complete report, set dates if needed, then share the PDF by Mail, WhatsApp, Files, and more.',
    path: 'Doctors → Share health information',
  },
  {
    n: '10',
    title: 'Stay available offline',
    body: 'Saved family data still shows when you are offline. Changes sync when you are back — a banner appears while disconnected.',
    path: 'Works offline · Syncs later',
  },
  {
    n: '11',
    title: 'Settings & trust',
    body: 'Toggle medication reminders, open Privacy / Terms / Disclaimer, send feedback, or delete your account.',
    path: 'Home → Settings',
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

      <AppShowcase />

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
          <p className="companion-section-lede">
            Eleven steps from signup to sharing reports — follow the path under each one.
          </p>
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
                <div className="feature-heading">
                  <h3 className="feature-title">{feature.title}</h3>
                  {feature.highlight ? (
                    <span className="feature-badge">Apple Health</span>
                  ) : null}
                </div>
                <p className="feature-text">{feature.body}</p>
                {feature.path ? <p className="feature-path">{feature.path}</p> : null}
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
