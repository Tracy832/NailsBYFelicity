import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import SiteLayout from './components/SiteLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function NotFound() {
  return <section className="not-found wrap"><span className="eyebrow">That page wandered off</span><h1>Let’s get you<br /><em>back to beautiful.</em></h1><a className="button button-primary" href="/">Back to home</a></section>
}

export default function App() {
  return <><ScrollToTop /><Routes><Route element={<SiteLayout />}><Route index element={<Home />} /><Route path="services" element={<Services />} /><Route path="gallery" element={<Gallery />} /><Route path="about" element={<About />} /><Route path="contact" element={<Contact />} /><Route path="*" element={<NotFound />} /></Route></Routes></>
}
