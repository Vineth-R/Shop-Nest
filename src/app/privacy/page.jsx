"use client"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle } from "lucide-react"

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700">Privacy & Security</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Privacy <span className="text-blue-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal
            information when you use our services.
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

      {/* Privacy Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                  1. Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We collect information you provide directly to us, information we obtain automatically when you use
                  our services, and information from third-party sources.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Information You Provide</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Account information (name, email, password)</li>
                      <li>Billing and shipping addresses</li>
                      <li>Payment information (processed securely by our payment partners)</li>
                      <li>Communication preferences</li>
                      <li>Customer service interactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Information Collected Automatically</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage data (pages visited, time spent, click patterns)</li>
                      <li>Location information (if you enable location services)</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  2. How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We use the information we collect to provide, maintain, and improve our services, process
                  transactions, and communicate with you.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Service Operations</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                      <li>Process and fulfill orders</li>
                      <li>Provide customer support</li>
                      <li>Send order confirmations and updates</li>
                      <li>Manage your account</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Improvements & Marketing</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                      <li>Analyze usage patterns</li>
                      <li>Personalize your experience</li>
                      <li>Send promotional communications</li>
                      <li>Prevent fraud and abuse</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Marketing Communications:</strong> You can opt out of promotional emails at any time by
                    clicking the unsubscribe link or updating your preferences in your account settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  3. Information Sharing
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to third parties except as
                  described in this policy.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">We May Share Information With:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>
                        Service providers who help us operate our business (payment processors, shipping companies)
                      </li>
                      <li>Legal authorities when required by law or to protect our rights</li>
                      <li>Business partners for joint marketing efforts (with your consent)</li>
                      <li>Potential buyers in the event of a business sale or merger</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Your Data Protection</h4>
                      <p className="text-sm text-green-700">
                        All third-party service providers are contractually required to protect your information and use
                        it only for the specific services they provide to us.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-blue-600" />
                  4. Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Security Measures Include:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure data storage with encryption at rest</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and employee training</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Important Notice</h4>
                      <p className="text-sm text-yellow-700">
                        While we strive to protect your information, no method of transmission over the internet is 100%
                        secure. We cannot guarantee absolute security.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                  5. Your Rights and Choices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  You have certain rights regarding your personal information, depending on your location and applicable
                  laws.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Your Rights May Include:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                      <li>Access your personal information</li>
                      <li>Correct inaccurate information</li>
                      <li>Delete your information</li>
                      <li>Restrict processing</li>
                      <li>Data portability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">How to Exercise Rights:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                      <li>Update account settings</li>
                      <li>Contact customer support</li>
                      <li>Email privacy@shopnest.com</li>
                      <li>Use our privacy request form</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-blue-600" />
                  6. Cookies and Tracking
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and
                  personalize content.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>
                        <strong>Essential cookies:</strong> Required for basic site functionality
                      </li>
                      <li>
                        <strong>Performance cookies:</strong> Help us understand how visitors use our site
                      </li>
                      <li>
                        <strong>Functional cookies:</strong> Remember your preferences and settings
                      </li>
                      <li>
                        <strong>Marketing cookies:</strong> Used to deliver relevant advertisements
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-700">
                    <strong>Cookie Control:</strong> You can control cookies through your browser settings. Note that
                    disabling certain cookies may affect site functionality.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  7. Children's Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal
                  information from children under 13.
                </p>
                <p className="text-gray-600">
                  If we become aware that we have collected personal information from a child under 13, we will take
                  steps to delete such information from our records.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Eye className="h-6 w-6 text-blue-600" />
                  8. Changes to This Policy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last Updated" date.
                </p>
                <p className="text-gray-600">
                  For significant changes, we may also send you an email notification or display a prominent notice on
                  our website.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                  9. Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Privacy Officer:</strong> privacy@shopnest.com
                    </p>
                    <p>
                      <strong>General Inquiries:</strong> support@shopnest.com
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

export default Privacy
