import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Award-winning Tanzanian photographer & software engineer with a passion for capturing life's most precious moments through creative visual storytelling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in photography and videography, I specialize in 
              wedding photography, portrait sessions, and commercial video production. My unique 
              background in software engineering brings a technical precision to my creative work.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold text-primary">500+</h4>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-semibold text-primary">50+</h4>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/ntale-optimized.jpg"
                alt="Julius Ntale - Photographer"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
