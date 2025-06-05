import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import { useAppContext } from '@/context/AppContext'
import { ShoppingBag } from "lucide-react"

const Navbar = () => {

  const { router } = useAppContext()

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between border-b'>
      <div 
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => router.push('/')}
      >
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg">
          <ShoppingBag className="h-5 w-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
          ShopNest
        </span>
      </div>
      <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar