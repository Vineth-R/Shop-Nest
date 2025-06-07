"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Truck, Clock, Globe, Package, MapPin, Shield } from "lucide-react"

const ShippingPolicy = () => {
  const shippingOptions = [
    {
      name: "Standard Shipping",
      time: "3-5 Business Days",
      cost: "$9.99",
      description: "Free on orders over $100",
      icon: Truck,
    },
    {
      name: "Express Shipping",
      time: "1-2 Business Days",
      cost: "$19.99",
      description: "Fast delivery for urgent orders",
      icon: Clock,
    },
    {
      name: "International Shipping",
      time: "7-14 Business Days",
      cost: "Varies by location",
      description: "Available to 25+ countries",
      icon: Globe,
    },
  ]

  const processingSteps = [
    {
      step: "1",
      title: "Order Confirmation",
      description: "Your order is received and confirmed within 1 hour",
    },
    {
      step: "2",
      title: "Processing",
      description: "Items are picked, packed, and prepared for shipment",
    },
    {
      step: "3",
      title: "Shipment",
      description: "Your order is handed over to our shipping partner",
    },
    {
      step: "4",
      title: "Delivery",
      description: "Package arrives at your specified address",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700">Shipping Information</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Shipping <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Learn about our shipping options, delivery times, and policies to ensure your orders reach you safely and on
            time.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Shipping Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {shippingOptions.map((option, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 backdrop-blur-sm text-center hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-6">
                    <option.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.name}</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-2">{option.cost}</p>
                  <p className="text-gray-600 mb-4">{option.time}</p>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processing Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Order Processing Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4 text-white text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processingSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-blue-200 transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Package className="h-6 w-6 text-blue-600" />
                  Processing Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Orders are typically processed within 1-2 business days. During peak seasons or promotional periods,
                  processing may take up to 3 business days. You will receive an email confirmation once your order has
                  been processed and shipped.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Orders placed after 2 PM EST on business days will be processed the next
                    business day.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  Shipping Destinations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We ship to all 50 US states, including Alaska and Hawaii. International shipping is available to over
                  25 countries worldwide. Some restrictions may apply to certain products or destinations due to local
                  regulations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Domestic Shipping</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• All 50 US states</li>
                      <li>• Washington D.C.</li>
                      <li>• Puerto Rico</li>
                      <li>• US Virgin Islands</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">International Shipping</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Canada</li>
                      <li>• United Kingdom</li>
                      <li>• European Union</li>
                      <li>• Australia & New Zealand</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  Shipping Protection
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  All shipments are fully insured and tracked. We work with trusted shipping partners to ensure your
                  packages arrive safely. In the rare event of loss or damage during transit, we will replace your order
                  at no additional cost.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">What's Included:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Full insurance coverage</li>
                    <li>• Real-time tracking</li>
                    <li>• Signature confirmation (for orders over $500)</li>
                    <li>• Secure packaging</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-blue-600" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Business Days</h4>
                    <p className="text-gray-600 text-sm">
                      Business days are Monday through Friday, excluding federal holidays. Weekend and holiday orders
                      will be processed on the next business day.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address Accuracy</h4>
                    <p className="text-gray-600 text-sm">
                      Please ensure your shipping address is accurate and complete. We are not responsible for packages
                      delivered to incorrect addresses provided by the customer.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Delivery Attempts</h4>
                    <p className="text-gray-600 text-sm">
                      Our shipping partners will make up to 3 delivery attempts. If delivery is unsuccessful, the
                      package will be returned to our facility and you will be contacted for reshipment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ShippingPolicy
