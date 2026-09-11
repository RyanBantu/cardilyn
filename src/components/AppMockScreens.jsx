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

export function ScreenHome() {
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

export function ScreenMeds() {
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

export function ScreenVitals() {
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

export function ScreenDoctors() {
  return (
    <div className="mock-screen mock-doctors">
      <MockChrome title="Doctors" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Your care team</h4>
        <p className="mock-sub">
          Save clinicians once here. Scheduling and PDF reports both pick from this directory.
        </p>
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

export function ScreenFamily() {
  return (
    <div className="mock-screen mock-family">
      <MockChrome title="Family" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Joe&apos;s family</h4>
        <p className="mock-sub">Shared family health space. Invite only people you trust.</p>
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

export function ScreenModules() {
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

export function ScreenHealth() {
  return (
    <div className="mock-screen mock-health">
      <MockChrome title="Apple Health" showBack />
      <div className="mock-body mock-body-center">
        <div className="mock-health-watch" aria-hidden="true">
          <span className="mock-health-bpm">72</span>
          <span className="mock-health-unit">BPM</span>
        </div>
        <h4 className="mock-h1">Connected</h4>
        <p className="mock-sub">Heart rate, steps, and ECG sync into Joe&apos;s family space.</p>
        <div className="mock-health-bars">
          <div className="mock-health-bar">
            <span>Heart</span>
            <i />
          </div>
          <div className="mock-health-bar">
            <span>Steps</span>
            <i />
          </div>
          <div className="mock-health-bar">
            <span>ECG</span>
            <i />
          </div>
        </div>
        <div className="mock-cta">Refresh readings</div>
      </div>
    </div>
  )
}

export function ScreenReport() {
  return (
    <div className="mock-screen mock-report">
      <MockChrome title="Share report" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Share health information</h4>
        <p className="mock-sub">Choose what to send to Dr. Satish Kumar</p>
        {['Medication list', 'Vitals log', 'Complete report'].map((item, i) => (
          <div key={item} className={'mock-card mock-report-row' + (i === 2 ? ' is-selected' : '')}>
            <span className="mock-report-check" aria-hidden="true" />
            <strong>{item}</strong>
          </div>
        ))}
        <div className="mock-cta">Share PDF</div>
      </div>
    </div>
  )
}

export function ScreenOffline() {
  return (
    <div className="mock-screen mock-offline">
      <MockChrome title="Cardilyn" />
      <div className="mock-body">
        <div className="mock-offline-banner">You&apos;re offline — showing saved family data</div>
        <h4 className="mock-h1">Health signal board</h4>
        <p className="mock-sub">Joe&apos;s family · last synced earlier</p>
        <div className="mock-vitals-grid">
          <div className="mock-vital mock-vital-peach">
            <span className="mock-vital-name">BP</span>
            <span className="mock-vital-value">118/76</span>
            <span className="mock-vital-unit">mmHg</span>
          </div>
          <div className="mock-vital mock-vital-mint">
            <span className="mock-vital-name">Glucose</span>
            <span className="mock-vital-value">102</span>
            <span className="mock-vital-unit">mg/dL</span>
          </div>
        </div>
        <div className="mock-card">
          <strong>Changes wait here</strong>
          <span>They sync automatically when you reconnect.</span>
        </div>
      </div>
    </div>
  )
}

export function ScreenSettings() {
  return (
    <div className="mock-screen mock-settings">
      <MockChrome title="Settings" showBack />
      <div className="mock-body">
        <h4 className="mock-h1">Settings & trust</h4>
        <p className="mock-sub">joe@gmail.com</p>
        {[
          { label: 'Medication reminders', value: 'On' },
          { label: 'Privacy', value: '' },
          { label: 'Terms', value: '' },
          { label: 'Send feedback', value: '' },
        ].map((row) => (
          <div key={row.label} className="mock-card mock-settings-row">
            <strong>{row.label}</strong>
            <span>{row.value || '›'}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SCREEN_VIEWS = {
  home: ScreenHome,
  meds: ScreenMeds,
  vitals: ScreenVitals,
  doctors: ScreenDoctors,
  family: ScreenFamily,
  modules: ScreenModules,
  health: ScreenHealth,
  report: ScreenReport,
  offline: ScreenOffline,
  settings: ScreenSettings,
}

export const SHOWCASE_SCREENS = [
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
    caption: 'Log blood pressure, glucose, weight, symptoms & notes in about 30 seconds.',
  },
  {
    id: 'doctors',
    label: 'Doctors',
    title: 'Care team',
    caption: 'Save your care team once — scheduling and PDF reports use the same directory.',
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

/** Compact phone frame used inside the how-to book. */
export function MiniPhone({ screenId, active = true, label }) {
  const Screen = SCREEN_VIEWS[screenId] || ScreenHome
  return (
    <div className={'book-mini-phone' + (active ? ' is-active' : '')} aria-hidden={!active}>
      <div className="book-mini-bezel">
        <div className="book-mini-island" />
        <div className="book-mini-screen" key={active ? screenId : 'idle'}>
          {active ? <Screen /> : <div className="book-mini-placeholder" />}
        </div>
      </div>
      {label ? <span className="book-mini-label">{label}</span> : null}
    </div>
  )
}
