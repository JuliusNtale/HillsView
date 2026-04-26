import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - HillsView Productions',
  description: 'Get in touch with HillsView Productions for professional photography and videography services in Tanzania.',
}

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    lines: ['info@hillsviewproduction.com', 'bookings@hillsviewproduction.com'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+255 123 456 789', '+255 987 654 321'],
  },
  {
    icon: MapPin,
    label: 'Location',
    lines: ['Dar es Salaam, Tanzania', 'Serving all of East Africa'],
  },
  {
    icon: Clock,
    label: 'Response Time',
    lines: ['Usually within 24 hours', 'Emergency bookings available'],
  },
]

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'For weddings, we recommend booking 6–12 months in advance. For other services, 2–4 weeks notice is usually sufficient, though we can often accommodate last-minute requests.',
  },
  {
    q: 'Do you travel for destination events?',
    a: 'Yes — we love travelling and have experience shooting across Tanzania and East Africa. Travel fees may apply depending on location and duration.',
  },
  {
    q: 'What\'s included in your packages?',
    a: 'Each package varies, but typically includes professional editing, an online gallery, and high-resolution downloads. Full inclusions are detailed on our services page.',
  },
  {
    q: 'How long until I receive my photos or videos?',
    a: 'Turnaround varies by service: portraits (1–2 weeks), weddings (4–6 weeks), commercial projects (2–3 weeks). Rush delivery is available for an additional fee.',
  },
]

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen">

      {/* ── Hero ── */}
      <section className="relative h-[70vh] flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=85&auto=format&fit=crop"
          alt="Event photography atmosphere"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/30" />
        <div className="film-grain absolute inset-0 opacity-[0.03] pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Reach Out</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white leading-none tracking-tight">
            Let&apos;s Create<br />
            <span className="italic font-light text-amber-100">Something Beautiful</span>
          </h1>
          <p className="text-zinc-400 font-light text-lg mt-6 max-w-md leading-relaxed">
            We&apos;d love to hear about your project and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* ── Contact + Form ── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24">

            {/* ── Left: contact info ── */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-px bg-amber-400" />
                  <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Contact Details</span>
                </div>
                <h2 className="text-4xl font-bold text-white leading-tight">Get In Touch</h2>
                <p className="text-zinc-500 font-light leading-relaxed mt-4">
                  Whether you&apos;re planning a wedding, need professional headshots, or want compelling
                  commercial content — we&apos;re here to help.
                </p>
              </div>

              {/* Contact cards */}
              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, lines }) => (
                  <div
                    key={label}
                    className="flex items-start gap-5 p-5 border border-white/5 hover:border-amber-400/15 transition-colors group"
                  >
                    <div className="w-10 h-10 border border-amber-400/30 flex items-center justify-center flex-shrink-0 group-hover:border-amber-400/60 transition-colors">
                      <Icon className="h-4 w-4 text-amber-400/70" />
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-light mb-1">{label}</p>
                      {lines.map((line) => (
                        <p key={line} className="text-zinc-300 text-sm font-light">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div>
                <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase font-light mb-4">Follow Our Work</p>
                <div className="flex gap-3">
                  {[
                    { icon: Instagram, href: 'https://www.instagram.com/hillsview_studioz?igsh=MXhva3Bhd3cwZDVqZg%3D%3D&utm_source=qr', label: 'Instagram', external: true },
                    { icon: Youtube,   href: '#',  label: 'YouTube',   external: false },
                    { icon: Linkedin,  href: '#',  label: 'LinkedIn',  external: false },
                    { icon: Facebook,  href: '#',  label: 'Facebook',  external: false },
                  ].map(({ icon: Icon, href, label, external }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="w-10 h-10 border border-white/10 flex items-center justify-center text-zinc-500 hover:text-amber-400 hover:border-amber-400/40 transition-colors"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ── Right: form ── */}
            <div className="bg-zinc-950 p-8 md:p-12 border border-white/5">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-amber-400" />
                <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">Send a Message</span>
              </div>

              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                    Service *
                  </label>
                  <select
                    id="service"
                    required
                    className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light focus:outline-none focus:border-amber-400/50 transition-colors appearance-none"
                  >
                    <option value="" className="bg-zinc-900">Select a service</option>
                    <option value="wedding"    className="bg-zinc-900">Wedding Photography</option>
                    <option value="portrait"   className="bg-zinc-900">Portrait Session</option>
                    <option value="commercial" className="bg-zinc-900">Commercial Video</option>
                    <option value="event"      className="bg-zinc-900">Event Coverage</option>
                    <option value="other"      className="bg-zinc-900">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="date" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light focus:outline-none focus:border-amber-400/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light focus:outline-none focus:border-amber-400/50 transition-colors appearance-none"
                    >
                      <option value=""         className="bg-zinc-900">Select range</option>
                      <option value="under500" className="bg-zinc-900">Under $500</option>
                      <option value="500-1k"   className="bg-zinc-900">$500 – $1,000</option>
                      <option value="1k-2.5k"  className="bg-zinc-900">$1,000 – $2,500</option>
                      <option value="2.5k-5k"  className="bg-zinc-900">$2,500 – $5,000</option>
                      <option value="5k+"      className="bg-zinc-900">$5,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-zinc-400 text-xs tracking-[0.15em] uppercase font-light mb-2">
                    About Your Project *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Describe your vision, timeline, and any specific requirements…"
                    className="w-full px-4 py-3.5 bg-black border border-white/10 text-white text-sm font-light placeholder-zinc-700 focus:outline-none focus:border-amber-400/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-amber-400 text-black font-semibold text-sm tracking-[0.15em] uppercase hover:bg-amber-300 active:scale-[0.99] transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-8 h-px bg-amber-400" />
              <span className="text-amber-400 text-xs tracking-[0.3em] uppercase font-light">FAQ</span>
              <div className="w-8 h-px bg-amber-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="border border-white/5 hover:border-amber-400/15 transition-colors p-6 group"
              >
                <h3 className="font-semibold text-white mb-3 group-hover:text-amber-100 transition-colors">
                  {faq.q}
                </h3>
                <p className="text-zinc-500 font-light text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA strip ── */}
      <div className="border-t border-white/5 py-16 text-center">
        <p className="text-zinc-500 font-light mb-6">
          Still have questions?{' '}
          <Link href="mailto:info@hillsviewproduction.com" className="text-amber-400 hover:text-amber-300 transition-colors">
            Email us directly
          </Link>
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href="/services"  className="btn-cinematic-outline">View Services</Link>
          <Link href="/portfolio" className="btn-cinematic-outline">See Portfolio</Link>
        </div>
      </div>

    </div>
  )
}
