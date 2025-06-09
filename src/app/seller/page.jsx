"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Upload, Package, DollarSign, Tag, ImageIcon, X } from "lucide-react"
import Image from "next/image"
import { useAppContext } from "@/context/AppContext"
import toast from "react-hot-toast"
import axios from 'axios';

const AddProduct = () => {

  const {getToken} = useAppContext()

  const [files, setFiles] = useState([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Earphone")
  const [price, setPrice] = useState("")
  const [offerPrice, setOfferPrice] = useState("")

  const handleFileChange = (index, file) => {
    const updatedFiles = [...files]
    updatedFiles[index] = file
    setFiles(updatedFiles)
  }

  const removeFile = (index) => {
    const updatedFiles = [...files]
    updatedFiles[index] = null
    setFiles(updatedFiles)
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  const formData = new FormData()
  formData.append("name", name)
  formData.append("description", description)
  formData.append("category", category)
  formData.append("price", price)
  formData.append("offerPrice", offerPrice)
  for (let i = 0; i < files.length; i++) {
    formData.append("images", files[i])
  }

  try {
    const token = await getToken()
    
    const { data } = await axios.post('/api/product/add', formData, {
      headers: { Authorization: `Bearer ${token}` },
    })

    if (data.success) {
      toast.success(data.message)
      setFiles([])
      setName("")
      setDescription("")
      setCategory("Earphone")
      setPrice("")
      setOfferPrice("")
    } else {
      toast.error(data.message)
    }
  } catch (error) {
    toast.error(error.message)
  }
}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Add New Product</h1>
          <p className="text-gray-600">Create a new product listing for your store</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto mt-4 rounded-full"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Product Images */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg">
                  <ImageIcon className="h-5 w-5 text-white" />
                </div>
                Product Images
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="relative group">
                    <label
                      htmlFor={`image${index}`}
                      className="block cursor-pointer transition-all duration-200 hover:scale-105"
                    >
                      <input
                        onChange={(e) => handleFileChange(index, e.target.files[0])}
                        type="file"
                        id={`image${index}`}
                        hidden
                        accept="image/*"
                      />
                      <div className="aspect-square border-2 border-dashed border-gray-300 rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                        {files[index] ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={URL.createObjectURL(files[index]) || "/placeholder.svg"}
                              alt={`Product ${index + 1}`}
                              className="w-full h-full object-cover"
                              width={200}
                              height={200}
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                              onClick={(e) => {
                                e.preventDefault()
                                removeFile(index)
                              }}
                            >
                              <X className="h-3 w-3" />
                            </Button>
                          </div>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-gray-500">
                            <Upload className="h-8 w-8 mb-2" />
                            <span className="text-xs text-center">Upload Image</span>
                          </div>
                        )}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-4">Upload up to 4 high-quality images of your product</p>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg">
                  <Package className="h-5 w-5 text-white" />
                </div>
                Product Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Product Name */}
              <div className="space-y-2">
                <Label htmlFor="product-name" className="text-sm font-medium">
                  Product Name
                </Label>
                <Input
                  id="product-name"
                  type="text"
                  placeholder="Enter product name"
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </div>

              {/* Product Description */}
              <div className="space-y-2">
                <Label htmlFor="product-description" className="text-sm font-medium">
                  Product Description
                </Label>
                <Textarea
                  id="product-description"
                  rows={4}
                  className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Describe your product in detail"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  required
                />
              </div>

              {/* Category and Pricing */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="category" className="flex items-center gap-2 text-sm font-medium">
                    <Tag className="h-4 w-4 text-blue-600" />
                    Category
                  </Label>
                  <Select value={category} onValueChange={setCategory}>
                    <SelectTrigger className="focus:ring-2 focus:ring-blue-500">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Earphone">Earphone</SelectItem>
                      <SelectItem value="Headphone">Headphone</SelectItem>
                      <SelectItem value="Watch">Watch</SelectItem>
                      <SelectItem value="Smartphone">Smartphone</SelectItem>
                      <SelectItem value="Laptop">Laptop</SelectItem>
                      <SelectItem value="Camera">Camera</SelectItem>
                      <SelectItem value="Accessories">Accessories</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product-price" className="flex items-center gap-2 text-sm font-medium">
                    <DollarSign className="h-4 w-4 text-green-600" />
                    Regular Price
                  </Label>
                  <Input
                    id="product-price"
                    type="number"
                    placeholder="0.00"
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="offer-price" className="flex items-center gap-2 text-sm font-medium">
                    <Badge className="bg-red-100 text-red-700 text-xs">Sale</Badge>
                    Offer Price
                  </Label>
                  <Input
                    id="offer-price"
                    type="number"
                    placeholder="0.00"
                    className="focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    onChange={(e) => setOfferPrice(e.target.value)}
                    value={offerPrice}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center">
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-12 py-3"
            >
              <Package className="mr-2 h-5 w-5" />
              Add Product
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddProduct
