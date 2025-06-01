import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines and merges Tailwind CSS classes
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/**
 * Format currency with proper symbol and decimals
 */
export function formatCurrency(amount, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount)
}

/**
 * Format price with discount calculation
 */
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

/**
 * Generate product slug from name
 */
export function generateSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

/**
 * Truncate text with ellipsis
 */
export function truncateText(text, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + "..."
}

/**
 * Calculate discount percentage
 */
export function calculateDiscount(originalPrice, salePrice) {
  if (!originalPrice || !salePrice || originalPrice <= salePrice) return 0
  return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
}

/**
 * Format rating display
 */
export function formatRating(rating, maxRating = 5) {
  return {
    rating: Number(rating).toFixed(1),
    percentage: (rating / maxRating) * 100,
    stars: Math.round(rating),
    fullStars: Math.floor(rating),
    hasHalfStar: rating % 1 >= 0.5,
  }
}

/**
 * Validate email format
 */
export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone) {
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/
  return phoneRegex.test(phone.replace(/\s/g, ""))
}

/**
 * Format phone number for display
 */
export function formatPhoneNumber(phone) {
  const cleaned = phone.replace(/\D/g, "")
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`
  }
  return phone
}

/**
 * Generate random ID
 */
export function generateId(length = 8) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let result = ""
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

/**
 * Debounce function for search and input handling
 */
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

/**
 * Format date for display
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  return new Intl.DateTimeFormat("en-US", { ...defaultOptions, ...options }).format(new Date(date))
}

/**
 * Format relative time (e.g., "2 hours ago")
 */
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

/**
 * Local storage helpers with error handling
 */
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

/**
 * Create a color hex value with transparency
 */
export function hexWithOpacity(hexColor, opacity) {
  if (!hexColor) return null
  const hex = hexColor.replace("#", "")
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

/**
 * Generate a placeholder image URL
 */
export function placeholderImage(width = 300, height = 300, text = "") {
  return `/placeholder.svg?height=${height}&width=${width}&query=${encodeURIComponent(text)}`
}

/**
 * Throttle function execution
 */
export function throttle(func, limit) {
  let lastFunc
  let lastRan
  return function () {
    
    const args = arguments
    if (!lastRan) {
      func.apply(this, args)
      lastRan = Date.now()
    } else {
      clearTimeout(lastFunc)
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args)
            lastRan = Date.now()
          }
        },
        limit - (Date.now() - lastRan),
      )
    }
  }
}

/**
 * Calculate total price with tax and shipping
 */
export function calculateTotalPrice(items, taxRate = 0.08, shippingThreshold = 100, shippingCost = 9.99) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * taxRate
  const shipping = subtotal >= shippingThreshold ? 0 : shippingCost

  return {
    subtotal,
    tax,
    shipping,
    total: subtotal + tax + shipping,
  }
}

/**
 * Check if an object is empty
 */
export function isEmpty(obj) {
  return obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * Convert array to object with ID as key
 */
export function arrayToObject(array, key = "id") {
  return array.reduce((obj, item) => {
    obj[item[key]] = item
    return obj
  }, {})
}

/**
 * Generate initials from name
 */
export function getInitials(name) {
  if (!name) return ""
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .substring(0, 2)
}

/**
 * Get a random element from array
 */
export function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)]
}

/**
 * Copy text to clipboard
 */
export function copyToClipboard(text) {
  if (typeof navigator === "undefined") return Promise.reject("Not in browser environment")

  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text)
  } else {
    // Fallback for older browsers
    const textArea = document.createElement("textarea")
    textArea.value = text
    textArea.style.position = "fixed"
    textArea.style.left = "-999999px"
    textArea.style.top = "-999999px"
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()

    return new Promise((resolve, reject) => {
      try {
        document.execCommand("copy")
        document.body.removeChild(textArea)
        resolve()
      } catch (err) {
        document.body.removeChild(textArea)
        reject(err)
      }
    })
  }
}
