"use client"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, Search, HelpCircle, ShoppingCart, Truck, CreditCard, Shield, Headphones } from "lucide-react"

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [openItems, setOpenItems] = useState(new Set([0]))

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "orders", name: "Orders & Payment", icon: ShoppingCart },
    { id: "shipping", name: "Shipping & Delivery", icon: Truck },
    { id: "returns", name: "Returns & Refunds", icon: CreditCard },
    { id: "products", name: "Products & Warranty", icon: Shield },
    { id: "support", name: "Technical Support", icon: Headphones },
  ]

  const faqs = [
    {
      id: 0,
      category: "orders",
      question: "How do I place an order?",
      answer:
        "To place an order, simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details. Once your order is confirmed, you'll receive an email confirmation with your order details and tracking information.",
    },
    {
      id: 1,
      category: "orders",
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and Cash on Delivery (COD) for eligible locations. All payments are processed securely through our encrypted payment gateway.",
    },
    {
      id: 2,
      category: "shipping",
      question: "How long does shipping take?",
      answer:
        "Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days. International shipping may take 7-14 business days depending on the destination. You'll receive tracking information once your order ships.",
    },
    {
      id: 3,
      category: "shipping",
      question: "Do you offer free shipping?",
      answer:
        "Yes! We offer free standard shipping on orders over $100. For orders under $100, standard shipping costs $9.99. Express shipping is available for an additional fee regardless of order value.",
    },
    {
      id: 4,
      category: "returns",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for most items. Products must be in original condition with all packaging and accessories. To initiate a return, contact our customer service team or use our online return portal. Refunds are processed within 5-7 business days after we receive the returned item.",
    },
    {
      id: 5,
      category: "returns",
      question: "How do I return a product?",
      answer:
        "To return a product, log into your account, go to 'My Orders', select the item you want to return, and follow the return instructions. You can also contact our customer service team for assistance. We'll provide a prepaid return label for your convenience.",
    },
    {
      id: 6,
      category: "products",
      question: "Are your products authentic?",
      answer:
        "Yes, all our products are 100% authentic and sourced directly from manufacturers or authorized distributors. We guarantee the authenticity of every item we sell and provide manufacturer warranties where applicable.",
    },
    {
      id: 7,
      category: "products",
      question: "Do products come with warranty?",
      answer:
        "Most of our products come with manufacturer warranty. The warranty period varies by product and manufacturer, typically ranging from 1-3 years. Warranty information is clearly stated on each product page. We also offer extended warranty options for select items.",
    },
    {
      id: 8,
      category: "support",
      question: "How can I track my order?",
      answer:
        "Once your order ships, you'll receive a tracking number via email. You can track your order by logging into your account and visiting the 'My Orders' section, or by using the tracking number on the carrier's website. You'll also receive updates via SMS if you've provided your phone number.",
    },
    {
      id: 9,
      category: "support",
      question: "How do I contact customer support?",
      answer:
        "You can contact our customer support team through multiple channels: email us at support@shopnest.com, call us at +1 (555) 123-4567, or use our live chat feature on the website. Our support team is available Monday-Friday 9AM-6PM PST, and Saturday 10AM-4PM PST.",
    },
    {
      id: 10,
      category: "orders",
      question: "Can I modify or cancel my order?",
      answer:
        "You can modify or cancel your order within 1 hour of placing it, provided it hasn't been processed for shipping. After this window, please contact our customer service team immediately. We'll do our best to accommodate changes, but cannot guarantee modifications once the order is in fulfillment.",
    },
    {
      id: 11,
      category: "shipping",
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to over 25 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and taxes may apply and are the responsibility of the customer. Please check our shipping policy for a complete list of supported countries.",
    },
  ]

  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-blue-100 text-blue-700">Help Center</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Find answers to common questions about our products, shipping, returns, and more. Can't find what you're
            looking for? Contact our support team.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Search */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-14 text-lg border-0 shadow-lg bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "border-blue-200 text-blue-600 hover:bg-blue-50"
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          {filteredFAQs.length === 0 ? (
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try adjusting your search terms or browse different categories.</p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq) => (
                <Card key={faq.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
                  <Collapsible open={openItems.has(faq.id)} onOpenChange={() => toggleItem(faq.id)}>
                    <CollapsibleTrigger asChild>
                      <CardContent className="p-6 cursor-pointer hover:bg-blue-50 transition-colors">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 text-left">{faq.question}</h3>
                          <ChevronDown
                            className={`h-5 w-5 text-gray-500 transition-transform ${
                              openItems.has(faq.id) ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      </CardContent>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="px-6 pb-6 pt-0">
                        <div className="border-t pt-4">
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="container mx-auto text-center">
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
            <CardContent className="p-8">
              <HelpCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Need Help?</h3>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? Our customer support team is here to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                  <Headphones className="mr-2 h-4 w-4" />
                  Contact Support
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Live Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default FAQ
