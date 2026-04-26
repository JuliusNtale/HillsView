'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';

interface MasonryItem {
  id: string;
  src: string;
  alt: string;
  span: 'small' | 'medium' | 'large';
}

const masonryItems: MasonryItem[] = [
  { id: '1', src: '/Portraite/p1.jpg', alt: 'Gallery 1', span: 'large' },
  { id: '2', src: '/Portraite/p2.jpg', alt: 'Gallery 2', span: 'small' },
  { id: '3', src: '/Portraite/p3.jpg', alt: 'Gallery 3', span: 'medium' },
  { id: '4', src: '/Portraite/p4.jpg', alt: 'Gallery 4', span: 'small' },
  { id: '5', src: '/Portraite/p5.jpg', alt: 'Gallery 5', span: 'medium' },
  { id: '6', src: '/Portraite/p6.jpg', alt: 'Gallery 6', span: 'large' },
];

function getSpanClass(span: 'small' | 'medium' | 'large'): string {
  switch (span) {
    case 'large':
      return 'md:col-span-2 md:row-span-2';
    case 'medium':
      return 'md:col-span-1 md:row-span-2';
    default:
      return 'md:col-span-1 md:row-span-1';
  }
}

export function MasonryGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <motion.div
            className="w-12 h-1 bg-black mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <h2 className="text-5xl md:text-6xl font-bold text-black">
            Featured Collection
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          {masonryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`group relative overflow-hidden rounded-xl cursor-pointer ${getSpanClass(item.span)}`}
            >
              {/* Image */}
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
                animate={hoveredId === item.id ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-end justify-start p-8"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={hoveredId === item.id ? { y: 0 } : { y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="text-white"
                >
                  <p className="text-sm font-light text-gray-200 mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-xl font-semibold mb-3">
                    Creative Vision
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Explore
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full"
                initial={{ scale: 0 }}
                animate={hoveredId === item.id ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
