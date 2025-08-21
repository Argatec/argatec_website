"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { LoadingSpinner } from "./loading-spinner"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
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
      window.location.href = href
    }, 300)
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contacto")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    } else {
      handleNavigation("/#contacto")
    }
    setIsMenuOpen(false)
  }

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/50686556530?text=Hola, me interesa conocer más sobre sus servicios de seguridad electrónica.",
      "_blank",
    )
    setIsMenuOpen(false)
  }

  return (
    <>
      {isLoading && <LoadingSpinner />}

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-black via-gray-900 to-black backdrop-blur-md border-b border-amber-400/30 shadow-2xl shadow-amber-400/20"
            : "bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-800/20" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group" onClick={() => handleNavigation("/")}>
              <div className="relative">
                <Image
                  src="/images/argatec-logo.png"
                  alt="Argatec Logo"
                  width={50}
                  height={50}
                  className="h-12 w-auto transition-all duration-300 group-hover:scale-110 drop-shadow-lg"
                />
                <div className="absolute -inset-3 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/")
                }}
              >
                Inicio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/#nosotros"
                className="text-sm font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavigation("/#nosotros")
                }}
              >
                Nosotros
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-300 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link
                href="/servicios"
                className="text-sm font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
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
                className="text-sm font-medium text-white hover:text-amber-400 transition-all duration-300 relative group"
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
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 font-medium px-6 py-2 rounded-full shadow-lg shadow-amber-400/30 hover:shadow-amber-400/50 transition-all duration-300 hover:scale-105 border border-amber-300/50"
                onClick={openWhatsApp}
              >
                Contáctanos
              </Button>
            </div>

            <button
              className="md:hidden text-white hover:text-amber-400 transition-colors p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-amber-400/30 bg-black/95 backdrop-blur-md rounded-b-lg">
                <Link
                  href="/"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/")
                  }}
                >
                  Inicio
                </Link>
                <Link
                  href="/#nosotros"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/#nosotros")
                  }}
                >
                  Nosotros
                </Link>
                <Link
                  href="/servicios"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/servicios")
                  }}
                >
                  Servicios
                </Link>
                <Link
                  href="/proyectos"
                  className="block px-3 py-2 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavigation("/proyectos")
                  }}
                >
                  Proyectos
                </Link>
                <button
                  onClick={scrollToContact}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-white hover:text-amber-400 hover:bg-amber-400/10 rounded-lg transition-all"
                >
                  Contacto
                </button>
                <div className="px-3 py-2">
                  <Button
                    className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-black hover:from-amber-300 hover:to-amber-400 rounded-full border border-amber-300/50"
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
