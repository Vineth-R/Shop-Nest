"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart, Star, Eye, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useAppContext } from "@/context/AppContext"

const ProductCard = ({ product }) => {
  const { addToCart } = useAppContext()

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md bg-white">
      <div className="relative p-4">
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white">New</Badge>}
          {product.isTrending && (
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
              <TrendingUp className="w-3 h-3 mr-1" />
              Hot
            </Badge>
          )}
        </div>

        {product.discount && (
          <Badge variant="destructive" className="absolute top-2 right-2 z-10 bg-gradient-to-r from-red-500 to-red-600">
            -{product.discount}%
          </Badge>
        )}

        <Link href={`/product/${product._id}`}>
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 h-[240px] flex items-center justify-center relative cursor-pointer">
            <Image
              src={product.image[0] || "/placeholder.svg"}
              alt={product.name}
              width={200}
              height={200}
              className="h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-110 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
          </div>
        </Link>

        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white shadow-md">
            <Heart className="h-4 w-4 text-blue-600" />
          </Button>
          <Link href={`/product/${product._id}`}>
            <Button variant="ghost" size="icon" className="bg-white/90 hover:bg-white shadow-md">
              <Eye className="h-4 w-4 text-blue-600" />
            </Button>
          </Link>
        </div>
      </div>

      <CardContent className="p-6">
        <Badge variant="outline" className="text-xs text-blue-600 border-blue-200 mb-3">
          {product.category}
        </Badge>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-semibold text-lg mb-3 line-clamp-2 text-gray-900 group-hover:text-blue-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < Math.floor(4.5) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700">4.5</span>
          <span className="text-sm text-gray-500">(120)</span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <span className="font-bold text-xl text-gray-900">${product.offerPrice}</span>
          {product.price && product.price !== product.offerPrice && (
            <span className="text-gray-500 line-through text-sm">${product.price}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => addToCart(product._id)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
