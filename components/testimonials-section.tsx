"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function TestimonialsSection() {
  const [visibleTexts, setVisibleTexts] = useState<boolean[]>([])
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

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

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleCards((prev) => {
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

    cardRefs.current.forEach((ref) => {
      if (ref) cardObserver.observe(ref)
    })

    return () => {
      textObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  const testimonials = [
    {
      name: "María González",
      position: "Gerente General",
      company: "Empresa Constructora",
      content:
        "Argatec nos brindó una solución integral de seguridad que superó nuestras expectativas. Su equipo profesional y el soporte continuo han sido excepcionales.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      position: "Director de TI",
      company: "Corporación Industrial",
      content:
        "La implementación fue perfecta y el sistema funciona de manera impecable. Recomiendo Argatec por su profesionalismo y calidad de servicio.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      position: "Propietaria",
      company: "Residencia Privada",
      content:
        "Desde que instalaron el sistema de seguridad, tenemos total tranquilidad. El servicio de monitoreo 24/7 es excelente y muy confiable.",
      rating: 5,
    },
  ]

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className={`text-3xl md:text-4xl font-bold font-heading text-white mb-6 transition-all duration-700 ${
              visibleTexts[0] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              textShadow: `
                  0 4px 8px rgba(0, 0, 0, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.3),
                  0 1px 2px rgba(255, 255, 255, 0.1)
                `,
              transform: "translateZ(0)",
            }}
          >
            Lo que Dicen Nuestros <span className="text-amber-400">Clientes</span>
          </h2>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              visibleTexts[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            La satisfacción de nuestros clientes es nuestro mayor logro. Conoce las experiencias de quienes han confiado
            en nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-black/80 backdrop-blur-md border border-gray-700/50 hover:border-amber-400/60 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 hover:bg-black/90 ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
                boxShadow: `
                  0 10px 25px -5px rgba(0, 0, 0, 0.6),
                  0 20px 40px -10px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-amber-400/50 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="text-left">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.position} - {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
