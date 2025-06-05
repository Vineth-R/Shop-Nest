import React from "react";
import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container mx-auto px-6 py-8">
        <div className="flex md:flex-row flex-col-reverse items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Image
                className="hidden md:block h-8 w-auto"
                src={assets.logo || "/placeholder.svg?height=32&width=120&query=shop%20logo"}
                alt="logo"
              />
              <div className="hidden md:block h-8 w-px bg-gradient-to-b from-gray-300 to-gray-500"></div>
            </div>
            <p className="text-center text-sm text-gray-600 font-medium">
              Copyright 2025 © <span className="text-orange-600">greatstack.dev</span> All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden md:block">Follow us:</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="group p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={assets.facebook_icon || "/placeholder.svg?height=24&width=24&query=facebook%20icon"}
                  alt="facebook_icon"
                  width={24}
                  height={24}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={assets.twitter_icon || "/placeholder.svg?height=24&width=24&query=twitter%20icon"}
                  alt="twitter_icon"
                  width={24}
                  height={24}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </a>
              <a
                href="#"
                className="group p-2 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:scale-110"
              >
                <Image
                  src={assets.instagram_icon || "/placeholder.svg?height=24&width=24&query=instagram%20icon"}
                  alt="instagram_icon"
                  width={24}
                  height={24}
                  className="group-hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
