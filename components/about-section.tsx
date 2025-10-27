"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Clock } from "lucide-react"
import { useRef, useEffect, useState } from "react"

export function AboutSection() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [visibleTexts, setVisibleTexts] = useState<boolean[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
              }, index * 200)
            })
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

    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    textRefs.current.forEach((ref) => {
      if (ref) textObserver.observe(ref)
    })

    return () => {
      observer.disconnect()
      textObserver.disconnect()
    }
  }, [])

  const features = [
    {
      icon: Shield,
      title: "Asesoría Personalizada",
      description:
        "Nos enorgullece no ser solo un proveedor de servicios, sino también un socio estratégico en la toma de decisiones tecnológicas.",
    },
    {
      icon: Award,
      title: "Respaldo Certificado",
      description:
        "Contamos con certificaciones para las marcas tales como: AJAX, PowerNeo DSC, PROVISION ISR, AXIS, DAHUA, HIKVISION, RBH, Kantech, HoneyWell, JFL, Yonusa, Hagroy, Ruijie y WI-TEK. Además nos especializamos en canalización, cableado estructurado y enlaces de fibra óptica.",
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description:
        "Nuestro equipo de expertos cuenta con años de experiencia en seguridad electrónica y tecnología informática.",
    },
    {
      icon: Clock,
      title: "Soporte Continuo",
      description:
        "Brindamos mantenimiento y soporte técnico 24/7 para garantizar el funcionamiento óptimo de tus sistemas.",
    },
  ]

  return (
    <section id="nosotros" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className={`text-3xl md:text-4xl font-bold font-heading text-white mb-6 transition-all duration-700 ${
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
            ¿Quiénes Somos?
          </h2>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className={`text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              visibleTexts[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Somos una empresa en constante expansión que se ha consolidado como líder en soluciones tecnológicas y
            seguridad electrónica. Nuestra misión es proteger los activos de nuestros clientes y garantizar el
            funcionamiento eficiente de sus sistemas.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card bg-black/80 backdrop-blur-md border border-gray-700/50 hover:border-amber-400/60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 hover:bg-black/90"
              style={{
                boxShadow: `
                  0 10px 25px -5px rgba(0, 0, 0, 0.6),
                  0 20px 40px -10px rgba(0, 0, 0, 0.4),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.2)
                `,
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-400/10 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-amber-400/20">
                  <feature.icon className="h-6 w-6 text-amber-400 drop-shadow-lg" />
                </div>
                <h3
                  className="text-lg font-semibold font-heading text-white mb-3"
                  style={{
                    textShadow: `
                      0 4px 8px rgba(0, 0, 0, 0.5),
                      0 2px 4px rgba(0, 0, 0, 0.3),
                      0 1px 2px rgba(255, 255, 255, 0.1)
                    `,
                    transform: "translateZ(0)",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm text-gray-300 leading-relaxed"
                  style={{
                    textShadow: `
                      0 2px 4px rgba(0, 0, 0, 0.5),
                      0 1px 2px rgba(0, 0, 0, 0.3)
                    `,
                  }}
                >
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
