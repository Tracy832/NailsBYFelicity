import { MessageCircle, ArrowUpRight } from 'lucide-react'
import { whatsappUrl } from '../data/site.js'

export default function WhatsAppButton({ children = 'Book on WhatsApp', className = '', message }) {
  const href = whatsappUrl(message)
  return href ? (
    <a className={`button button-primary ${className}`} href={href} target="_blank" rel="noreferrer">
      <MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
    </a>
  ) : (
    <span className={`button button-primary button-pending ${className}`} aria-disabled="true" title="Add Felicity’s WhatsApp number in .env.local to activate bookings">
      <MessageCircle size={17} strokeWidth={1.7} aria-hidden="true" />
      <span>{children}</span>
      <ArrowUpRight size={15} strokeWidth={1.8} aria-hidden="true" />
    </span>
  )
}
