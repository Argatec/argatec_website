"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServicesHeroSection } from "@/components/services-hero-section"
import { ServicesSection } from "@/components/services-section"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExpoBanner } from "@/components/expo-banner"

export default function ServiciosPage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-radial from-amber-400/8 via-amber-400/3 to-transparent pointer-events-none" />

      <div className="fixed inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-black/40 pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-amber-400 rounded-full"
            style={{
              width: i % 3 === 0 ? "2px" : "1px",
              height: i % 3 === 0 ? "2px" : "1px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${1.5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              filter:
                i % 4 === 0
                  ? "drop-shadow(0 0 6px rgba(251, 191, 36, 1)) drop-shadow(0 0 12px rgba(251, 191, 36, 0.5))"
                  : "drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))",
              opacity: i % 5 === 0 ? 1 : 0.7,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 opacity-8 pointer-events-none">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div
              key={i}
              className="border border-amber-400/30"
              style={{
                boxShadow: i % 20 === 0 ? "0 0 1px rgba(251, 191, 36, 0.3)" : "none",
              }}
            />
          ))}
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl animate-pulse"
          style={{ filter: "drop-shadow(0 0 40px rgba(251, 191, 36, 0.1))" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-400/4 rounded-full blur-3xl animate-pulse"
          style={{
            animationDelay: "2s",
            filter: "drop-shadow(0 0 30px rgba(251, 191, 36, 0.08))",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/3 rounded-full blur-2xl animate-pulse transform -translate-x-1/2 -translate-y-1/2"
          style={{
            animationDelay: "4s",
            animationDuration: "6s",
          }}
        />
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-0.5 h-0.5 bg-amber-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 6}s`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <ExpoBanner />
        <Header />
        <main>
          <ServicesHeroSection />
          <ScrollReveal animation="fade-up" delay={100}>
            <ServicesSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  )
}
