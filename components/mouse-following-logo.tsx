"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import anime from "animejs"

export function MouseFollowingLogo() {
  const logoRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current || !containerRef.current) return

      const container = containerRef.current.getBoundingClientRect()
      const centerX = container.left + container.width / 2
      const centerY = container.top + container.height / 2

      const deltaX = (e.clientX - centerX) / 40
      const deltaY = (e.clientY - centerY) / 40

      const rotateX = -deltaY / 60
      const rotateY = deltaX / 60
      const rotateZ = deltaX / 80

      anime({
        targets: logoRef.current,
        translateX: deltaX,
        translateY: deltaY,
        rotateX: rotateX,
        rotateY: rotateY,
        rotateZ: rotateZ,
        duration: 1200,
        easing: "easeOutCubic",
      })
    }

    anime({
      targets: logoRef.current,
      translateY: [-2, 2],
      duration: 6000,
      direction: "alternate",
      loop: true,
      easing: "easeInOutSine",
    })

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="relative flex items-center justify-center h-[600px]">
      <div ref={logoRef} className="relative transform-gpu">
        <div className="relative w-[500px] h-[500px] z-10">
          <Image
            src="/images/argatec-shield-logo.png"
            alt="Argatec Shield Logo"
            fill
            className="object-contain drop-shadow-2xl"
            style={{
              filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 25px rgba(251, 191, 36, 0.2))",
            }}
          />
        </div>
      </div>
    </div>
  )
}
