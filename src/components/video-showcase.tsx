'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const BG_IMAGE =
  'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&q=85&auto=format&fit=crop';

interface VideoShowcaseProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function VideoShowcase({ title, subtitle, description }: VideoShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Cinematic background image */}
      <div className="absolute inset-0">
        <Image
          src={BG_IMAGE}
          alt="Film production behind the scenes"
          fill
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/35" />

      {/* Film grain */}
      <div className="absolute inset-0 z-10 opacity-[0.03] film-grain pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 py-24 min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.9 }}
          className="w-full"
        >
          {/* Label */}
          <div className="flex items-center justify-center gap-5 mb-8">
            <div className="w-10 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.35em] uppercase font-light">
              {subtitle || 'Featured Reel'}
            </span>
            <div className="w-10 h-px bg-amber-400" />
          </div>

          {/* Heading */}
          <h2 className="text-6xl md:text-8xl font-bold text-white leading-none mb-6 tracking-tight">
            {title}
          </h2>

          {description && (
            <motion.p
              className="text-zinc-400 font-light text-lg max-w-xl mx-auto mb-14 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          {/* Play button with animated rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-24 h-24 rounded-full border border-white/30 hover:border-amber-400 transition-colors flex items-center justify-center"
            >
              {/* Animated rings */}
              <motion.div
                className="absolute inset-0 rounded-full border border-white/15"
                animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border border-white/10"
                animate={{ scale: [1, 2, 1], opacity: [0.2, 0, 0.2] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeOut', delay: 0.6 }}
              />
              <svg className="w-9 h-9 text-white ml-1 group-hover:text-amber-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Widescreen video placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="relative w-full aspect-video max-w-4xl mx-auto overflow-hidden border border-white/10"
          >
            {/* Placeholder timeline bar */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
              <div className="text-zinc-600 text-sm tracking-widest uppercase font-light">2024 Showreel</div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
            {/* Runtime badge */}
            <div className="absolute bottom-3 right-4 text-zinc-500 text-xs font-light tracking-wider">
              03:42
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
