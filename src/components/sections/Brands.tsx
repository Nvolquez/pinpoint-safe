import { motion } from "framer-motion";

const brands = [
  { name: "Teltonika", logo: "/images/marcas/TELTONIKA.png" },
  { name: "Wialon", logo: "/images/marcas/wialon.png" },
  { name: "Ruhavik", logo: "/images/marcas/ruhavik.png" },
  { name: "EMnify", logo: "/images/marcas/EMnify.png" },
  { name: "iStartek", logo: "/images/marcas/istartek.png" },
  { name: "ESCORT", logo: "/images/marcas/ESCORT.png" },
  { name: "GPS WOX", logo: "/images/marcas/gpswox.png" },
  { name: "ela INNOVATION", logo: "/images/marcas/ElaInnovation.png" },
  { name: "Coban", logo: "/images/marcas/coban.png" },
  { name: "GTSTARGPS", logo: "/images/marcas/GTSTARGPS.png" },
  { name: "Concox", logo: "/images/marcas/concox.png" },
  { name: "SEEWORLD", logo: "/images/marcas/SEEWORLD.png" },
];

const Brands = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Algunas de nuestras {" "}
              <span className="text-gradient-glow">Marcas</span>
        </h2>
        <p className="text-muted-foreground text-lg">Trabajamos con las marcas líderes en tecnología GPS a nivel mundial</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {brands.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-xl p-6 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors group"
          >
            <img
              src={c.logo}
              alt={c.name}
              className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
            />
            <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
              {c.name}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
