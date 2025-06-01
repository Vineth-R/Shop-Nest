"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, ChevronRight, Eye, TrendingUp } from "lucide-react"

const HomeProducts = () => {
  // Mock products data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones Pro",
      price: 199.99,
      rating: 4.8,
      reviews: 120,
      image: "/placeholder.svg?height=300&width=300",
      category: "Audio",
      isNew: true,
      discount: 15,
      isTrending: true,
    },
    {
      id: 2,
      name: "Smart Watch Series 7",
      price: 349.99,
      originalPrice: 399.99,
      rating: 4.5,
      reviews: 86,
      image: "/placeholder.svg?height=300&width=300",
      category: "Wearables",
      isNew: false,
      discount: 12,
    },
    {
      id: 3,
      name: "Portable Bluetooth Speaker",
      price: 79.99,
      rating: 4.3,
      reviews: 42,
      image: "/placeholder.svg?height=300&width=300",
      category: "Audio",
      isNew: false,
    },
    {
      id: 4,
      name: "Wireless Earbuds Pro",
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.7,
      reviews: 215,
      image: "/placeholder.svg?height=300&width=300",
      category: "Audio",
      isNew: true,
      discount: 18,
      isTrending: true,
    },
    {
      id: 5,
      name: "4K Action Camera",
      price: 249.99,
      rating: 4.6,
      reviews: 67,
      image: "/placeholder.svg?height=300&width=300",
      category: "Cameras",
      isNew: false,
    },
    {
      id: 6,
      name: "Gaming Controller Elite",
      price: 59.99,
      originalPrice: 69.99,
      rating: 4.4,
      reviews: 93,
      image: "/placeholder.svg?height=300&width=300",
      category: "Gaming",
      isNew: false,
      discount: 14,
    },
    {
      id: 7,
      name: "Adjustable Phone Stand",
      price: 24.99,
      rating: 4.2,
      reviews: 38,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      isNew: false,
    },
    {
      id: 8,
      name: "Fast Wireless Charger",
      price: 39.99,
      originalPrice: 49.99,
      rating: 4.5,
      reviews: 74,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      isNew: true,
      discount: 20,
    },
  ]

  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Popular Products</h2>
          <p className="text-gray-600">Discover our best-selling items</p>
        </div>
        <Button variant="outline" className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
          View All
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Card
            key={product.id}
            className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md bg-white"
          >
            <div className="relative p-4">
              <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">New</Badge>
                )}
                {product.isTrending && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Hot
                  </Badge>
                )}
              </div>

              {product.discount && (
                <Badge
                  variant="destructive"
                  className="absolute top-2 right-2 z-10 bg-gradient-to-r from-red-500 to-red-600"
                >
                  -{product.discount}%
                </Badge>
              )}

              <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 h-[240px] flex items-center justify-center relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
              </div>

              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white shadow-md">
                  <Heart className="h-4 w-4 text-blue-600" />
                </Button>
                <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white shadow-md">
                  <Eye className="h-4 w-4 text-blue-600" />
                </Button>
              </div>
            </div>

            <CardContent className="p-6">
              <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 mb-3">
                {product.category}
              </Badge>
              <h3 className="font-semibold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <span className="font-bold text-xl text-gray-900">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${product.originalPrice}</span>
                )}
              </div>
            </CardContent>

            <CardFooter className="p-6 pt-0">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button
          variant="outline"
          size="lg"
          className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
        >
          Load More Products
        </Button>
      </div>
    </section>
  )
}

export default HomeProducts
