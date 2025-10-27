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
        <div className="relative mb-8">
          <img
            ref={logoRef}
            src="/images/shield-logo.png"
            alt="Argatec Loading"
            className="h-20 w-20 object-contain drop-shadow-2xl mx-auto"
          />
        </div>

        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  )
}
