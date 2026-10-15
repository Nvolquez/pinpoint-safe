import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/hooks/use-theme";

// Importaciones de tus páginas
import Index from "./pages/Index.tsx";
import ServicePage from "./pages/ServicePage.tsx";
import AppInfo from "./pages/AppInfo.tsx";
import Privacidad from "./pages/Privacidad.tsx";
import Licencia from "./pages/Licencia.tsx";
import TerminosServicio from "./pages/TerminosServicio.tsx";
import Santiago from "./pages/Santiago.tsx";
import LaRomana from "./pages/LaRomana.tsx";
import SantoDomingo from "./pages/SantoDomingo.tsx";
import SanPedro from "./pages/SanPedro.tsx";
import PuntaCana from "./pages/PuntaCana.tsx";
import Haina from "./pages/Haina.tsx";
import SanCristobal from "./pages/SanCristobal.tsx";
import PuertoPlata from "./pages/PuertoPlata.tsx";
import Bani from "./pages/Bani.tsx";
import SFM from "./pages/SFM.tsx";
import LaVega from "./pages/LaVega.tsx";
import Bonao from "./pages/Bonao.tsx";
import Higuey from "./pages/Higuey.tsx";
import Moca from "./pages/Moca.tsx";
import Ubicaciones from "./pages/Ubicaciones.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="auto" storageKey="vite-ui-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              {/* Página principal */}
              <Route path="/" element={<Index />} />

              {/* Páginas de SEO Local (Específicas) */}
              <Route path="/santo-domingo" element={<SantoDomingo />} />
              <Route path="/santiago" element={<Santiago />} />
              <Route path="/la-romana" element={<LaRomana />} />
              <Route path="/san-pedro" element={<SanPedro />} />
              <Route path="/punta-cana" element={<PuntaCana />} />
              <Route path="/haina" element={<Haina />} />
              <Route path="/san-cristobal" element={<SanCristobal />} />
              <Route path="/puerto-plata" element={<PuertoPlata />} />
              <Route path="/bani" element={<Bani />} />
              <Route path="/san-francisco-de-macoris" element={<SFM />} />
              <Route path="/la-vega" element={<LaVega />} />
              <Route path="/bonao" element={<Bonao />} />
              <Route path="/higuey" element={<Higuey />} />
              <Route path="/moca" element={<Moca />} />
              
              <Route path="/ubicaciones" element={<Ubicaciones />} />

              {/* Páginas de Servicios */}
              <Route path="/gps-vehicular" element={<ServicePage />} />
              <Route path="/rastreo-flotas" element={<ServicePage />} />
              <Route path="/gps-rent-car" element={<ServicePage />} />
              <Route path="/gps-financieras" element={<ServicePage />} />

              {/* Páginas Legales y de la app móvil (URLs que se declaran en Google Play) */}
              <Route path="/app" element={<AppInfo />} />
              <Route path="/privacidad" element={<Privacidad />} />
              <Route path="/licencia" element={<Licencia />} />
              <Route path="/terminos" element={<TerminosServicio />} />
              {/* La URL anterior redirige a la nueva */}
              <Route path="/terminos-y-condiciones" element={<Navigate to="/terminos" replace />} />

              {/* Manejo de error 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
