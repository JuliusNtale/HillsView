import Image from 'next/image'
import { Award, Camera, Code, Globe } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-spacing bg-secondary/20">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            About HillsView Productions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto font-body">
            A premier photography and videography studio combining artistic vision 
            with technical excellence to deliver exceptional visual experiences for clients across Tanzania and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed font-body mb-6">
                Founded with a vision to elevate visual storytelling in Tanzania, HillsView Productions 
                has grown to become a trusted partner for corporate events, professional portraits, 
                and commercial media production. Our unique approach combines artistic creativity 
                with cutting-edge technology to deliver results that exceed expectations.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                Our experienced team of photographers and videographers brings both technical precision 
                and creative vision to every project, ensuring exceptional quality and professional service.
              </p>
            </div>

            {/* Key Differentiators */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Award-Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized excellence in photography</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Professional Grade</h4>
                  <p className="text-sm text-muted-foreground">Latest equipment & techniques</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tech-Enhanced</h4>
                  <p className="text-sm text-muted-foreground">Modern digital workflows</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Global Reach</h4>
                  <p className="text-sm text-muted-foreground">Serving clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Camera className="h-24 w-24 text-primary mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-heading font-bold text-foreground">HillsView Productions</h3>
                  <p className="text-muted-foreground font-body">Professional Photography Studio</p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Established 2019</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Professional Badge */}
            <div className="absolute -bottom-6 -right-6 bg-background border border-border rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-semibold text-foreground text-sm">Certified Studio</div>
                  <div className="text-xs text-muted-foreground">Tanzania Photography Association</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
