'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

const galleryItems: GalleryItem[] = [
  { id: '1', src: '/Portraite/p1.jpg', alt: 'Portrait 1', category: 'Portraits' },
  { id: '2', src: '/Portraite/p2.jpg', alt: 'Portrait 2', category: 'Portraits' },
  { id: '3', src: '/Portraite/p3.jpg', alt: 'Portrait 3', category: 'Portraits' },
  { id: '4', src: '/Portraite/p4.jpg', alt: 'Portrait 4', category: 'Portraits' },
  { id: '5', src: '/Portraite/p5.jpg', alt: 'Portrait 5', category: 'Portraits' },
  { id: '6', src: '/Portraite/p6.jpg', alt: 'Portrait 6', category: 'Portraits' },
];

export function VisualGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="w-12 h-1 bg-black mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            A curated collection of visual moments
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
            >
              {/* Image Container */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <div className="text-center">
                  <p className="text-white text-lg font-semibold mb-3">
                    {item.category}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-white text-black rounded-full font-semibold text-sm"
                  >
                    View
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
