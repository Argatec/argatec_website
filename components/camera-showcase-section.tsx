"use client"

import { useEffect, useRef } from "react"

export function CameraShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cameraRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initAnimations = async () => {
      try {
        const anime = (await import("animejs")).default

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                anime({
                  targets: cameraRef.current,
                  scale: [0.8, 1],
                  opacity: [0, 1],
                  duration: 1500,
                  easing: "easeOutElastic(1, .6)",
                })

                anime({
                  targets: videoRef.current,
                  translateX: [50, 0],
                  opacity: [0, 1],
                  duration: 1200,
                  delay: 300,
                  easing: "easeOutCubic",
                })
              }
            })
          },
          { threshold: 0.3 },
        )

        if (sectionRef.current) {
          observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
      } catch (error) {
        console.error("Failed to load animations:", error)
      }
    }

    initAnimations()
  }, [])

  return (
    <section ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{
              textShadow: `
                0 4px 8px rgba(0, 0, 0, 0.5),
                0 2px 4px rgba(0, 0, 0, 0.3),
                0 1px 2px rgba(255, 255, 255, 0.1)
              `,
              transform: "translateZ(0)",
            }}
          >
            Tecnología de <span className="text-amber-400">Vanguardia</span>
          </h2>
          <p
            className="text-gray-300 max-w-2xl mx-auto"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Sistemas de seguridad con la más alta tecnología para proteger tu espacio
          </p>
        </div>

        <div className="flex justify-center">
          <div ref={videoRef} className="relative max-w-4xl w-full">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/r6OSTXanzmI?autoplay=1&mute=1&loop=1&playlist=r6OSTXanzmI&controls=1&modestbranding=1&rel=0"
                title="Argatec Security Technology"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>

            {/* Video glow effect */}
            <div className="absolute inset-0 bg-amber-400/5 rounded-2xl blur-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
