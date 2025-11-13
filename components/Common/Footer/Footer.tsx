"use client"

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Security
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Follow</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 Your Brand. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-accent transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
