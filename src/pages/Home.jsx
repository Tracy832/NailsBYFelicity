import { ArrowDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import GalleryGrid from '../components/GalleryGrid.jsx'
import ServiceList from '../components/ServiceList.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow"><span className="eyebrow-line" />Nail studio · Murang’a</span>
          <h1>Manicures,<br />pedicures &amp;<br />nail art.</h1>
          <p className="hero-lede">Thoughtful nail care and expressive designs, made personal in Murang’a.</p>
          <div className="hero-actions"><WhatsAppButton /><Link to="/gallery" className="text-link">See the work <ArrowRight size={16} /></Link></div>
        </div>
        <div className="hero-visual" aria-label="A selection of Felicity’s nail designs">
          <div className="hero-image hero-image-main"><img src="/images/portfolio/10.jpeg" alt="Black and nude nails with a fine hand-painted accent" /></div>
          <div className="hero-image hero-image-inset"><img src="/images/portfolio/Nails%20by%20Felicity.jpeg" alt="Berry red stiletto nails with floral embellishments" /></div>
          <span className="hero-stamp">Felicity<br /><small>nail artist</small></span>
          <span className="hero-image-caption">Colour with a point of view <span>01 / 04</span></span>
        </div>
        <a className="scroll-cue" href="#services"><ArrowDown size={15} /> Scroll to explore</a>
      </section>

      <section className="intro-band">
        <div className="wrap intro-band-inner"><span className="section-kicker">Nails by Felicity</span><p>A little <em>polish</em>, a little personality — <br className="desktop-break" />and a finish that feels like yours.</p></div>
      </section>

      <section className="section wrap services-preview" id="services">
        <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />The menu</span><h2>Good nails,<br /><em>your way.</em></h2></div><p>From a clean, classic finish to a set that turns heads, choose the care and detail that suit your style.</p></div>
        <ServiceList compact />
      </section>

      <section className="gallery-preview">
        <div className="wrap"><div className="section-heading section-heading-gallery"><div><span className="eyebrow"><span className="eyebrow-line" />A look at the work</span><h2>Colour. Shape.<br /><em>Character.</em></h2></div><Link to="/gallery" className="text-link">View the gallery <ArrowRight size={16} /></Link></div><GalleryGrid limit={4} /></div>
      </section>

      <section className="home-cta"><div className="wrap home-cta-inner"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />Your next set</span><h2>Let’s make it<br /><em>yours.</em></h2><p>Tell Felicity what you have in mind and ask about current availability and pricing.</p><WhatsAppButton message="Hello Felicity, I would like to ask about an appointment." /></div></section>
    </>
  )
}
