import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Truck, ShieldCheck, Clock, CreditCard, ArrowRight, Gamepad2 } from "lucide-react"

const Banner = () => {
  const services = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Free Shipping",
      description: "On all orders over $100",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "2-Year Warranty",
      description: "On all electronics",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "30-Day Returns",
      description: "Hassle-free returns",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Secure Payment",
      description: "100% secure checkout",
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <section className="py-20">
      {/* Promotional Banner */}
      <Card className="overflow-hidden mb-20 border-0 shadow-2xl">
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-16 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
                    <Gamepad2 className="w-4 h-4 mr-2" />
                    Gaming Collection
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Level Up Your Gaming Experience</h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Discover our premium gaming accessories collection. From controllers to headsets, we've got everything
                  you need to dominate the competition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-white/90 font-semibold shadow-lg">
                    <Gamepad2 className="mr-2 h-5 w-5" />
                    Shop Gaming
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white/10 backdrop-blur-sm"
                  >
                    View All Collections
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] lg:h-auto flex items-center justify-center p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl scale-150"></div>
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Gaming Accessories"
                    className="relative max-h-[350px] object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>

      {/* Services Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
          >
            <CardContent className="p-8 text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Banner
