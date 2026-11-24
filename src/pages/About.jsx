import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageIntro } from '../components/SiteLayout.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function About() {
  return (
    <>
      <PageIntro eyebrow="About the studio" title={<>Nail sets by<br /><em>Felicity.</em></>} text="Manicures, pedicures, acrylics and custom press-on nails, made in Murang’a." />
      <section className="wrap about-story">
        <div className="about-image about-image-large"><img src="/images/portfolio/25.jpeg" alt="Soft neutral nails finished with delicate star details" loading="lazy" /></div>
        <div className="about-copy"><span className="eyebrow"><span className="eyebrow-line" />Meet Felicity</span><h2>Colour, length<br />and <em>detail.</em></h2><p>From understated nude sets to long, detailed acrylics, Felicity’s portfolio moves between clean finishes and expressive nail art.</p><p>The studio is in Murang’a. Send a reference or describe the set you have in mind, then message Felicity to discuss the service.</p><div className="about-links"><WhatsAppButton message="Hello Felicity, I would love to know more about your nail services." /><Link to="/services" className="text-link">Explore services <ArrowUpRight size={16} /></Link></div></div>
        <div className="about-image about-image-small"><img src="/images/portfolio/1.jpeg" alt="Blue shimmer manicure with a glossy finish" loading="lazy" /></div>
        <div className="about-statement"><p>Short nude sets.<br /><em>Blue shimmer extensions.</em></p></div>
      </section>
    </>
  )
}
