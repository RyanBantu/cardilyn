import { useEffect, useRef, useState } from 'react'

const SCREENS = [
  {
    id: 'home',
    label: 'Home',
    src: '/screens/01_home_family_health.jpg',
    title: 'Family health at a glance',
    caption:
      'One home screen for BP, glucose, weight, pulse — and upcoming doctor visits.',
  },
  {
    id: 'meds',
    label: 'Medications',
    src: '/screens/02_medication_reminders.jpg',
    title: 'Medication reminders',
    caption:
      'Medication routines with dose, timing, and live sync across your family.',
  },
  {
    id: 'vitals',
    label: 'Vitals',
    src: '/screens/03_vitals_diagnostics.jpg',
    title: 'Health log',
    caption:
      'Log blood pressure, glucose, weight, symptoms & notes in about 30 seconds.',
  },
  {
    id: 'doctors',
    label: 'Doctors',
    src: '/screens/04_care_team_doctors.jpg',
    title: 'Care team',
    caption:
      'Save your care team once — scheduling and PDF reports use the same directory.',
  },
  {
    id: 'family',
    label: 'Family',
    src: '/screens/05_family_sharing.jpg',
    title: 'Family sharing',
    caption:
      'Invite people you trust. Everyone sees the same medications, vitals, doctors & reports.',
  },
  {
    id: 'modules',
    label: 'Modules',
    src: '/screens/06_all_modules.jpg',
    title: 'Everything in one place',
    caption: 'Medications · Health log · Doctors & visits · Family — all in one app.',
  },
]

export default function AppShowcase() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const active = SCREENS[index]

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SCREENS.length)
    }, 4200)
    return () => window.clearInterval(id)
  }, [paused, index])

  const go = (next) => {
    setPaused(true)
    setIndex((next + SCREENS.length) % SCREENS.length)
  }

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) < 40) return
    if (dx < 0) go(index + 1)
    else go(index - 1)
  }

  return (
    <section className="app-showcase" aria-labelledby="showcase-title">
      <header className="app-showcase-head">
        <p className="companion-kicker">Inside the app</p>
        <h2 id="showcase-title" className="companion-section-title">
          See Cardilyn in action
        </h2>
        <p className="companion-section-lede">
          Swipe or tap through real screens — home stats, medications, vitals, doctors, and
          family sharing.
        </p>
      </header>

      <div className="app-showcase-layout">
        <div
          className="phone-frame"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="phone-frame-bezel">
            <div className="phone-frame-island" aria-hidden="true" />
            <div className="phone-frame-screen">
              {SCREENS.map((screen, i) => (
                <img
                  key={screen.id}
                  src={screen.src}
                  alt={`${screen.title} screen in Cardilyn`}
                  className={
                    'phone-frame-img' + (i === index ? ' phone-frame-img-active' : '')
                  }
                  width={434}
                  height={900}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}
            </div>
          </div>
          <div className="phone-frame-controls">
            <button
              type="button"
              className="phone-nav-btn"
              aria-label="Previous screen"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <div className="phone-dots" role="tablist" aria-label="App screens">
              {SCREENS.map((screen, i) => (
                <button
                  key={screen.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={screen.label}
                  className={'phone-dot' + (i === index ? ' active' : '')}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="phone-nav-btn"
              aria-label="Next screen"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </div>
        </div>

        <div className="app-showcase-side">
          <div className="app-showcase-tabs" role="tablist" aria-label="Features">
            {SCREENS.map((screen, i) => (
              <button
                key={screen.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={'app-showcase-tab' + (i === index ? ' active' : '')}
                onClick={() => go(i)}
              >
                {screen.label}
              </button>
            ))}
          </div>
          <div className="app-showcase-copy" aria-live="polite">
            <p className="app-showcase-step">
              {String(index + 1).padStart(2, '0')} / {String(SCREENS.length).padStart(2, '0')}
            </p>
            <h3 className="app-showcase-title">{active.title}</h3>
            <p className="app-showcase-caption">{active.caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
