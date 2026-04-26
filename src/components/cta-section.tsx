'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85&auto=format&fit=crop';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.35 });

  return (
    <section ref={ref} className="relative py-44 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt="Cinematic event production"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 z-10 opacity-[0.03] film-grain pointer-events-none" />

      <div className="relative z-20 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9 }}
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="w-12 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-light">Let&apos;s Create</span>
            <div className="w-12 h-px bg-amber-400" />
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight mb-4">
            Ready to Transform
          </h2>
          <h2 className="text-5xl md:text-7xl font-light italic text-amber-100 leading-tight tracking-tight mb-10">
            Your Vision?
          </h2>

          <motion.p
            className="text-zinc-300 text-lg font-light max-w-xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let&apos;s create something extraordinary together. Your story deserves to be told beautifully.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04, backgroundColor: '#fcd34d' }}
              whileTap={{ scale: 0.96 }}
              className="btn-cinematic"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-cinematic-outline"
            >
              View Portfolio
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
