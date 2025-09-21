import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Award, Users, Camera } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hills-optimized.jpg"
          alt="HillsView Productions Professional Photography"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto container-padding text-center">
        <div className="space-y-8 animate-fade-in-up">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground mb-8">
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-primary" />
              <span>Award-Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>500+ Happy Clients</span>
            </div>
            <div className="flex items-center space-x-2">
              <Camera className="h-4 w-4 text-primary" />
              <span>5+ Years Experience</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold">
            <span className="block text-foreground">Premier</span>
            <span className="block bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Photography Studio
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            Creating exceptional visual experiences for corporate events, professional portraits, 
            and commercial media production. Based in Tanzania, serving clients globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
              View Our Work
              <ArrowRight className="h-4 w-4" />
            </Link>
            
            <button className="btn-secondary inline-flex items-center gap-2">
              <Play className="h-4 w-4" />
              Watch Showreel
            </button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24h</div>
              <div className="text-sm text-muted-foreground font-medium">Delivery Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
