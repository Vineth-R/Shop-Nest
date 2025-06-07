"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Users, Award, Globe, Heart, Shield, Truck, Headphones } from "lucide-react"
import Image from "next/image"
import Story from "/public/assets/story.jpg"

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Customers", value: "50,000+" },
    { icon: ShoppingBag, label: "Products Sold", value: "100,000+" },
    { icon: Globe, label: "Countries Served", value: "25+" },
    { icon: Award, label: "Years Experience", value: "5+" },
  ]

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "We put our customers at the heart of everything we do, ensuring exceptional service and satisfaction.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Every product is carefully selected and tested to meet our high standards of quality and reliability.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to get your products to you as fast as possible, anywhere you are.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you with any questions or concerns.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700">About ShopNest</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your Trusted Tech <span className="text-blue-600">Partner</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            At ShopNest, we're passionate about bringing you the latest and greatest in technology. From cutting-edge
            gadgets to everyday essentials, we curate products that enhance your digital lifestyle.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2019, ShopNest began as a small startup with a big dream: to make premium technology
                  accessible to everyone. What started in a garage has grown into a trusted platform serving customers
                  worldwide.
                </p>
                <p>
                  We believe that technology should enhance lives, not complicate them. That's why we carefully curate
                  every product in our catalog, ensuring that each item meets our strict standards for quality,
                  innovation, and value.
                </p>
                <p>
                  Today, we're proud to be a leading destination for tech enthusiasts, professionals, and everyday users
                  who demand the best. Our journey is just beginning, and we're excited to continue growing with our
                  amazing community.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl transform rotate-3"></div>
              <Card className="relative border-0 shadow-xl bg-white rounded-3xl overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={Story}
                    alt="Our workspace"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the experience we create for our customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      <Footer />
    </div>
  )
}

export default About
