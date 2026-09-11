import { useEffect, useId, useState } from 'react'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'companion', label: 'Companion' },
  { id: 'heart', label: 'Learn more about the Heart' },
]

export default function NavBar({ active, onChange }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    setMenuOpen(false)
  }, [active])

  useEffect(() => {
    if (!menuOpen) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const select = (id) => {
    onChange(id)
    setMenuOpen(false)
  }

  return (
    <header className={'site-nav' + (menuOpen ? ' menu-open' : '')} role="banner">
      <div className="site-nav-inner">
        <button
          type="button"
          className="site-nav-brand"
          onClick={() => select('about')}
          aria-label="Cardilyn home"
        >
          <img
            src="/cardilyn-icon.png"
            alt=""
            className="site-nav-logo"
            width={36}
            height={36}
          />
          <span className="site-nav-name">Cardilyn</span>
        </button>

        <nav className="site-nav-tabs site-nav-tabs-desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={'site-nav-tab' + (active === link.id ? ' active' : '')}
              aria-current={active === link.id ? 'page' : undefined}
              onClick={() => select(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="site-nav-burger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={menuId}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="burger-line" aria-hidden="true" />
          <span className="burger-line" aria-hidden="true" />
          <span className="burger-line" aria-hidden="true" />
        </button>
      </div>

      <nav id={menuId} className="site-nav-drawer" aria-label="Mobile" hidden={!menuOpen}>
        {LINKS.map((link) => (
          <button
            key={link.id}
            type="button"
            className={'site-nav-drawer-link' + (active === link.id ? ' active' : '')}
            aria-current={active === link.id ? 'page' : undefined}
            onClick={() => select(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  )
}
