import { PageIntro } from '../components/SiteLayout.jsx'
import GalleryGrid from '../components/GalleryGrid.jsx'

export default function Gallery() {
  return (
    <>
      <PageIntro eyebrow="The portfolio" title={<>A little inspiration<br /><em>for your next set.</em></>} text="Explore Felicity’s recent manicures, nail art and extensions. Tap a design to take a closer look." />
      <section className="wrap page-section gallery-page"><GalleryGrid /></section>
      <div className="wrap gallery-bottom-note"><span>Have a favourite?</span><span>Save it for your appointment conversation.</span></div>
    </>
  )
}
