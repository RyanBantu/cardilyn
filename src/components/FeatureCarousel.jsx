import { useEffect, useRef, useState } from 'react'
import { SCREEN_VIEWS } from './AppMockScreens.jsx'

const FEATURES = [
  {
    n: '01',
    title: 'Create your account',
    body: 'Sign up or sign in with email or Google. Cardilyn creates your family health space automatically.',
    path: 'Open Cardilyn → Sign up',
    screen: 'modules',
  },
  {
    n: '02',
    title: 'Invite family',
    body: 'Send an invite by email. They install the app, sign in with that address, and join the same shared space — everyone invited can view and update it.',
    path: 'Home → Family members → Send invite',
    screen: 'family',
  },
  {
    n: '03',
    title: 'Add medications',
    body: 'Save each medicine with dose and times (e.g. 08:00, 20:00). Turn reminders on in Settings if needed, then mark taken or skip when one fires.',
    path: 'Home → Medication reminders → +',
    screen: 'meds',
  },
  {
    n: '04',
    title: 'Log vitals',
    body: 'Pick date, time, and meal timing, then enter BP, glucose, weight, pulse, or temperature — plus symptoms or notes if you want.',
    path: 'Home → Health log → +',
    screen: 'vitals',
  },
  {
    n: '05',
    title: 'Check home stats',
    body: 'See the latest BP, glucose, weight, pulse, steps, and ECG at a glance. Pull to refresh Apple Health when connected.',
    path: 'Home',
    screen: 'home',
  },
  {
    n: '06',
    title: 'Connect Apple Health',
    body: 'Allow heart rate, steps, and ECG, then refresh anytime. ECG needs an Apple Watch — readings sync into your family space.',
    path: 'Home → Apple Health → Connect',
    screen: 'health',
    highlight: true,
  },
  {
    n: '07',
    title: 'Add your doctors',
    body: 'Save name, specialty, contact, and notes once. Scheduling and PDF reports both use this directory.',
    path: 'Home → Doctors & visits → +',
    screen: 'doctors',
  },
  {
    n: '08',
    title: 'Schedule a visit',
    body: 'Open a doctor, pick a time and reminder, then save. Cardilyn reminds you before the appointment.',
    path: 'Doctor → Schedule a visit',
    screen: 'home',
  },
  {
    n: '09',
    title: 'Share a health report',
    body: 'Choose a medication list, vitals log, or complete report, set dates if needed, then share the PDF by Mail, WhatsApp, Files, and more.',
    path: 'Doctors → Share health information',
    screen: 'report',
  },
  {
    n: '10',
    title: 'Stay available offline',
    body: 'Saved family data still shows when you are offline. Changes sync when you are back — a banner appears while disconnected.',
    path: 'Works offline · Syncs later',
    screen: 'offline',
  },
  {
    n: '11',
    title: 'Settings & trust',
    body: 'Toggle medication reminders, open Privacy / Terms / Disclaimer, send feedback, or delete your account.',
    path: 'Home → Settings',
    screen: 'settings',
  },
]

export default function FeatureCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const tabsRef = useRef(null)
  const feature = FEATURES[index]
  const Screen = SCREEN_VIEWS[feature.screen] || SCREEN_VIEWS.home

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % FEATURES.length)
    }, 5200)
    return () => window.clearInterval(id)
  }, [paused, index])

  useEffect(() => {
    const root = tabsRef.current
    if (!root) return
    const active = root.querySelector('[aria-selected="true"]')
    active?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  const go = (next) => {
    setPaused(true)
    setIndex((next + FEATURES.length) % FEATURES.length)
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
    <section className="companion-features" aria-labelledby="features-title">
      <header className="companion-features-head">
        <p className="companion-kicker">Guide</p>
        <h2 id="features-title" className="companion-section-title">
          How to use Cardilyn
        </h2>
        <p className="companion-section-lede">
          Swipe through each step — the phone shows the matching screen as you go.
        </p>
      </header>

      <div
        className="guide-carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="guide-carousel-phone">
          <div className="phone-frame-bezel">
            <div className="phone-frame-island" aria-hidden="true" />
            <div className="phone-frame-screen" key={feature.n + feature.screen}>
              <Screen />
            </div>
          </div>
        </div>

        <div className="guide-carousel-panel">
          <div className="guide-carousel-tabs" ref={tabsRef} role="tablist" aria-label="Guide steps">
            {FEATURES.map((item, i) => (
              <button
                key={item.n}
                type="button"
                role="tab"
                aria-selected={i === index}
                className={'guide-carousel-tab' + (i === index ? ' active' : '')}
                onClick={() => go(i)}
              >
                {item.n}
              </button>
            ))}
          </div>

          <div
            key={feature.n}
            className={'guide-carousel-copy' + (feature.highlight ? ' is-highlight' : '')}
            aria-live="polite"
          >
            <p className="guide-carousel-step">
              Step {feature.n}
              <span aria-hidden="true"> · </span>
              {String(index + 1).padStart(2, '0')} / {String(FEATURES.length).padStart(2, '0')}
            </p>
            <div className="guide-carousel-heading">
              <h3 className="guide-carousel-title">{feature.title}</h3>
              {feature.highlight ? <span className="guide-carousel-badge">Apple Health</span> : null}
            </div>
            <p className="guide-carousel-text">{feature.body}</p>
            <p className="guide-carousel-path">{feature.path}</p>
          </div>

          <div className="guide-carousel-controls">
            <button
              type="button"
              className="guide-nav-btn"
              aria-label="Previous step"
              onClick={() => go(index - 1)}
            >
              ‹
            </button>
            <div className="guide-dots" role="presentation">
              {FEATURES.map((item, i) => (
                <button
                  key={item.n}
                  type="button"
                  aria-label={`Go to step ${item.n}`}
                  className={'guide-dot' + (i === index ? ' active' : '')}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="guide-nav-btn"
              aria-label="Next step"
              onClick={() => go(index + 1)}
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
