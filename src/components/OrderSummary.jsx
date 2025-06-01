"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useAppContext } from "@/context/AppContext"
import { ShoppingBag, CreditCard, Truck, Shield } from "lucide-react"

const OrderSummary = () => {
  const { getCartAmount, getCartCount, router } = useAppContext()

  const cartAmount = getCartAmount()
  const cartCount = getCartCount()
  const shipping = cartAmount > 100 ? 0 : 9.99
  const tax = cartAmount * 0.08
  const total = cartAmount + shipping + tax

  return (
    <div className="lg:w-96">
      <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm sticky top-24">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl font-bold text-gray-900">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
              <ShoppingBag className="h-5 w-5 text-white" />
            </div>
            Order Summary
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal ({cartCount} items)</span>
              <span className="font-semibold text-gray-900">${cartAmount.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Shipping</span>
                {shipping === 0 && <Badge className="bg-green-100 text-green-700 text-xs">Free</Badge>}
              </div>
              <span className="font-semibold text-gray-900">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
            </div>

            <Separator />

            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3"
              onClick={() => router.push("/add-address")}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Proceed to Checkout
            </Button>
          </div>

          <div className="bg-blue-50 rounded-xl p-4 space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <Truck className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-medium">
                {shipping === 0 ? "Free shipping applied!" : "Free shipping on orders over $100"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Shield className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-medium">Secure checkout guaranteed</span>
            </div>
          </div>

          {cartAmount < 100 && (
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm text-orange-700 font-medium">
                Add ${(100 - cartAmount).toFixed(2)} more to get free shipping!
              </p>
              <div className="w-full bg-orange-200 rounded-full h-2 mt-2">
                <div
                  className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${Math.min((cartAmount / 100) * 100, 100)}%` }}
                ></div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default OrderSummary