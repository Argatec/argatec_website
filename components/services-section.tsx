"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Wifi, Users, Award } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Shield,
      title: "Seguridad Electrónica Integral",
      description: "Instalación, configuración, mantenimiento y reparación de sistemas completos de seguridad.",
      features: [
        "Sistemas de alarma",
        "Cámaras de seguridad",
        "Cercos eléctricos para protección perimetral",
        "Sistemas de control de acceso y seguridad biométrica",
        "Sistemas de alarma contra incendios",
        "Sistemas de iluminación con lámparas solares para exteriores",
        "Servicios de atención de averías",
      ],
    },
    {
      icon: Wifi,
      title: "Redes",
      description: "Soluciones completas de conectividad y telecomunicaciones para empresas y hogares.",
      features: ["Instalación de redes y cableado estructurado", "Enlaces inalámbricos", "Enlaces de fibra óptica"],
    },
    {
      icon: Users,
      title: "Asesoría Personalizada",
      description:
        "Nos enorgullece no ser solo un proveedor de servicios, sino también un socio estratégico en la toma de decisiones tecnológicas.",
      features: [
        "Trabajamos mano a mano con nuestros clientes",
        "Comprendemos sus necesidades específicas",
        "Anticipamos y prevenimos riesgos",
        "Soluciones personalizadas que se adaptan a objetivos y presupuesto",
      ],
    },
    {
      icon: Award,
      title: "Respaldo Certificado",
      description:
        "Nuestra empresa cuenta con diversas certificaciones para la instalación, configuración y venta de soluciones tecnológicas.",
      features: [
        "Certificaciones en alarmas AJAX",
        "Certificaciones en cámaras IMOU, DAHUA Y HIKVISION",
        "Certificaciones en cercos eléctricos JFL",
        "Instalación de enlaces de fibra óptica",
        "Compromiso con la excelencia y satisfacción del cliente",
      ],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
            Nuestros <span className="text-amber-400">Servicios</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Soluciones integrales de seguridad y tecnología con más de una década de experiencia en el mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700 hover:border-amber-400/50 transition-all duration-500 backdrop-blur-sm card-elegant hover:shadow-2xl hover:shadow-amber-400/20 cursor-pointer group"
            >
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-amber-400/10 p-4 rounded-xl mr-4 group-hover:bg-amber-400/20 transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-base">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-amber-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-gray-200 text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
