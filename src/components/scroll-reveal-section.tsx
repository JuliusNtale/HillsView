'use client';

import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

interface ScrollRevealSectionProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  layout?: 'left' | 'right';
  description?: string;
  label?: string;
}

export function ScrollRevealSection({
  title,
  imageSrc,
  imageAlt,
  layout = 'left',
  description,
  label = 'Our Approach',
}: ScrollRevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.25 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  const clipStart = layout === 'left' ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)';
  const clipEnd = 'inset(0 0% 0 0%)';

  return (
    <section ref={ref} className="relative min-h-screen bg-black overflow-hidden flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">

          {/* Image panel */}
          <motion.div
            className={`relative h-[55vh] md:h-[75vh] overflow-hidden ${
              layout === 'right' ? 'md:order-2' : 'md:order-1'
            }`}
            initial={{ opacity: 0, clipPath: clipStart }}
            animate={isInView
              ? { opacity: 1, clipPath: clipEnd }
              : { opacity: 0, clipPath: clipStart }
            }
            transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div className="relative w-full h-full" style={{ y: imageY }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Text panel */}
          <motion.div
            className={`flex flex-col gap-8 ${
              layout === 'right' ? 'md:order-1' : 'md:order-2'
            }`}
            initial={{ opacity: 0, x: layout === 'left' ? 50 : -50 }}
            animate={isInView
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: layout === 'left' ? 50 : -50 }
            }
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">{label}</span>
            </div>

            {/* Title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none tracking-tight">
              {title}
            </h2>

            {/* Description */}
            {description && (
              <motion.p
                className="text-zinc-400 text-lg font-light leading-relaxed max-w-md"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {description}
              </motion.p>
            )}

            {/* CTA arrow */}
            <motion.a
              href="/services"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              whileHover={{ x: 6 }}
              className="flex items-center gap-4 text-white group w-fit cursor-pointer"
            >
              <span className="text-sm tracking-[0.2em] uppercase font-light">Explore More</span>
              <div className="w-8 h-px bg-white group-hover:w-16 transition-all duration-300" />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
