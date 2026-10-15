import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.svg";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setOpen(false);
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "");
      if (location.pathname !== "/") {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Setra GPS" width={40} height={40} className="w-10 h-10" />
          <span className="font-heading font-bold text-xl text-foreground">
            Setra <span className="text-primary">GPS</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <a
            href="https://status.setragps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-green-500/30 text-green-400 font-semibold text-sm hover:bg-green-500/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
            Estatus del sistema
          </a>
          <a
            href="https://demo.setragps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            DEMO
          </a>
          <a
            href="https://gps.setragps.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg border border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            Acceso Clientes
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex justify-center">
              <ThemeToggle />
            </div>
            <a
              href="https://status.setragps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg border border-green-500/30 text-green-400 font-semibold text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse-glow" />
              Estatus
            </a>
            <a
              href="https://demo.setragps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-semibold text-sm text-center"
            >
              DEMO
            </a>
            <a
              href="https://gps.setragps.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-primary text-primary font-semibold text-sm text-center"
            >
              Acceso Clientes
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
