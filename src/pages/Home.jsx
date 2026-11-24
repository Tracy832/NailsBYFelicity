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
          <h1>Manicures,<br />pedicures &amp;<br />press-ons.</h1>
          <p className="hero-lede">From a clean polish to acrylic length or custom press-ons, tell Felicity what you have in mind.</p>
          <div className="hero-actions"><WhatsAppButton /><Link to="/gallery" className="text-link">See the work <ArrowRight size={16} /></Link></div>
        </div>
        <figure className="hero-visual">
          <div className="hero-image hero-image-main"><img src="/images/portfolio/14.jpeg" alt="Glossy red stiletto nails photographed against blue fabric" fetchPriority="high" /></div>
          <figcaption className="hero-image-caption"><span>Red stiletto set</span><span>Nails by Felicity · Murang’a</span></figcaption>
        </figure>
        <a className="scroll-cue" href="#services"><ArrowDown size={15} /> Scroll to explore</a>
      </section>

      <section className="intro-band">
        <div className="wrap intro-band-inner"><span className="section-kicker">The studio menu</span><p>Manicure <span className="service-separator" aria-hidden="true">·</span> Pedicure <span className="service-separator" aria-hidden="true">·</span> Acrylics <span className="service-separator" aria-hidden="true">·</span> Press-ons</p></div>
      </section>

      <section className="section wrap services-preview" id="services">
        <div className="section-heading"><div><span className="eyebrow"><span className="eyebrow-line" />Services in Murang’a</span><h2>Care for hands,<br /><em>feet and sets.</em></h2></div><p>Choose a manicure or pedicure, add length with acrylics, or ask Felicity about a made-to-fit press-on set.</p></div>
        <ServiceList compact />
      </section>

      <section className="gallery-preview">
        <div className="wrap"><div className="section-heading section-heading-gallery"><div><span className="eyebrow"><span className="eyebrow-line" />Recent sets</span><h2>Acrylics, press-ons<br /><em>and nail art.</em></h2></div><Link to="/gallery" className="text-link">View the gallery <ArrowRight size={16} /></Link></div><GalleryGrid limit={4} /></div>
      </section>

      <section className="home-cta"><div className="wrap home-cta-inner"><span className="eyebrow eyebrow-light"><span className="eyebrow-line" />Appointments by enquiry</span><h2>Bring your idea<br /><em>to Felicity.</em></h2><p>Send a design reference or ask about a service. Felicity can share current prices and availability.</p><WhatsAppButton message="Hello Felicity, I would like to ask about an appointment." /></div></section>
    </>
  )
}
