import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// Format currency with proper symbol and decimals
export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

// Format price with discount calculation
export function formatPrice(price, originalPrice = null) {
  const formattedPrice = `$${price.toFixed(2)}`

  if (originalPrice && originalPrice > price) {
    const discount = Math.round(((originalPrice - price) / originalPrice) * 100)
    return {
      price: formattedPrice,
      originalPrice: `$${originalPrice.toFixed(2)}`,
      discount: `${discount}%`,
      savings: `$${(originalPrice - price).toFixed(2)}`,
    }
  }

  return {
    price: formattedPrice,
    originalPrice: null,
    discount: null,
    savings: null,
  }
}

// Generate product slug from name
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

// Truncate text with ellipsis
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + "..."
}

// Calculate discount percentage
export function calculateDiscount(originalPrice, salePrice) {
  if (!originalPrice || !salePrice || originalPrice <= salePrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

// Format rating display
export function formatRating(rating, maxRating = 5) {
  return {
    rating: Number(rating).toFixed(1),
    percentage: (rating / maxRating) * 100,
    stars: Math.round(rating),
    fullStars: Math.floor(rating),
    hasHalfStar: rating % 1 >= 0.5,
  }
}

// Validate email format
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate phone number format
export function isValidPhone(phone) {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

// Format phone number for display
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

// Generate random ID
export function generateId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

// Debounce function for search and input handling
export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Format date for display
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(new Date(date))
}

// Format relative time (e.g., "2 hours ago")
export function formatRelativeTime(date) {
  const now = new Date()
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000)

  const intervals = [
    { label: "year", seconds: 31536000 },
    { label: "month", seconds: 2592000 },
    { label: "week", seconds: 604800 },
    { label: "day", seconds: 86400 },
    { label: "hour", seconds: 3600 },
    { label: "minute", seconds: 60 },
  ]

  for (const interval of intervals) {
    const count = Math.floor(diffInSeconds / interval.seconds)
    if (count >= 1) {
      return `${count} ${interval.label}${count > 1 ? "s" : ""} ago`
    }
  }

  return "Just now"
}

// Local storage helpers with error handling
export const storage = {
  get: (key, defaultValue = null) => {
    try {
      if (typeof window === "undefined") return defaultValue
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error(`Error getting item from localStorage:`, error)
      return defaultValue
    }
  },

  set: (key, value) => {
    try {
      if (typeof window === "undefined") return
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`Error setting item in localStorage:`, error)
    }
  },

  remove: (key) => {
    try {
      if (typeof window === "undefined") return
      window.localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing item from localStorage:`, error)
    }
  },

  clear: () => {
    try {
      if (typeof window === "undefined") return
      window.localStorage.clear()
    } catch (error) {
      console.error(`Error clearing localStorage:`, error)
    }
  },
}

// Array utilities
export const arrayUtils = {
  // Remove duplicates from array
  unique: (array, key = null) => {
    if (key) {
      const seen = new Set()
      return array.filter((item) => {
        const value = item[key]
        if (seen.has(value)) return false
        seen.add(value)
        return true
      })
    }
    return [...new Set(array)]
  },

  // Group array by key
  groupBy: (array, key) => {
    return array.reduce((groups, item) => {
      const group = item[key]
      groups[group] = groups[group] || []
      groups[group].push(item)
      return groups
    }, {})
  },

  // Sort array by key
  sortBy: (array, key, direction = "asc") => {
    return [...array].sort((a, b) => {
      const aVal = a[key]
      const bVal = b[key]

      if (direction === "desc") {
        return bVal > aVal ? 1 : bVal < aVal ? -1 : 0
      }
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0
    })
  },

  // Shuffle array
  shuffle: (array) => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  },
}

// URL utilities
export const urlUtils = {
  // Build query string from object
  buildQuery: (params) => {
    const query = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      if (value !== null && value !== undefined && value !== "") {
        query.append(key, value)
      }
    })
    return query.toString()
  },

  // Parse query string to object
  parseQuery: (queryString) => {
    const params = new URLSearchParams(queryString)
    const result = {}
    for (const [key, value] of params) {
      result[key] = value
    }
    return result
  },
}

// Form validation utilities
export const validation = {
  required: (value) => {
    if (typeof value === "string") return value.trim().length > 0
    return value !== null && value !== undefined
  },

  minLength: (value, min) => {
    return typeof value === "string" && value.length >= min
  },

  maxLength: (value, max) => {
    return typeof value === "string" && value.length <= max
  },

  email: (value) => {
    return isValidEmail(value)
  },

  phone: (value) => {
    return isValidPhone(value)
  },

  number: (value) => {
    return !isNaN(value) && !isNaN(Number.parseFloat(value))
  },

  positiveNumber: (value) => {
    return validation.number(value) && Number.parseFloat(value) > 0
  },

  url: (value) => {
    try {
      new URL(value)
      return true
    } catch {
      return false
    }
  },
}

// Image utilities
export const imageUtils = {
  // Generate placeholder image URL
  placeholder: (width = 300, height = 300, text = "") => {
    return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(text)}`
  },

  // Check if image URL is valid
  isValidImageUrl: (url) => {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url.toLowerCase())
  },

  // Get image dimensions
  getDimensions: (file) => {
    return new Promise((resolve) => {
      const img = new Image()
      img.onload = () => {
        resolve({ width: img.width, height: img.height })
      }
      img.onerror = () => {
        resolve({ width: 0, height: 0 })
      }
      img.src = URL.createObjectURL(file)
    })
  },
}

// Color utilities
export const colorUtils = {
  // Convert hex to RGB
  hexToRgb: (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  },

  // Convert RGB to hex
  rgbToHex: (r, g, b) => {
    return (
      "#" +
      [r, g, b]
        .map((x) => {
          const hex = x.toString(16)
          return hex.length === 1 ? "0" + hex : hex
        })
        .join("")
    )
  },

  // Get contrast color (black or white)
  getContrastColor: (hex) => {
    const rgb = colorUtils.hexToRgb(hex)
    if (!rgb) return "#000000"

    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000
    return brightness > 128 ? "#000000" : "#ffffff"
  },
}

// Performance utilities
export const performance = {
  // Measure function execution time
  measure: async (fn, label = "Function") => {
    const start = performance.now()
    const result = await fn()
    const end = performance.now()
    console.log(`${label} took ${end - start} milliseconds`)
    return result
  },

  // Throttle function execution
  throttle: (func, limit) => {
    let inThrottle
    return function () {
      const args = arguments
      
      if (!inThrottle) {
        func.apply(this, args)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  },
}
