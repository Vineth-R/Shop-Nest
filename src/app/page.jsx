"use client"
import { useEffect, useState } from "react"
import HeaderSlider from "@/components/HeaderSlider"
import HomeProducts from "@/components/HomeProducts"
import Banner from "@/components/Banner"
import NewsLetter from "@/components/NewsLetter"
import FeaturedProduct from "@/components/FeaturedProduct"
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
          <main>
            {/* <div className="h-[300px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 mx-4 md:mx-6 lg:mx-8 my-8 rounded-xl flex items-center justify-center">
              <div className="text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Loading...</h1>
              </div>
            </div>
            <div className="container px-4 md:px-6 lg:px-8 mx-auto">
              <div className="h-96 bg-gray-100 rounded-xl mb-8"></div>
              <div className="h-96 bg-gray-100 rounded-xl mb-8"></div>
              <div className="h-96 bg-gray-100 rounded-xl mb-8"></div>
              <div className="h-96 bg-gray-100 rounded-xl mb-8"></div>
            </div> */}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider defaultTheme="light" storageKey="shopnest-theme">
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <main>
          <HeaderSlider />
          <div className="container px-4 md:px-6 lg:px-8 mx-auto">
            <HomeProducts />
            {/* <Banner /> */}
            <NewsLetter />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Home
