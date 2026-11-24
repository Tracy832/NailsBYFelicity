export const whatsappNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')

export function whatsappUrl(message = 'Hello Felicity, I would like to book a nail appointment.') {
  if (!whatsappNumber) return null
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const services = [
  {
    number: '01',
    title: 'Manicure',
    description: 'A tidy, polished finish with the colour and details that feel like you.',
    note: 'Classic care · polish · nail art',
  },
  {
    number: '02',
    title: 'Pedicure',
    description: 'A fresh, considered finish for toes, from clean colour to a little extra detail.',
    note: 'Foot care · colour · finishing details',
  },
  {
    number: '03',
    title: 'Acrylics & extensions',
    description: 'Length, shape and design brought together for a set with presence.',
    note: 'Acrylic sets · extensions · custom art',
  },
  {
    number: '04',
    title: 'Press-on nails',
    description: 'A ready-to-wear set with a personal colour story and finish.',
    note: 'Custom sets · fit and design by enquiry',
  },
]

export const galleryItems = [
  { image: '10.jpeg', alt: 'Black and nude nails with a flowing hand-painted accent', category: 'Nail art' },
  { image: 'Nails by Felicity.jpeg', alt: 'Vivid berry red stiletto nails with floral embellishments', category: 'Acrylics' },
  { image: '25.jpeg', alt: 'Soft nude manicure with delicate star and dot details', category: 'Nail art' },
  { image: '1.jpeg', alt: 'Blue shimmer manicure on square nail extensions', category: 'Acrylics' },
  { image: '12.jpeg', alt: 'A polished nail set by Felicity', category: 'Manicure' },
  { image: '13.jpeg', alt: 'A detailed manicure from the studio portfolio', category: 'Nail art' },
  { image: '14.jpeg', alt: 'A fresh nail colour and finish', category: 'Manicure' },
  { image: '15.jpeg', alt: 'A nail design from Felicity’s recent work', category: 'Nail art' },
  { image: '16.jpeg', alt: 'An expressive set of nail extensions', category: 'Acrylics' },
  { image: '17.jpeg', alt: 'A close view of a finished nail set', category: 'Acrylics' },
  { image: '18.jpeg', alt: 'A manicure with fine design details', category: 'Nail art' },
  { image: '19.jpeg', alt: 'A bright nail look from the portfolio', category: 'Manicure' },
  { image: '20.jpeg', alt: 'A custom nail look by Felicity', category: 'Nail art' },
  { image: '21.jpeg', alt: 'A glossy manicure with a clean finish', category: 'Manicure' },
  { image: '22.jpeg', alt: 'A close-up of a nail design', category: 'Nail art' },
  { image: '23.jpeg', alt: 'A finished set of nails from the portfolio', category: 'Acrylics' },
  { image: '24.jpeg', alt: 'A detailed nail set by Felicity', category: 'Nail art' },
  { image: '26.jpeg', alt: 'A polished manicure in a soft neutral shade', category: 'Manicure' },
]
