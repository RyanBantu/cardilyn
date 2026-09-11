import { useEffect, useRef, useState } from 'react'
import { SHOWCASE_SCREENS, SCREEN_VIEWS } from './AppMockScreens.jsx'

export default function AppShowcase() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const active = SHOWCASE_SCREENS[index]
  const ActiveScreen = SCREEN_VIEWS[active.id]

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SHOWCASE_SCREENS.length)
    }, 4500)
    return () => window.clearInterval(id)
  }, [paused, index])

  const go = (next) => {
    setPaused(true)
    setIndex((next + SHOWCASE_SCREENS.length) % SHOWCASE_SCREENS.length)
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
          Explore animated product screens — home stats, medications, vitals, doctors, and family
          sharing for Joe&apos;s family.
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
            <div className="phone-frame-screen" key={active.id}>
              <ActiveScreen />
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
              {SHOWCASE_SCREENS.map((screen, i) => (
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
            {SHOWCASE_SCREENS.map((screen, i) => (
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
              {String(index + 1).padStart(2, '0')} /{' '}
              {String(SHOWCASE_SCREENS.length).padStart(2, '0')}
            </p>
            <h3 className="app-showcase-title">{active.title}</h3>
            <p className="app-showcase-caption">{active.caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
