"use client"

import { useState, useRef, useEffect } from "react"

export function VideoSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
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
    <section ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Descubre Nuestras <span className="text-emerald-400">Soluciones</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conoce cómo nuestros sistemas de seguridad pueden proteger tu espacio
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
            {isVisible ? (
              <iframe
                src="https://www.youtube.com/embed/r6OSTXanzmI?start=17"
                title="Argatec Security Solutions"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <div className="text-white text-lg">Cargando video...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
