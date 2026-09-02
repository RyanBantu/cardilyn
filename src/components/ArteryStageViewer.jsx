import { useState } from 'react'

const stages = [
  {
    label: 'Healthy',
    readout: '> Healthy — smooth endothelium, open lumen, no plaque',
    plaque: 0,
    calc: 0,
    healthy: 1,
    injured: 0,
  },
  {
    label: 'Injury',
    readout: '> Injury — endothelium damaged, LDL beginning to infiltrate',
    plaque: 0.25,
    calc: 0,
    healthy: 0.3,
    injured: 0.7,
  },
  {
    label: 'Plaque',
    readout: '> Plaque — foam cells and fatty plaque narrowing the lumen',
    plaque: 0.7,
    calc: 0,
    healthy: 0.15,
    injured: 0.85,
  },
  {
    label: 'Calcified',
    readout: '> Calcified — the body has deposited calcium to stabilize the plaque',
    plaque: 1,
    calc: 1,
    healthy: 0.1,
    injured: 0.9,
  },
]

export default function ArteryStageViewer() {
  const [stageIndex, setStageIndex] = useState(0)
  const s = stages[stageIndex]

  return (
    <section id="artery-stages">
      <div className="num">2.6</div>
      <h2>Watch an artery calcify, stage by stage</h2>
      <p>A cross-section of a coronary artery through four stages — click through them below.</p>

      <div className="toggle-row">
        {stages.map((stage, i) => (
          <button
            key={stage.label}
            className={'toggle-btn' + (i === stageIndex ? ' active' : '')}
            onClick={() => setStageIndex(i)}
          >
            {stage.label}
          </button>
        ))}
      </div>
      <div className="stage-readout">{s.readout}</div>

      <div className="diagram-card">
        <svg
          className="artery-svg"
          viewBox="0 0 300 300"
          style={{ maxWidth: 300, margin: '0 auto', display: 'block' }}
        >
          <circle cx="150" cy="150" r="100" fill="var(--diagram-wall)" stroke="var(--hair)" strokeWidth="1" />
          <circle cx="150" cy="150" r="86" fill="var(--diagram-lumen)" />
          <circle
            cx="150"
            cy="150"
            r="86"
            fill="none"
            stroke="var(--lung)"
            strokeWidth="3"
            style={{ opacity: s.healthy }}
          />
          <circle
            cx="150"
            cy="150"
            r="86"
            fill="none"
            stroke="var(--oxy)"
            strokeWidth="3"
            style={{ opacity: s.injured }}
          />
          <path
            d="M193,75.5 A86,86 0 0,1 193,224.5 A50,50 0 0,0 193,75.5 Z"
            fill="var(--diagram-plaque)"
            style={{ opacity: s.plaque }}
          />
          <circle cx="175" cy="112" r="4" fill="var(--diagram-calc-stroke)" style={{ opacity: s.calc }} />
          <circle cx="182" cy="150" r="4.5" fill="var(--diagram-calc-stroke)" style={{ opacity: s.calc }} />
          <circle cx="175" cy="188" r="4" fill="var(--diagram-calc-stroke)" style={{ opacity: s.calc }} />
        </svg>
      </div>
    </section>
  )
}
