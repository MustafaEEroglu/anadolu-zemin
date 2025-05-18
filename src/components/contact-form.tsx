"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Form submission logic here
      console.log("Form submitted:", formData)
      setIsSuccess(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="relative">
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="peer pt-6 px-4 pb-2"
        />
        <label 
          htmlFor="name" 
          className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
        >
          Ad Soyad
        </label>
      </div>
      
      <div className="relative">
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="peer pt-6 px-4 pb-2"
        />
        <label 
          htmlFor="email" 
          className="absolute left-4 top-2 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-2"
        >
          Email Adresi
        </label>
      </div>

      <div className="relative">
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="peer pt-8 px-4 pb-2"
        />
        <label 
          htmlFor="message" 
          className="absolute left-4 top-3 text-sm text-muted-foreground transition-all peer-focus:text-primary peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:top-3"
        >
          Mesajınız
        </label>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Gönderiliyor..." : "Gönder"}
      </Button>

      {isSuccess && (
        <div className="p-3 bg-green-100 text-green-800 rounded-md dark:bg-green-900/30 dark:text-green-400">
          Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapacağız.
        </div>
      )}
    </form>
  )
}