import type React from "react"
import type { Metadata } from "next"
import { Inter, Work_Sans } from "next/font/google"
import "./globals.css"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Argatec - Soluciones en Tecnología Informática",
  description:
    "Empresa líder en seguridad electrónica integral, soluciones tecnológicas y distribución de las mejores marcas del mercado.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${workSans.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
