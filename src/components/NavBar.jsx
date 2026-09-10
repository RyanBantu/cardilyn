export default function NavBar({ active, onChange }) {
  return (
    <header className="site-nav" role="banner">
      <div className="site-nav-inner">
        <div className="site-nav-brand">
          <img
            src="/cardilyn-icon.png"
            alt=""
            className="site-nav-logo"
            width={36}
            height={36}
          />
          <span className="site-nav-name">Cardilyn</span>
        </div>
        <nav className="site-nav-tabs" aria-label="Primary">
          <button
            type="button"
            className={'site-nav-tab' + (active === 'heart' ? ' active' : '')}
            aria-current={active === 'heart' ? 'page' : undefined}
            onClick={() => onChange('heart')}
          >
            Heart
          </button>
          <button
            type="button"
            className={'site-nav-tab' + (active === 'companion' ? ' active' : '')}
            aria-current={active === 'companion' ? 'page' : undefined}
            onClick={() => onChange('companion')}
          >
            Companion
          </button>
        </nav>
      </div>
    </header>
  )
}
