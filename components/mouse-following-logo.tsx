"use client"

import { useEffect, useRef, useCallback } from "react"
import Image from "next/image"

export function MouseFollowingLogo() {
  const logoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!logoRef.current || !containerRef.current) return

    const container = containerRef.current.getBoundingClientRect()
    const centerX = container.left + container.width / 2
    const centerY = container.top + container.height / 2

    const deltaX = (e.clientX - centerX) / 30
    const deltaY = (e.clientY - centerY) / 30

    const rotateX = -deltaY / 40
    const rotateY = deltaX / 40
    const rotateZ = deltaX / 60

    logoRef.current.style.transform = `
      translateX(${deltaX}px) 
      translateY(${deltaY}px) 
      rotateX(${rotateX}deg) 
      rotateY(${rotateY}deg) 
      rotateZ(${rotateZ}deg)
    `
    logoRef.current.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const isMobile = window.innerWidth <= 1024

    if (isMobile) {
      // En mobile/tablet, posicionar el escudo de forma fija sin efectos de mouse
      if (logoRef.current) {
        logoRef.current.style.transform = "translateX(0) translateY(0) rotateX(0) rotateY(0) rotateZ(0)"
        logoRef.current.style.transition = "none"
      }
      return
    }

    // Desktop mode: agregar listener de mouse
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [handleMouseMove])

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-full h-full min-h-[300px] min-w-[300px]"
    >
      <div ref={logoRef} className="relative transform-gpu animate-float" style={{ transformStyle: "preserve-3d" }}>
        <div
          className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] z-20"
          style={{ transform: "translateZ(0px)" }}
        >
          <Image
            src="/images/argatec-shield-logo.png"
            alt="Argatec Shield Logo 3D"
            width={500}
            height={500}
            className="w-full h-full object-contain"
            style={{
              filter: `drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 30px rgba(251, 191, 36, 0.3))`,
            }}
            priority
            unoptimized
            onLoad={() => console.log("[v0] Shield logo loaded successfully")}
            onError={(e) => {
              console.log("[v0] Shield logo failed to load - using fallback")
              const img = e.target as HTMLImageElement
              img.src = "/images/argatec-logo.png"
            }}
          />
        </div>
      </div>
    </div>
  )
}
