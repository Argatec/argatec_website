"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Shield, Eye, Zap } from "lucide-react"
import anime from "animejs"

export function AnimatedHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cameraRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    anime({
      targets: cameraRef.current,
      scale: [0, 1],
      rotateX: [90, 0],
      rotateY: [0, 360],
      duration: 3000,
      easing: "easeOutElastic(1, .8)",
      delay: 500,
    })

    anime({
      targets: textRef.current?.children,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      delay: anime.stagger(200, { start: 1000 }),
      easing: "easeOutQuart",
    })

    anime({
      targets: ".particle",
      translateX: () => anime.random(-150, 150),
      translateY: () => anime.random(-150, 150),
      translateZ: () => anime.random(-100, 100),
      scale: [0, 1, 0],
      opacity: [0, 0.8, 0],
      duration: 4000,
      delay: anime.stagger(150),
      loop: true,
      easing: "easeInOutQuad",
    })

    anime({
      targets: ".scan-line",
      translateY: [-300, 300],
      opacity: [0, 1, 0],
      duration: 2500,
      loop: true,
      easing: "easeInOutQuad",
    })
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
      <div ref={particlesRef} className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-emerald-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="25,2 45,15 45,35 25,48 5,35 5,15" fill="none" stroke="#10b981" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div ref={textRef} className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 mb-8">
              <Shield className="h-4 w-4 text-emerald-400 mr-2" />
              <span className="text-sm font-medium text-emerald-400">Sistema Ajax Profesional</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              DOMINA TU <span className="text-emerald-400">ESPACIO</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
              Ofrecemos protección contra intrusiones, confort y automatización, protección contra incendios y
              videovigilancia. Todo integrado en un solo sistema Ajax.
            </p>
            <Button
              size="lg"
              className="bg-emerald-400 text-black hover:bg-emerald-300 font-medium text-lg px-8 py-4 rounded-full"
            >
              Dónde comprar
            </Button>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <Eye className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Detección IA</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Protección 24/7</div>
              </div>
              <div className="text-center">
                <Zap className="h-8 w-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-sm text-gray-400">Respuesta Rápida</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div ref={cameraRef} className="relative">
              <div className="w-80 h-80 relative">
                {/* Camera base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-t from-gray-800 to-gray-700 rounded-t-full shadow-2xl" />

                {/* Main dome */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-white via-gray-100 to-gray-300 rounded-full shadow-2xl">
                  {/* Inner camera lens */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-full shadow-inner">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-lg">
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
                    </div>
                  </div>

                  {/* Dome reflection */}
                  <div className="absolute top-8 left-8 w-24 h-24 bg-white/30 rounded-full blur-sm" />
                  <div className="absolute top-12 left-12 w-12 h-12 bg-white/50 rounded-full blur-sm" />
                </div>

                {/* LED status indicator */}
                <div className="absolute top-16 right-16 w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50" />

                {/* Scanning line */}
                <div className="scan-line absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80" />
              </div>

              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-emerald-400/20 rounded-full animate-ping"
                  style={{
                    animationDelay: `${i * 0.6}s`,
                    animationDuration: "3s",
                    transform: `scale(${1 + i * 0.2})`,
                  }}
                />
              ))}
            </div>

            <div className="absolute top-10 left-10 text-emerald-400 animate-bounce">
              <div className="bg-emerald-400/10 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 shadow-lg">
                <Shield className="h-5 w-5 mb-2" />
                <span className="text-sm font-mono block">Protección contra intrusiones</span>
              </div>
            </div>

            <div
              className="absolute bottom-10 right-10 text-emerald-400 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="bg-emerald-400/10 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 shadow-lg">
                <Eye className="h-5 w-5 mb-2" />
                <span className="text-sm font-mono block">Videovigilancia HD</span>
              </div>
            </div>

            <div
              className="absolute top-1/2 -right-20 text-emerald-400 animate-bounce"
              style={{ animationDelay: "1s" }}
            >
              <div className="bg-emerald-400/10 backdrop-blur-sm rounded-lg p-4 border border-emerald-400/30 shadow-lg">
                <Zap className="h-5 w-5 mb-2" />
                <span className="text-sm font-mono block">Automatización</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
