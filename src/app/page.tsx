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
        imageSrc="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&q=85&auto=format&fit=crop"
        imageAlt="Film production behind the scenes"
        layout="left"
        label="Our Vision"
        description="We craft immersive visual narratives that captivate and inspire audiences. Each frame is meticulously designed to evoke emotion and tell your unique story."
      />

      <VideoShowcase
        title="Featured Reel"
        subtitle="2024 Highlights"
        description="A curated collection of our most impactful work — where creativity meets motion and every frame is intentional."
      />

      <ScrollRevealSection
        title="Visual Storytelling"
        imageSrc="https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85&auto=format&fit=crop"
        imageAlt="Wedding photography golden light"
        layout="right"
        label="Our Process"
        description="Our approach combines cutting-edge technology with artistic vision to create unforgettable experiences that resonate deeply with your audience."
      />

      <StatsSection />

      <MasonryGallery />

      <CTASection />
    </>
  )
}
