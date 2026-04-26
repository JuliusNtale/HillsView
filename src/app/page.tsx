import { ImmersiveHero } from '@/components/immersive-hero'
import { VisualGallery } from '@/components/visual-gallery'
import { ScrollRevealSection } from '@/components/scroll-reveal-section'
import { MasonryGallery } from '@/components/masonry-gallery'
import { VideoShowcase } from '@/components/video-showcase'
import { StatsSection } from '@/components/stats-section'
import { CTASection } from '@/components/cta-section'

export default function Home() {
  return (
    <>
      <ImmersiveHero />
      <VisualGallery />
      <ScrollRevealSection 
        title="Cinematic Excellence"
        imageSrc="/Portraite/p1.jpg"
        imageAlt="Cinematic production"
        layout="left"
        description="We craft immersive visual narratives that captivate and inspire audiences. Each frame is meticulously designed to evoke emotion and tell your unique story."
      />
      <VideoShowcase 
        title="Featured Reel"
        subtitle="2024 Highlights"
        description="A curated collection of our most impactful work showcasing the intersection of creativity and technology."
      />
      <ScrollRevealSection 
        title="Visual Storytelling"
        imageSrc="/Portraite/p2.jpg"
        imageAlt="Visual storytelling"
        layout="right"
        description="Our approach combines cutting-edge technology with artistic vision to create unforgettable experiences that resonate with your audience."
      />
      <StatsSection />
      <MasonryGallery />
      <CTASection />
    </>
  )
}
