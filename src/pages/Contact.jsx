import { ArrowUpRight, MapPin, MessageCircle, Clock3 } from 'lucide-react'
import { PageIntro } from '../components/SiteLayout.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { whatsappNumber } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Get in touch" title={<>Let’s plan your<br /><em>next set.</em></>} text="For appointments, pricing and design enquiries, send Felicity a message. She’ll help you take it from there." />
      <section className="wrap contact-section">
        <div className="contact-primary"><span className="contact-icon"><MessageCircle size={23} /></span><span className="eyebrow"><span className="eyebrow-line" />The easiest way to book</span><h2>Start with<br /><em>a message.</em></h2><p>Share the service you’re interested in, a day that works for you and any design inspiration you have. Felicity can confirm availability and pricing with you directly.</p><WhatsAppButton message="Hello Felicity, I would like to enquire about a nail appointment." />{!whatsappNumber && <span className="setup-hint">Add her number in <code>.env.local</code> to activate this link.</span>}</div>
        <div className="contact-details">
          <article><span className="contact-detail-icon"><MapPin size={20} /></span><div><span className="detail-label">Studio location</span><h3>Murang’a, Kenya</h3><p>Message Felicity for directions and appointment details.</p></div></article>
          <article><span className="contact-detail-icon"><Clock3 size={20} /></span><div><span className="detail-label">Appointments</span><h3>By arrangement</h3><p>Ask about current availability when you get in touch.</p></div></article>
          <article><span className="contact-detail-icon"><ArrowUpRight size={20} /></span><div><span className="detail-label">The next step</span><h3>Share your idea</h3><p>Bring a reference photo or let Felicity help you choose a look.</p></div></article>
        </div>
      </section>
      <section className="contact-map-note"><div className="wrap map-note-inner"><span className="map-note-mark"><MapPin size={24} /></span><div><span className="eyebrow">Find Nails by Felicity</span><h2>In the heart of <em>Murang’a.</em></h2><p>Exact directions are shared when your appointment is arranged.</p></div><div className="map-pattern" aria-hidden="true"><span>01</span><span>KENYA · MURANG’A</span></div></div></section>
    </>
  )
}
