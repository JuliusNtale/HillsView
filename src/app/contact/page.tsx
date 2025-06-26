import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - HillsView Productions',
  description: 'Get in touch with HillsView Productions for professional photography and videography services in Tanzania.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Create
            <span className="block bg-gradient-to-r from-primary to-emerald-600 bg-clip-text text-transparent">
              Something Beautiful
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready to capture your special moments? We'd love to hear about your project 
            and discuss how we can bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Whether you're planning a wedding, need professional headshots, or want to create 
                  compelling commercial content, we're here to help bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@hillsviewproduction.com</p>
                    <p className="text-muted-foreground">julius@hillsviewproduction.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+255 123 456 789</p>
                    <p className="text-muted-foreground">+255 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
                    <p className="text-muted-foreground">Serving all of East Africa</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <span className="text-primary">⏰</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Response Time</h3>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                    <p className="text-muted-foreground">Emergency bookings available</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Follow Our Work</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    IG
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    YT
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    LI
                  </a>
                  <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    FB
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl border border-border">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="commercial">Commercial Video</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium mb-2">
                    Event Date (if applicable)
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Describe your vision, timeline, and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">How far in advance should I book?</h3>
              <p className="text-muted-foreground">
                For weddings, we recommend booking 6-12 months in advance. For other services, 
                2-4 weeks notice is usually sufficient, though we can often accommodate last-minute requests.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Do you travel for destination events?</h3>
              <p className="text-muted-foreground">
                Yes! We love traveling and have experience shooting across Tanzania and East Africa. 
                Travel fees may apply depending on the location and duration.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">What's included in your packages?</h3>
              <p className="text-muted-foreground">
                Each package varies, but typically includes professional editing, online gallery, 
                and high-resolution downloads. Specific inclusions are detailed on our services page.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">How long until I receive my photos/videos?</h3>
              <p className="text-muted-foreground">
                Turnaround time varies by service: portraits (1-2 weeks), weddings (4-6 weeks), 
                commercial projects (2-3 weeks). Rush delivery is available for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
