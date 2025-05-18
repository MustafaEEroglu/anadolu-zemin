"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
  submitError?: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = "İsim alanı zorunludur"
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı zorunludur"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz"
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Mesaj alanı zorunludur"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Replace with your actual form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulated API call
      setIsSuccess(true)
      setFormData({ name: "", email: "", message: "" })
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setErrors((prev) => ({
        ...prev,
        submitError: "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz."
      }))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="relative">
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className={`peer pt-6 px-4 pb-2 ${errors.name ? 'border-red-500' : ''}`}
          aria-invalid={errors.name ? "true" : "false"}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isSubmitting}
        />
        <label 
          htmlFor="name" 
          className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
        >
          Ad Soyad
        </label>
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-500">
            {errors.name}
          </p>
        )}
      </div>
      
      <div className="relative">
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`peer pt-6 px-4 pb-2 ${errors.email ? 'border-red-500' : ''}`}
          aria-invalid={errors.email ? "true" : "false"}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isSubmitting}
        />
        <label 
          htmlFor="email" 
          className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
        >
          E-posta
        </label>
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-500">
            {errors.email}
          </p>
        )}
      </div>

      <div className="relative">
        <Textarea
          id="message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className={`peer pt-6 px-4 pb-2 min-h-[120px] ${errors.message ? 'border-red-500' : ''}`}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          disabled={isSubmitting}
        />
        <label 
          htmlFor="message" 
          className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
        >
          Mesajınız
        </label>
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {errors.submitError && (
        <p className="text-sm text-red-500">{errors.submitError}</p>
      )}

      {isSuccess && (
        <p className="text-sm text-green-500">
          Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
        </p>
      )}

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          "Gönder"
        )}
      </Button>
    </form>
  )
}