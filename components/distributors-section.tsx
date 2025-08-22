"use client"

import { useEffect, useRef } from "react"

export function DistributorsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const brands = [
    {
      name: "Honeywell",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1SpYVQ4bLVAVwLWCEJGlxrL0hlxHyX.png",
    },
    {
      name: "Hikvision",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GkGyUtagjCl75wzQedzrb5x7Y93Hkl.png",
    },
    {
      name: "JFL Alarmes",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NZf0aECn0xqLBUd7OYmrdABj4FQRdY.png",
    },
    {
      name: "Ubiquiti Networks",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Hlvjovy09Ea4QH5AHXiNQ80pCdVH9X.png",
    },
    {
      name: "Ajax",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ikwDLsB6csyHcZewcpB2JKPVKiU9VF.png",
    },
    {
      name: "Forza",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-maNfhjGbgbV5by4YZMuVpVs93oAYU3.png",
    },
    {
      name: "Imou",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cmOEMOHTx4a4dTBobMwjG3rjbgPWsA.png",
    },
    {
      name: "Dahua Technology",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-itIhvr9cGObQuGYE4FrMsbfzVwvykb.png",
    },
    {
      name: "Cisco",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NeMzQhuRZtPXQb3IuaMrwcbz3uC5Vu.png",
    },
    {
      name: "EPSON",
      logo: "/images/brands/epson.png",
    },
    {
      name: "HP",
      logo: "/images/brands/hp.png",
    },
    {
      name: "DELL",
      logo: "/images/brands/dell.png",
    },
    {
      name: "Acer",
      logo: "/images/brands/acer.png",
    },
    {
      name: "ASUS",
      logo: "/images/brands/asus.png",
    },
    {
      name: "Lenovo",
      logo: "/images/brands/lenovo.png",
    },
  ]

  const duplicatedBrands = [...brands, ...brands]

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.8

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold font-heading text-white mb-6"
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
            className="text-lg text-gray-300 leading-relaxed"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Trabajamos con los fabricantes más reconocidos del mercado para garantizar la mejor calidad y garantía en
            todos nuestros productos y soluciones.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div ref={scrollRef} className="flex gap-20 overflow-hidden" style={{ scrollBehavior: "auto" }}>
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <div
                  className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200/20 transition-all duration-500 hover:scale-110 w-80 h-48 flex items-center justify-center"
                  style={{
                    boxShadow: `
                     0 15px 35px -5px rgba(0, 0, 0, 0.3),
                     0 8px 20px -3px rgba(0, 0, 0, 0.2),
                     inset 0 1px 0 rgba(255, 255, 255, 0.9),
                     inset 0 -1px 0 rgba(0, 0, 0, 0.1)
                   `,
                  }}
                >
                  <img
                    src={brand.logo || "/placeholder.svg"}
                    alt={`${brand.name} logo`}
                    className="max-h-32 max-w-64 w-auto opacity-90 hover:opacity-100 transition-all duration-500 object-contain"
                    style={{
                      filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
                    }}
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
