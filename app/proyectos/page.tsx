"use client"

import { useEffect, useRef, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProjectsSection } from "@/components/projects-section"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"
import Image from "next/image"
import { ExpoBanner } from "@/components/expo-banner"

export default function ProyectosPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const [stars, setStars] = useState<
    Array<{ left: number; top: number; animationDelay: number; animationDuration: number; scale: number }>
  >([])
  const [smallStars, setSmallStars] = useState<
    Array<{ left: number; top: number; animationDelay: number; animationDuration: number; scale: number }>
  >([])

  const typewriterWords = [
    "Casos",
    "de",
    "éxito",
    "que",
    "demuestran",
    "nuestra",
    "experiencia",
    "y",
    "compromiso",
    "con",
    "la",
    "excelencia",
  ]

  useEffect(() => {
    setIsClient(true)
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }

    const generateStars = (count: number) => {
      return Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 2 + Math.random() * 2,
        scale: 0.5 + Math.random() * 1.5,
      }))
    }

    setStars(generateStars(50))
    setSmallStars(generateStars(30))

    const typewriterInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % typewriterWords.length
        if (nextIndex === 0) {
          setTypewriterText("")
        } else {
          const wordsToShow = typewriterWords.slice(0, nextIndex + 1)
          setTypewriterText(wordsToShow.join(" "))
        }
        return nextIndex
      })
    }, 800)

    return () => {
      clearInterval(typewriterInterval)
    }
  }, [])

  useEffect(() => {
    if (!isClient || !statsRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    observer.observe(statsRef.current)

    return () => observer.disconnect()
  }, [isClient])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = "/#contacto"
    }
  }

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900/60 via-black/60 to-gray-900/60">
        <Header />
        <main className="pt-20">
          <section className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6">
                  Nuestros <span className="text-amber-400">Proyectos</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
                  Casos de éxito que demuestran nuestra experiencia y compromiso con la excelencia
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900/60 via-black/60 to-gray-900/60 relative">
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div
              key={i}
              className={`border border-amber-500/30 ${
                i % 3 === 0 ? "opacity-60" : i % 5 === 0 ? "opacity-40" : "opacity-30"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="fixed inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
              filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.9))",
              transform: `scale(${star.scale})`,
            }}
          />
        ))}
        {smallStars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-0.5 h-0.5 bg-amber-400 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
              animationDelay: `${star.animationDelay}s`,
              filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 1))",
            }}
          />
        ))}
      </div>

      <ExpoBanner />
      <Header />

      <main className="pt-20 relative z-10">
        <section ref={heroRef} className="relative py-24 md:py-48 lg:py-56 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl opacity-60" />
            <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-800/15 rounded-full blur-3xl opacity-50" />
          </div>

          <div className="absolute top-4 right-2 md:top-12 md:right-8 z-20">
            <div className="relative" style={{ animation: "cameraFloat 4s ease-in-out infinite" }}>
              <Image
                src="/images/dome-camera-provision.png"
                alt="Dome Security Camera"
                width={160}
                height={160}
                className="md:w-80 md:h-80 object-contain opacity-95"
                style={{
                  filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 25px rgba(251, 191, 36, 0.3))",
                }}
                priority
              />
              <div className="absolute inset-0 bg-amber-400/12 rounded-full blur-3xl opacity-90" />
              <div className="absolute inset-2 bg-amber-400/8 rounded-full blur-2xl opacity-70" />
            </div>
          </div>

          <div className="absolute bottom-4 left-2 md:bottom-8 md:left-8 z-20">
            <div className="relative" style={{ animation: "cameraFloat 6s ease-in-out infinite reverse" }}>
              <Image
                src="/images/ptz-camera-hikvision.png"
                alt="PTZ Security Camera"
                width={190}
                height={190}
                className="md:w-96 md:h-96 object-contain opacity-90"
                style={{
                  filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.2))",
                }}
              />
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-2 h-2 md:w-2.5 md:h-2.5 bg-green-500 rounded-full animate-pulse shadow-lg shadow-green-500/50" />
              <div className="absolute top-2 left-1/3 md:top-4 md:left-1/3 w-4 h-0.5 md:w-8 md:h-1 bg-white/20 rounded-full blur-sm" />
            </div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-center h-full min-h-[300px] md:min-h-[400px]">
              <div className="text-center text-white max-w-4xl mx-auto mt-8">
                <div className="mb-8 md:mb-12">
                  <h1
                    ref={titleRef}
                    className="text-4xl md:text-6xl lg:text-8xl font-bold font-heading mb-6 md:mb-8 leading-tight"
                    style={{
                      textShadow: "3px 3px 6px rgba(0, 0, 0, 0.9), 0 0 15px rgba(251, 191, 36, 0.4)",
                    }}
                  >
                    <div className="text-amber-400">Nuestros</div>
                    <div className="text-white">Proyectos</div>
                  </h1>
                  <div
                    ref={textRef}
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed h-12 md:h-16 flex items-center justify-center px-4"
                    style={{
                      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9), 0 0 8px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <div className="text-balance text-white font-medium max-w-2xl">
                      <div className="h-6 md:h-8 flex items-center justify-center">{typewriterText}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ScrollReveal animation="fade-up" delay={100}>
          <section ref={statsRef} className="py-12 md:py-16 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                <div
                  className={`text-center transform transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: "0ms" }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">500+</div>
                  <div className="text-gray-300 text-sm md:text-base">Proyectos Completados</div>
                </div>
                <div
                  className={`text-center transform transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">10+</div>
                  <div className="text-gray-300 text-sm md:text-base">Años de Experiencia</div>
                </div>
                <div
                  className={`text-center transform transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: "400ms" }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">200+</div>
                  <div className="text-gray-300 text-sm md:text-base">Clientes Satisfechos</div>
                </div>
                <div
                  className={`text-center transform transition-all duration-1000 ${statsVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
                  style={{ transitionDelay: "600ms" }}
                >
                  <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm md:text-base">Soporte Técnico</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={150}>
          <ProjectsSection />
        </ScrollReveal>

        <ScrollReveal animation="scale" delay={200}>
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="text-white">
                <div className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full blur-xl opacity-40"></div>
                  <div className="relative transform hover:scale-110 transition-all duration-500">
                    <Image
                      src="/images/argatec-shield-logo.png"
                      alt="Argatec Shield Logo"
                      width={100}
                      height={100}
                      className="md:w-30 md:h-30 object-contain drop-shadow-2xl"
                      style={{
                        filter:
                          "drop-shadow(0 8px 16px rgba(0, 0, 0, 0.6)) drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))",
                      }}
                    />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading mb-6">
                  ¿Listo para su Próximo Proyecto?
                </h2>
                <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto opacity-90 px-4">
                  ¿Tienes un proyecto en mente? Contáctanos y recibe una cotización personalizada para tu empresa
                </p>

                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent rounded-xl blur-lg opacity-40 animate-pulse"></div>
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-bold px-6 md:px-8 py-3 md:py-4 rounded-xl shadow-2xl shadow-amber-400/50 hover:shadow-amber-400/70 hover:from-amber-300 hover:via-amber-400 hover:to-amber-500 hover:scale-105 transform transition-all duration-300 border-2 border-amber-300/50 hover:border-amber-200"
                    onClick={scrollToContact}
                  >
                    <span className="relative z-10 drop-shadow-sm text-sm md:text-base">Solicitar Cotización</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-600/20 to-transparent rounded-xl"></div>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>

      <style jsx>{`
        @keyframes cameraFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-3px); }
        }
      `}</style>
    </div>
  )
}
