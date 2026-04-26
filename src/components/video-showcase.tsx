'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface VideoShowcaseProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export function VideoShowcase({ title, subtitle, description }: VideoShowcaseProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section ref={ref} className="relative w-full min-h-screen py-20 bg-black overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="w-12 h-1 bg-white mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <p className="text-2xl text-gray-300 mb-8 font-light">
              {subtitle}
            </p>
          )}

          {description && (
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {description}
            </motion.p>
          )}

          {/* Video Placeholder - Replace with actual video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden bg-gradient-to-b from-gray-900 to-black border border-gray-800"
          >
            {/* Placeholder for video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-colors border border-white/50"
              >
                <svg
                  className="w-8 h-8 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.button>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
