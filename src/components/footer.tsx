export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">HillsView Productions</h3>
            <p className="text-muted-foreground">
              Professional photography and videography services in Tanzania.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Commercial Video</li>
              <li>Event Coverage</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>hello@hillsviewproduction.com</li>
              <li>+255 123 456 789</li>
              <li>Dar es Salaam, Tanzania</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary">Instagram</a>
              <a href="#" className="text-muted-foreground hover:text-primary">YouTube</a>
              <a href="#" className="text-muted-foreground hover:text-primary">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 HillsView Productions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
