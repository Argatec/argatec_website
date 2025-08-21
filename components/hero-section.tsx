"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { MouseFollowingLogo } from "./mouse-following-logo"
import anime from "animejs"

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    anime({
      targets: textRef.current?.children,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200),
      easing: "easeOutQuart",
    })
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border border-amber-400/20" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))",
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
        {/* Estrellas adicionales con parpadeo más intenso */}
        {[...Array(30)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-amber-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 1))",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-6 leading-tight text-3d">
              <span className="text-amber-400 text-3d-gold">Argatec</span>
              <br />
              Su seguridad no es un juego
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Más de una década de experiencia brindando seguridad electrónica integral, asesoría personalizada y
              respaldo certificado para proteger lo que más importa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-400 text-black hover:bg-amber-300 px-8 py-3 font-medium"
                onClick={() => (window.location.href = "/servicios")}
              >
                Conoce Nuestros Servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-3 border-amber-400/30 text-amber-400 hover:bg-amber-400/10 bg-transparent"
                onClick={() => (window.location.href = "/proyectos")}
              >
                Ver Proyectos
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1 text-3d-gold">10+</div>
                <div className="text-xs text-gray-400">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1 text-3d-gold">500+</div>
                <div className="text-xs text-gray-400">Proyectos Completados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400 mb-1 text-3d-gold">24/7</div>
                <div className="text-xs text-gray-400">Soporte Técnico</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <MouseFollowingLogo />
          </div>
        </div>
      </div>
    </section>
  )
}
