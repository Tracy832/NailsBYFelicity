import { useMemo, useState } from 'react'
import { X, ArrowUpRight } from 'lucide-react'
import { galleryItems } from '../data/site.js'

const filters = ['All work', 'Acrylics', 'Manicure', 'Nail art']

export default function GalleryGrid({ limit }) {
  const [filter, setFilter] = useState('All work')
  const [selected, setSelected] = useState(null)
  const items = useMemo(() => {
    const filtered = filter === 'All work' ? galleryItems : galleryItems.filter((item) => item.category === filter)
    return limit ? filtered.slice(0, limit) : filtered
  }, [filter, limit])

  return (
    <>
      {!limit && <div className="gallery-filters" role="group" aria-label="Filter nail designs">
        {filters.map((item) => <button key={item} className={filter === item ? 'filter-active' : ''} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}<span>{item === 'All work' ? galleryItems.length : galleryItems.filter((entry) => entry.category === item).length}</span></button>)}
      </div>}
      <div className={`gallery-grid grid grid-cols-2 gap-2 md:grid-cols-3 ${limit ? 'gallery-grid-compact' : ''}`}>
        {items.map((item, index) => (
          <button className={`gallery-item gallery-item-${index % 6}`} key={item.image} onClick={() => setSelected(item)} aria-label={`View ${item.alt}`}>
            <img src={`/images/portfolio/${encodeURIComponent(item.image)}`} alt={item.alt} loading="lazy" />
            <span className="gallery-caption"><span>{item.category}</span><ArrowUpRight size={16} /></span>
          </button>
        ))}
      </div>
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Nail design preview" onClick={() => setSelected(null)}>
        <button className="lightbox-close" onClick={() => setSelected(null)} aria-label="Close preview"><X size={24} /></button>
        <img src={`/images/portfolio/${encodeURIComponent(selected.image)}`} alt={selected.alt} onClick={(event) => event.stopPropagation()} />
        <p>{selected.alt}</p>
      </div>}
    </>
  )
}
