import { validation } from "./utils.js"

// Product validation schema
export const productValidation = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 100),
    message: "Product name must be between 2 and 100 characters",
  },
  description: {
    required: true,
    minLength: 10,
    maxLength: 1000,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 10) && validation.maxLength(value, 1000),
    message: "Description must be between 10 and 1000 characters",
  },
  price: {
    required: true,
    validate: (value) => validation.required(value) && validation.positiveNumber(value),
    message: "Price must be a positive number",
  },
  offerPrice: {
    required: true,
    validate: (value, data) => {
      if (!validation.required(value) || !validation.positiveNumber(value)) return false
      return Number.parseFloat(value) <= Number.parseFloat(data.price)
    },
    message: "Offer price must be a positive number and less than or equal to regular price",
  },
  category: {
    required: true,
    validate: (value) => validation.required(value),
    message: "Category is required",
  },
  images: {
    required: true,
    validate: (value) => Array.isArray(value) && value.length > 0,
    message: "At least one product image is required",
  },
}

// User registration validation schema
export const userRegistrationValidation = {
  firstName: {
    required: true,
    minLength: 2,
    maxLength: 50,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 50),
    message: "First name must be between 2 and 50 characters",
  },
  lastName: {
    required: true,
    minLength: 2,
    maxLength: 50,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 50),
    message: "Last name must be between 2 and 50 characters",
  },
  email: {
    required: true,
    validate: (value) => validation.required(value) && validation.email(value),
    message: "Please enter a valid email address",
  },
  password: {
    required: true,
    minLength: 8,
    validate: (value) => {
      if (!validation.required(value) || !validation.minLength(value, 8)) return false
      // Check for at least one uppercase, one lowercase, and one number
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)
    },
    message: "Password must be at least 8 characters with uppercase, lowercase, and number",
  },
  confirmPassword: {
    required: true,
    validate: (value, data) => validation.required(value) && value === data.password,
    message: "Passwords do not match",
  },
  phone: {
    required: false,
    validate: (value) => !value || validation.phone(value),
    message: "Please enter a valid phone number",
  },
}

// Address validation schema
export const addressValidation = {
  fullName: {
    required: true,
    minLength: 2,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 100),
    message: "Full name must be between 2 and 100 characters",
  },
  phoneNumber: {
    required: true,
    validate: (value) => validation.required(value) && validation.phone(value),
    message: "Please enter a valid phone number",
  },
  pincode: {
    required: true,
    validate: (value) => validation.required(value) && /^\d{5,6}$/.test(value),
    message: "Please enter a valid pincode (5-6 digits)",
  },
  area: {
    required: true,
    minLength: 10,
    maxLength: 200,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 10) && validation.maxLength(value, 200),
    message: "Address must be between 10 and 200 characters",
  },
  city: {
    required: true,
    minLength: 2,
    maxLength: 50,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 50),
    message: "City must be between 2 and 50 characters",
  },
  state: {
    required: true,
    minLength: 2,
    maxLength: 50,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 50),
    message: "State must be between 2 and 50 characters",
  },
}

// Contact form validation schema
export const contactValidation = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 100),
    message: "Name must be between 2 and 100 characters",
  },
  email: {
    required: true,
    validate: (value) => validation.required(value) && validation.email(value),
    message: "Please enter a valid email address",
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 5) && validation.maxLength(value, 100),
    message: "Subject must be between 5 and 100 characters",
  },
  message: {
    required: true,
    minLength: 20,
    maxLength: 1000,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 20) && validation.maxLength(value, 1000),
    message: "Message must be between 20 and 1000 characters",
  },
}

// Newsletter subscription validation
export const newsletterValidation = {
  email: {
    required: true,
    validate: (value) => validation.required(value) && validation.email(value),
    message: "Please enter a valid email address",
  },
}

// Review validation schema
export const reviewValidation = {
  rating: {
    required: true,
    validate: (value) => validation.required(value) && validation.number(value) && value >= 1 && value <= 5,
    message: "Rating must be between 1 and 5",
  },
  title: {
    required: true,
    minLength: 5,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 5) && validation.maxLength(value, 100),
    message: "Review title must be between 5 and 100 characters",
  },
  comment: {
    required: true,
    minLength: 20,
    maxLength: 500,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 20) && validation.maxLength(value, 500),
    message: "Review comment must be between 20 and 500 characters",
  },
}

// Search validation
export const searchValidation = {
  query: {
    required: true,
    minLength: 2,
    maxLength: 100,
    validate: (value) =>
      validation.required(value) && validation.minLength(value, 2) && validation.maxLength(value, 100),
    message: "Search query must be between 2 and 100 characters",
  },
}

// Generic form validator function
export function validateForm(data, schema) {
  const errors = {}
  let isValid = true

  for (const [field, rules] of Object.entries(schema)) {
    const value = data[field]

    if (rules.required && !validation.required(value)) {
      errors[field] = `${field} is required`
      isValid = false
      continue
    }

    if (value && rules.validate && !rules.validate(value, data)) {
      errors[field] = rules.message || `${field} is invalid`
      isValid = false
    }
  }

  return { isValid, errors }
}

// Validate single field
export function validateField(value, rules, allData = {}) {
  if (rules.required && !validation.required(value)) {
    return { isValid: false, error: `Field is required` }
  }

  if (value && rules.validate && !rules.validate(value, allData)) {
    return { isValid: false, error: rules.message || `Field is invalid` }
  }

  return { isValid: true, error: null }
}

// Real-time validation hook helper
export function createValidator(schema) {
  return {
    validate: (data) => validateForm(data, schema),
    validateField: (field, value, allData = {}) => {
      const rules = schema[field]
      if (!rules) return { isValid: true, error: null }
      return validateField(value, rules, allData)
    },
    getFieldRules: (field) => schema[field] || {},
    getAllRules: () => schema,
  }
}

// File validation
export const fileValidation = {
  image: {
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ["image/jpeg", "image/jpg", "image/png", "image/webp"],
    validate: (file) => {
      if (!file) return false
      if (file.size > fileValidation.image.maxSize) return false
      if (!fileValidation.image.allowedTypes.includes(file.type)) return false
      return true
    },
    message: "Image must be JPEG, PNG, or WebP format and less than 5MB",
  },
  document: {
    maxSize: 10 * 1024 * 1024, // 10MB
    allowedTypes: [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ],
    validate: (file) => {
      if (!file) return false
      if (file.size > fileValidation.document.maxSize) return false
      if (!fileValidation.document.allowedTypes.includes(file.type)) return false
      return true
    },
    message: "Document must be PDF or Word format and less than 10MB",
  },
}

// Validate multiple files
export function validateFiles(files, type = "image") {
  const rules = fileValidation[type]
  if (!rules) return { isValid: false, errors: ["Invalid file type"] }

  const errors = []

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    if (!rules.validate(file)) {
      errors.push(`File ${i + 1}: ${rules.message}`)
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}
