"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, Package, ShoppingCart, BarChart3 } from "lucide-react"

const SideBar = () => {
  const pathname = usePathname()

  const menuItems = [
    {
      name: "Add Product",
      path: "/seller",
      icon: Plus,
      description: "Create new product",
    },
    {
      name: "Product List",
      path: "/seller/product-list",
      icon: Package,
      description: "Manage inventory",
    },
    {
      name: "Orders",
      path: "/seller/orders",
      icon: ShoppingCart,
      description: "Track orders",
      badge: "3",
    },
  ]

  return (
    <div className="w-16 md:w-72 min-h-screen bg-gradient-to-b from-gray-50 to-white border-r border-gray-200 p-2 md:p-4">
      <div className="space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path
          const Icon = item.icon

          return (
            <Link href={item.path} key={item.name}>
              <Card
                className={`p-3 md:p-4 cursor-pointer transition-all duration-200 hover:shadow-md border-0 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white/80 backdrop-blur-sm hover:bg-blue-50 text-gray-700"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-lg ${
                      isActive ? "bg-white/20" : "bg-blue-100"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "text-white" : "text-blue-600"}`} />
                  </div>
                  <div className="hidden md:block flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className={`font-semibold ${isActive ? "text-white" : "text-gray-900"}`}>{item.name}</h3>
                        <p className={`text-sm ${isActive ? "text-blue-100" : "text-gray-600"}`}>{item.description}</p>
                      </div>
                      {item.badge && (
                        <Badge className={`${isActive ? "bg-white/20 text-white" : "bg-red-100 text-red-700"} text-xs`}>
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>

    
    </div>
  )
}

export default SideBar
