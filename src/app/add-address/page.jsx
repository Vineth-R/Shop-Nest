"use client"

import { assets } from "@/assets/assets"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Image from "next/image"
import { useState } from "react"
import { MapPin, User, Phone, MapPinned, Building, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const AddAddress = () => {
  const [address, setAddress] = useState({
    fullName: "",
    phoneNumber: "",
    pincode: "",
    area: "",
    city: "",
    state: "",
  })

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="border-none shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl md:text-3xl font-medium">
                Add Shipping <span className="text-orange-600 font-bold">Address</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmitHandler} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      className="pl-10 border-gray-200 focus-visible:ring-orange-500"
                      type="text"
                      placeholder="Full name"
                      onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                      value={address.fullName}
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      className="pl-10 border-gray-200 focus-visible:ring-orange-500"
                      type="text"
                      placeholder="Phone number"
                      onChange={(e) => setAddress({ ...address, phoneNumber: e.target.value })}
                      value={address.phoneNumber}
                    />
                  </div>

                  <div className="relative">
                    <MapPinned className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      className="pl-10 border-gray-200 focus-visible:ring-orange-500"
                      type="text"
                      placeholder="Pin code"
                      onChange={(e) => setAddress({ ...address, pincode: e.target.value })}
                      value={address.pincode}
                    />
                  </div>

                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Textarea
                      className="pl-10 border-gray-200 focus-visible:ring-orange-500 min-h-[120px]"
                      placeholder="Address (Area and Street)"
                      onChange={(e) => setAddress({ ...address, area: e.target.value })}
                      value={address.area}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        className="pl-10 border-gray-200 focus-visible:ring-orange-500"
                        type="text"
                        placeholder="City/District/Town"
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                        value={address.city}
                      />
                    </div>
                    <div className="relative">
                      <Map className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        className="pl-10 border-gray-200 focus-visible:ring-orange-500"
                        type="text"
                        placeholder="State"
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                        value={address.state}
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-6">
                  SAVE ADDRESS
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative h-[400px] w-full max-w-md">
              <Image
                src={assets.my_location_image || "/placeholder.svg"}
                alt="Location illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AddAddress
