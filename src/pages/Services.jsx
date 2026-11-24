import { ArrowRight, Sparkles } from 'lucide-react'
import { PageIntro } from '../components/SiteLayout.jsx'
import ServiceList from '../components/ServiceList.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'

export default function Services() {
  return (
    <>
      <PageIntro eyebrow="The menu" title={<>The details<br /><em>make it.</em></>} text="Choose a service to start, then message Felicity to talk through the finish, timing and current pricing." />
      <section className="wrap page-section services-page-list"><ServiceList /></section>
      <section className="service-note-band"><div className="wrap service-note-inner"><span className="note-icon"><Sparkles size={20} /></span><div><h2>Have a design in mind?</h2><p>Share a reference or describe the colours and shape you love. Felicity can help you find the right service for your idea.</p></div><WhatsAppButton message="Hello Felicity, I have a nail design in mind and would love to ask about it." /></div></section>
    </>
  )
}
