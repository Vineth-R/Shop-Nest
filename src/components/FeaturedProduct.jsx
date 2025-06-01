import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Star, Award, Zap, Volume2, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const FeaturedProduct = () => {
  const featuredProduct = {
    name: "Sony WH-1000XM5",
    tagline: "Industry-Leading Noise Cancellation",
    description:
      "Experience the next level of silence with our most advanced noise cancelling headphones yet. Perfect for work, travel, or just enjoying your music without distractions.",
    price: 399.99,
    originalPrice: 449.99,
    rating: 4.9,
    reviews: 1245,
    image: "/placeholder.svg?height=500&width=500",
    features: [
      { icon: <Volume2 className="w-4 h-4" />, text: "Industry-leading noise cancellation" },
      { icon: <Zap className="w-4 h-4" />, text: "30-hour battery life" },
      { icon: <Award className="w-4 h-4" />, text: "Premium sound quality" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Crystal clear calls with 8 microphones" },
      { icon: <CheckCircle className="w-4 h-4" />, text: "Quick charge (5min = 3hrs playback)" },
    ],
    colors: ["#1E293B", "#E5E7EB", "#78350F"],
  }

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white mb-4">Featured Product</Badge>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Product of the Month</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto"></div>
      </div>

      <Card className="overflow-hidden border-0 shadow-2xl bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 p-8 md:p-16 flex items-center justify-center relative">
            <div className="absolute top-8 left-8">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Award className="w-3 h-3 mr-1" />
                Best Seller
              </Badge>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150"></div>
              <img
                src={featuredProduct.image || "/placeholder.svg"}
                alt={featuredProduct.name}
                className="relative max-h-[450px] object-contain drop-shadow-2xl"
              />
            </div>
          </div>

          <CardContent className="p-8 md:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(featuredProduct.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <span className="text-lg font-semibold text-gray-900">{featuredProduct.rating}</span>
              <span className="text-gray-600">({featuredProduct.reviews} reviews)</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">{featuredProduct.name}</h3>
            <p className="text-xl text-blue-600 font-semibold mb-6">{featuredProduct.tagline}</p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">{featuredProduct.description}</p>

            <div className="space-y-4 mb-8">
              {featuredProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <p className="text-sm text-gray-600 mb-3 font-medium">Available Colors:</p>
              <div className="flex items-center gap-3">
                {featuredProduct.colors.map((color, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 rounded-full border-2 border-gray-200 ring-2 ring-transparent hover:ring-blue-500 focus:ring-blue-600 focus:outline-none transition-all shadow-md"
                    style={{ backgroundColor: color }}
                    aria-label={`Select color ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-10">
              <span className="text-4xl font-bold text-gray-900">${featuredProduct.price}</span>
              {featuredProduct.originalPrice && (
                <span className="text-xl text-gray-500 line-through">${featuredProduct.originalPrice}</span>
              )}
              <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                Save ${(featuredProduct.originalPrice - featuredProduct.price).toFixed(2)}
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold shadow-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </section>
  )
}

export default FeaturedProduct
