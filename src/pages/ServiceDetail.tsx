import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Building2, KeyRound, Landmark, ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const WHATSAPP_URL = "https://wa.me/18097869806?text=Hola%2C%20quiero%20solicitar%20el%20servicio%20de%20GPS";

const servicesData: Record<string, {
  icon: typeof Car;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  benefits: string[];
}> = {
  vehiculos: {
    icon: Car,
    title: "GPS para Vehículos Personales",
    subtitle: "Protege tu inversión con tecnología de rastreo avanzada",
    description:
      "Nuestro servicio de GPS para vehículos personales te brinda tranquilidad total. Monitorea tu carro en tiempo real desde tu celular, recibe alertas de movimiento no autorizado y mantén un historial completo de recorridos. Ideal para proteger tu vehículo contra robos y tener control total de su ubicación las 24 horas.",
    features: [
      "Rastreo en tiempo real con actualización cada 10 segundos",
      "Alertas de encendido, apagado y movimiento",
      "Historial de recorridos de hasta 90 días",
      "Geocercas personalizadas con notificaciones",
      "Corte de motor remoto en caso de emergencia",
      "App móvil disponible para iOS y Android",
    ],
    benefits: [
      "Protección contra robo y recuperación rápida",
      "Control total de tu vehículo desde cualquier lugar",
      "Instalación discreta y profesional",
      "Soporte técnico 24/7",
    ],
  },
  flotas: {
    icon: Building2,
    title: "GPS para Flotas Empresariales",
    subtitle: "Optimiza operaciones y reduce costos con gestión inteligente",
    description:
      "Gestiona toda tu flota vehicular desde una sola plataforma. Nuestro sistema de rastreo para flotas te permite optimizar rutas, controlar el consumo de combustible, monitorear el comportamiento de los conductores y reducir costos operativos significativamente. La solución ideal para empresas de transporte, logística y distribución.",
    features: [
      "Panel de control centralizado para toda la flota",
      "Optimización automática de rutas",
      "Reportes de consumo de combustible",
      "Monitoreo de velocidad y comportamiento del conductor",
      "Alertas de mantenimiento preventivo",
      "Integración con sistemas ERP y logísticos",
    ],
    benefits: [
      "Reducción de hasta 30% en costos de combustible",
      "Mayor productividad y eficiencia operativa",
      "Mejor servicio al cliente con tiempos de entrega precisos",
      "Reportes gerenciales detallados",
    ],
  },
  "rent-car": {
    icon: KeyRound,
    title: "GPS para Rent Car",
    subtitle: "Seguridad y control total para tu negocio de alquiler",
    description:
      "Protege tu inversión en vehículos de alquiler con nuestro sistema GPS especializado para Rent Car. Monitorea cada vehículo en tiempo real, establece límites geográficos, controla el kilometraje y garantiza la seguridad de tu flota. Reduce pérdidas y mejora la gestión de tu negocio de renta de vehículos.",
    features: [
      "Control de kilometraje y uso del vehículo",
      "Geocercas para delimitar zonas permitidas",
      "Alertas de exceso de velocidad",
      "Bloqueo remoto del vehículo",
      "Reportes por cliente y por vehículo",
      "Integración con software de gestión de alquiler",
    ],
    benefits: [
      "Protección total de tu flota de alquiler",
      "Reducción de fraudes y mal uso de vehículos",
      "Mayor control sobre contratos y devoluciones",
      "Recuperación rápida en caso de robo",
    ],
  },
  financieras: {
    icon: Landmark,
    title: "GPS para Financieras",
    subtitle: "Protege tu cartera de activos financiados",
    description:
      "Asegura los vehículos financiados con nuestro sistema de rastreo GPS diseñado para instituciones financieras. Monitorea la ubicación de cada activo, recibe alertas de comportamiento inusual y facilita la recuperación en caso de incumplimiento. Una herramienta indispensable para proteger tu cartera de préstamos vehiculares.",
    features: [
      "Monitoreo 24/7 de activos financiados",
      "Alertas de salida de zona geográfica autorizada",
      "Inmovilización remota del vehículo",
      "Reportes de ubicación programados",
      "Panel exclusivo para el equipo de cobranza",
      "API para integración con sistemas financieros",
    ],
    benefits: [
      "Reducción del riesgo de pérdida de activos",
      "Recuperación más rápida en caso de mora",
      "Mayor confianza en la aprobación de créditos",
      "Reportes automatizados para auditoría",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold mb-4">Servicio no encontrado</h1>
            <Link to="/" className="text-primary hover:underline">Volver al inicio</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 grid-bg opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/#servicios"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Volver a servicios
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="text-primary" size={32} />
            </div>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8">{service.subtitle}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Solicitar este servicio
            </a>
          </motion.div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl font-bold mb-4">Descripción del servicio</h2>
            <p className="text-muted-foreground leading-relaxed">{service.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">Características</h2>
              <ul className="space-y-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">Beneficios</h2>
              <ul className="space-y-4">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              ¿Listo para proteger tus vehículos?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Contáctanos hoy y recibe una cotización personalizada para tu necesidad.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Contactar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ServiceDetail;
