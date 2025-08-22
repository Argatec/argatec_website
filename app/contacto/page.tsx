"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Mail, MapPin, Clock, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactoPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <Shield className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                ¿Listo para Proteger tu <span className="text-amber-400">Negocio</span>?
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Contáctanos hoy y descubre cómo podemos fortalecer la seguridad de tu empresa con soluciones
                personalizadas
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              {/* Contact Form */}
              <div className="bg-gray-800/50 border-gray-700 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold font-heading text-white mb-6 text-center">Solicita tu Cotización</h2>
                <p className="text-gray-300 mb-8 text-center">
                  Completa el formulario y nuestro equipo se pondrá en contacto contigo en menos de 24 horas.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Nombre *</label>
                      <Input
                        placeholder="Tu nombre completo"
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Empresa</label>
                      <Input
                        placeholder="Nombre de tu empresa"
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Teléfono *</label>
                      <Input
                        placeholder="Tu número de teléfono"
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="tu@email.com"
                        className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Tipo de Servicio</label>
                    <select className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700/50 text-white focus:border-amber-400">
                      <option>Selecciona un servicio</option>
                      <option>Videovigilancia</option>
                      <option>Control de Acceso</option>
                      <option>Alarmas de Seguridad</option>
                      <option>Automatización</option>
                      <option>Consultoría Integral</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Mensaje *</label>
                    <Textarea
                      placeholder="Cuéntanos sobre tu proyecto y necesidades específicas..."
                      rows={4}
                      className="bg-gray-700/50 border-gray-600 text-white focus:border-amber-400"
                    />
                  </div>

                  <Button
                    className="w-full bg-amber-400 text-black hover:bg-amber-300 font-medium hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    Enviar Solicitud
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16 bg-gray-900/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Teléfono</h3>
                <p className="text-gray-300">8655-6530</p>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">gestion@argatec.cr</p>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Ubicación</h3>
                <p className="text-gray-300">Costa Rica</p>
              </div>
              <div className="text-center">
                <Clock className="h-8 w-8 text-amber-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Horario</h3>
                <p className="text-gray-300">Lun - Vie: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Sáb: 8:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="py-16 bg-amber-400/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold font-heading text-white mb-4">¿Emergencia de Seguridad?</h2>
            <p className="text-lg text-gray-300 mb-6">Para situaciones urgentes, contáctanos inmediatamente</p>
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700 font-medium">
              Llamar Ahora: 8655-6530
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
