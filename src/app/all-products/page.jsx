"use client"
import ProductCard from "@/components/ProductCard"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useAppContext } from "@/context/AppContext"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Grid, List, SlidersHorizontal } from "lucide-react"

const AllProducts = () => {
  const { products } = useAppContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-12">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">All Products</h1>
                <p className="text-lg text-gray-600">Discover our complete collection of premium tech products</p>
                <Badge className="mt-3 bg-gradient-to-r from-blue-600 to-blue-700">
                  {products.length} Products Available
                </Badge>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <Filter className="mr-2 h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Sort
                </Button>
                <div className="flex rounded-lg border border-gray-200">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="flex justify-center mt-16">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Want to see more products?</h3>
              <p className="text-gray-600 mb-6">Load more products to discover our complete collection</p>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold">
                Load More Products
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AllProducts
