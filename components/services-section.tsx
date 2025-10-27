"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wifi, Users, Award } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function ServicesSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentCertIndex, setCurrentCertIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState<boolean[]>([])
  const [visibleTexts, setVisibleTexts] = useState<boolean[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const textRefs = useRef<(HTMLElement | null)[]>([])

  const securityImages = [
    "/images/projects/security-gate.jpeg",
    "/images/projects/honeywell-cameras.jpeg",
    "/images/projects/motion-sensor.jpeg",
    "/images/security/dome-camera-1.png",
    "/images/security/cylinder-camera.png",
  ]

  const networkImages = [
    "/images/projects/ajax-control-panel.jpeg",
    "/images/projects/industrial-night-view.jpeg",
    "/images/security/ceiling-security.png",
    "/images/security/keypad-access.png",
    "/images/security/electric-fence.png",
  ]

  const certificationLogos = [
    { name: "Ajax", logo: "/images/brands/ajax.png" },
    { name: "IMOU", logo: "/images/brands/imou.png" },
    { name: "Dahua", logo: "/images/brands/dahua.png" },
    { name: "Hikvision", logo: "/images/brands/hikvision.png" },
    { name: "Provision ISR", logo: "/images/brands/provision-isr.png" },
    { name: "RBH Access", logo: "/images/brands/rbh-access.png" },
    { name: "Kantech", logo: "/images/brands/kantech.png" },
    { name: "HoneyWell", logo: "/images/brands/honeywell.png" },
    { name: "JFL", logo: "/images/brands/jfl.png" },
    { name: "Yonusa", logo: "/images/brands/yonusa.png" },
    { name: "Hagroy", logo: "/images/brands/hagroy.png" },
    { name: "Ruijie", logo: "/images/brands/ruijie.png" },
    { name: "WI-TEK", logo: "/images/brands/witek.png" },
    { name: "DSC", logo: "/images/brands/dsc.png" }, // Updated DSC logo path to use new PNG image
    { name: "AXIS Communications", logo: "/images/brands/axis.png" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCertIndex((prev) => (prev + 1) % certificationLogos.length)
    }, 2000) // Reduced from 2500ms to 2000ms for faster, seamless transitions
    return () => clearInterval(interval)
  }, [certificationLogos.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % securityImages.length)
    }, 2000) // Reduced from 2500ms to 2000ms to match certification timing
    return () => clearInterval(interval)
  }, [securityImages.length])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleCards((prev) => {
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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    textRefs.current.forEach((ref) => {
      if (ref) textObserver.observe(ref)
    })

    return () => {
      observer.disconnect()
      textObserver.disconnect()
    }
  }, [])

  const topServices = [
    {
      icon: Shield,
      title: "Seguridad Electrónica Integral",
      description: "Instalación, configuración, mantenimiento y reparación de sistemas completos de seguridad.",
      features: [
        "Sistemas CCTV (Circuito Cerrado de TV)",
        "Sistemas de alarma",
        "Cercos eléctricos para protección perimetral",
        "Controles de acceso y seguridad biométrica",
        "Sistema de incendio",
        "Sistemas de iluminación con lámparas solares para exteriores",
        "Servicios de atención de averías",
      ],
      backgroundImages: securityImages,
      currentImage: currentImageIndex,
    },
    {
      icon: Wifi,
      title: "Redes y Soporte Técnico",
      description: "Soluciones completas de conectividad y telecomunicaciones para empresas y hogares.",
      features: [
        "Instalación de redes y cableado estructurado",
        "Enlaces inalámbricos",
        "Enlaces de fibra óptica",
        "Redes y soporte técnico especializado",
      ],
      backgroundImages: networkImages,
    },
  ]

  const bottomServices = [
    {
      icon: Users,
      title: "Asesoría Personalizada",
      description:
        "Nos enorgullece no ser solo un proveedor de servicios, sino también un socio estratégico en la toma de decisiones tecnológicas.",
      features: [
        "Trabajamos mano a mano con nuestros clientes",
        "Comprendemos sus necesidades específicas",
        "Anticipamos y prevenimos riesgos",
        "Soluciones personalizadas que se adaptan a objetivos y presupuesto",
      ],
      backgroundImages: [
        "/images/consulting/business-planning.png",
        "/images/consulting/handshake-agreement.png",
        "/images/consulting/team-collaboration.jpeg",
      ],
    },
    {
      icon: Award,
      title: "Respaldo Certificado",
      description:
        "Nuestra empresa cuenta con diversas certificaciones para la instalación, configuración y venta de soluciones tecnológicas.",
      features: [
        "AJAX, PowerNeo DSC, PROVISION ISR, AXIS, DAHUA, HIKVISION, RBH, Kantech, HoneyWell, JFL, Yonusa, Hagroy, Ruijie y WI-TEK",
        "Nos especializamos en canalización, cableado estructurado y enlaces de fibra óptica",
      ],
      showCertifications: true,
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2
            ref={(el) => (textRefs.current[0] = el)}
            className={`text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white mb-4 md:mb-6 transition-all duration-700 ${
              visibleTexts[0] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Nuestros <span className="text-amber-400">Servicios</span>
          </h2>
          <p
            ref={(el) => (textRefs.current[1] = el)}
            className={`text-base md:text-lg text-gray-300 leading-relaxed transition-all duration-700 delay-200 ${
              visibleTexts[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Protegemos lo que más valora con tecnología de vanguardia y un servicio personalizado que garantiza su
            tranquilidad y la seguridad de su inversión.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {topServices.map((service, index) => (
            <Card
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-black/80 backdrop-blur-md border-gray-700/50 hover:border-amber-400/60 transition-all duration-500 card-elegant hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer group hover:bg-black/90 relative overflow-hidden transform ${
                visibleCards[index] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {service.backgroundImages && (
                <div className="absolute inset-0 opacity-40 group-hover:opacity-50 transition-opacity duration-500">
                  <div
                    className="w-full h-full transition-all duration-1000"
                    style={{
                      backgroundImage: `url(${service.backgroundImages[service.currentImage || currentImageIndex % service.backgroundImages.length]})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      filter: "brightness(0.8) contrast(1.2)",
                    }}
                  />
                </div>
              )}

              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-amber-400/10 p-3 md:p-4 rounded-xl mr-3 md:mr-4 group-hover:bg-amber-400/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-200 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mb-16 md:mb-20">
          <div className="text-center mb-8 md:mb-12">
            <h3
              ref={(el) => (textRefs.current[2] = el)}
              className={`text-xl md:text-2xl lg:text-3xl font-bold font-heading text-white mb-3 md:mb-4 transition-all duration-700 ${
                visibleTexts[2] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Innovación en <span className="text-amber-400">Seguridad</span>
            </h3>
            <p
              ref={(el) => (textRefs.current[3] = el)}
              className={`text-gray-300 text-base md:text-lg max-w-3xl mx-auto px-4 transition-all duration-700 delay-200 ${
                visibleTexts[3] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
            >
              Descubre cómo nuestras soluciones tecnológicas de vanguardia transforman la seguridad de tu empresa
            </p>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden shadow-2xl shadow-amber-400/20 border border-amber-400/30">
              <iframe
                src="https://www.youtube.com/embed/E-ypF1NuYr8?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&loop=1&playlist=E-ypF1NuYr8&hd=1&showinfo=0&iv_load_policy=3&disablekb=1&fs=1&cc_load_policy=0&start=0&end=0"
                title="Argatec - Innovación en Seguridad"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="eager"
                style={{ border: "none" }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {bottomServices.map((service, index) => (
            <Card
              key={index + 2}
              ref={(el) => (cardRefs.current[index + 2] = el)}
              className={`bg-black/80 backdrop-blur-md border-gray-700/50 hover:border-amber-400/60 transition-all duration-500 card-elegant hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer group hover:bg-black/90 relative overflow-hidden transform ${
                visibleCards[index + 2] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{
                transitionDelay: `${(index + 2) * 100}ms`,
              }}
            >
              {service.backgroundImages && (
                <div className="absolute inset-0 opacity-45 group-hover:opacity-55 transition-opacity duration-500">
                  <div
                    className="w-full h-full transition-all duration-1000"
                    style={{
                      backgroundImage: `url(${service.backgroundImages[currentImageIndex % service.backgroundImages.length]})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      filter: "brightness(0.8) contrast(1.2)",
                    }}
                  />
                </div>
              )}

              {service.showCertifications && (
                <div className="absolute inset-0 opacity-35 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
                  <div
                    className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 transition-all duration-300 ease-in-out flex items-center justify-center" // Reduced transition duration from 500ms to 300ms for smoother, faster transitions
                    style={{
                      backgroundImage: `url(${certificationLogos[currentCertIndex].logo})`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      filter: "brightness(0.9) contrast(1.1)",
                      transform: "scale(1)",
                      opacity: 1,
                    }}
                  />
                </div>
              )}

              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="bg-amber-400/10 p-3 md:p-4 rounded-xl mr-3 md:mr-4 group-hover:bg-amber-400/20 transition-colors duration-300">
                    <service.icon className="h-6 w-6 md:h-8 md:w-8 text-amber-400" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>

                <ul className="space-y-2 md:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-200 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
