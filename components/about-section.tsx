"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Users, Award, Clock } from "lucide-react"
import { useRef, useEffect } from "react"

export function AboutSection() {
  const valuesRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll(".feature-card, .value-card")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
                card.classList.remove("opacity-0", "translate-y-8")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (valuesRef.current) {
      observer.observe(valuesRef.current)
    }
    if (featuresRef.current) {
      observer.observe(featuresRef.current)
    }

    return () => observer.disconnect()
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
        "Contamos con certificaciones en alarmas AJAX, cámaras IMOU, DAHUA Y HIKVISION, cercos eléctricos JFL, e instalación de enlaces de fibra óptica.",
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
            ¿Quiénes Somos?
          </h2>
          <p
            className="text-lg text-gray-300 leading-relaxed"
            style={{
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Con más de una década de experiencia en el mercado, Argatec es una empresa en constante expansión que se ha
            consolidado como líder en soluciones tecnológicas y seguridad electrónica. Nuestra misión es proteger los
            activos de nuestros clientes y garantizar el funcionamiento eficiente de sus sistemas.
          </p>
        </div>

        <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="feature-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              style={{
                boxShadow: `
                  0 10px 25px -5px rgba(0, 0, 0, 0.4),
                  0 20px 40px -10px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.05),
                  inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                  0 0 20px rgba(251, 191, 36, 0.1)
                `,
              }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400/30 to-amber-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-amber-400/20">
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

        {/* Company Values */}
        <div className="mt-20">
          <h3
            className="text-2xl md:text-3xl font-bold font-heading text-white mb-12 text-center"
            style={{
              textShadow: `
                0 4px 8px rgba(0, 0, 0, 0.5),
                0 2px 4px rgba(0, 0, 0, 0.3),
                0 1px 2px rgba(255, 255, 255, 0.1)
              `,
              transform: "translateZ(0)",
            }}
          >
            Nuestros Valores
          </h3>
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Confianza",
                description:
                  "Construimos relaciones duraderas basadas en la transparencia y el cumplimiento de nuestros compromisos.",
              },
              {
                title: "Innovación",
                description:
                  "Nos mantenemos a la vanguardia tecnológica para ofrecer las mejores soluciones del mercado.",
              },
              {
                title: "Excelencia",
                description: "Cada proyecto es ejecutado con los más altos estándares de calidad y profesionalismo.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="value-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:from-gray-700/50 hover:to-gray-800/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                style={{
                  boxShadow: `
                    0 10px 25px -5px rgba(0, 0, 0, 0.4),
                    0 20px 40px -10px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.05),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.1),
                    0 0 20px rgba(251, 191, 36, 0.1)
                  `,
                }}
              >
                <CardContent className="p-6 text-center">
                  <h4
                    className="text-lg font-semibold text-white mb-3"
                    style={{
                      textShadow: `
                        0 4px 8px rgba(0, 0, 0, 0.5),
                        0 2px 4px rgba(0, 0, 0, 0.3),
                        0 1px 2px rgba(255, 255, 255, 0.1)
                      `,
                      transform: "translateZ(0)",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    className="text-gray-300"
                    style={{
                      textShadow: `
                        0 2px 4px rgba(0, 0, 0, 0.5),
                        0 1px 2px rgba(0, 0, 0, 0.3)
                      `,
                    }}
                  >
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
