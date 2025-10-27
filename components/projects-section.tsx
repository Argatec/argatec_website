"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [visibleElements, setVisibleElements] = useState<boolean[]>([])
  const [scrollDirection, setScrollDirection] = useState<"down" | "up">("down")
  const [lastScrollY, setLastScrollY] = useState(0)
  const elementRefs = useRef<(HTMLDivElement | null)[]>([])

  const categories = ["Todos", "Sistemas CCTV", "Sistemas de alarma", "Cercos eléctricos", "Controles de acceso"]

  const projectImages = [
    // Sistemas CCTV
    { src: "/images/projects/ajax-control-panel.jpeg", category: "Sistemas CCTV", alt: "Panel de control Ajax" },
    { src: "/images/projects/honeywell-cameras.jpeg", category: "Sistemas CCTV", alt: "Cámaras Honeywell" },
    { src: "/images/projects/industrial-night-view.jpeg", category: "Sistemas CCTV", alt: "Vista nocturna industrial" },
    { src: "/images/projects/los-reyes/bullet-camera-1.png", category: "Sistemas CCTV", alt: "Cámara bullet 1" },
    { src: "/images/projects/los-reyes/bullet-camera-2.png", category: "Sistemas CCTV", alt: "Cámara bullet 2" },
    { src: "/images/security/dome-camera-1.png", category: "Sistemas CCTV", alt: "Cámara domo 1" },
    { src: "/images/security/dome-camera-2.png", category: "Sistemas CCTV", alt: "Cámara domo 2" },
    { src: "/images/security/wall-camera.png", category: "Sistemas CCTV", alt: "Cámara de pared" },
    {
      src: "/images/projects/new/outdoor-cameras.jpg",
      category: "Sistemas CCTV",
      alt: "Cámaras de seguridad exteriores",
    },
    { src: "/images/projects/new/ip-cameras.jpg", category: "Sistemas CCTV", alt: "Cámaras IP con cajas de conexión" },
    {
      src: "/images/projects/new/cctv-software-laptop.jpg",
      category: "Sistemas CCTV",
      alt: "Software de videovigilancia en laptop",
    },
    {
      src: "/images/projects/new/sports-field-camera.jpg",
      category: "Sistemas CCTV",
      alt: "Cámara de seguridad en área deportiva",
    },
    {
      src: "/images/projects/new/pir-camera-exterior.jpg",
      category: "Sistemas CCTV",
      alt: "Cámara con sensor PIR exterior",
    },
    {
      src: "/images/projects/new/cctv-software-monitor.jpg",
      category: "Sistemas CCTV",
      alt: "Monitor con software de videovigilancia",
    },
    {
      src: "/images/projects/new/bullet-camera-exterior.jpg",
      category: "Sistemas CCTV",
      alt: "Cámara bullet instalada en exterior",
    },
    {
      src: "/images/projects/new/dome-camera-orange.jpg",
      category: "Sistemas CCTV",
      alt: "Cámara domo con aro naranja",
    },
    {
      src: "/images/projects/new/ajax-products-display.jpg",
      category: "Sistemas CCTV",
      alt: "Display de productos Ajax con cámaras y NVR",
    },

    // Sistemas de alarma
    { src: "/images/projects/motion-sensor.jpeg", category: "Sistemas de alarma", alt: "Sensor de movimiento" },
    {
      src: "/images/projects/los-reyes/motion-sensor.png",
      category: "Sistemas de alarma",
      alt: "Sensor de movimiento Los Reyes",
    },
    { src: "/images/projects/los-reyes/door-sensors.png", category: "Sistemas de alarma", alt: "Sensores de puerta" },
    {
      src: "/images/projects/los-reyes/door-sensors-outdoor.png",
      category: "Sistemas de alarma",
      alt: "Sensores exteriores",
    },
    { src: "/images/security/control-panel.png", category: "Sistemas de alarma", alt: "Panel de control" },
    { src: "/images/security/system-box.png", category: "Sistemas de alarma", alt: "Caja del sistema" },
    {
      src: "/images/projects/new/alarm-keypad.jpg",
      category: "Sistemas de alarma",
      alt: "Teclado de alarma con panel de control",
    },
    {
      src: "/images/projects/new/door-sensor-1.jpg",
      category: "Sistemas de alarma",
      alt: "Sensor magnético de puerta",
    },
    { src: "/images/projects/new/door-sensor-2.jpg", category: "Sistemas de alarma", alt: "Sensor de puerta/ventana" },
    {
      src: "/images/projects/new/alarm-control-panel.jpg",
      category: "Sistemas de alarma",
      alt: "Panel de control de alarma Tyco",
    },
    {
      src: "/images/projects/new/dsc-neo-panel.jpg",
      category: "Sistemas de alarma",
      alt: "Panel de alarma DSC Neo con teclado",
    },
    {
      src: "/images/projects/new/outdoor-siren.jpg",
      category: "Sistemas de alarma",
      alt: "Sirena exterior con luz estroboscópica",
    },
    {
      src: "/images/projects/new/fire-lite-display.jpg",
      category: "Sistemas de alarma",
      alt: "Display Fire-Lite Alarms by Honeywell",
    },
    {
      src: "/images/projects/new/honeywell-fire-panel.jpg",
      category: "Sistemas de alarma",
      alt: "Panel de alarma contra incendios Honeywell",
    },
    {
      src: "/images/projects/new/silent-knight-display.jpg",
      category: "Sistemas de alarma",
      alt: "Display Silent Knight by Honeywell",
    },
    {
      src: "/images/projects/new/alarm-keypad-beige.jpg",
      category: "Sistemas de alarma",
      alt: "Teclado de alarma en gabinete beige",
    },
    {
      src: "/images/projects/new/sonusa-alarm-panel.jpg",
      category: "Sistemas de alarma",
      alt: "Panel de alarma Sonusa con indicadores LED",
    },

    // Cercos eléctricos
    { src: "/images/security/electric-fence.png", category: "Cercos eléctricos", alt: "Cerco eléctrico" },
    { src: "/images/security/fence-energizer.png", category: "Cercos eléctricos", alt: "Energizador de cerco" },
    { src: "/images/security/perimeter-fence.png", category: "Cercos eléctricos", alt: "Cerco perimetral" },
    { src: "/images/projects/security-gate.jpeg", category: "Cercos eléctricos", alt: "Portón de seguridad" },
    {
      src: "/images/security/security-pole.png",
      category: "Cercos eléctricos",
      alt: "Poste de seguridad con iluminación solar",
    },
    {
      src: "/images/projects/new/gate-motor.jpg",
      category: "Cercos eléctricos",
      alt: "Motor automático de portón",
    },

    // Controles de acceso (incluye las imágenes de redes y cableado)
    { src: "/images/security/access-control.png", category: "Controles de acceso", alt: "Control de acceso" },
    { src: "/images/security/keypad-access.png", category: "Controles de acceso", alt: "Teclado de acceso" },
    {
      src: "/images/security/intercom-system.png",
      category: "Controles de acceso",
      alt: "Sistema de intercomunicación",
    },
    {
      src: "/images/security/glass-security.png",
      category: "Controles de acceso",
      alt: "Sistema de detección de incendios",
    },
    { src: "/images/security/ceiling-security.png", category: "Controles de acceso", alt: "Detector de humo" },
    {
      src: "/images/projects/los-reyes/installation-work.png",
      category: "Controles de acceso",
      alt: "Trabajo de instalación",
    },
    {
      src: "/images/projects/new/intercom-monitor.jpg",
      category: "Controles de acceso",
      alt: "Monitor de intercomunicador",
    },
    {
      src: "/images/projects/new/access-control-panel.jpg",
      category: "Controles de acceso",
      alt: "Panel táctil de control de acceso",
    },
    // Imágenes de redes y cableado movidas a Controles de acceso
    { src: "/images/projects/los-reyes/server-rack.png", category: "Controles de acceso", alt: "Rack de servidor" },
    { src: "/images/projects/los-reyes/network-switch-1.png", category: "Controles de acceso", alt: "Switch de red 1" },
    { src: "/images/projects/los-reyes/network-switch-2.png", category: "Controles de acceso", alt: "Switch de red 2" },
    {
      src: "/images/projects/new/network-rack-1.jpg",
      category: "Controles de acceso",
      alt: "Rack de red con switches Lantek y Teklink",
    },
    {
      src: "/images/projects/new/network-rack-2.jpg",
      category: "Controles de acceso",
      alt: "Rack de red con equipos de conectividad",
    },
    {
      src: "/images/projects/new/patch-panel-cabling.jpg",
      category: "Controles de acceso",
      alt: "Patch panel con cableado estructurado Cat6",
    },
    {
      src: "/images/projects/new/camera-labels.jpg",
      category: "Controles de acceso",
      alt: "Cables de red etiquetados para cámaras",
    },
    {
      src: "/images/projects/new/biometric-readers.jpg",
      category: "Controles de acceso",
      alt: "Lectores biométricos Hikvision con teclado",
    },
    {
      src: "/images/projects/new/network-rack-ruijie.jpg",
      category: "Controles de acceso",
      alt: "Rack de red con switch Ruijie Reyee",
    },
    {
      src: "/images/projects/new/provision-nvr-rack.jpg",
      category: "Controles de acceso",
      alt: "Rack con múltiples NVRs Provision ISR",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementRefs.current.findIndex((ref) => ref === entry.target)
          if (index !== -1) {
            setVisibleElements((prev) => {
              const newVisible = [...prev]
              newVisible[index] = entry.isIntersecting
              return newVisible
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  const filteredImages =
    selectedCategory === "Todos" ? projectImages : projectImages.filter((img) => img.category === selectedCategory)

  const midPoint = Math.ceil(filteredImages.length / 2)
  const firstBand = filteredImages.slice(0, midPoint)
  const secondBand = filteredImages.slice(midPoint)

  return (
    <section
      id="proyectos"
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={(el) => (elementRefs.current[0] = el)}
          className={`max-w-5xl mx-auto text-center mb-12 md:mb-16 px-4 transform transition-all duration-700 ${
            visibleElements[0] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div
            ref={(el) => (elementRefs.current[1] = el)}
            className={`text-base md:text-lg text-gray-300 leading-relaxed mb-6 md:mb-8 transform transition-all duration-500 ${
              visibleElements[1] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p className="mb-4 font-semibold text-primary">
              Somos especialistas en soluciones integrales de seguridad electrónica, diseñadas para adaptarse a las
              necesidades de cada cliente. Brindamos un portafolio que abarca desde sistemas para residencias hasta
              complejas instalaciones en el sector corporativo e industrial.
            </p>
            <p className="font-semibold text-foreground">
              Nuestro enfoque combina tecnología de vanguardia con prácticas innovadoras y estándares internacionales de
              calidad, garantizando proyectos confiables, escalables y sostenibles.
            </p>
          </div>
        </div>

        <div
          ref={(el) => (elementRefs.current[2] = el)}
          className={`flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4 transform transition-all duration-600 ${
            visibleElements[2] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`px-3 md:px-4 py-2 text-xs md:text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-amber-400 text-black hover:bg-amber-300"
                  : "bg-transparent border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-400"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div
          ref={(el) => (elementRefs.current[3] = el)}
          className={`space-y-6 md:space-y-8 transform transition-all duration-800 ${
            visibleElements[3] ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="relative overflow-hidden">
            <div
              className={`flex gap-3 md:gap-4 hover:animation-play-state-paused ${
                scrollDirection === "down" ? "animate-scroll-right-slow" : ""
              }`}
              style={{ width: "fit-content" }}
            >
              {[...firstBand, ...firstBand].map((image, index) => (
                <div
                  key={`band1-${index}`}
                  className="flex-shrink-0 w-60 h-44 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group shadow-2xl"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className={`flex gap-3 md:gap-4 hover:animation-play-state-paused ${
                scrollDirection === "down" ? "animate-scroll-left-slow" : ""
              }`}
              style={{ width: "fit-content" }}
            >
              {[...secondBand, ...secondBand].map((image, index) => (
                <div
                  key={`band2-${index}`}
                  className="flex-shrink-0 w-60 h-44 md:w-80 md:h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 group shadow-2xl"
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          ref={(el) => (elementRefs.current[4] = el)}
          className={`max-w-4xl mx-auto text-center mt-12 md:mt-16 px-4 transform transition-all duration-600 ${
            visibleElements[4] ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-semibold">
            Cada proyecto es único y diseñado específicamente para las necesidades de seguridad de nuestros clientes,
            garantizando la máxima protección y tranquilidad.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right-slow {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        
        @keyframes scroll-left-slow {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-right-slow {
          animation: scroll-right-slow 80s linear infinite;
        }
        
        .animate-scroll-left-slow {
          animation: scroll-left-slow 80s linear infinite;
        }

        .animate-scroll-right-slow:hover,
        .animate-scroll-left-slow:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
