"use client"

import type React from "react"

import { useState } from "react"
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID/formResponse"
    const formDataEncoded = new URLSearchParams({
      "entry.YOUR_NAME_FIELD": formData.name,
      "entry.YOUR_EMAIL_FIELD": formData.email,
      "entry.YOUR_PHONE_FIELD": formData.phone,
      "entry.YOUR_COMPANY_FIELD": formData.company,
      "entry.YOUR_MESSAGE_FIELD": formData.message,
    })

    // Enviar a Google Forms
    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataEncoded,
    })
      .then(() => {
        alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.")
        setFormData({ name: "", email: "", phone: "", company: "", message: "" })
      })
      .catch(() => {
        alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.")
      })
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
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            ¿Listo para Proteger tu <span className="text-amber-400">Negocio</span>?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte a implementar la solución
            de seguridad perfecta para tus necesidades.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold font-heading text-white mb-6 text-center">
                Solicita tu Consulta Gratuita
              </h3>

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
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
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
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
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
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
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
                      className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
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
                    placeholder="Cuéntanos sobre tu proyecto o necesidades de seguridad..."
                    className="w-full bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-400 text-black hover:bg-amber-300 font-medium hover:scale-105 transition-all duration-300"
                >
                  Enviar Consulta
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
