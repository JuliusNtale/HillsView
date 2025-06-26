export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            Ready to capture your special moments? Let's discuss your project.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-muted-foreground">hello@hillsviewproduction.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-muted-foreground">+255 123 456 789</p>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-muted-foreground">Dar es Salaam, Tanzania</p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-6 rounded-xl border border-border">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-border rounded-md bg-background" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-border rounded-md bg-background" 
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium mb-2">Service</label>
                <select 
                  id="service" 
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                >
                  <option>Wedding Photography</option>
                  <option>Portrait Session</option>
                  <option>Commercial Video</option>
                  <option>Event Coverage</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
