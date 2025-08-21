import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Home, Factory } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      icon: Building,
      title: "Seguridad Corporativa",
      description: "Sistema integral de seguridad para edificio corporativo con 200+ empleados.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Empresarial",
      features: ["64 Cámaras IP", "Control de Acceso", "Monitoreo 24/7"],
    },
    {
      icon: Home,
      title: "Automatización Residencial",
      description: "Casa inteligente con sistema de seguridad y domótica integrada.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Residencial",
      features: ["Domótica", "Alarmas", "Cámaras HD"],
    },
    {
      icon: Factory,
      title: "Seguridad Industrial",
      description: "Protección perimetral y control de acceso para complejo industrial.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Industrial",
      features: ["Perímetro", "Térmica", "Analítica"],
    },
  ]

  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Proyectos <span className="text-accent">Argatec</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Descubre algunos de nuestros proyectos más destacados y cómo hemos ayudado a nuestros clientes a proteger
            sus activos más importantes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3">
                    <project.icon className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-foreground">{project.title}</h3>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs">
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group bg-transparent">
                  Ver Detalles
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          
        </div>
      </div>
    </section>
  )
}
