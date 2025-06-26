import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio - HillsView Productions',
  description: 'View our portfolio of professional photography and videography work including weddings, portraits, commercial projects, and events.',
}

const portfolioItems = [
  {
    id: 1,
    title: "Serengeti Wedding",
    category: "Wedding",
    location: "Serengeti National Park",
    year: "2024",
    description: "A breathtaking wedding ceremony against the backdrop of Tanzania's most iconic landscape.",
    tags: ["Wedding", "Landscape", "Wildlife"],
    images: ["/project1.jpg", "/project2.jpg", "/project3.jpg"]
  },
  {
    id: 2,
    title: "Tech Startup Team",
    category: "Corporate",
    location: "Dar es Salaam",
    year: "2024",
    description: "Professional headshots and team photography for a growing fintech company.",
    tags: ["Corporate", "Portrait", "Business"],
    images: ["/project2.jpg", "/project1.jpg", "/project4.jpg"]
  },
  {
    id: 3,
    title: "Kilimanjaro Coffee Launch",
    category: "Commercial",
    location: "Moshi",
    year: "2024",
    description: "Product launch video and photography for premium Tanzanian coffee brand.",
    tags: ["Commercial", "Product", "Video"],
    images: ["/project3.jpg", "/project4.jpg", "/project1.jpg"]
  },
  {
    id: 4,
    title: "Maasai Cultural Portrait Series",
    category: "Portrait",
    location: "Ngorongoro",
    year: "2024",
    description: "Intimate portrait series celebrating Maasai culture and traditions.",
    tags: ["Portrait", "Cultural", "Documentary"],
    images: ["/project4.jpg", "/project1.jpg", "/project2.jpg"]
  },
  {
    id: 5,
    title: "Zanzibar Beach Ceremony",
    category: "Wedding",
    location: "Zanzibar",
    year: "2023",
    description: "Romantic beach wedding with stunning sunset ceremonies on the shores of Zanzibar.",
    tags: ["Wedding", "Beach", "Sunset"],
    images: ["/project1.jpg", "/project3.jpg", "/project4.jpg"]
  },
  {
    id: 6,
    title: "Digital Innovation Conference",
    category: "Event",
    location: "Dar es Salaam",
    year: "2024",
    description: "Comprehensive event coverage for East Africa's largest tech conference.",
    tags: ["Event", "Technology", "Conference"],
    images: ["/project2.jpg", "/project4.jpg", "/project3.jpg"]
  }
]

const categories = ["All", "Wedding", "Portrait", "Commercial", "Event", "Corporate"]

export default function PortfolioPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our 
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of our finest work showcasing diverse photography and videography projects 
            across Tanzania and beyond.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-emerald-500/20"></div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-black rounded-lg font-medium">
                      View Project
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-primary font-medium">{item.category}</span>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.location}</p>
                  <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Start Your Project
          </button>
        </div>
      </section>
    </div>
  )
}
