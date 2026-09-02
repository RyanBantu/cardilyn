import { useState } from 'react'

function stenosisLabel(v) {
  if (v < 20) return 'Open lumen — unobstructed flow'
  if (v < 50) return 'Mild narrowing — flow largely unaffected'
  if (v < 75) return 'Moderate narrowing — flow measurably restricted'
  return 'Severe narrowing — flow limited, turbulence likely'
}

export default function PlaqueShapesAndFlow() {
  const [stenosis, setStenosis] = useState(0)
  const bulge = (stenosis / 90) * 95
  const peakY = 180 - bulge
  const showTurbulence = stenosis > 55

  return (
    <section id="plaque-shapes">
      <div className="num">2.13</div>
      <h2>Plaque shapes, and how they block flow</h2>
      <p>The same amount of calcium behaves very differently depending on its shape.</p>

      <div className="diagram-card">
        <svg viewBox="0 0 680 320">
          <defs>
            <marker
              id="pgArrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
          </defs>

          <circle cx="140" cy="150" r="80" fill="none" stroke="var(--hair)" strokeWidth="1" />
          <circle cx="140" cy="150" r="65" fill="#332508" />
          <circle cx="140" cy="150" r="38" fill="var(--oxy-dim)" />
          <line x1="128" y1="185" x2="128" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <line x1="140" y1="185" x2="140" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <line x1="152" y1="185" x2="152" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <text x="140" y="252" fontFamily="Inter" fontWeight="500" fontSize="14" fill="var(--ink)" textAnchor="middle">Concentric</text>
          <text x="140" y="270" fontFamily="IBM Plex Mono" fontSize="12" fill="var(--muted)" textAnchor="middle">Narrows evenly all around</text>

          <circle cx="340" cy="150" r="80" fill="none" stroke="var(--hair)" strokeWidth="1" />
          <circle cx="340" cy="150" r="60" fill="var(--oxy-dim)" />
          <path d="M374,101 A60,60 0 0,1 374,199 A22,22 0 0,0 374,101 Z" fill="#332508" />
          <line x1="312" y1="185" x2="312" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <line x1="326" y1="185" x2="326" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <text x="340" y="252" fontFamily="Inter" fontWeight="500" fontSize="14" fill="var(--ink)" textAnchor="middle">Eccentric</text>
          <text x="340" y="270" fontFamily="IBM Plex Mono" fontSize="12" fill="var(--muted)" textAnchor="middle">Bulges in from one side</text>

          <circle cx="540" cy="150" r="80" fill="none" stroke="var(--hair)" strokeWidth="1" />
          <circle cx="540" cy="150" r="62" fill="var(--oxy-dim)" />
          <polygon points="555,122 575,130 578,150 565,165 545,158 542,138" fill="#332508" />
          <circle cx="558" cy="136" r="3" fill="#F2C879" />
          <circle cx="565" cy="150" r="3" fill="#F2C879" />
          <line x1="518" y1="185" x2="518" y2="115" stroke="#D85A30" strokeWidth="2" markerEnd="url(#pgArrow)" />
          <line x1="532" y1="185" x2="528" y2="140" stroke="#D85A30" strokeWidth="1.5" markerEnd="url(#pgArrow)" opacity="0.7" />
          <text x="540" y="252" fontFamily="Inter" fontWeight="500" fontSize="14" fill="var(--ink)" textAnchor="middle">Nodular</text>
          <text x="540" y="270" fontFamily="IBM Plex Mono" fontSize="12" fill="var(--muted)" textAnchor="middle">Irregular, clot-prone surface</text>
        </svg>
        <div className="cap">
          Concentric narrows predictably in every direction; eccentric can hide on a single-angle
          scan; nodular can trigger a clot without narrowing the lumen much at all.
        </div>
      </div>

      <p>Drag the slider to see how progressive narrowing affects flow through a vessel:</p>

      <div className="diagram-card">
        <svg viewBox="0 0 680 260">
          <defs>
            <marker
              id="flowArrow2"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path
                d="M2 1L8 5L2 9"
                fill="none"
                stroke="context-stroke"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </marker>
            <path id="pageFlowPath" d="M40,120 L640,120" />
          </defs>
          <line x1="40" y1="60" x2="640" y2="60" stroke="var(--hair)" strokeWidth="14" strokeLinecap="round" />
          <line x1="40" y1="180" x2="640" y2="180" stroke="var(--hair)" strokeWidth="14" strokeLinecap="round" />

          <path
            d={`M280,180 Q340,${peakY} 400,180`}
            fill="#332508"
            stroke="#7A5510"
            strokeWidth="0.5"
          />

          <g style={{ opacity: showTurbulence ? 1 : 0, transition: 'opacity .4s ease' }}>
            <path d="M420,110 q6,-10 12,0 q6,10 12,0" fill="none" stroke="#D85A30" strokeWidth="1.5" />
            <path d="M440,95 q6,-8 12,0 q6,8 12,0" fill="none" stroke="#D85A30" strokeWidth="1.5" />
          </g>

          {[0, 0.6, 1.2, 1.8].map((delay) => (
            <circle key={delay} r="6" fill="var(--oxy)">
              <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${delay}s`}>
                <mpath href="#pageFlowPath" />
              </animateMotion>
            </circle>
          ))}

          <text x="340" y="230" fontFamily="IBM Plex Mono" fontSize="12" fill="var(--muted)" textAnchor="middle">Calcified plaque</text>
          <text x="80" y="45" fontFamily="IBM Plex Mono" fontSize="12" fill="var(--muted)" textAnchor="middle">Vessel wall</text>
        </svg>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8 }}>
          <span className="cap" style={{ margin: 0 }}>Narrowing</span>
          <input
            type="range"
            min="0"
            max="90"
            step="1"
            value={stenosis}
            style={{ flex: 1 }}
            onChange={(e) => setStenosis(Number(e.target.value))}
          />
          <span className="cap" style={{ margin: 0, minWidth: 36, textAlign: 'right' }}>
            {stenosis}%
          </span>
        </div>
        <div className="stage-readout">{stenosisLabel(stenosis)}</div>
      </div>
    </section>
  )
}
