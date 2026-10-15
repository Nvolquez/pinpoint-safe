import { useEffect } from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Car, Truck, Key, Building2, Check, Mail } from "lucide-react";

interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDesc: string;
  icon: typeof Car;
  heroTitle: string;
  heroSub: string;
  description: string;
  features: string[];
  pricing: { name: string; price: string; features: string[] }[];
  requirements: string[];
}

const servicesData: Record<string, ServiceData> = {
  "gps-vehicular": {
    slug: "gps-vehicular",
    title: "GPS para Vehículos",
    metaTitle: "GPS para Vehículos Personales | Setra GPS",
    metaDesc: "Protege tu vehículo personal con rastreo GPS en tiempo real. Alertas instantáneas y control total desde tu celular.",
    icon: Car,
    heroTitle: "GPS para Vehículos Personales",
    heroSub: "Rastreo en tiempo real para tu carro, jeepeta o motor",
    description: "Nuestro servicio de GPS para vehículos personales te brinda tranquilidad total. Monitorea la ubicación de tu vehículo 24/7, recibe alertas instantáneas y controla todo desde tu celular.",
    features: [
      "Rastreo en tiempo real 24/7",
      "Alertas de encendido y apagado",
      "Historial de recorridos de hasta 1 año",
      "Apagado remoto del motor*",
      "Geocercas personalizables",
      "Alerta de exceso de velocidad",
      "App móvil",
      "Soporte técnico 24/7",
      "* Algunas funciones pueden variar según el tipo de vehículo y su compatibilidad con el sistema",
    ],
    pricing: [
      { name: "Básico", price: "RD$ 4,500 único pago", features: ["Rastreo GPS", "Alertas básicas", "30 días de garantía"] },
      { name: "Premium", price: "RD$ 8,000", features: ["Todo del Básico", "Primer año incluido", "Renovacion RD$ 4,000/año", "Apagado remoto*", "monitoreo mediante APP movil", "Alertas de encendido y apagado", "Alertas de cruce de zona segura", "Alerta mediante WhatsApp", "Geocercas ilimitadas", "Historial 365 días", "Soporte técnico", "1 año de garantía en el equipo"] },
    ],
    requirements: [
      "Cédula o pasaporte del propietario",
      "Matrícula del vehículo vigente",
      "Contrato firmado de servicio",
    ],
  },
  "rastreo-flotas": {
    slug: "rastreo-flotas",
    title: "GPS para Flotas",
    metaTitle: "Rastreo de Flotas Empresariales | Setra GPS",
    metaDesc: "Optimiza tus operaciones con monitoreo GPS de flotilla en tiempo real. Reduce costos y mejora la eficiencia.",
    icon: Truck,
    heroTitle: "GPS para Flotas Empresariales",
    heroSub: "Optimiza tu flota con monitoreo inteligente",
    description: "Solución integral para empresas con flotas vehiculares. Monitorea todos tus vehículos desde una sola plataforma, reduce costos operativos y mejora la productividad de tu equipo.",
    features: [
      "Panel de control centralizado",
      "Monitoreo de múltiples vehículos",
      "Reportes de rendimiento",
      "Módulo medidor de combustible",
      "Módulo limitador de velocidad",
      "Módulo sensor de temperatura",
      "Módulo sensor de humedad",
      "Módulo sensor de ángulo",
      "Deteccion de uso en horario y/o zonas no autorizadas",
      "Control de gastos",
      "Control de mantenimiento",
      "Alertas de mantenimiento",
      "Rutas optimizadas",
      "Informes personalizados",
      "API de integración",
    ],
    pricing: [
      { name: "Flota Pequeña (1-5)", price: "RD$ 600/vehículo/mes", features: ["Panel centralizado", "Rastreo en tiempo real", "Reportes básicos", "Informes personalizados", "App web", "App móvil"] },
      { name: "Flota Mediana (5-15)", price: "RD$ 550/vehículo/mes", features: ["Todo del plan pequeño", "Reportes avanzados", "Registro de uso por conductores"] },
      { name: "Flota Grande (15+)", price: "RD$ 500/vehículo/mes", features: ["Todo del plan medio", "Panel administrador", "Administra subcuentas con roles y permisos personalizados, controlando exactamente qué puede ver y hacer cada usuario en la plataforma.", "API integración", "Gerente de cuenta", "SLA garantizado"] },
      { name: "* Módulos adicionales", price: "A cotizar", features: ["Medidor de combustible", "Limitador de velocidad", "Sensor de temperatura", "Sensor de humedad", "Sensor de ángulo"] },
    ],
    requirements: [
      "RNC de la empresa",
      "Lista de vehículos con matrículas",
      "Contacto del responsable de flota",
      "Contrato mínimo de 1 año pagado por adelantado",
      "Contrato empresarial firmado",
    ],
  },
  "gps-rent-car": {
    slug: "gps-rent-car",
    title: "GPS para Rent Car",
    metaTitle: "GPS para Empresas de Rent Car | Setra GPS",
    metaDesc: "Control total de tus vehículos de alquiler. Rastreo GPS, alertas y protección 24/7 para tu negocio de rent car.",
    icon: Key,
    heroTitle: "GPS para Rent Car",
    heroSub: "Protección total para tu negocio de alquiler",
    description: "Diseñado específicamente para empresas de rent car. Protege cada vehículo de tu inventario con rastreo GPS avanzado, alertas de zona y control de devolución.",
    features: [
      "Rastreo por cliente/contrato",
      "Alertas de riesgo",
      "Geocercas por zona permitida",
      "Módulo medidor de combustible",
      "Módulo limitador de velocidad",
      "Alertas de salida de zona",
      "Control de devolución",
      "Historial por alquiler",
      "Apagado remoto",
      "Panel multi-vehículo",
      "Reportes de uso por cliente",
    ],
    pricing: [
      { name: "Starter (1-15 vehículos)", price: "RD$ 600/vehículo/mes", features: ["Rastreo en tiempo real", "Geocercas", "Alertas básicas", "Panel web"] },
      { name: "Business (15+)", price: "RD$ 500/vehículo/mes", features: ["Todo del Starter", "Panel administrador", "Administra subcuentas con roles y permisos personalizados, controlando exactamente qué puede ver y hacer cada usuario en la plataforma.", "API integración", "Gerente de cuenta", "SLA garantizado"] },
      { name: "* Módulos adicionales", price: "A cotizar", features: ["Medidor de combustible", "Limitador de velocidad"] },
    ],
    requirements: [
      "RNC de la empresa",
      "Lista de vehículos con matrículas",
      "Contacto del responsable de flota",
      "Contrato mínimo de 1 año pagado por adelantado",
      "Contrato empresarial firmado",,
    ],
  },
  "gps-financieras": {
    slug: "gps-financieras",
    title: "GPS para Financieras",
    metaTitle: "GPS para Financieras y Prestamistas | Setra GPS",
    metaDesc: "Protege tu cartera vehicular con localización GPS y apagado remoto. Solución para financieras en RD.",
    icon: Building2,
    heroTitle: "GPS para Financieras",
    heroSub: "Protege tu cartera vehicular",
    description: "Solución especializada para financieras y prestamistas. Asegura tu inversión con localización precisa, apagado remoto y alertas de riesgo para cada vehículo financiado.",
    features: [
      "Localización de activos financiados",
      "Apagado remoto por mora",
      "Alertas de riesgo",
      "Reportes de ubicación",
      "Geocercas de protección",
      "Historial de movimientos",
    ],
    pricing: [
      { name: "Estándar", price: "RD$ 600/vehículo/mes", features: ["Localización en tiempo real", "Apagado remoto", "Alertas de riesgo", "Reportes mensuales"] },
      { name: "Corporativo", price: "Precio negociable", features: ["Todo del Estándar", "API de integración", "Panel de cartera completo", "Soporte dedicado", "SLA personalizado"] },
    ],
    requirements: [
      "RNC de la financiera",
      "Documentos del vehículo financiado",
      "Contrato de financiamiento",
      "Autorización del deudor",
    ],
  },
};

const ServicePage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const service = servicesData[slug || ""];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDesc} />
        <link rel="canonical" href={`https://setragps.com/${service.slug}`} />
      </Helmet>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">{service.heroTitle}</h1>
              <p className="text-xl text-muted-foreground mb-8">{service.heroSub}</p>
              <a
                href={`https://wa.me/18097869806?text=${encodeURIComponent(`Hola, me interesa el servicio de ${service.title}`)}`} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading font-bold glow-primary hover:opacity-90 transition-opacity"
              >
                Solicitar ahora
              </a>
            </motion.div>
          </div>
        </section>

        {/* Description + Features */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Descripción del servicio</h2>
                <p className="text-muted-foreground text-lg">{service.description}</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Características</h2>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              <span className="text-primary">Precios</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {service.pricing.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-8 gradient-border"
                >
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{plan.name}</h3>
                  <p className="text-3xl font-heading font-black text-primary mb-6">{plan.price}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-secondary shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/18097869806?text=${encodeURIComponent(`Hola, me interesa el plan ${plan.name} de ${service.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                  >
                    Solicitar
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 bg-card/50">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              <span className="text-primary">Requisitos</span>
            </h2>
            <div className="glass-card rounded-xl p-8">
              <ul className="space-y-4">
                {service.requirements.map((r, i) => (
                  <li key={r} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 font-heading font-bold text-primary text-sm">
                      {i + 1}
                    </span>
                    <span className="text-foreground">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">¿Listo para proteger tu vehículo?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/18097869806"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg bg-[#25D366] text-white font-heading font-bold hover:bg-[#1ebe5d] transition-colors flex items-center justify-center gap-2"
              >
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.326-.696-6.044-1.882l-.424-.296-2.794.733.746-2.72-.325-.463A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp ahora
              </a>
              <a
                href="mailto:info@setragps.com"
                className="px-8 py-4 rounded-lg border border-border text-foreground font-heading font-bold hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" /> Correo electrónico
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicePage;
