"use client"

import { useEffect, useRef } from "react"

export function LoadingSpinner() {
  const logoRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (logoRef.current) {
      logoRef.current.style.animation = "pulse 2s ease-in-out infinite"
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <img
            ref={logoRef}
            src="/images/argatec-shield-logo.png"
            alt="Argatec Loading"
            className="h-20 w-20 object-contain drop-shadow-2xl mx-auto mb-4"
          />
          <div className="absolute inset-0 rounded-full border-2 border-amber-400/30 border-t-amber-400 animate-spin"></div>
        </div>
        <p className="text-white text-lg font-medium">Cargando...</p>
      </div>
    </div>
  )
}
