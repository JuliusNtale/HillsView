import Link from 'next/link'
import { Camera, Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Main footer content */}
        <div className="section-spacing">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Camera className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground">HillsView</h3>
                  <span className="text-xs text-muted-foreground font-medium tracking-wider">PRODUCTIONS</span>
                </div>
              </div>
              <p className="text-muted-foreground font-body leading-relaxed">
                Premier photography and videography studio creating exceptional visual experiences 
                for clients across Tanzania and beyond.
              </p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/hillsview_studioz?igsh=MXhva3Bhd3cwZDVqZg%3D%3D&utm_source=qr" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow us on Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow us on Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Subscribe to our YouTube channel">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Connect with us on LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li><Link href="/services" className="hover:text-primary transition-colors">Corporate Events</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Professional Portraits</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Commercial Video</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Wedding Photography</Link></li>
                <li><Link href="/services" className="hover:text-primary transition-colors">Product Photography</Link></li>
              </ul>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Get In Touch</h4>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li className="flex items-start space-x-3">
                  <Mail className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>info@hillsviewproduction.com</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Phone className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>+255 123 456 789</span>
                </li>
                <li className="flex items-start space-x-3">
                  <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span>Dar es Salaam, Tanzania</span>
                </li>
              </ul>
              
              {/* Business Hours */}
              <div className="pt-4">
                <h5 className="font-semibold text-foreground mb-2">Business Hours</h5>
                <div className="text-sm text-muted-foreground space-y-1">
                  <div>Mon - Fri: 8:00 AM - 6:00 PM</div>
                  <div>Sat: 9:00 AM - 4:00 PM</div>
                  <div>Sun: By appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="border-t border-border pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground font-body">
                &copy; 2024 HillsView Productions. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Professional Photography & Videography Services in Tanzania
              </p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="btn-primary">Get Quote</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
