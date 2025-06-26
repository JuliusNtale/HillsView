import Image from 'next/image'

const portfolioItems = [
  {
    id: 1,
    title: "Wedding at Kilimanjaro",
    category: "Wedding",
    image: "/project1.jpg",
    description: "A beautiful wedding ceremony with Mount Kilimanjaro as the backdrop."
  },
  {
    id: 2,
    title: "Corporate Headshots",
    category: "Portrait",
    image: "/project2.jpg",
    description: "Professional headshots for a tech startup team."
  },
  {
    id: 3,
    title: "Product Launch Event",
    category: "Commercial",
    image: "/project3.jpg",
    description: "High-energy commercial video for a product launch."
  },
  {
    id: 4,
    title: "Family Portrait Session",
    category: "Portrait",
    image: "/project4.jpg",
    description: "Candid family moments captured in natural lighting."
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of my recent work showcasing diverse photography and videography projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl bg-card">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-4 py-2 bg-white text-black rounded-lg font-medium">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-primary font-medium">{item.category}</span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}
