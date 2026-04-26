import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - HillsView Productions',
  description: 'Professional photography and videography services including wedding photography, portraits, commercial video, and event coverage.',
}

const services = [
  {
    label:       'Weddings',
    title:       'Wedding Photography',
    price:       'From $1,500',
    description: 'Capture your special day with stunning, timeless imagery that tells your unique love story. Comprehensive coverage from preparation through to the final dance.',
    features:    ['8+ hours of coverage', '500+ professionally edited photos', 'Online gallery & digital download', 'Print release included', 'Engagement session', 'Second photographer option'],
    image:       'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&q=85&auto=format&fit=crop',
  },
  {
    label:       'Portraits',
    title:       'Portrait Sessions',
    price:       'From $300',
    description: 'Professional portraits for individuals, families, and corporate headshots. Compelling images that reveal personality, confidence, and authentic character.',
    features:    ['1–2 hour session', '50+ edited photos', 'Multiple outfit changes', 'Studio or location of choice', 'Professional retouching', 'Same-day preview available'],
    image:       'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&q=85&auto=format&fit=crop',
  },
  {
    label:       'Film',
    title:       'Commercial Video',
    price:       'From $800',
    description: 'High-quality video production for brands, promotional campaigns, and commercial content. From concept development to final colour-graded delivery.',
    features:    ['4K video quality', 'Professional colour grading & editing', 'Multiple format delivery', 'Script & storyboard consultation', '48-hour rush delivery option', 'Drone footage available'],
    image:       'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&q=85&auto=format&fit=crop',
  },
  {
    label:       'Events',
    title:       'Event Coverage',
    price:       'From $600',
    description: 'Comprehensive photo and video coverage for corporate events, conferences, and special occasions. Every meaningful moment documented with precision.',
    features:    ['Full event documentation', 'Same-day highlight reel', 'Multi-photographer coverage', 'Live streaming options', 'Social-media-ready content', 'Custom branded delivery'],
    image:       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=85&auto=format&fit=crop',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=85&auto=format&fit=crop"
          alt="Professional film production setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/25" />
        <div className="film-grain absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">What We Offer</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            Our<br />
            <span className="italic font-light text-amber-100">Services</span>
          </h1>
          <p className="text-zinc-400 font-light text-lg mt-6 max-w-md leading-relaxed">
            Every frame crafted with intention. Every moment preserved with artistry.
          </p>
        </div>
      </section>

      {/* ── Service cards (alternating layout) ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group grid md:grid-cols-2 overflow-hidden border border-white/5 hover:border-amber-400/15 transition-colors duration-500"
            >
              {/* Image panel */}
              <div
                className={`relative h-64 md:h-[480px] overflow-hidden ${
                  index % 2 !== 0 ? 'md:order-2' : ''
                }`}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-500" />
                <div className="absolute top-6 left-6">
                  <span className="text-amber-400/65 text-[10px] tracking-[0.3em] uppercase font-light">
                    {service.label}
                  </span>
                </div>
              </div>

              {/* Content panel */}
              <div
                className={`bg-zinc-950 px-10 py-14 md:px-14 md:py-16 flex flex-col justify-center ${
                  index % 2 !== 0 ? 'md:order-1' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                    {service.title}
                  </h2>
                  <span className="text-amber-400 text-xl font-bold whitespace-nowrap">
                    {service.price}
                  </span>
                </div>

                <p className="text-zinc-400 font-light leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-10">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm text-zinc-400 font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="flex items-center gap-4 text-white group/btn w-fit"
                >
                  <span className="text-sm tracking-[0.2em] uppercase font-light">Book This Service</span>
                  <div className="w-8 h-px bg-amber-400 group-hover/btn:w-14 transition-all duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85&auto=format&fit=crop"
          alt="Cinematic event backdrop"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="film-grain absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-light">Let&apos;s Create</span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            Ready to Start
          </h2>
          <h2 className="text-5xl md:text-6xl font-light italic text-amber-100 mb-10 leading-tight">
            Your Project?
          </h2>
          <p className="text-zinc-300 font-light text-lg mb-12 leading-relaxed">
            Let&apos;s discuss your vision and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-cinematic">Get Free Quote</Link>
            <Link href="/portfolio" className="btn-cinematic-outline">View Portfolio</Link>
          </div>
        </div>
      </section>

    </div>
  )
}
