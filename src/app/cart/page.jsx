"use client"
import OrderSummary from "@/components/OrderSummary"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { useAppContext } from "@/context/AppContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowLeft, Plus, Minus, Trash2 } from "lucide-react"

const Cart = () => {
  const { products, router, cartItem, addToCart, updateCartQuantity, getCartCount } = useAppContext()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        {/* Header */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl">
                  <ShoppingCart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900">Shopping Cart</CardTitle>
                  <p className="text-gray-600 mt-1">Review your selected items</p>
                </div>
              </div>
              <Badge className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">{getCartCount()} Items</Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="flex-1">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-0">
                {Object.keys(cartItem || {}).length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b">
                        <tr>
                          <th className="text-left py-4 px-6 font-semibold text-gray-900">Product</th>
                          <th className="text-left py-4 px-4 font-semibold text-gray-900 hidden md:table-cell">
                            Price
                          </th>
                          <th className="text-center py-4 px-4 font-semibold text-gray-900">Quantity</th>
                          <th className="text-right py-4 px-6 font-semibold text-gray-900 hidden md:table-cell">
                            Subtotal
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {Object.keys(cartItem || {}).map((itemId) => {
                          const product = products.find((product) => product._id === itemId)

                          if (!product || cartItem[itemId] <= 0) return null

                          return (
                            <tr key={itemId} className="hover:bg-gray-50/50 transition-colors">
                              <td className="py-6 px-6">
                                <div className="flex items-center gap-4">
                                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                                    <Image
                                      src={product.image[0] || "/placeholder.svg"}
                                      alt={product.name}
                                      className="w-full h-full object-cover mix-blend-multiply"
                                      width={80}
                                      height={80}
                                    />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                                    <Button
                                      variant="ghost"
                                      size="sm"
                                      className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0 h-auto"
                                      onClick={() => updateCartQuantity(product._id, 0)}
                                    >
                                      <Trash2 className="h-4 w-4 mr-1" />
                                      Remove
                                    </Button>
                                  </div>
                                </div>
                              </td>
                              <td className="py-6 px-4 hidden md:table-cell">
                                <span className="font-semibold text-gray-900">${product.offerPrice}</span>
                              </td>
                              <td className="py-6 px-4">
                                <div className="flex items-center justify-center gap-2">
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    onClick={() => updateCartQuantity(product._id, cartItem[itemId] - 1)}
                                  >
                                    <Minus className="h-4 w-4" />
                                  </Button>
                                  <span className="w-12 text-center font-semibold">{cartItem[itemId]}</span>
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="h-8 w-8 rounded-full"
                                    onClick={() => addToCart(product._id)}
                                  >
                                    <Plus className="h-4 w-4" />
                                  </Button>
                                </div>
                              </td>
                              <td className="py-6 px-6 text-right hidden md:table-cell">
                                <span className="font-bold text-gray-900">
                                  ${(product.offerPrice * cartItem[itemId]).toFixed(2)}
                                </span>
                              </td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-16">
                    <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-full mx-auto mb-6">
                      <ShoppingCart className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                    <p className="text-gray-600 mb-6">Add some products to get started</p>
                    <Button
                      onClick={() => router.push("/all-products")}
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {Object.keys(cartItem || {}).length > 0 && (
              <div className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => router.push("/all-products")}
                  className="group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Continue Shopping
                </Button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          {Object.keys(cartItem || {}).length > 0 && <OrderSummary />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart
