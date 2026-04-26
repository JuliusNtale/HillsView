'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ScrollRevealSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  layout?: 'left' | 'right';
  description?: string;
}

export function ScrollRevealSection({
  title,
  imageSrc,
  imageAlt,
  layout = 'left',
  description,
}: ScrollRevealSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative min-h-screen py-20 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 w-full items-center ${
            layout === 'right' ? 'md:grid-cols-2-reverse' : ''
          }`}
        >
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: layout === 'left' ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: layout === 'left' ? -100 : 100 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`relative h-96 md:h-full ${layout === 'right' ? 'md:order-2' : ''}`}
          >
            <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: layout === 'left' ? 100 : -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: layout === 'left' ? 100 : -100 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className={`flex flex-col gap-6 ${layout === 'right' ? 'md:order-1' : ''}`}
          >
            <div>
              <motion.div
                className="w-12 h-1 bg-black mb-6"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
                {title}
              </h2>
            </div>

            {description && (
              <motion.p
                className="text-lg text-gray-600 leading-relaxed font-light"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {description}
              </motion.p>
            )}

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-900 transition-colors"
            >
              Explore More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
