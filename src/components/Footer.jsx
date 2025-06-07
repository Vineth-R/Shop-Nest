import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ShoppingBag,
  CreditCard,
  Shield,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=400')] opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 py-16 relative">
        {/* Top section with payment methods */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-16">
          <CardContent className="p-8">
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl group-hover:scale-110 transition-transform">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Secure Payment</h4>
                  <p className="text-sm opacity-80">SSL Protected</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">2-Year Warranty</h4>
                  <p className="text-sm opacity-80">On Electronics</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transform">
                  <ShoppingBag className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold">Free Shipping</h4>
                  <p className="text-sm opacity-80">Orders over $100</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl">
                <ShoppingBag className="h-7 w-7 text-white" />
              </div>
              <span className="text-2xl font-bold">ShopNest</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              ShopNest offers a premium shopping experience with the latest tech products, exceptional customer service,
              and lightning-fast shipping worldwide.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, color: "hover:bg-blue-600" },
                { icon: Twitter, color: "hover:bg-sky-500" },
                { icon: Instagram, color: "hover:bg-pink-600" },
                { icon: Youtube, color: "hover:bg-red-600" },
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className={`rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 ${social.color} transition-all duration-300 hover:scale-110`}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/all-products", label: "Shop" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-6">Customer Service</h3>
            <ul className="space-y-4">
              {[
                { href: "/faq", label: "FAQ" },
                { href: "/shipping-policy", label: "Shipping Policy" },
                { href: "/terms", label: "Terms & Conditions" },
                { href: "/privacy", label: "Privacy Policy" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300">123 Tech Street, San Francisco, CA 94107</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-slate-300">support@shopnest.com</span>
              </div>
            </div>

            
          </div>
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 text-center md:text-left">
            © {currentYear} ShopNest. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer