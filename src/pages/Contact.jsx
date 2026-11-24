import { ArrowUpRight, MapPin, MessageCircle, Clock3 } from 'lucide-react'
import { PageIntro } from '../components/SiteLayout.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { whatsappNumber } from '../data/site.js'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Get in touch" title={<>Send Felicity<br /><em>your nail idea.</em></>} text="Ask about a manicure, pedicure, acrylics or press-ons. Share a date that works and Felicity can confirm current pricing and availability." />
      <section className="wrap contact-section">
        <div className="contact-primary"><span className="contact-icon"><MessageCircle size={23} /></span><span className="eyebrow"><span className="eyebrow-line" />WhatsApp enquiries</span><h2>Talk through<br /><em>your set.</em></h2><p>Send a reference photo or describe the colour, shape and length you want. Felicity will help you choose a service and confirm the details.</p><WhatsAppButton message="Hello Felicity, I would like to enquire about a nail appointment." />{!whatsappNumber && <span className="setup-hint">Add her number in <code>.env.local</code> to activate this link.</span>}</div>
        <div className="contact-details">
          <article><span className="contact-detail-icon"><MapPin size={20} /></span><div><span className="detail-label">Studio location</span><h3>Murang’a, Kenya</h3><p>Message Felicity for directions and appointment details.</p></div></article>
          <article><span className="contact-detail-icon"><Clock3 size={20} /></span><div><span className="detail-label">Appointments</span><h3>By arrangement</h3><p>Ask about current availability when you get in touch.</p></div></article>
          <article><span className="contact-detail-icon"><ArrowUpRight size={20} /></span><div><span className="detail-label">Helpful to include</span><h3>Service and design</h3><p>Name the service and attach a reference photo if you have one.</p></div></article>
        </div>
      </section>
      <section className="contact-map-note"><div className="wrap map-note-inner"><span className="map-note-mark"><MapPin size={24} /></span><div><span className="eyebrow">Studio location</span><h2>Murang’a, <em>Kenya.</em></h2><p>Felicity shares exact directions when your appointment is arranged.</p></div></div></section>
    </>
  )
}
