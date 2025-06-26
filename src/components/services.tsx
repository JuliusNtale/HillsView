const services = [
  {
    title: "Wedding Photography",
    description: "Capture your special day with stunning, timeless photos that tell your unique love story.",
    price: "From $1,500",
    features: ["8+ hours coverage", "500+ edited photos", "Online gallery", "Print release"]
  },
  {
    title: "Portrait Sessions",
    description: "Professional portraits for individuals, families, and corporate headshots.",
    price: "From $300",
    features: ["1-2 hour session", "50+ edited photos", "Multiple locations", "Outfit changes"]
  },
  {
    title: "Commercial Video",
    description: "High-quality video production for businesses, events, and promotional content.",
    price: "From $800",
    features: ["4K video quality", "Professional editing", "Multiple formats", "Quick turnaround"]
  },
  {
    title: "Event Coverage",
    description: "Comprehensive photo and video coverage for corporate events and special occasions.",
    price: "From $600",
    features: ["Full event coverage", "Same-day highlights", "Multiple photographers", "Live streaming option"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional photography and videography services tailored to capture your most important moments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="text-2xl font-bold text-primary mb-4">{service.price}</div>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
