import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Lleva la ventana arriba en cada cambio de ruta para que la página no quede en el footer. */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
