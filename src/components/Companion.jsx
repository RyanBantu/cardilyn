const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

export default function Companion({ onLearnHeart }) {
  return (
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
  )
}
