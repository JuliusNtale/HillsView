'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Menu, X, Sun, Moon } from 'lucide-react'

const navigation = [
  { name: 'Home',      href: '/' },
  { name: 'Services',  href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Contact',   href: '/contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen]     = useState(false)
  const [mounted, setMounted]   = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme }     = useTheme()

  useEffect(() => {
    setMounted(true)
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/92 backdrop-blur-md border-b border-white/5 shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex justify-between items-center py-5">

          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="font-heading text-xl font-bold text-white tracking-tight">
              HillsView
            </span>
            <span className="text-[9px] text-amber-400 font-light tracking-[0.35em] uppercase group-hover:text-amber-300 transition-colors">
              Productions
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/65 hover:text-white text-sm font-light tracking-wide transition-colors duration-200 relative group/link"
              >
                {item.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-400 transition-all duration-300 group-hover/link:w-full" />
              </Link>
            ))}

            <Link
              href="/contact"
              className="px-6 py-2.5 bg-amber-400 text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-amber-300 active:scale-95 transition-all"
            >
              Get Quote
            </Link>

            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 text-white/40 hover:text-white/80 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark'
                  ? <Sun className="h-4 w-4" />
                  : <Moon className="h-4 w-4" />}
              </button>
            )}
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 text-white/40 hover:text-white/80 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark'
                  ? <Sun className="h-4 w-4" />
                  : <Moon className="h-4 w-4" />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-white/65 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-black/97 backdrop-blur-md border-t border-white/5 pb-8 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-2 py-3.5 text-white/65 hover:text-amber-400 transition-colors text-sm font-light tracking-wide group/mlink"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-4 h-px bg-transparent group-hover/mlink:bg-amber-400 transition-colors" />
                {item.name}
              </Link>
            ))}
            <div className="px-2 mt-5">
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3.5 bg-amber-400 text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-amber-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
