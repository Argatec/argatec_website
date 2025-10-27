"use client"

import { useEffect, useRef, useState } from "react"

interface StarData {
  left: number
  top: number
  animationDuration: number
  animationDelay: number
}

export function ServicesHeroSection() {
  const textRef = useRef<HTMLDivElement>(null)
  const letterAnimationRef = useRef<HTMLSpanElement>(null)
  const [stars, setStars] = useState<StarData[]>([])
  const [isVisible, setIsVisible] = useState(false)
  const [typewriterText, setTypewriterText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const typewriterWords = ["su negocio y su tranquilidad"]

  useEffect(() => {
    const generateStars = (count: number): StarData[] => {
      return Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDuration: 1.5 + Math.random() * 2,
        animationDelay: Math.random() * 3,
      }))
    }

    setStars(generateStars(60))

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
    }, 2000) // Aumentado el tiempo para mostrar la frase completa

    return () => {
      clearInterval(typewriterInterval)
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current)
      }
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden pt-32">
      <div className="absolute inset-0 opacity-15">
        <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border border-amber-400/30" />
          ))}
        </div>
      </div>

      <div className="absolute inset-0">
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-amber-400 rounded-full"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animation: `twinkle ${star.animationDuration}s ease-in-out infinite`,
              animationDelay: `${star.animationDelay}s`,
              filter: "drop-shadow(0 0 6px rgba(251, 191, 36, 0.9))",
              boxShadow: "0 0 10px rgba(251, 191, 36, 0.5)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-amber-400/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-white" ref={textRef}>
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img
                  src="/images/argatec-shield-logo.png"
                  alt="Argatec Logo"
                  className="h-20 w-20 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl scale-150 -z-10"></div>
              </div>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading text-white mb-8 leading-tight"
              style={{
                textShadow: `
                  0 4px 8px rgba(0, 0, 0, 0.7),
                  0 2px 4px rgba(0, 0, 0, 0.5),
                  0 1px 2px rgba(255, 255, 255, 0.1),
                  0 0 20px rgba(251, 191, 36, 0.3)
                `,
                transform: "translateZ(0)",
              }}
            >
              <span className="text-amber-400">Confíe en nosotros</span>
              <br />
              para proteger lo que más importa:
              <br />
              <span
                ref={letterAnimationRef}
                className="text-amber-400 block mt-4 h-16 flex items-center justify-center"
                style={{
                  minHeight: "4rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  lineHeight: "1.2",
                  position: "relative",
                  width: "100%",
                }}
              >
                <span className="text-balance whitespace-nowrap">
                  {typewriterText || "su negocio y su tranquilidad"}
                </span>
              </span>
            </h1>

            <div style={{ minHeight: "140px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <p
                className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
                style={{
                  textShadow: `
                    0 2px 4px rgba(0, 0, 0, 0.7),
                    0 1px 2px rgba(0, 0, 0, 0.5)
                  `,
                }}
              >
                Soluciones integrales de seguridad electrónica con más de una década de experiencia. Desde sistemas de
                alarma hasta redes de fibra óptica, protegemos su inversión con tecnología de vanguardia.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </section>
  )
}
