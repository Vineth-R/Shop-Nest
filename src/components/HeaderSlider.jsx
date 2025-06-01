"use client"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowRight, Star, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const HeaderSlider = () => {
  const sliderData = [
    {
      id: 1,
      title: "Premium Audio Experience",
      subtitle: "Immerse yourself in crystal-clear sound with our premium headphones collection",
      offer: "Limited Time 30% Off",
      buttonText1: "Shop Now",
      buttonText2: "View Collection",
      bgGradient: "from-blue-900 via-blue-800 to-blue-700",
      image: "/placeholder.svg?height=400&width=400",
      features: ["Noise Cancellation", "30hr Battery", "Premium Sound"],
    },
    {
      id: 2,
      title: "Next-Gen Gaming",
      subtitle: "Level up your gaming experience with the latest PlayStation 5 and accessories",
      offer: "Exclusive Bundle Deals",
      buttonText1: "Pre-order",
      buttonText2: "Learn More",
      bgGradient: "from-slate-900 via-slate-800 to-blue-900",
      image: "/placeholder.svg?height=400&width=400",
      features: ["4K Gaming", "Ray Tracing", "SSD Storage"],
    },
    {
      id: 3,
      title: "Ultimate Productivity",
      subtitle: "Power meets elegance with the new MacBook Pro for professionals",
      offer: "Free Accessories Worth $200",
      buttonText1: "Buy Now",
      buttonText2: "Compare Models",
      bgGradient: "from-blue-800 via-blue-700 to-blue-600",
      image: "/placeholder.svg?height=400&width=400",
      features: ["M3 Chip", "18hr Battery", "Retina Display"],
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [sliderData.length, mounted])

  if (!mounted) {
    return (
      <div className="relative overflow-hidden mx-4 md:mx-6 lg:mx-8 my-8">
        <Card className="border-0 shadow-2xl">
          <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
            <CardContent className="h-full p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white relative">
                  <div className="absolute top-8 left-8">
                    <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                      <Zap className="w-3 h-3 mr-1" />
                      Limited Time 30% Off
                    </Badge>
                  </div>
                  <div className="space-y-6 mt-8">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                      Premium Audio Experience
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">
                      Immerse yourself in crystal-clear sound with our premium headphones collection
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {["Noise Cancellation", "30hr Battery", "Premium Sound"].map((feature, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-white/10 text-white border-white/30 backdrop-blur-sm"
                        >
                          <Star className="w-3 h-3 mr-1" />
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg">
                        Shop Now
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                      >
                        View Collection
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex items-center justify-center p-8 relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Premium Audio Experience"
                      className="relative max-h-[400px] object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    )
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderData.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length)
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="relative overflow-hidden mx-4 md:mx-6 lg:mx-8 my-8">
      <Card className="border-0 shadow-2xl">
        <div className="relative h-[500px] md:h-[600px] rounded-xl overflow-hidden">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out",
                `bg-gradient-to-br ${slide.bgGradient}`,
                {
                  "opacity-100 z-10 scale-100": currentSlide === index,
                  "opacity-0 z-0 scale-105": currentSlide !== index,
                },
              )}
            >
              <CardContent className="h-full p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 text-white relative">
                    <div className="space-y-6 mt-8">
                      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">{slide.title}</h1>
                      <p className="text-lg md:text-xl opacity-90 max-w-lg leading-relaxed">{slide.subtitle}</p>

                      <div className="flex flex-wrap gap-3">
                        {slide.features.map((feature, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="bg-white/10 text-white border-white/30 backdrop-blur-sm"
                          >
                            <Star className="w-3 h-3 mr-1" />
                            {feature}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg">
                          {slide.buttonText1}
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg"
                        >
                          {slide.buttonText2}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="hidden lg:flex items-center justify-center p-8 relative">
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl"></div>
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={slide.title}
                        className="relative max-h-[400px] object-contain drop-shadow-2xl"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full z-20 backdrop-blur-sm border border-white/20"
          onClick={handlePrevSlide}
        >
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full z-20 backdrop-blur-sm border border-white/20"
          onClick={handleNextSlide}
        >
          <ChevronRight className="h-6 w-6" />
          <span className="sr-only">Next slide</span>
        </Button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20 mb-4">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={cn(
                "h-3 w-3 rounded-full transition-all duration-300 border border-white/30",
                currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Card>
    </div>
  )
}

export default HeaderSlider
