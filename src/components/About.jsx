const TESTFLIGHT_URL = 'https://testflight.apple.com/join/DkeDea5t'

export default function About({ onOpenApp }) {
  return (
    <section className="about" aria-labelledby="about-title">
      <div className="about-layout">
        <div className="about-main">
          <p className="about-kicker">Our story</p>
          <h1 id="about-title" className="about-title">
            Why Cardilyn
          </h1>

          <figure className="about-photo">
            <img
              src="/why-cardilyn.jpg"
              alt="A father holding his son on a park bench"
              width={1024}
              height={768}
            />
          </figure>

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
        </div>

        <aside className="about-sidebar" aria-label="Get the app">
          <div className="about-sidebar-card">
            <img
              src="/cardilyn-icon.png"
              alt=""
              className="about-sidebar-icon"
              width={72}
              height={72}
            />
            <h2 className="about-sidebar-title">Check out the app</h2>
            <p className="about-sidebar-text">
              Try Cardilyn Companion on TestFlight — built to keep families and doctors in the
              loop.
            </p>
            <button type="button" className="companion-cta about-sidebar-btn" onClick={onOpenApp}>
              View Companion
            </button>
            <a
              href={TESTFLIGHT_URL}
              className="about-sidebar-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in TestFlight →
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}
