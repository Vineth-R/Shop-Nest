"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAppContext } from "@/context/AppContext"
import { ShoppingBag, CreditCard, Truck, Shield, MapPin, Plus, Tag } from "lucide-react"
import { useEffect, useState } from "react"
import { get } from "mongoose"
import toast from "react-hot-toast"
import axios from "axios"

const OrderSummary = () => {
  const { currency, router, getCartCount, getCartAmount, getToken, user, cartItem, setCartItem } = useAppContext()
  const [selectedAddress, setSelectedAddress] = useState(null)
  const [userAddresses, setUserAddresses] = useState([])
  const [promoCode, setPromoCode] = useState("")

  const cartAmount = getCartAmount()
  const cartCount = getCartCount()
  const shipping = cartAmount > 100 ? 0 : 9.99
  const tax = cartAmount * 0.02
  const total = cartAmount + shipping + tax

    const fetchUserAddresses = async () => {
    try {
      const token = await getToken() 
      const res = await fetch("/api/user/get-address", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json()
  
      if(data.success) {
        setUserAddresses(data.addresses)
        if (data.addresses.length > 0) {
          setSelectedAddress(data.addresses[0])
        }
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const createOrder = async () => {
    try{
      if(!selectedAddress) {
        toast.error("Please select a delivery address.")
        return
      }

      let cartItemArray = Object.keys(cartItem).map((key) => ({ productId: key, quantity: cartItem[key] }));

      cartItemArray = cartItemArray.filter(item => item.quantity > 0)

      if(cartItemArray.length === 0) {
        return toast.error("Your cart is empty.")
      }

      const token = await getToken()

      const {data} = await axios.post('/api/order/create', {
        address: selectedAddress._id, 
        items: cartItemArray},{
        headers: {
          Authorization: `Bearer ${token}`
        }
        } )

        if(data.success) {
          toast.success(data.message)
          setCartItem({})
          router.push('/order-placed')
        }
        else {
          toast.error(data.message)
        }

    }catch (error) {
        toast.error(error.message)
    }
  }

  const applyPromoCode = () => {
   
    console.log("Applying promo code:", promoCode)
  }

  useEffect(() => {
    if(user){
      fetchUserAddresses()
    }
    
  }, [user])

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
          {/* Address Selection */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MapPin className="h-4 w-4 text-blue-600" />
              Delivery Address
            </Label>
            <Select
              value={selectedAddress?._id || ""}
              onValueChange={(value) => {
                if (value === "add-new") {
                  router.push("/add-address")
                } else {
                  const address = userAddresses.find((addr) => addr._id === value)
                  setSelectedAddress(address)
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select delivery address" />
              </SelectTrigger>
              <SelectContent>
                {userAddresses.map((address) => (
                  <SelectItem key={address._id} value={address._id}>
                    <div className="text-left">
                      <div className="font-medium">{address.fullName}</div>
                      <div className="text-sm text-gray-600">
                        {address.area}, {address.city}, {address.state}
                      </div>
                    </div>
                  </SelectItem>
                ))}
                <SelectItem value="add-new">
                  <div className="flex items-center gap-2 text-blue-600">
                    <Plus className="h-4 w-4" />
                    Add New Address
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Selected Address Display */}
          {selectedAddress && (
            <div className="bg-blue-50 rounded-xl p-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-600 mt-1" />
                <div className="text-sm">
                  <div className="font-medium text-gray-900">{selectedAddress.fullName}</div>
                  <div className="text-gray-600 mt-1">
                    {selectedAddress.area}
                    <br />
                    {selectedAddress.city}, {selectedAddress.state} - {selectedAddress.pincode}
                    <br />
                    Phone: {selectedAddress.phoneNumber}
                  </div>
                </div>
              </div>
            </div>
          )}

          <Separator />

          {/* Promo Code */}
          <div className="space-y-3">
            <Label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Tag className="h-4 w-4 text-blue-600" />
              Promo Code
            </Label>
            <div className="flex gap-2">
              <Input
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-1"
              />
              <Button
                onClick={applyPromoCode}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Apply
              </Button>
            </div>
          </div>

          <Separator />

          {/* Order Breakdown */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal ({cartCount} items)</span>
              <span className="font-semibold text-gray-900">
                {currency}
                {cartAmount.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Shipping</span>
                {shipping === 0 && <Badge className="bg-green-100 text-green-700 text-xs">Free</Badge>}
              </div>
              <span className="font-semibold text-gray-900">
                {shipping === 0 ? "Free" : `${currency}${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600">Tax (2%)</span>
              <span className="font-semibold text-gray-900">
                {currency}
                {tax.toFixed(2)}
              </span>
            </div>

            <Separator />

            <div className="flex justify-between items-center text-lg">
              <span className="font-bold text-gray-900">Total</span>
              <span className="font-bold text-gray-900">
                {currency}
                {total.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="space-y-3">
            <Button
              onClick={createOrder}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3"
              disabled={!selectedAddress}
            >
              <CreditCard className="mr-2 h-5 w-5" />
              Place Order
            </Button>
          </div>

          {/* Trust Indicators */}
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

          {/* Free Shipping Progress */}
          {cartAmount < 100 && (
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-sm text-orange-700 font-medium">
                Add {currency}
                {(100 - cartAmount).toFixed(2)} more to get free shipping!
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
