'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1920&q=90&auto=format&fit=crop';

export function ImmersiveHero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, 130]);
  const contentOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background with dual parallax: scroll + mouse */}
      <motion.div className="absolute inset-[-6%]" style={{ y: bgY }}>
        <motion.div
          className="w-full h-full"
          animate={{ x: mouse.x * 0.35, y: mouse.y * 0.35 }}
          transition={{ type: 'spring', damping: 45, stiffness: 90 }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Cinematic film production"
            fill
            className="object-cover"
            priority
            quality={95}
          />
        </motion.div>
      </motion.div>

      {/* Cinematic gradient layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10" />

      {/* Film grain */}
      <div className="absolute inset-0 z-20 opacity-[0.035] film-grain pointer-events-none" />

      {/* Main content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-30 h-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 max-w-5xl"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-12 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs font-light tracking-[0.35em] uppercase">
            HillsView Productions
          </span>
        </motion.div>

        {/* Staggered headline */}
        {['We Craft', 'Cinematic', 'Stories.'].map((word, i) => (
          <div key={word} className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: 110, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={
                i === 1
                  ? 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light italic text-amber-100 leading-none'
                  : 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-tight'
              }
            >
              {word}
            </motion.h1>
          </div>
        ))}

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-300 font-light text-base md:text-lg max-w-sm leading-relaxed mt-8 mb-10"
        >
          Immersive visual experiences that transform your most precious moments into timeless art.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.a
            href="/portfolio"
            whileHover={{ scale: 1.03, backgroundColor: '#fcd34d' }}
            whileTap={{ scale: 0.97 }}
            className="btn-cinematic"
          >
            View Our Work
          </motion.a>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-cinematic-outline"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9 }}
        className="absolute bottom-8 left-0 right-0 z-30 flex items-end justify-between px-8 md:px-16 lg:px-24"
      >
        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            className="w-px h-14 bg-white/35"
            animate={{ scaleY: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0 }}
          />
          <span className="text-white/40 text-[10px] font-light tracking-[0.3em] uppercase">Scroll</span>
        </div>

        {/* Quick stats */}
        <div className="hidden md:flex gap-10 text-right">
          {[['500+', 'Projects'], ['8+', 'Years'], ['100+', 'Clients']].map(([num, label]) => (
            <div key={label}>
              <div className="text-white text-xl font-bold">{num}</div>
              <div className="text-white/40 text-[10px] tracking-widest uppercase">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
