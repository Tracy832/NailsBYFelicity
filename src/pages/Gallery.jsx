import { PageIntro } from '../components/SiteLayout.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'

export default function Gallery() {
  return (
    <>
      <PageIntro eyebrow="Felicity’s portfolio" title={<>Acrylics, colour<br /><em>and nail art.</em></>} text="Browse recent sets by service. Open any photo to see the design up close." />
      <section className="wrap page-section gallery-page"><GalleryGrid /></section>
      <div className="wrap gallery-bottom-note"><span>Found a set you like?</span><span>Send the photo to Felicity with your enquiry.</span></div>
    </>
  )
}
