import AppShowcase from './AppShowcase.jsx'
import FeatureBook from './FeatureBook.jsx'

const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

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

      <FeatureBook />
    </div>
  )
}
