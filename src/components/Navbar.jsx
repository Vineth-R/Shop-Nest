"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Search, User, ShoppingBag } from "lucide-react"
import { useAppContext } from "@/context/AppContext"
import { useClerk } from "@clerk/nextjs"
import { Button } from "./ui/button"

const Navbar = () => {
  const { isSeller, router } = useAppContext()
  const [mounted, setMounted] = useState(false)
  const { openSignIn } = useClerk()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
            <ShoppingBag className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
            ShopNest
          </span>
        </div>
        <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
          <Link href="/" className="hover:text-gray-900 transition">
            Home
          </Link>
          <Link href="/all-products" className="hover:text-gray-900 transition">
            Shop
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            About Us
          </Link>
          <Link href="/" className="hover:text-gray-900 transition">
            Contact
          </Link>
        </div>
        <ul className="hidden md:flex items-center gap-4">
          <Search className="w-4 h-4 text-gray-600" />
          <button className="flex items-center gap-2 hover:text-gray-900 transition">
            <User className="w-4 h-4" />
            Account
          </button>
        </ul>
      </nav>
    )
  }

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <div className="cursor-pointer flex items-center gap-3" onClick={() => router.push("/")}>
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
          ShopNest
        </span>
      </div>

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-1.5 rounded-full transition-colors"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Search className="w-4 h-4 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" />
       <button
  className="flex items-center gap-2 bg-blue-700 hover:bg-blue-600 transition p-2"
  onClick={() => {
    console.log("Native Account button clicked");
    if (openSignIn) {
      openSignIn();
    } else {
      console.error("openSignIn is undefined");
    }
  }}
>
  <User className="w-4 h-4" />
  Account
</button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
  {isSeller && <button onClick={() => router.push('/seller')} className="...">Seller Dashboard</button>}
  <Button onClick={openSignIn} className="...">
    <User className="w-4 h-4" />
    Account
  </Button>
</div>
    </nav>
  )
}

export default Navbar
