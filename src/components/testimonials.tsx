'use client'

import { Star, Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechCorp Tanzania",
    image: "/project1.jpg", // placeholder
    rating: 5,
    content: "HillsView Productions delivered exceptional quality for our corporate event. Their professionalism and attention to detail exceeded our expectations. The photos perfectly captured the essence of our brand.",
  },
  {
    id: 2,
    name: "Michael Anderson",
    title: "Marketing Director, InnovateEast",
    image: "/project2.jpg", // placeholder
    rating: 5,
    content: "Working with HillsView Productions was a game-changer for our marketing campaigns. Their creative vision and technical expertise resulted in stunning visuals that significantly boosted our engagement rates.",
  },
  {
    id: 3,
    name: "Amara Mbeki",
    title: "Event Coordinator, Dar es Salaam Hotels",
    image: "/project3.jpg", // placeholder
    rating: 5,
    content: "The wedding photography and videography services were absolutely phenomenal. Every moment was captured beautifully, and the final deliverables exceeded all our expectations.",
  },
]

export function Testimonials() {
  return (
    <section className="section-spacing bg-secondary/30">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Don't just take our word for it. Here's what our satisfied clients have to say about 
            our professional photography and videography services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="h-8 w-8 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed font-body">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden bg-secondary">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}