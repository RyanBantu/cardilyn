import { useEffect, useRef } from 'react'
import './styles.css'
import bodyHtml from './body.html?raw'
import Disclaimer from './components/Disclaimer.jsx'
import ContributionForm from './components/ContributionForm.jsx'

function setPhase(phase) {
  const wrap = document.getElementById('cycle-wrap')
  const readout = document.getElementById('readout')
  const bSys = document.getElementById('btn-systole')
  const bDia = document.getElementById('btn-diastole')
  if (!wrap || !readout || !bSys || !bDia) return
  wrap.classList.remove('phase-systole', 'phase-diastole')
  wrap.classList.add('phase-' + phase)
  bSys.classList.toggle('active', phase === 'systole')
  bDia.classList.toggle('active', phase === 'diastole')
  readout.textContent =
    phase === 'systole'
      ? '> Ventricles contract · AV valves shut · pulmonary + aortic valves open · coronary arteries compressed'
      : '> Ventricles relax · AV valves open, ventricles fill · pulmonary + aortic valves shut · coronary arteries fill'
}

let autoplayTimer = null
let autoplayOn = false

function stopAutoplay() {
  autoplayOn = false
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
  const btn = document.getElementById('btn-autoplay')
  if (btn) {
    btn.classList.remove('active')
    btn.textContent = '▶ Auto-play cycle'
  }
}

function startAutoplay() {
  stopAutoplay()
  autoplayOn = true
  const btn = document.getElementById('btn-autoplay')
  if (btn) {
    btn.classList.add('active')
    btn.textContent = '⏸ Pause cycle'
  }
  let phase = 'systole'
  setPhase(phase)
  autoplayTimer = setInterval(() => {
    phase = phase === 'systole' ? 'diastole' : 'systole'
    setPhase(phase)
  }, 2800)
}

function toggleAutoplay() {
  if (autoplayOn) stopAutoplay()
  else startAutoplay()
}

function setupIntroToggle() {
  const details = document.getElementById('toc-intro')
  const content = document.getElementById('chapter-intro-content')
  if (!details || !content) return () => {}

  function sync() {
    const open = details.open
    content.hidden = !open
    if (!open) stopAutoplay()
    if (open) {
      content.querySelectorAll('.reveal:not(.revealed)').forEach((el) => el.classList.add('revealed'))
    }
  }

  details.addEventListener('toggle', sync)
  sync()
  return () => details.removeEventListener('toggle', sync)
}

function setupScrollSpy() {
  const tocLinks = Array.from(document.querySelectorAll('.toc-list a, .toc-jump-link'))
  const sections = tocLinks
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1)
      return id ? document.getElementById(id) : null
    })
    .filter(Boolean)

  if (!sections.length) return () => {}

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id
          tocLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`)
          })
        }
      })
    },
    { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
  )

  sections.forEach((section) => observer.observe(section))
  return () => observer.disconnect()
}

function setupRevealAnimations() {
  const targets = document.querySelectorAll('section, .hero, .flow-card, .chapter-head')
  targets.forEach((el) => el.classList.add('reveal'))

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  )

  targets.forEach((el) => observer.observe(el))
  return () => observer.disconnect()
}

export default function App() {
  const cleanupRef = useRef([])

  useEffect(() => {
    window.setPhase = (phase) => {
      stopAutoplay()
      setPhase(phase)
    }
    window.toggleAutoplay = toggleAutoplay

    setPhase('systole')

    cleanupRef.current.push(setupIntroToggle())
    cleanupRef.current.push(setupScrollSpy())
    cleanupRef.current.push(setupRevealAnimations())

    return () => {
      stopAutoplay()
      delete window.setPhase
      delete window.toggleAutoplay
      cleanupRef.current.forEach((fn) => fn())
      cleanupRef.current = []
    }
  }, [])

  return (
    <div className="site">
      <Disclaimer />
      <div className="wrap">
        <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
        <ContributionForm />
        <footer className="site-footer">
          <p className="footer-disclaimer">
            Compiled through self-directed research · For education only · Not medical advice ·
            Consult a cardiologist for any health concerns · Do not use for self-treatment
          </p>
          <p>
            Contribute via{' '}
            <a href="mailto:bantu.ryan@gmail.com" className="email-link">
              bantu.ryan@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}
