import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hills-optimized.jpg"
          alt="HillsView Productions"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold satoshi">
            <span className="block text-foreground">Creative</span>
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Visual Storyteller
            </span>
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Award-winning Tanzanian photographer & software engineer specializing in 
            capturing life's most precious moments through the lens of creativity and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
              View Portfolio
            </button>
            
            <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold text-lg hover:bg-secondary transition-colors">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}
