import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { services } from '../data/site.js'
import WhatsAppButton from './WhatsAppButton.jsx'

export default function ServiceList({ compact = false }) {
  const items = compact ? services.slice(0, 3) : services
  return (
    <div className="service-list">
      {items.map((service) => (
        <article className="service-row" key={service.number}>
          <span className="service-number">{service.number}</span>
          <div className="service-copy"><h3>{service.title}</h3><p>{service.description}</p><span className="service-note">{service.note}</span></div>
          <span className="service-enquire">Enquire for pricing</span>
        </article>
      ))}
      <div className="service-list-end">
        {compact ? <Link to="/services" className="text-link">Explore all services <ArrowUpRight size={16} /></Link> : <WhatsAppButton message="Hello Felicity, could you share your current nail service prices and availability?" />}
      </div>
    </div>
  )
}
