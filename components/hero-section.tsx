"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { MouseFollowingLogo } from "@/components/mouse-following-logo"

interface StarData {
  left: number
  top: number
  animationDelay: number
  animationDuration: number
  scale: number
}

export function HeroSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<StarData[]>([])
  const [smallStars, setSmallStars] = useState<StarData[]>([])
  const [displayedText, setDisplayedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  const typewriterText = "Su seguridad NO es un juego."
  const words = typewriterText.split(" ")

  useEffect(() => {
    const generateStars = (count: number): StarData[] => {
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

    const animateText = () => {
      if (textRef.current?.children) {
        Array.from(textRef.current.children).forEach((child, index) => {
          const element = child as HTMLElement
          element.style.opacity = "0"
          element.style.transform = "translateY(50px)"
          element.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)"

          setTimeout(() => {
            element.style.opacity = "1"
            element.style.transform = "translateY(0)"
          }, index * 200)
        })
      }
    }

    setTimeout(() => {
      animateText()
    }, 100)
  }, [])

  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const typewriterEffect = () => {
      if (currentWordIndex < words.length) {
        const currentWords = words.slice(0, currentWordIndex + 1).join(" ")
        setDisplayedText(currentWords)
        setCurrentWordIndex((prev) => prev + 1)

        timeoutId = setTimeout(typewriterEffect, 400)
      } else {
        timeoutId = setTimeout(() => {
          setCurrentWordIndex(0)
          setDisplayedText("")
        }, 4000)
      }
    }

    timeoutId = setTimeout(typewriterEffect, 800)

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [currentWordIndex, words])

  const renderTypewriterText = () => {
    return displayedText.split(" ").map((word, index) => (
      <span key={index}>
        {word === "NO" ? <span className="text-amber-400 font-bold">{word}</span> : word}
        {index < displayedText.split(" ").length - 1 && " "}
      </span>
    ))
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <div
            key={`star-large-${i}`}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
              animationDelay: `${star.animationDelay}s`,
              filter: "drop-shadow(0 0 4px rgba(251, 191, 36, 0.8))",
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
              filter: "drop-shadow(0 0 2px rgba(251, 191, 36, 1))",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen py-16 sm:py-20">
          <div ref={textRef} className="text-white flex flex-col justify-center order-2 lg:order-1 px-4 lg:px-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading text-white mb-4 sm:mb-6 leading-tight text-center lg:text-left">
              <span className="text-amber-400 font-bold">ARGATEC</span>
              <br />
              <span className="inline-block min-h-[1.8em] sm:min-h-[2.2em] lg:min-h-[2.4em] leading-tight">
                {displayedText && renderTypewriterText()}
              </span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-2xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0 px-4 lg:px-0">
              Más de una década de experiencia brindando seguridad electrónica integral, asesoría personalizada y
              respaldo certificado para proteger lo que más importa.
            </p>

            <div className="mb-8 sm:mb-10 lg:mb-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 mb-1 sm:mb-2">10+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold leading-tight">
                  Años de
                  <br className="sm:hidden" /> Experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold leading-tight">
                  Proyectos
                  <br className="sm:hidden" /> Completados
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-400 mb-1 sm:mb-2">24/7</div>
                <div className="text-xs sm:text-sm lg:text-base text-gray-300 font-semibold leading-tight">
                  Soporte
                  <br className="sm:hidden" /> Técnico
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0 min-h-[200px] sm:min-h-[250px] md:min-h-[300px] lg:min-h-[500px] px-4">
            <div className="absolute inset-0 flex items-center justify-center">
              <MouseFollowingLogo />
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-12 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
          <div className="flex flex-col gap-3 sm:gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-amber-400 text-black hover:from-amber-400 hover:to-amber-300 px-6 sm:px-8 py-3 sm:py-4 font-bold text-base sm:text-lg border-2 border-amber-300/50 hover:border-amber-200 hover:scale-105 transition-all duration-300 w-full touch-manipulation"
              onClick={() => (window.location.href = "/servicios")}
            >
              Conoce Nuestros Servicios
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold border-2 border-amber-400/60 text-amber-400 hover:bg-amber-400/20 hover:text-amber-300 hover:border-amber-300 bg-black/40 backdrop-blur-sm hover:scale-105 transition-all duration-300 w-full touch-manipulation"
              onClick={() => {
                const contactSection = document.getElementById("contacto")
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" })
                } else {
                  window.location.href = "/#contacto"
                }
              }}
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
