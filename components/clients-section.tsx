"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const clientLogos = [
  { name: "Telecable", logo: "/images/clients/telecable.png" },
  { name: "Ladrillera La Uruca", logo: "/images/clients/ladrillera-la-uruca.png" },
  { name: "SMG Consultores", logo: "/images/clients/smg-consultores.png" },
  { name: "Ladrillera Agua Caliente", logo: "/images/clients/ladrillera-agua-caliente.png" },
  { name: "Clínica Calle Real", logo: "/images/clients/clinica-calle-real.png" },
  { name: "Copre", logo: "/images/clients/copre.png" },
  { name: "La Toscana", logo: "/images/clients/la-toscana.png" },
  { name: "Clínica Veterinaria Dr. Fernández", logo: "/images/clients/clinica-veterinaria-fernandez.png" },
  { name: "Pollo Granjero", logo: "/images/clients/pollo-granjero.png" },
  { name: "Refractarios La Uruca", logo: "/images/clients/refractarios-la-uruca.jpeg" },
  { name: "Sinax Exports", logo: "/images/clients/sinax-exports.jpeg" },
  { name: "Pollolandia", logo: "/images/clients/pollolandia.png" },
]

export function ClientsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout>()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clientLogos.length)
    }, 3000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="clientes" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-heading text-white mb-6"
            style={{
              textShadow: `
                  0 4px 8px rgba(0, 0, 0, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.3),
                  0 1px 2px rgba(255, 255, 255, 0.1)
                `,
              transform: "translateZ(0)",
            }}
          >
            Nuestros <span className="text-amber-300">clientes</span>
          </h2>
          <p
            className="text-lg text-gray-300 leading-relaxed"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Confiamos en las mejores empresas y ellas confían en nosotros. Conoce algunos de nuestros valiosos clientes.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative perspective-1000">
            <div className="relative h-96 flex items-center justify-center overflow-hidden">
              {clientLogos.map((client, index) => {
                const offset = (index - currentIndex + clientLogos.length) % clientLogos.length
                const adjustedOffset = offset > clientLogos.length / 2 ? offset - clientLogos.length : offset

                let transform = `translateX(${adjustedOffset * 120}px) translateZ(${Math.abs(adjustedOffset) * -40}px) rotateY(${adjustedOffset * 8}deg) scale(${1 - Math.abs(adjustedOffset) * 0.06})`
                let opacity = Math.max(0.3, 1 - Math.abs(adjustedOffset) * 0.2)
                const zIndex = 15 - Math.abs(adjustedOffset)

                if (Math.abs(adjustedOffset) > 4) {
                  opacity = 0
                  transform += " scale(0.5)"
                }

                return (
                  <div
                    key={`${client.name}-${index}`}
                    className="absolute transition-all duration-1000 ease-out"
                    style={{
                      transform,
                      opacity,
                      zIndex,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div
                      className="bg-white/98 backdrop-blur-sm rounded-lg p-4 shadow-2xl transition-all duration-500 border border-gray-200/30"
                      style={{
                        width: "320px",
                        height: "240px",
                        boxShadow: `
                          0 20px 40px -10px rgba(0, 0, 0, 0.4),
                          0 10px 20px -5px rgba(0, 0, 0, 0.3),
                          inset 0 1px 0 rgba(255, 255, 255, 0.95)
                        `,
                      }}
                    >
                      <div className="flex items-center justify-center h-full">
                        <Image
                          src={client.logo || "/placeholder.svg"}
                          alt={client.name}
                          width={280}
                          height={200}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
