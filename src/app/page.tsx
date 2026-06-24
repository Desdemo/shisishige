import { featuredPhotos, timelinePhotos } from "@/data/photos"
import HeroCarousel from "@/components/HeroCarousel"
import TimelineGallery from "@/components/TimelineGallery"

export default function HomePage() {
  return (
    <>
      <HeroCarousel photos={featuredPhotos} />
      <TimelineGallery photos={timelinePhotos} />
    </>
  )
}
