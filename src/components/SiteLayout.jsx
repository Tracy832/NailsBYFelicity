import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Menu, X, MapPin } from 'lucide-react'
import WhatsAppButton from './WhatsAppButton.jsx'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About Felicity' },
  { to: '/contact', label: 'Contact' },
]

function Brand({ footer = false }) {
  return (
    <Link to="/" className={`brand ${footer ? 'brand-footer' : ''}`} aria-label="Nails by Felicity home">
      <span className="brand-mark" aria-hidden="true">F</span>
      <span className="brand-words"><span>Nails by</span><strong>Felicity</strong></span>
    </Link>
  )
}

export function PageIntro({ eyebrow, title, text }) {
  return (
    <section className="page-intro wrap">
      <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </section>
  )
}

export default function SiteLayout() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return (
    <>
      <div className="announcement"><span>Thoughtful nail care, made personal</span><span className="announcement-location"><MapPin size={13} /> Murang’a, Kenya</span></div>
      <header className="site-header">
        <div className="header-inner wrap">
          <Brand />
          <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={23} /> : <Menu size={23} />}
          </button>
          <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
            {links.map((link) => <NavLink key={link.to} to={link.to} end={link.end} onClick={close}>{link.label}</NavLink>)}
            <WhatsAppButton className="nav-book" />
          </nav>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="wrap footer-main">
          <div className="footer-brand-block">
            <Brand footer />
            <p>Colour, detail and a little confidence<br />in every set.</p>
          </div>
          <div className="footer-links">
            <span className="footer-label">Explore</span>
            <Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/about">About Felicity</Link>
          </div>
          <div className="footer-links">
            <span className="footer-label">Find us</span>
            <span>Murang’a, Kenya</span>
            <span>Appointments by arrangement</span>
          </div>
          <div className="footer-book">
            <span className="footer-label">Your next set starts here</span>
            <WhatsAppButton />
          </div>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Nails by Felicity</span><span>Made with care in Murang’a</span></div>
      </footer>
    </>
  )
}
