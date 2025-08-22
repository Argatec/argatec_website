"use client"

import { useState, useEffect } from "react"

const clients = [
  { name: "G4S", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Hikvision", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Dahua", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Axis", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Bosch", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Honeywell", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Pelco", logo: "/placeholder.svg?height=80&width=120" },
  { name: "Avigilon", logo: "/placeholder.svg?height=80&width=120" },
]

export function ClientsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= clients.length ? 0 : prevIndex + itemsPerView))
    }, 3000)

    return () => clearInterval(interval)
  }, [itemsPerView, isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerView >= clients.length ? 0 : prevIndex + itemsPerView))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, clients.length - itemsPerView) : Math.max(0, prevIndex - itemsPerView),
    )
  }

  const visibleClients = clients.slice(currentIndex, currentIndex + itemsPerView)

  return (
    <div className="relative">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleClients.map((client, index) => (
          <div
            key={`${client.name}-${currentIndex + index}`}
            className="bg-transparent rounded-lg p-6 flex items-center justify-center hover:shadow-lg transition-all duration-300 border border-amber-400/20 hover:border-amber-400/50 hover:scale-105 group"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <img
              src={client.logo || "/placeholder.svg"}
              alt={`${client.name} logo`}
              className="max-h-16 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(clients.length / itemsPerView) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false)
              setCurrentIndex(index * itemsPerView)
            }}
            className={`h-2 w-2 rounded-full transition-colors ${
              Math.floor(currentIndex / itemsPerView) === index ? "bg-amber-400" : "bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
