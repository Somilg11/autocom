import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className=" py-8">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold mb-4">Slide</h3>
            <p>Effortless Instagram engagement for businesses and creators.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center">
          <p>&copy; 2025 Slide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

