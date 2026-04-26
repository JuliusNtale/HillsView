'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <section ref={ref} className="relative py-32 bg-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, -50, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{
            x: [0, -50, 50, 0],
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
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

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Transform Your Vision?
          </h2>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let&apos;s create something extraordinary together. We&apos;ll bring your ideas to life with stunning visuals and immersive storytelling.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-white text-black rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              Start Your Project
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-white text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
