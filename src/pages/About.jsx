import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageIntro } from '../components/SiteLayout.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function About() {
  return (
    <>
      <PageIntro eyebrow="A little about the studio" title={<>Personal touch.<br /><em>Beautiful detail.</em></>} text="Nails by Felicity is a nail studio in Murang’a, built around considered colour, expressive design and care that feels personal." />
      <section className="wrap about-story">
        <div className="about-image about-image-large"><img src="/images/portfolio/25.jpeg" alt="Soft neutral nails finished with delicate star details" loading="lazy" /></div>
        <div className="about-copy"><span className="eyebrow"><span className="eyebrow-line" />Meet Felicity</span><h2>Made for the way<br />you want to <em>feel.</em></h2><p>Some days call for a quiet, polished finish. Others ask for colour, length and a little drama. Felicity’s work moves between both — with room for the small details that make a set feel like yours.</p><p>Based in Murang’a, Nails by Felicity offers manicures, pedicures, acrylics and press-on nail designs. Get in touch to talk through your idea and find the right service.</p><div className="about-links"><WhatsAppButton message="Hello Felicity, I would love to know more about your nail services." /><Link to="/services" className="text-link">Explore services <ArrowUpRight size={16} /></Link></div></div>
        <div className="about-image about-image-small"><img src="/images/portfolio/1.jpeg" alt="Blue shimmer manicure with a glossy finish" loading="lazy" /></div>
        <div className="about-statement"><Sparkles size={22} /><p>Thoughtful details.<br /><em>Confident finishes.</em></p></div>
      </section>
    </>
  )
}
