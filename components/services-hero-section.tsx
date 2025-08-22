"use client"

import { useEffect, useRef } from "react"
import anime from "animejs"

export function ServicesHeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border border-amber-400/20" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1.5 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
              filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={textRef} className="text-white">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/images/argatec-shield-logo.png"
                  alt="Argatec Logo"
                  className="h-44 w-44 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-tight"
              style={{
                textShadow: `
                  0 4px 8px rgba(0, 0, 0, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.3),
                  0 1px 2px rgba(255, 255, 255, 0.1)
                `,
                transform: "translateZ(0)",
              }}
            >
              <span className="text-amber-400">Confíe en nosotros</span>
              <br />
              para proteger lo que más importa:
              <br />
              <span className="text-amber-400">su negocio y su tranquilidad</span>
            </h1>

            <p
              className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
              style={{
                textShadow: `
                  0 2px 4px rgba(0, 0, 0, 0.5),
                  0 1px 2px rgba(0, 0, 0, 0.3)
                `,
              }}
            >
              Soluciones integrales de seguridad electrónica con más de una década de experiencia. Desde sistemas de
              alarma hasta redes de fibra óptica, protegemos su inversión con tecnología de vanguardia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
