import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Portfolio - HillsView Productions',
  description: 'View our portfolio of professional photography and videography work including weddings, portraits, commercial projects, and events.',
}

const portfolioItems = [
  {
    id: 1,
    title:       'Serengeti Wedding',
    category:    'Wedding',
    location:    'Serengeti National Park',
    year:        '2024',
    description: 'A breathtaking ceremony against Tanzania\'s most iconic landscape.',
    image:       'https://images.unsplash.com/photo-1519741497674-611481863552?w=700&q=85&auto=format&fit=crop',
  },
  {
    id: 2,
    title:       'Tech Startup Team',
    category:    'Corporate',
    location:    'Dar es Salaam',
    year:        '2024',
    description: 'Professional headshots and team photography for a growing fintech company.',
    image:       'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=85&auto=format&fit=crop',
  },
  {
    id: 3,
    title:       'Kilimanjaro Coffee Launch',
    category:    'Commercial',
    location:    'Moshi',
    year:        '2024',
    description: 'Product launch video and photography for a premium Tanzanian coffee brand.',
    image:       'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=85&auto=format&fit=crop',
  },
  {
    id: 4,
    title:       'Maasai Portrait Series',
    category:    'Portrait',
    location:    'Ngorongoro',
    year:        '2024',
    description: 'Intimate portrait series celebrating Maasai culture and tradition.',
    image:       'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85&auto=format&fit=crop',
  },
  {
    id: 5,
    title:       'Zanzibar Beach Ceremony',
    category:    'Wedding',
    location:    'Zanzibar',
    year:        '2023',
    description: 'Romantic beach wedding with stunning sunset ceremonies on Zanzibar shores.',
    image:       'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=700&q=85&auto=format&fit=crop',
  },
  {
    id: 6,
    title:       'Digital Innovation Summit',
    category:    'Event',
    location:    'Dar es Salaam',
    year:        '2024',
    description: 'Comprehensive event coverage for East Africa\'s largest tech conference.',
    image:       'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85&auto=format&fit=crop',
  },
]

const categories = ['All', 'Wedding', 'Portrait', 'Commercial', 'Event', 'Corporate']

export default function PortfolioPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[75vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1920&q=85&auto=format&fit=crop"
          alt="Camera close-up artistic shot"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" />
        <div className="film-grain absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Our Work</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            Portfolio
          </h1>
          <p className="text-zinc-400 font-light text-lg mt-6 max-w-md leading-relaxed">
            A curated collection of our finest work across Tanzania and beyond.
          </p>
        </div>
      </section>

      {/* ── Category filter (visual only) ── */}
      <section className="py-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-light transition-colors ${
                  i === 0
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'border border-white/15 text-zinc-400 hover:border-amber-400/50 hover:text-amber-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Portfolio grid ── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                {/* Image with hover overlay */}
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-white/55 text-[10px] tracking-[0.3em] uppercase font-light">
                      {item.category}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-400 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                      <div className="w-8 h-px bg-amber-400 mx-auto mb-3" />
                      <p className="text-white font-semibold text-lg">{item.title}</p>
                      <p className="text-zinc-300 text-xs tracking-wide mt-1">{item.location}</p>
                      <span className="mt-4 inline-block px-5 py-2 border border-amber-400/60 text-amber-400 text-xs tracking-[0.2em] uppercase font-light hover:bg-amber-400 hover:text-black transition-colors">
                        View Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card meta */}
                <div className="bg-zinc-950 px-5 py-4 border-t border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-amber-400 text-[10px] tracking-[0.25em] uppercase font-light">
                      {item.category}
                    </span>
                    <span className="text-zinc-600 text-xs font-light">{item.year}</span>
                  </div>
                  <h3 className="text-white font-semibold text-base leading-tight">{item.title}</h3>
                  <p className="text-zinc-500 text-xs font-light mt-0.5">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-44 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=85&auto=format&fit=crop"
          alt="Film production"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="film-grain absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-light">Love What You See?</span>
            <div className="w-10 h-px bg-amber-400" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
            Let&apos;s Create
          </h2>
          <h2 className="text-5xl md:text-6xl font-light italic text-amber-100 mb-10 leading-tight">
            Something Amazing.
          </h2>
          <p className="text-zinc-300 font-light text-lg mb-12 leading-relaxed">
            Get in touch to discuss your project and bring your vision to life.
          </p>
          <Link href="/contact" className="btn-cinematic">Start Your Project</Link>
        </div>
      </section>

    </div>
  )
}
