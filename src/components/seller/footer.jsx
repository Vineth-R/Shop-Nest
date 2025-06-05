"use client"
import { Card } from "@/components/ui/card"
import { ShoppingBag, Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <Card className="mt-8 border-0 bg-gradient-to-r from-gray-50 to-blue-50 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between p-6 gap-4">
        {/* Brand Section */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
              <ShoppingBag className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              ShopNest
            </span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <p className="text-sm text-gray-600">Copyright 2025 © ShopNest.dev All Rights Reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Facebook className="h-4 w-4 text-blue-600" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Twitter className="h-4 w-4 text-blue-400" />
          </a>
          <a
            href="#"
            className="flex items-center justify-center w-8 h-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Instagram className="h-4 w-4 text-pink-600" />
          </a>
        </div>
      </div>
    </Card>
  )
}

export default Footer

