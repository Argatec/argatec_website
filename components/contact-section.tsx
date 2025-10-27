"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const [visibleTexts, setVisibleTexts] = useState<boolean[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = textRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleTexts((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    textRefs.current.forEach((ref) => {
      if (ref) textObserver.observe(ref)
    })

    return () => {
      textObserver.disconnect()
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })

        // Show success message for 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle")
        }, 5000)
      } else {
        throw new Error(result.error || "Error al enviar el formulario")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className={`text-3xl md:text-4xl font-bold font-heading text-white mb-6 transition-all duration-700 ${
              visibleTexts[0] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            ¿Listo para Proteger tu <span className="text-amber-400">Negocio</span>?
          </h2>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              visibleTexts[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte a implementar la solución
            de seguridad perfecta para tus necesidades.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card
            ref={(el) => (textRefs.current[2] = el)}
            className={`bg-black/80 backdrop-blur-md border-gray-700/50 hover:border-amber-400/60 transition-all duration-700 ${
              visibleTexts[2] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-heading text-white mb-6 text-center">
                Solicita tu Consulta Gratuita
              </h3>

              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-600/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-center">
                    ¡Gracias por contactarnos! Hemos recibido tu consulta y nos pondremos en contacto contigo pronto a
                    través de gestion@argatec.cr
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-600/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-center">
                    Hubo un error al enviar tu consulta. Por favor, inténtalo de nuevo o contáctanos directamente a
                    gestion@argatec.cr
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Correo Electrónico *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Teléfono
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400 disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400 disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Cuéntanos sobre tu proyecto o necesidades de seguridad..."
                    className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400 disabled:opacity-50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 font-medium hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Consulta"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
