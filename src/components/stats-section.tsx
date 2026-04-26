'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '100+', label: 'Happy Clients' },
  { number: '8+',   label: 'Years Experience' },
  { number: '30+',  label: 'Awards Won' },
];

export function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section ref={ref} className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Horizontal accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">By the Numbers</span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 80, delay: 0.4 + index * 0.12 }}
                className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-400"
              >
                {stat.number}
              </motion.div>
              <div className="w-8 h-px bg-amber-400/50 mb-3" />
              <p className="text-zinc-500 text-sm font-light tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
