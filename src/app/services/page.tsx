import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services - HillsView Productions',
  description: 'Professional photography and videography services including wedding photography, portraits, commercial video, and event coverage.',
}

const services = [
  {
    title: "Wedding Photography",
    description: "Capture your special day with stunning, timeless photos that tell your unique love story. Our wedding packages include comprehensive coverage from preparation to reception.",
    price: "From $1,500",
    features: [
      "8+ hours of coverage",
      "500+ professionally edited photos",
      "Online gallery with download access",
      "Print release for personal use",
      "Engagement session included",
      "Second photographer option"
    ],
    image: "/wedding-hero.jpg"
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits for individuals, families, and corporate headshots. We create compelling images that capture personality and professionalism.",
    price: "From $300",
    features: [
      "1-2 hour session",
      "50+ edited photos",
      "Multiple outfit changes",
      "Studio or location options",
      "Professional retouching",
      "Same-day preview available"
    ],
    image: "/portrait-hero.jpg"
  },
  {
    title: "Commercial Video",
    description: "High-quality video production for businesses, promotional content, and brand storytelling. From concept to final edit, we bring your vision to life.",
    price: "From $800",
    features: [
      "4K video quality",
      "Professional editing and color grading",
      "Multiple format delivery",
      "Script consultation",
      "Quick 48-hour turnaround",
      "Drone footage available"
    ],
    image: "/commercial-hero.jpg"
  },
  {
    title: "Event Coverage",
    description: "Comprehensive photo and video coverage for corporate events, conferences, and special occasions. We document every important moment.",
    price: "From $600",
    features: [
      "Full event documentation",
      "Same-day highlight reel",
      "Multiple photographer coverage",
      "Live streaming options",
      "Social media ready content",
      "Custom branded delivery"
    ],
    image: "/event-hero.jpg"
  }
]

export default function ServicesPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Professional 
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Photography & Video Services
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, we capture life's most precious moments 
            with artistic vision and technical excellence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-colors">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-emerald-500/20"></div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss your vision and create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Get Free Quote
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg hover:bg-secondary transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
