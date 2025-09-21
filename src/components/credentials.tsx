'use client'

import { Award, Camera, Users, Globe, CheckCircle } from 'lucide-react'

const credentials = [
  {
    icon: Award,
    title: "Professional Certification",
    description: "Certified Professional Photographer (CPP) - Tanzania Photography Association",
  },
  {
    icon: Camera,
    title: "Technical Expertise",
    description: "Advanced certification in Adobe Creative Suite, DaVinci Resolve, and professional equipment",
  },
  {
    icon: Users,
    title: "Corporate Experience",
    description: "5+ years serving Fortune 500 companies and government institutions",
  },
  {
    icon: Globe,
    title: "International Recognition",
    description: "Award-winning photography featured in international publications and exhibitions",
  },
]

const achievements = [
  "Featured photographer in National Geographic Tanzania",
  "Winner - Best Corporate Photography 2023",
  "Certified drone pilot for aerial photography",
  "Member of International Association of Professional Photographers",
  "Licensed commercial photography business in Tanzania",
  "ISO 9001 certified quality management processes",
]

export function Credentials() {
  return (
    <section className="section-spacing bg-background">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Professional Credentials & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
            Our commitment to excellence is backed by professional certifications, 
            industry recognition, and years of proven expertise.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
                <credential.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                {credential.description}
              </p>
            </div>
          ))}
        </div>

        {/* Achievements List */}
        <div className="bg-secondary/30 rounded-lg p-8">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground font-body">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-lg p-8">
            <blockquote className="text-lg md:text-xl text-foreground font-body italic leading-relaxed">
              "Our mission is to deliver exceptional visual storytelling that captures the essence 
              of your brand and moments. With professional-grade equipment, certified expertise, 
              and a commitment to excellence, we ensure every project meets the highest industry standards."
            </blockquote>
            <footer className="mt-6">
              <cite className="text-primary font-semibold">HillsView Productions Team</cite>
              <div className="text-muted-foreground">Professional Photography & Videography Studio</div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  )
}