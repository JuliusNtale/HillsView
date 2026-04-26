'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const galleryItems = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85&auto=format&fit=crop',
    alt: 'Wedding ceremony in golden light',
    category: 'Weddings',
    title: 'Love & Light',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=85&auto=format&fit=crop',
    alt: 'Portrait in golden hour light',
    category: 'Portraits',
    title: 'Golden Hour',
    className: '',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=85&auto=format&fit=crop',
    alt: 'Corporate event photography',
    category: 'Events',
    title: 'Grand Moments',
    className: '',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=85&auto=format&fit=crop',
    alt: 'Film production setup',
    category: 'Film',
    title: 'Behind the Lens',
    className: '',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=700&q=85&auto=format&fit=crop',
    alt: 'Camera close-up artistic',
    category: 'Commercial',
    title: 'The Art of Vision',
    className: '',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85&auto=format&fit=crop',
    alt: 'Aerial landscape photography',
    category: 'Aerial',
    title: 'Above & Beyond',
    className: '',
  },
];

export function VisualGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Our Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Selected<br />
              <span className="italic font-light text-zinc-500">Work</span>
            </h2>
          </div>
          <motion.a
            href="/portfolio"
            whileHover={{ x: 5 }}
            className="flex items-center gap-3 text-zinc-400 hover:text-amber-400 transition-colors text-xs tracking-[0.25em] uppercase w-fit"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Magazine-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden cursor-pointer ${item.className}`}
            >
              {/* Image with zoom on hover */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              {/* Persistent bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 z-20">
                <span className="text-white/55 text-[10px] tracking-[0.3em] uppercase font-light">
                  {item.category}
                </span>
              </div>

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 bg-black/45 z-10"
              />

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <motion.div
                  animate={{
                    y: hoveredId === item.id ? 0 : 8,
                    opacity: hoveredId === item.id ? 1 : 0.65,
                  }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="w-6 h-px bg-amber-400 mb-3" />
                  <h3 className="text-white font-semibold text-lg leading-tight">{item.title}</h3>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
