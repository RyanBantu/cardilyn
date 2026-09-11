import { useCallback, useEffect, useRef, useState } from 'react'

const FLIP_MS = 820

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

const PAGES = [
  { id: 'cover', kind: 'cover' },
  ...FEATURES.map((feature) => ({ id: feature.n, kind: 'feature', ...feature })),
  { id: 'end', kind: 'end' },
]

function CoverFace({ onOpen }) {
  return (
    <div className="book-cover">
      <div className="book-cover-ornament" aria-hidden="true" />
      <p className="book-cover-kicker">Cardilyn</p>
      <h3 className="book-cover-title">How to use Cardilyn</h3>
      <p className="book-cover-sub">
        A short guide — from signup to sharing reports with the people who care for you.
      </p>
      <div className="book-cover-meta">
        <span>{FEATURES.length} steps</span>
        <span aria-hidden="true">·</span>
        <span>Tap to open</span>
      </div>
      <button type="button" className="book-cover-open" onClick={onOpen}>
        Open the guide
      </button>
    </div>
  )
}

function FeatureFace({ feature }) {
  return (
    <div className={'book-feature' + (feature.highlight ? ' book-feature-highlight' : '')}>
      <div className="book-feature-top">
        <span className="book-feature-num">{feature.n}</span>
        {feature.highlight ? <span className="book-feature-badge">Apple Health</span> : null}
      </div>
      <h3 className="book-feature-title">{feature.title}</h3>
      <p className="book-feature-text">{feature.body}</p>
      {feature.path ? <p className="book-feature-path">{feature.path}</p> : null}
    </div>
  )
}

function EndFace({ onRestart }) {
  return (
    <div className="book-end">
      <p className="book-end-kicker">That&apos;s the guide</p>
      <h3 className="book-end-title">Keep care close</h3>
      <p className="book-end-text">
        Cardilyn helps families keep medications, vitals, doctors, and visits in one place — with
        Apple Health and shareable reports for clinicians. Invite the people you trust, log what
        matters, and walk into appointments prepared.
      </p>
      <button type="button" className="book-end-restart" onClick={onRestart}>
        Back to cover
      </button>
    </div>
  )
}

function PageFace({ page, onOpen, onRestart }) {
  if (page.kind === 'cover') return <CoverFace onOpen={onOpen} />
  if (page.kind === 'end') return <EndFace onRestart={onRestart} />
  return <FeatureFace feature={page} />
}

export default function FeatureBook() {
  const [turned, setTurned] = useState(0)
  const [instant, setInstant] = useState(false)
  const [lifted, setLifted] = useState(null)
  const busy = useRef(false)
  const touchX = useRef(null)
  const turnedRef = useRef(0)
  const reduceMotion = useRef(false)
  const liftTimer = useRef(0)

  turnedRef.current = turned

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    return () => window.clearTimeout(liftTimer.current)
  }, [])

  const current = Math.min(turned, PAGES.length - 1)
  const atStart = turned <= 0
  const atEnd = turned >= PAGES.length - 1
  const label =
    PAGES[current].kind === 'cover'
      ? 'Cover'
      : PAGES[current].kind === 'end'
        ? 'Closing'
        : `${PAGES[current].n} · ${PAGES[current].title}`

  const unlock = useCallback(() => {
    const wait = reduceMotion.current ? 0 : FLIP_MS
    window.setTimeout(() => {
      busy.current = false
    }, wait)
  }, [])

  const liftDuring = useCallback((pageIndex) => {
    window.clearTimeout(liftTimer.current)
    if (reduceMotion.current) {
      setLifted(null)
      return
    }
    setLifted(pageIndex)
    liftTimer.current = window.setTimeout(() => setLifted(null), FLIP_MS)
  }, [])

  const flipNext = useCallback(() => {
    if (busy.current || turnedRef.current >= PAGES.length - 1) return
    busy.current = true
    liftDuring(turnedRef.current)
    setTurned((t) => Math.min(t + 1, PAGES.length - 1))
    unlock()
  }, [liftDuring, unlock])

  const flipPrev = useCallback(() => {
    if (busy.current || turnedRef.current <= 0) return
    busy.current = true
    liftDuring(turnedRef.current - 1)
    setTurned((t) => Math.max(t - 1, 0))
    unlock()
  }, [liftDuring, unlock])

  const restart = useCallback(() => {
    busy.current = true
    window.clearTimeout(liftTimer.current)
    setLifted(null)
    setInstant(true)
    setTurned(0)
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        setInstant(false)
        busy.current = false
      })
    })
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        flipNext()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        flipPrev()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [flipNext, flipPrev])

  const onTouchStart = (e) => {
    touchX.current = e.changedTouches[0].clientX
  }

  const onTouchEnd = (e) => {
    if (touchX.current == null) return
    const dx = e.changedTouches[0].clientX - touchX.current
    touchX.current = null
    if (Math.abs(dx) < 48) return
    if (dx < 0) flipNext()
    else flipPrev()
  }

  return (
    <section className="companion-features" aria-labelledby="features-title">
      <header className="companion-features-head">
        <p className="companion-kicker">Guide</p>
        <h2 id="features-title" className="companion-section-title">
          How to use Cardilyn
        </h2>
        <p className="companion-section-lede">
          Open the book and flip through each step — swipe, use the arrows, or press ← →.
        </p>
      </header>

      <div className="feature-book" aria-live="polite">
        <div
          className="feature-book-stage"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className={'feature-book-shell' + (instant ? ' is-instant' : '')}>
            <div className="feature-book-spine" aria-hidden="true" />
            <div className="feature-book-stack">
              {PAGES.map((page, i) => {
                const isFlipped = i < turned
                const z = lifted === i ? 80 : isFlipped ? i + 1 : PAGES.length - i
                return (
                  <div
                    key={page.id}
                    className={
                      'book-page' +
                      (isFlipped ? ' is-flipped' : '') +
                      (page.kind === 'cover' ? ' is-cover' : '')
                    }
                    style={{ zIndex: z }}
                    aria-hidden={i !== current}
                  >
                    <div className="book-page-face book-page-front">
                      <PageFace page={page} onOpen={flipNext} onRestart={restart} />
                      {page.kind === 'feature' ? (
                        <span className="book-page-folio" aria-hidden="true">
                          {page.n}
                        </span>
                      ) : null}
                    </div>
                    <div className="book-page-face book-page-back" aria-hidden="true">
                      <div className="book-page-verso" />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="feature-book-controls">
          <button
            type="button"
            className="book-nav-btn"
            onClick={flipPrev}
            disabled={atStart}
            aria-label="Previous page"
          >
            ‹
          </button>
          <p className="book-nav-status">
            <span className="book-nav-label">{label}</span>
            <span className="book-nav-count">
              {String(current + 1).padStart(2, '0')} / {String(PAGES.length).padStart(2, '0')}
            </span>
          </p>
          <button
            type="button"
            className="book-nav-btn"
            onClick={flipNext}
            disabled={atEnd}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  )
}
