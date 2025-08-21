"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServicesSection } from "@/components/services-section"

export default function ServiciosPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-amber-400/5 via-transparent to-transparent pointer-events-none" />

      {/* Estrellas parpadeantes de fondo para toda la página */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
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

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border border-amber-400/20" />
          ))}
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/3 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/2 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <ServicesHeroSection />
          <ServicesSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}
