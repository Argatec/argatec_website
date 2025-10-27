"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { LoadingSpinner } from "./loading-spinner"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string) => {
    setIsLoading(true)
    setIsMenuOpen(false)

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = href
      }
    }, 300)
  }

  const scrollToContact = () => {
    if (typeof document === "undefined") return

    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      handleNavigation("/#contacto")
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://wa.me/+50672211112?text=Hola, me interesa conocer más sobre sus servicios de seguridad electrónica.",
        "_blank",
      )
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <header
        className={`fixed left-0 right-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-black/60 via-gray-900/60 to-black/60 backdrop-blur-md border-b border-amber-400/30 shadow-2xl shadow-amber-400/20"
            : "bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm"
        }`}
        style={{ top: "44px" }}
      >
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled
              ? "bg-gradient-to-r from-gray-800/5 via-gray-700/5 to-gray-800/5"
              : "bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20"
          }`}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group" onClick={() => handleNavigation("/")}>
              <div className="relative w-24 h-9 sm:w-28 sm:h-10 lg:w-32 lg:h-12">
                <Image
                  src="/images/argatec-logo-dorado.png"
                  alt="Argatec Logo Dorado"
                  width={128}
                  height={48}
                  className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-base font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/")
                }}
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/nosotros"
                className="text-base font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/nosotros")
                }}
              >
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/servicios"
                className="text-base font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/servicios")
                }}
              >
                Servicios
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/proyectos"
                className="text-base font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/proyectos")
                }}
              >
                Proyectos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
            </nav>

            <div className="hidden md:flex">
              <Button
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 font-medium px-4 lg:px-6 py-2 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 border border-amber-400/50 text-sm lg:text-base touch-manipulation"
                onClick={openWhatsApp}
              >
                Contáctanos
              </Button>
            </div>

            <button
              className="md:hidden text-white hover:text-amber-400 transition-colors p-2 touch-manipulation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-3 pb-4 space-y-2 border-t border-amber-400/30 bg-black/95 backdrop-blur-md rounded-b-lg">
                <Link
                  href="/"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/")
                  }}
                >
                  Inicio
                </Link>
                <Link
                  href="/nosotros"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/nosotros")
                  }}
                >
                  Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicios")
                  }}
                >
                  Servicios
                </Link>
                <Link
                  href="/proyectos"
                  className="block px-4 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all touch-manipulation"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/proyectos")
                  }}
                >
                  Proyectos
                </Link>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all touch-manipulation"
                >
                  Contacto
                </button>
                <div className="px-4 py-2">
                  <Button
                    className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:from-amber-400 hover:to-amber-500 rounded-full border border-amber-400/50 py-3 text-base font-medium touch-manipulation"
                    onClick={openWhatsApp}
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
