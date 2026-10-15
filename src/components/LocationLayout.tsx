import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const LocationLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col items-center bg-background">
    {/* Logo arriba */}
    <div className="pt-10 pb-4 flex justify-center">
      <Link to="/">
        <img src={logo} alt="Setra GPS" className="h-24 md:h-28 w-auto drop-shadow-lg" />
      </Link>
    </div>

    {/* Contenido de la página */}
    <div className="flex-1 w-full">{children}</div>

    {/* Botón volver al inicio */}
    <div className="pb-12 pt-4 flex flex-col items-center gap-3">
      <Link
        to="/"
        className="px-10 py-4 rounded-lg bg-yellow-500 text-black font-heading font-bold text-lg hover:bg-yellow-400 transition-colors text-center"
      >
        Página principal
      </Link>
    </div>
  </div>
);

export default LocationLayout;
