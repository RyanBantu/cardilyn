const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

export default function About({ onOpenApp, onLearnHeart }) {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about-hero">
        <div className="about-hero-copy">
          <p className="about-brand">Cardilyn</p>
          <h1 id="about-title" className="about-title">
            Why Cardilyn
          </h1>
          <p className="about-lead">
            Built after my dad&apos;s angioplasty — a companion to help families stay close to the
            people who care for them.
          </p>
          <div className="about-hero-actions">
            <button type="button" className="companion-cta" onClick={onOpenApp}>
              Check out the app
            </button>
            <a
              href={TESTFLIGHT_URL}
              className="about-hero-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open TestFlight
            </a>
          </div>
        </div>

        <figure className="about-hero-photo">
          <img
            src="/why-cardilyn.jpg"
            alt="A father holding his son on a park bench"
            width={1024}
            height={768}
          />
        </figure>
      </div>

      <div className="about-body">
        <article className="about-story">
          <h2 className="about-story-label">Our story</h2>
          <div className="about-prose">
            <p>
              Recently, my dad had to go through an angioplasty. It scared me. I couldn&apos;t
              imagine a life without him in it.
            </p>
            <p>
              Most of us care for our parents, yet care very little about them. We get so busy
              with life that we forget they need attention too. As they grow older, we need a
              little more patience, a little more understanding, and a lot more attention paid
              to their health.
            </p>
            <p>Here&apos;s to all the responsible kids and parents.</p>
            <p>
              Cardilyn is an assistant, no AI, no gimmicks. Just something that helps you and
              your family stay in touch with your doctors and keep them updated on your health,
              schedule, and everything in between.
            </p>
            <p>
              Unlike other health apps, this isn&apos;t just a tracker. It&apos;s a friend who
              reminds you about your medication, shows how you&apos;re doing, and, most
              importantly, acts as a one-stop platform to keep the people who care about you,
              and the doctors who care for you, in the loop.
            </p>
            <p>This is our way of protecting our superheroes.</p>
            <p className="about-signoff">— A son who loves his dad very much.</p>
          </div>
          {onLearnHeart ? (
            <button type="button" className="about-story-cta" onClick={onLearnHeart}>
              Learn more about the Heart →
            </button>
          ) : null}
        </article>

        <aside className="about-rail" aria-label="Get the app">
          <div className="about-rail-inner">
            <img
              src="/cardilyn-icon.png"
              alt=""
              className="about-rail-icon"
              width={64}
              height={64}
            />
            <p className="about-rail-kicker">iOS beta</p>
            <h2 className="about-rail-title">Check out the app</h2>
            <p className="about-rail-text">
              Cardilyn Companion keeps families and doctors in the loop — medication reminders,
              health updates, and shared care in one place.
            </p>
            <button type="button" className="companion-cta about-rail-btn" onClick={onOpenApp}>
              View Companion
            </button>
            <a
              href={TESTFLIGHT_URL}
              className="about-rail-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join on TestFlight →
            </a>
          </div>
        </aside>
      </div>

      <aside className="about-thanks" aria-labelledby="thanks-title">
        <div className="about-thanks-copy">
          <h2 id="thanks-title" className="about-thanks-title">
            A special thanks
          </h2>
          <p>
            To <strong>Dr. Rentapalla Satish Kumar</strong>, General Physician and Cardiologist,
            for all the support in helping restore my dad&apos;s health. This app exists because
            of care like his.
          </p>
          <ul className="about-thanks-meta">
            <li>MBBS, MD (PGIMER, Chandigarh), DM Cardiology (AIIMS)</li>
            <li>Ex Assistant Professor (AIIMS)</li>
            <li>Consultant Interventional Cardiology · Medicover Hospitals, Karimnagar</li>
          </ul>
          <p className="about-thanks-contact">
            <a href="tel:+919550829311" className="email-link">
              +91 95508 29311
            </a>
            {' · '}
            <a href="mailto:mh.knr@medicoverhospitals.in" className="email-link">
              mh.knr@medicoverhospitals.in
            </a>
          </p>
        </div>
        <div className="about-thanks-media">
          <figure className="about-thanks-photo">
            <img
              src="/dr-thanks.jpg"
              alt="Dr. Rentapalla Satish Kumar with a patient at Medicover Hospitals"
              width={1024}
              height={711}
            />
          </figure>
          <figure className="about-thanks-card">
            <img
              src="/dr-card.jpg"
              alt="Business card for Dr. Rentapalla Sathish Kumar, Medicover Hospitals Karimnagar"
              width={1024}
              height={616}
            />
          </figure>
        </div>
      </aside>
    </section>
  )
}
