import { useState } from "react";
import { Menu, X, Play, UserCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const WHATSAPP_URL = "https://wa.me/18097869806?text=Hola%2C%20quiero%20información%20sobre%20GPS%20vehicular";
const DEMO_URL = "https://demo.example.com";
const CLIENT_ACCESS_URL = "#";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#inicio" className="flex items-center gap-2">
          <img src={logo} alt="Setra GPS" className="h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DEMO_URL}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            <Play size={16} />
            Demo
          </a>
          <a
            href={CLIENT_ACCESS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-primary/50 hover:bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            <UserCircle size={16} />
            Acceso Clientes
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-500 text-foreground text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={DEMO_URL}
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                <Play size={16} />
                Demo
              </a>
              <a
                href={CLIENT_ACCESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 border border-primary/50 hover:bg-primary/10 text-primary font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                <UserCircle size={16} />
                Acceso Clientes
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 text-foreground font-semibold px-5 py-2.5 rounded-lg text-center transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
