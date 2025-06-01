import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Mail, Gift, Bell, ShieldCheck, Send } from "lucide-react"

const NewsLetter = () => {
  return (
    <section className="py-20">
      <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">

        <CardHeader className="text-center pb-4 relative">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <Mail className="w-4 h-4 mr-2" />
              Newsletter Subscription
            </span>
          </div>
          <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Subscribe & Get 20% Off</CardTitle>
          <CardDescription className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Join our newsletter and receive exclusive offers, early access to new products, and personalized
            recommendations delivered straight to your inbox.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-8 relative">
          <div className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-grow">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-12 h-14 border-2 border-gray-200 focus:border-blue-500 rounded-xl text-lg"
                />
              </div>
              <Button className="h-14 px-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg">
                <Send className="mr-2 h-5 w-5" />
                Subscribe Now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl text-white mb-4 shadow-lg">
                <Gift className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Exclusive Offers</h4>
              <p className="text-gray-600">Special discounts and early access to sales for subscribers only</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white mb-4 shadow-lg">
                <Bell className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">New Arrivals</h4>
              <p className="text-gray-600">Be the first to know about our latest products and collections</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white mb-4 shadow-lg">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h4 className="font-bold text-lg text-gray-900 mb-2">Privacy Protected</h4>
              <p className="text-gray-600">We never share your information and you can unsubscribe anytime</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default NewsLetter
