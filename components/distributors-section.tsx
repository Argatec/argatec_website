"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function DistributorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visibleTexts, setVisibleTexts] = useState<boolean[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])

  const brands = [
    {
      name: "Honeywell",
      logo: "/images/brands/honeywell.png",
    },
    {
      name: "JFL Alarmes",
      logo: "/images/brands/jfl.png",
    },
    {
      name: "Ruijie Networks",
      logo: "/images/brands/ruijie.png",
    },
    {
      name: "Ajax",
      logo: "/images/brands/ajax.png",
    },
    {
      name: "Dahua Technology",
      logo: "/images/brands/dahua.png",
    },
    {
      name: "Provision ISR",
      logo: "/images/brands/provision-isr.png",
      size: "large",
    },
    {
      name: "RBH Access",
      logo: "/images/brands/rbh-access.png",
    },
    {
      name: "DSC",
      logo: "/images/brands/dsc.png", // Updated DSC logo path to use new PNG image
    },
    {
      name: "AXIS Communications",
      logo: "/images/brands/axis.png",
    },
    {
      name: "Kantech",
      logo: "/images/brands/kantech.png",
    },
    {
      name: "Yonusa",
      logo: "/images/brands/yonusa.png",
    },
    {
      name: "Hagroy",
      logo: "/images/brands/hagroy.png",
    },
    {
      name: "Wi-Tek",
      logo: "/images/brands/witek.png",
    },
  ]

  const duplicatedBrands = [...brands, ...brands]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 1.2 // Increased scroll speed for smoother movement

    const animate = () => {
      scrollPosition += scrollSpeed

      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const textObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = textRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleTexts((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    textRefs.current.forEach((ref) => {
      if (ref) textObserver.observe(ref)
    })

    return () => {
      observer.disconnect()
      textObserver.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 sm:mb-6 px-4 transition-all duration-700 ${
              visibleTexts[0] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              textShadow: `
                  0 4px 8px rgba(0, 0, 0, 0.5),
                  0 2px 4px rgba(0, 0, 0, 0.3),
                  0 1px 2px rgba(255, 255, 255, 0.1)
                `,
              transform: "translateZ(0)",
            }}
          >
            Distribuidores de las <span className="text-amber-400">Mejores Marcas</span>
          </h2>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className={`text-base sm:text-lg text-gray-300 leading-relaxed px-4 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              visibleTexts[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Trabajamos con los fabricantes más reconocidos del mercado para garantizar la mejor calidad y garantía en
            todos nuestros productos y soluciones.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-8 sm:gap-12 lg:gap-20 overflow-hidden hw-accelerated"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <div
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-gray-200/20 transition-all duration-500 hover:scale-105 sm:hover:scale-110 w-48 h-24 sm:w-56 sm:h-28 lg:w-64 lg:h-36 flex items-center justify-center relative overflow-hidden"
                  style={{
                    boxShadow: `
                     0 15px 35px -5px rgba(0, 0, 0, 0.3),
                     0 8px 20px -3px rgba(0, 0, 0, 0.2),
                     inset 0 1px 0 rgba(255, 255, 255, 0.9),
                     inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                   `,
                  }}
                >
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    width={brand.size === "large" ? 200 : 180}
                    height={brand.size === "large" ? 100 : 80}
                    className={`transition-all duration-500 object-contain ${
                      brand.size === "large"
                        ? "max-h-20 sm:max-h-24 lg:max-h-32 max-w-44 sm:max-w-52 lg:max-w-60"
                        : "max-h-16 sm:max-h-20 lg:max-h-28 max-w-40 sm:max-w-48 lg:max-w-56"
                    }`}
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
