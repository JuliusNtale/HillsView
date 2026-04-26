'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

const masonryItems = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&q=80&auto=format&fit=crop',
    alt: 'Wedding couple',
    category: 'Wedding',
    span: 'large' as const,
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop',
    alt: 'Portrait of a man',
    category: 'Portrait',
    span: 'small' as const,
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80&auto=format&fit=crop',
    alt: 'City lights at night',
    category: 'Commercial',
    span: 'medium' as const,
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=700&q=80&auto=format&fit=crop',
    alt: 'Event photography',
    category: 'Events',
    span: 'small' as const,
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1524117074681-31bd4de22ad3?w=700&q=80&auto=format&fit=crop',
    alt: 'Photographer in action',
    category: 'Behind the Scenes',
    span: 'medium' as const,
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=900&q=80&auto=format&fit=crop',
    alt: 'Camera equipment close-up',
    category: 'Equipment',
    span: 'large' as const,
  },
];

function spanClass(span: 'small' | 'medium' | 'large') {
  if (span === 'large') return 'md:col-span-2 md:row-span-2';
  if (span === 'medium') return 'md:col-span-1 md:row-span-2';
  return '';
}

export function MasonryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-24 bg-black">
      {/* Subtle accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Featured<br />
            <span className="italic font-light text-zinc-600">Collection</span>
          </h2>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 auto-rows-[260px]">
          {masonryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden cursor-pointer ${spanClass(item.span)}`}
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />

              {/* Hover overlay */}
              <motion.div
                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40"
              />

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <motion.div
                  animate={{
                    y: hoveredId === item.id ? 0 : 6,
                    opacity: hoveredId === item.id ? 1 : 0.55,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-4 h-px bg-amber-400" />
                  <span className="text-amber-300/80 text-[10px] tracking-[0.3em] uppercase font-light">
                    {item.category}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
