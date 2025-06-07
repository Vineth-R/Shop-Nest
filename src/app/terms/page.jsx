"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle } from "lucide-react"

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700">Legal Information</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Terms & <span className="text-blue-600">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Please read these terms and conditions carefully before using our website or making a purchase. By using our
            services, you agree to be bound by these terms.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">
            <strong>Last Updated:</strong> December 15, 2024
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  1. Acceptance of Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  By accessing and using the ShopNest website (the "Service"), you accept and agree to be bound by the
                  terms and provision of this agreement. If you do not agree to abide by the above, please do not use
                  this service.
                </p>
                <p className="text-gray-600">
                  These Terms of Service ("Terms") govern your use of our website located at shopnest.com (the
                  "Service") operated by ShopNest ("us", "we", or "our"). Your access to and use of the Service is
                  conditioned on your acceptance of and compliance with these Terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  2. Use License
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Permission is granted to temporarily download one copy of the materials on ShopNest's website for
                  personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                  title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>modify or copy the materials</li>
                  <li>use the materials for any commercial purpose or for any public display</li>
                  <li>attempt to reverse engineer any software contained on the website</li>
                  <li>remove any copyright or other proprietary notations from the materials</li>
                </ul>
                <p className="text-gray-600">
                  This license shall automatically terminate if you violate any of these restrictions and may be
                  terminated by ShopNest at any time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  3. User Accounts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  When you create an account with us, you must provide information that is accurate, complete, and
                  current at all times. You are responsible for safeguarding the password and for all activities that
                  occur under your account.
                </p>
                <p className="text-gray-600">
                  You agree not to disclose your password to any third party. You must notify us immediately upon
                  becoming aware of any breach of security or unauthorized use of your account.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Account Security</h4>
                      <p className="text-sm text-yellow-700">
                        You are responsible for maintaining the confidentiality of your account credentials and for
                        restricting access to your computer or device.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  4. Products and Services
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  All products and services are subject to availability. We reserve the right to discontinue any product
                  or service at any time. Prices for our products are subject to change without notice.
                </p>
                <p className="text-gray-600">
                  We have made every effort to display as accurately as possible the colors and images of our products.
                  However, we cannot guarantee that your computer monitor's display will accurately reflect the actual
                  colors of the products.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Product Information</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>All product descriptions and specifications are provided by manufacturers</li>
                    <li>We strive for accuracy but cannot guarantee all information is error-free</li>
                    <li>Product availability is subject to change without notice</li>
                    <li>Prices are displayed in USD and include applicable taxes where required</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  5. Payment Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Payment is due at the time of purchase. We accept major credit cards, PayPal, and other payment
                  methods as displayed during checkout. All payments are processed securely through our payment
                  partners.
                </p>
                <p className="text-gray-600">
                  By providing payment information, you represent and warrant that you are authorized to use the payment
                  method and authorize us to charge your payment method for the total amount of your purchase.
                </p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Billing Information</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                    <li>All billing information must be accurate and complete</li>
                    <li>You are responsible for any fees charged by your financial institution</li>
                    <li>We reserve the right to refuse or cancel orders for any reason</li>
                    <li>Promotional codes and discounts are subject to terms and conditions</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  6. Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  In no event shall ShopNest or its suppliers be liable for any damages (including, without limitation,
                  damages for loss of data or profit, or due to business interruption) arising out of the use or
                  inability to use the materials on ShopNest's website.
                </p>
                <p className="text-gray-600">
                  Our total liability to you for any damages, losses, and causes of action (whether in contract, tort,
                  or otherwise) shall not exceed the amount paid by you for the product or service in question.
                </p>
                <div className="bg-red-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Important Notice</h4>
                      <p className="text-sm text-red-700">
                        Some jurisdictions do not allow limitations on implied warranties or limitations of liability
                        for incidental damages. These limitations may not apply to you.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  7. Governing Law
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  These terms and conditions are governed by and construed in accordance with the laws of California,
                  United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or
                  location.
                </p>
                <p className="text-gray-600">
                  Any disputes arising from these terms or your use of our services will be resolved through binding
                  arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Scale className="h-6 w-6 text-blue-600" />
                  8. Changes to Terms
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  ShopNest reserves the right to revise these terms of service at any time without notice. By using this
                  website, you are agreeing to be bound by the then current version of these terms of service.
                </p>
                <p className="text-gray-600">
                  We will notify users of any material changes to these terms by posting a notice on our website or
                  sending an email to registered users. Your continued use of our services after such modifications
                  constitutes acceptance of the updated terms.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <FileText className="h-6 w-6 text-blue-600" />
                  9. Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Email:</strong> legal@shopnest.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Address:</strong> 123 Tech Street, San Francisco, CA 94107
                    </p>
                    <p>
                      <strong>Business Hours:</strong> Monday-Friday, 9AM-6PM PST
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

export default Terms
