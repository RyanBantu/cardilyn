import { useEffect, useRef, useState } from 'react'

const SCREENS = [
  {
    id: 'home',
    label: 'Home',
    title: 'Family health at a glance',
    caption:
      "One home screen for BP, glucose, weight, pulse — and upcoming doctor visits for Joe's family.",
  },
  {
    id: 'meds',
    label: 'Medications',
    title: 'Medication reminders',
    caption: 'Medication routines with dose, timing, and live sync across your family.',
  },
  {
    id: 'vitals',
    label: 'Vitals',
    title: 'Health log',
    caption:
      'Log blood pressure, glucose, weight, symptoms & notes in about 30 seconds.',
  },
  {
    id: 'doctors',
    label: 'Doctors',
    title: 'Care team',
    caption:
      'Save your care team once — scheduling and PDF reports use the same directory.',
  },
  {
    id: 'family',
    label: 'Family',
    title: 'Family sharing',
    caption:
      'Invite people you trust. Everyone sees the same medications, vitals, doctors & reports.',
  },
  {
    id: 'modules',
    label: 'Modules',
    title: 'Everything in one place',
    caption: 'Medications · Health log · Doctors & visits · Family — all in one app.',
  },
]

function MockChrome({ title, showBack }) {
  return (
    <div className="mock-chrome">
      <div className="mock-status">
        <span>9:41</span>
        <span className="mock-status-icons" aria-hidden="true">
          ▮▮▮  ▯
        </span>
      </div>
      <div className="mock-nav">
        {showBack ? <span className="mock-back">‹</span> : <span className="mock-back-spacer" />}
        <span className="mock-nav-title">{title}</span>
        <span className="mock-back-spacer" />
      </div>
    </div>
  )
}

function ScreenHome() {
  return (
    <div className="mock-screen mock-home">
      <MockChrome title="Cardilyn" />
      <div className="mock-body">
        <p className="mock-eyebrow">Cardilyn</p>
        <h4 className="mock-h1">Health signal board</h4>
        <p className="mock-sub">Joe&apos;s family</p>

        <p className="mock-section-label">Signal board</p>
        <div className="mock-vitals-grid">
          {[
            { name: 'BP', unit: 'mmHg', value: '118/76', tone: 'peach' },
            { name: 'Glucose', unit: 'mg/dL', value: '102', tone: 'mint' },
            { name: 'Weight', unit: 'kg', value: '72.4', tone: 'sand' },
            { name: 'Pulse', unit: 'bpm', value: '68', tone: 'sky' },
          ].map((v) => (
            <div key={v.name} className={`mock-vital mock-vital-${v.tone}`}>
              <span className="mock-vital-name">{v.name}</span>
              <span className="mock-vital-value">{v.value}</span>
              <span className="mock-vital-unit">{v.unit}</span>
            </div>
          ))}
        </div>

        <div className="mock-row-label">
          <span className="mock-section-label">Upcoming visits</span>
          <span className="mock-link">+ Schedule</span>
        </div>
        <div className="mock-card mock-visit">
          <strong>Dr. Satish Kumar</strong>
          <span>Tomorrow · 10:30 AM</span>
          <div className="mock-cta-sm">Open visit details</div>
        </div>
      </div>
    </div>
  )
}

function ScreenMeds() {
  return (
    <div className="mock-screen mock-meds">
      <MockChrome title="Medications" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Medication routine</h4>
        <p className="mock-sub">2 medications synced live with Joe&apos;s family</p>

        <div className="mock-card mock-med">
          <div className="mock-med-top">
            <span className="mock-med-icon" aria-hidden="true" />
            <div>
              <strong>Daily Heart Support</strong>
              <span>75 mg · Oral · After food</span>
            </div>
          </div>
          <div className="mock-chips">
            <span>1-0-1</span>
            <span>8:00 AM</span>
            <span>8:00 PM</span>
          </div>
        </div>

        <div className="mock-card mock-med">
          <div className="mock-med-top">
            <span className="mock-med-icon" aria-hidden="true" />
            <div>
              <strong>Evening Care Capsule</strong>
              <span>40 mg · Oral · After food</span>
            </div>
          </div>
          <div className="mock-chips">
            <span>0-0-1</span>
            <span>7:00 PM</span>
          </div>
        </div>

        <div className="mock-fab">+ Add</div>
      </div>
    </div>
  )
}

function ScreenVitals() {
  return (
    <div className="mock-screen mock-vitals">
      <MockChrome title="Vitals & diagnostics" showBack />
      <div className="mock-body mock-body-center">
        <div className="mock-pulse-ring" aria-hidden="true">
          <span className="mock-pulse-dot" />
        </div>
        <h4 className="mock-h1">Start your health log</h4>
        <p className="mock-sub">
          Blood pressure, glucose, weight, symptoms, and notes take about 30 seconds to record.
        </p>
        <div className="mock-cta">+ Log first reading</div>
        <div className="mock-log-preview">
          <div className="mock-log-row">
            <span>Today · Pre-breakfast</span>
            <strong>118/76</strong>
          </div>
          <div className="mock-log-row">
            <span>Yesterday · Evening</span>
            <strong>102 mg/dL</strong>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenDoctors() {
  return (
    <div className="mock-screen mock-doctors">
      <MockChrome title="Doctors" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Your care team</h4>
        <p className="mock-sub">Save clinicians once here. Scheduling and PDF reports both pick from this directory.</p>
        <div className="mock-card mock-doc">
          <span className="mock-doc-icon" aria-hidden="true" />
          <div>
            <strong>Dr. Satish Kumar</strong>
            <span>Cardiologist</span>
          </div>
          <span className="mock-chevron">›</span>
        </div>
        <div className="mock-card mock-doc mock-doc-ghost">
          <span className="mock-doc-icon" aria-hidden="true" />
          <div>
            <strong>Family physician</strong>
            <span>Add next clinician</span>
          </div>
          <span className="mock-chevron">›</span>
        </div>
        <div className="mock-fab">+ Add doctor</div>
      </div>
    </div>
  )
}

function ScreenFamily() {
  return (
    <div className="mock-screen mock-family">
      <MockChrome title="Family" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Joe&apos;s family</h4>
        <p className="mock-sub">
          Shared family health space. Invite only people you trust.
        </p>
        <div className="mock-warn">
          There is no private personal vault inside a family. Anything saved here is visible to all
          members.
        </div>
        <p className="mock-section-label">Signed in as</p>
        <div className="mock-card">
          <strong>joe@gmail.com</strong>
          <span>Family owner</span>
        </div>
        <p className="mock-section-label">Members</p>
        <div className="mock-card mock-member">
          <span className="mock-avatar">J</span>
          <div>
            <strong>Joe</strong>
            <span>joe@gmail.com · Owner</span>
          </div>
        </div>
        <div className="mock-cta">Send invite</div>
      </div>
    </div>
  )
}

function ScreenModules() {
  const modules = [
    { title: 'Medication reminders', desc: 'Schedules, taken doses, skips, and snoozes.', tone: 'blue' },
    { title: 'Health log', desc: 'Blood pressure, glucose, weight, and notes.', tone: 'coral' },
    { title: 'Doctors & reports', desc: 'Contacts and clear, shareable PDF summaries.', tone: 'teal' },
    { title: 'Family members', desc: 'Invite trusted people to this shared health space.', tone: 'gray' },
  ]
  return (
    <div className="mock-screen mock-modules">
      <MockChrome title="Cardilyn" />
      <div className="mock-body">
        <div className="mock-cta">Schedule a doctor visit</div>
        <p className="mock-section-label">Modules</p>
        {modules.map((m) => (
          <div key={m.title} className="mock-card mock-module">
            <span className={`mock-module-icon mock-module-${m.tone}`} aria-hidden="true" />
            <div>
              <strong>{m.title}</strong>
              <span>{m.desc}</span>
            </div>
            <span className="mock-chevron">›</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const SCREEN_VIEWS = {
  home: ScreenHome,
  meds: ScreenMeds,
  vitals: ScreenVitals,
  doctors: ScreenDoctors,
  family: ScreenFamily,
  modules: ScreenModules,
}

export default function AppShowcase() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchX = useRef(null)
  const active = SCREENS[index]
  const ActiveScreen = SCREEN_VIEWS[active.id]

  useEffect(() => {
    if (paused) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SCREENS.length)
    }, 4500)
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
