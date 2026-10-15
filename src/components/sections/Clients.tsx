import { motion } from "framer-motion";

const clients = [
  { name: "Jet Transporte", logo: "/images/clientes/jet.webp", url: "https://jettransporterd.com/" },
  { name: "Solo Pastelitos", logo: "/images/clientes/solopastelitos.webp", url: "https://www.instagram.com/solopastelitos/" },
  { name: "Enalas", logo: "/images/clientes/enalas.webp", url: "https://enalas.com/" },
  { name: "RIVEG Soluciones", logo: "/images/clientes/riveg.webp", url: "https://www.instagram.com/rivegsoluciones/" },
  { name: "RV Auto Tuning", logo: "/images/clientes/rvautotuning.webp", url: "https://www.instagram.com/rvautotuning/" },
  { name: "Expendomax", logo: "/images/clientes/expendomax.webp", url: "https://expendomax.com/peru/rdominicana.php" },
  { name: "MH Kitchen Cleaning", logo: "/images/clientes/myh.webp", url: "https://www.kitchencleaningmh.com/" },
  { name: "Ixiene Pro Services", logo: "/images/clientes/ixiene.webp", url: "https://www.ixiene.net/" },
  { name: "Volpa Solutions", logo: "/images/clientes/volpa.webp", url: "https://www.instagram.com/volpasolutions/" },
  { name: "GVTEC SRL", logo: "/images/clientes/gvtec.webp", url: "https://www.instagram.com/gvtec_srl/" },
  { name: "PyO Refrigeracion", logo: "/images/clientes/pyorefrigeracion.webp", url: "https://pyorefrigeracion.com/" },
  { name: "FC Ingenieria", logo: "/images/clientes/fc.webp", url: "https://www.fcird.com/" },
];

const Clients = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-foreground mb-6">
              Algunos de nuestros{" "}
              <span className="text-gradient-glow">Clientes</span>
        </h2>
        <p className="text-muted-foreground text-lg">Empresas que confían en Setra GPS</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {clients.map((c, i) => (
          <motion.a
            key={c.name}
            href={c.url}
            target="_blank"
            rel="noopener noreferrer"
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

export default Clients;
