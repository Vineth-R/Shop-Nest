"use client"
import { useEffect, useState } from "react"
import HeaderSlider from "@/components/HeaderSlider"
import HomeProducts from "@/components/HomeProducts"
import NewsLetter from "@/components/NewsLetter"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"

const Home = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <ThemeProvider defaultTheme="light" storageKey="shopnest-theme">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Navbar />
        
          <Footer />
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="shopnest-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
          <HeaderSlider />
          <div className="container px-4 md:px-6 lg:px-8 mx-auto">
            <HomeProducts />
          
            <NewsLetter />
          </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Home
