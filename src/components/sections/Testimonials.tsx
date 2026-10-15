import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jose Aybar",
    role: "Empresario",
    text: "Con Setra GPS dejamos de depender solo del chofer y ahora vemos en tiempo real cada traslado, lo que nos ayuda a tener más control y dar mejor servicio.",
  },
  {
    name: "Pablo Valdez",
    role: "Empresario",
    text: "Con Setra GPS podemos ver en tiempo real las rutas y evitar desvíos o retrasos, lo que nos ayuda a mantener las operaciones al 100%.",
  },
  {
    name: "Joan Peralta",
    role: "Dueño de colmado",
    text: "Los choferes dejaban el vehículo prendido cogiendo aire y en eso se iba en combustible, con el apagado automático ya eso casi no pasa y se nota el ahorro.",
  },
  {
    name: "Jose paulino",
    role: "Usuario particular",
    text: "Las notificaciones por WhatsApp me llegan al instante cuando el carro se mueve o lo prendo, y eso me da mucha tranquilidad sin tener que estar entrando a la app.",
  },
  {
    name: "Karla Gonzalez.",
    role: "Gerente de flota",
    text: "Con Setra GPS y el medidor de combustible vemos exactamente cuánto se llena en la bomba y cuánto consume cada vehículo, lo que nos ha ayudado a detectar diferencias y evitar robo.",
  },
  {
    name: "Joan Peralta.",
    role: "Dueño de colmado",
    text: "A mí me robaron un motor hace como un año, instale GPS en todos los motores. Ya no dependo de lo que diga el delivery, yo mismo veo todo en el mapa.",
  },
];

const Testimonials = () => (
  <section className="py-20 md:py-28 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Los que dicen nuestros {" "}
              <span className="text-gradient-glow">Clientes</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-6"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="text-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
