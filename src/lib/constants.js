// Application constants
export const APP_CONFIG = {
  name: "ShopNest",
  description: "Premium tech products for modern lifestyle",
  version: "1.0.0",
  author: "ShopNest Team",
  url: "https://shopnest.com",
  email: "support@shopnest.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Street, San Francisco, CA 94107",
}

// API endpoints
export const API_ENDPOINTS = {
  products: "/api/products",
  categories: "/api/categories",
  orders: "/api/orders",
  users: "/api/users",
  auth: "/api/auth",
  cart: "/api/cart",
  wishlist: "/api/wishlist",
  reviews: "/api/reviews",
  search: "/api/search",
}

// Product categories
export const PRODUCT_CATEGORIES = [
  { id: "earphone", name: "Earphones", icon: "headphones" },
  { id: "headphone", name: "Headphones", icon: "headphones" },
  { id: "watch", name: "Smart Watches", icon: "watch" },
  { id: "smartphone", name: "Smartphones", icon: "smartphone" },
  { id: "laptop", name: "Laptops", icon: "laptop" },
  { id: "camera", name: "Cameras", icon: "camera" },
  { id: "accessories", name: "Accessories", icon: "cable" },
  { id: "gaming", name: "Gaming", icon: "gamepad-2" },
  { id: "audio", name: "Audio", icon: "volume-2" },
  { id: "wearables", name: "Wearables", icon: "watch" },
]

// Order statuses
export const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  PROCESSING: "processing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
  REFUNDED: "refunded",
}

// Payment methods
export const PAYMENT_METHODS = {
  COD: "cod",
  CARD: "card",
  PAYPAL: "paypal",
  APPLE_PAY: "apple_pay",
  GOOGLE_PAY: "google_pay",
}

// Shipping options
export const SHIPPING_OPTIONS = [
  {
    id: "standard",
    name: "Standard Shipping",
    description: "5-7 business days",
    price: 9.99,
    freeThreshold: 100,
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "2-3 business days",
    price: 19.99,
    freeThreshold: 200,
  },
  {
    id: "overnight",
    name: "Overnight Shipping",
    description: "Next business day",
    price: 39.99,
    freeThreshold: 500,
  },
]

// Currency options
export const CURRENCIES = [
  { code: "USD", symbol: "$", name: "US Dollar" },
  { code: "EUR", symbol: "€", name: "Euro" },
  { code: "GBP", symbol: "£", name: "British Pound" },
  { code: "CAD", symbol: "C$", name: "Canadian Dollar" },
  { code: "AUD", symbol: "A$", name: "Australian Dollar" },
]

// Theme colors
export const THEME_COLORS = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  secondary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
}

// Breakpoints for responsive design
export const BREAKPOINTS = {
  xs: "475px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

// Animation durations
export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 1000,
}

// Local storage keys
export const STORAGE_KEYS = {
  cart: "shopnest_cart",
  wishlist: "shopnest_wishlist",
  user: "shopnest_user",
  theme: "shopnest_theme",
  language: "shopnest_language",
  currency: "shopnest_currency",
  recentlyViewed: "shopnest_recently_viewed",
}

// Form validation rules
export const VALIDATION_RULES = {
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Please enter a valid email address",
  },
  phone: {
    required: true,
    pattern: /^[+]?[1-9][\d]{0,15}$/,
    message: "Please enter a valid phone number",
  },
  password: {
    required: true,
    minLength: 8,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    message: "Password must be at least 8 characters with uppercase, lowercase, and number",
  },
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    message: "Name must be between 2 and 50 characters",
  },
  address: {
    required: true,
    minLength: 10,
    maxLength: 200,
    message: "Address must be between 10 and 200 characters",
  },
  pincode: {
    required: true,
    pattern: /^\d{5,6}$/,
    message: "Please enter a valid pincode",
  },
}

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/shopnest",
  twitter: "https://twitter.com/shopnest",
  instagram: "https://instagram.com/shopnest",
  youtube: "https://youtube.com/shopnest",
  linkedin: "https://linkedin.com/company/shopnest",
}

// Feature flags
export const FEATURES = {
  wishlist: true,
  reviews: true,
  recommendations: true,
  notifications: true,
  darkMode: true,
  multiCurrency: true,
  guestCheckout: true,
  socialLogin: true,
}

// Error messages
export const ERROR_MESSAGES = {
  network: "Network error. Please check your connection and try again.",
  server: "Server error. Please try again later.",
  notFound: "The requested resource was not found.",
  unauthorized: "You are not authorized to perform this action.",
  validation: "Please check your input and try again.",
  generic: "Something went wrong. Please try again.",
}

// Success messages
export const SUCCESS_MESSAGES = {
  productAdded: "Product added to cart successfully!",
  orderPlaced: "Order placed successfully!",
  profileUpdated: "Profile updated successfully!",
  addressSaved: "Address saved successfully!",
  reviewSubmitted: "Review submitted successfully!",
  subscribed: "Successfully subscribed to newsletter!",
}

// Image sizes for optimization
export const IMAGE_SIZES = {
  thumbnail: { width: 150, height: 150 },
  small: { width: 300, height: 300 },
  medium: { width: 600, height: 600 },
  large: { width: 1200, height: 1200 },
  hero: { width: 1920, height: 1080 },
}

// SEO defaults
export const SEO_DEFAULTS = {
  title: "ShopNest - Premium Tech Products",
  description:
    "Discover the latest tech products with premium quality and exceptional service. Shop smartphones, laptops, headphones, and more.",
  keywords: "tech products, electronics, smartphones, laptops, headphones, gadgets, online shopping",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
}

// Rating system
export const RATING_SYSTEM = {
  min: 1,
  max: 5,
  step: 0.5,
  labels: {
    1: "Poor",
    2: "Fair",
    3: "Good",
    4: "Very Good",
    5: "Excellent",
  },
}

// Pagination defaults
export const PAGINATION = {
  defaultPage: 1,
  defaultLimit: 12,
  maxLimit: 100,
  showPages: 5,
}

// Search configuration
export const SEARCH_CONFIG = {
  minQueryLength: 2,
  maxSuggestions: 8,
  debounceDelay: 300,
  highlightClass: "bg-yellow-200",
}
