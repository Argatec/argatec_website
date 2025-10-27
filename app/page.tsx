import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { DistributorsSection } from "@/components/distributors-section"
import { ClientsSection } from "@/components/clients-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { CameraShowcaseSection } from "@/components/camera-showcase-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ExpoBanner } from "@/components/expo-banner"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <ExpoBanner />
      <Header />
      <main className="pt-[108px]">
        <HeroSection />
        <ScrollReveal animation="fade-up">
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal animation="slide-left" delay={100}>
          <DistributorsSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <CameraShowcaseSection />
        </ScrollReveal>
        <ScrollReveal animation="slide-right" delay={100}>
          <ClientsSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={150}>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <ContactSection />
        </ScrollReveal>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
