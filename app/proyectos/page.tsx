"use client"

import { useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, MapPin, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import anime from "animejs"

const projects = [
  {
    title: "Centro Comercial Plaza Mayor",
    category: "Videovigilancia Integral",
    description:
      "Implementación de sistema completo de videovigilancia con 150+ cámaras IP, centro de monitoreo y control de acceso.",
    image: "/placeholder.svg?height=300&width=400",
    location: "San José, Costa Rica",
    year: "2024",
    client: "Grupo Inmobiliario CR",
    features: [
      "150+ Cámaras IP 4K",
      "Centro de Monitoreo 24/7",
      "Control de Acceso Biométrico",
      "Análisis Inteligente",
    ],
  },
  {
    title: "Complejo Residencial Los Robles",
    category: "Seguridad Perimetral",
    description:
      "Sistema integral de seguridad perimetral con sensores, cámaras térmicas y control de acceso vehicular.",
    image: "/placeholder.svg?height=300&width=400",
    location: "Escazú, Costa Rica",
    year: "2024",
    client: "Desarrollos Inmobiliarios SA",
    features: ["Sensores Perimetrales", "Cámaras Térmicas", "Control Vehicular", "App Móvil Residentes"],
  },
  {
    title: "Oficinas Corporativas TechCorp",
    category: "Automatización Inteligente",
    description:
      "Solución completa de automatización de edificio con control de iluminación, climatización y seguridad.",
    image: "/placeholder.svg?height=300&width=400",
    location: "Santa Ana, Costa Rica",
    year: "2023",
    client: "TechCorp International",
    features: ["Domótica Avanzada", "Control Climático", "Iluminación Inteligente", "Integración Total"],
  },
  {
    title: "Hospital Nacional Central",
    category: "Seguridad Hospitalaria",
    description:
      "Sistema especializado de seguridad para ambiente hospitalario con zonas críticas y control de acceso médico.",
    image: "/placeholder.svg?height=300&width=400",
    location: "San José, Costa Rica",
    year: "2023",
    client: "Ministerio de Salud",
    features: [
      "Zonas Críticas Protegidas",
      "Control Acceso Médico",
      "Monitoreo Especializado",
      "Cumplimiento Normativo",
    ],
  },
  {
    title: "Campus Universitario UCR",
    category: "Seguridad Educativa",
    description: "Red de seguridad integral para campus universitario con múltiples edificios y áreas comunes.",
    image: "/placeholder.svg?height=300&width=400",
    location: "San Pedro, Costa Rica",
    year: "2023",
    client: "Universidad de Costa Rica",
    features: ["Red Multi-Edificio", "Seguridad Estudiantil", "Monitoreo Áreas Comunes", "Sistema Integrado"],
  },
  {
    title: "Planta Industrial MetalCorp",
    category: "Seguridad Industrial",
    description: "Solución robusta de seguridad industrial con cámaras especializadas y sistemas anti-intrusión.",
    image: "/placeholder.svg?height=300&width=400",
    location: "Cartago, Costa Rica",
    year: "2022",
    client: "MetalCorp Industries",
    features: ["Cámaras Industriales", "Detección Perimetral", "Monitoreo 24/7", "Sistemas Anti-Intrusión"],
  },
]

export default function ProyectosPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const laserRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    anime({
      targets: laserRef.current,
      scaleX: [0, 1],
      duration: 2000,
      easing: "easeOutQuart",
      loop: true,
      direction: "alternate",
    })

    anime({
      targets: heroRef.current?.querySelector(".hero-text"),
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutQuart",
    })
  }, [])

  const scrollToContact = () => {
    // Always navigate to main page with contact anchor
    window.location.href = "/#contacto"
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main>
        <section
          ref={heroRef}
          className="relative py-32 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src="/images/security-camera-bg.png"
              alt="Security Camera Background"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
          </div>

          {/* Animated red laser beam */}
          <div className="absolute top-1/2 left-1/4 w-96 h-1 overflow-hidden">
            <div
              ref={laserRef}
              className="h-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-80 blur-sm"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-400 to-transparent animate-pulse" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="hero-text text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                Nuestros <span className="text-amber-400">Proyectos</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">500+</div>
                <div className="text-gray-300">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">15+</div>
                <div className="text-gray-300">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">200+</div>
                <div className="text-gray-300">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">24/7</div>
                <div className="text-gray-300">Soporte Técnico</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-amber-400/20 hover:border-amber-400/40 hover:shadow-amber-400/20 hover:scale-105 transition-all duration-500 group"
                >
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-heading text-white mb-3">{project.title}</h3>

                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-300">
                        <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Calendar className="h-4 w-4 mr-2 text-amber-400" />
                        {project.year}
                      </div>
                      <div className="flex items-center text-sm text-gray-300">
                        <Users className="h-4 w-4 mr-2 text-amber-400" />
                        {project.client}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-2">Características:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-gray-700 px-2 py-1 rounded text-xs text-gray-300">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full bg-transparent text-amber-400 hover:text-white">
                      Ver Detalles
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="text-white">
              <Award className="h-16 w-16 text-amber-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">¿Listo para su Próximo Proyecto?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
                Permítanos diseñar e implementar la solución de seguridad perfecta para su empresa
              </p>
              <Button
                size="lg"
                className="bg-amber-400 text-black hover:bg-amber-300 font-medium hover:scale-105 transition-all duration-300"
                onClick={scrollToContact}
              >
                Iniciar Proyecto
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
