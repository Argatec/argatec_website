"use client"

import { Phone, Mail, Facebook, Instagram, MapPin, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { LoadingSpinner } from "./loading-spinner"

export function Footer() {
  const starsRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof document === "undefined") return

    const createStar = () => {
      if (!starsRef.current) return

      const star = document.createElement("div")
      star.className = "absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse"
      star.style.left = Math.random() * 100 + "%"
      star.style.top = Math.random() * 100 + "%"
      star.style.animationDelay = Math.random() * 3 + "s"
      star.style.animationDuration = Math.random() * 2 + 1 + "s"

      starsRef.current.appendChild(star)

      setTimeout(() => {
        if (star.parentNode) {
          star.parentNode.removeChild(star)
        }
      }, 5000)
    }

    const interval = setInterval(createStar, 300)
    return () => clearInterval(interval)
  }, [])

  const handleNavigation = (href: string) => {
    if (typeof window === "undefined") return

    // Handle anchor links on the same page
    if (href.startsWith("/#")) {
      const targetId = href.substring(2) // Remove "/#"
      const targetElement = document.getElementById(targetId)

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
        return
      }
    }

    // Handle regular navigation with loading state
    setIsLoading(true)
    setTimeout(() => {
      window.location.href = href
    }, 100) // Reduced delay for faster response
  }

  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/50672211112?text=Hola, me interesa conocer más sobre sus servicios de seguridad electrónica.",
        "_blank",
      )
    }
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <footer className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div ref={starsRef} className="absolute inset-0 pointer-events-none z-0"></div>

        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="border border-amber-500/20" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Image
                    src="/images/golden-shield-logo.png"
                    alt="Argatec Shield Logo"
                    width={50}
                    height={50}
                    className="h-12 w-auto"
                    priority
                  />
                  <div className="absolute -inset-2 bg-amber-400/20 rounded-full blur-lg animate-pulse" />
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Más de una década protegiendo lo que más importa. Somos líderes en soluciones de seguridad electrónica
                integral con asesoría personalizada y respaldo certificado.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/Argatec.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/argatec_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-amber-500/10 rounded-full border border-amber-500/20 text-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold font-heading mb-6 text-amber-400 text-lg">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/")
                    }}
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nosotros"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/nosotros")
                    }}
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/servicios")
                    }}
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    href="/proyectos"
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavigation("/proyectos")
                    }}
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Proyectos
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openWhatsApp}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contáctanos
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold font-heading mb-6 text-amber-400 text-lg">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex space-x-3 group items-center">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Phone className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="text-gray-300">
                    <div className="hover:text-amber-400 transition-colors">+506 7221-1112</div>
                  </div>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <Mail className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="text-gray-300 hover:text-amber-400 transition-colors">gestion@argatec.cr</span>
                </li>
                <li className="flex items-center space-x-3 group">
                  <div className="p-2 bg-amber-500/10 rounded-lg border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                    <MapPin className="h-4 w-4 text-amber-400" />
                  </div>
                  <span className="text-gray-300 hover:text-amber-400 transition-colors">San José, Costa Rica</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-500/20 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <p className="text-gray-400 text-sm">© 2025 Argatec. Todos los derechos reservados.</p>
              </div>

              <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm mb-4 md:mb-0">
                <span>Designed by:</span>
                <a
                  href="https://github.com/ManuelJG1999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 hover:text-amber-400 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>ManuelJG1999</span>
                </a>
              </div>

              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Política de Privacidad
                </a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
