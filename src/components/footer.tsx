import Link from 'next/link'
import { Instagram, Youtube, Linkedin, Facebook, Mail, Phone, MapPin } from 'lucide-react'

const services = [
  'Corporate Events',
  'Professional Portraits',
  'Commercial Video',
  'Wedding Photography',
  'Product Photography',
]

const quickLinks: [string, string][] = [
  ['Home',           '/'],
  ['Portfolio',      '/portfolio'],
  ['Services',       '/services'],
  ['Contact',        '/contact'],
  ['Privacy Policy', '#'],
]

export function Footer() {
  return (
    <footer className="bg-black">
      {/* Top amber accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-amber-400/35 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="leading-none">
              <h3 className="font-heading text-2xl font-bold text-white">HillsView</h3>
              <span className="text-[9px] text-amber-400 font-light tracking-[0.35em] uppercase">Productions</span>
            </div>
            <p className="text-zinc-500 text-sm font-light leading-relaxed">
              Premier photography and videography studio creating exceptional visual
              experiences across Tanzania and beyond.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/hillsview_studioz?igsh=MXhva3Bhd3cwZDVqZg%3D%3D&utm_source=qr', label: 'Instagram', external: true },
                { icon: Facebook,  href: '#',  label: 'Facebook',  external: false },
                { icon: Youtube,   href: '#',  label: 'YouTube',   external: false },
                { icon: Linkedin,  href: '#',  label: 'LinkedIn',  external: false },
              ].map(({ icon: Icon, href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="text-zinc-600 hover:text-amber-400 transition-colors duration-200"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-4 h-px bg-amber-400" />
              <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-light">Services</h4>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-zinc-500 hover:text-amber-400 transition-colors text-sm font-light"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-4 h-px bg-amber-400" />
              <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-light">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              {quickLinks.map(([name, href]) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-zinc-500 hover:text-amber-400 transition-colors text-sm font-light"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-4 h-px bg-amber-400" />
              <h4 className="text-white text-[10px] tracking-[0.25em] uppercase font-light">Get In Touch</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-amber-400/55 flex-shrink-0" />
                <span className="text-zinc-500 text-sm font-light">info@hillsviewproduction.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-amber-400/55 flex-shrink-0" />
                <span className="text-zinc-500 text-sm font-light">+255 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-amber-400/55 flex-shrink-0" />
                <span className="text-zinc-500 text-sm font-light">Dar es Salaam, Tanzania</span>
              </li>
            </ul>
            <div className="space-y-1 pt-1">
              <p className="text-zinc-600 text-xs font-light">Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-zinc-600 text-xs font-light">Sat: 9:00 AM – 4:00 PM</p>
              <p className="text-zinc-600 text-xs font-light">Sun: By appointment</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-sm font-light">
            © 2024 HillsView Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-zinc-600">
            <Link href="#" className="hover:text-amber-400 transition-colors font-light text-xs tracking-wide">
              Terms
            </Link>
            <Link href="#" className="hover:text-amber-400 transition-colors font-light text-xs tracking-wide">
              Privacy
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-amber-400 text-black font-semibold text-xs tracking-[0.15em] uppercase hover:bg-amber-300 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
