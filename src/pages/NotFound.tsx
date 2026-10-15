import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.error("404 Error: Ubicación no encontrada en:", window.location.pathname);

    // Redirección automática a los 5 segundos
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={styles.body}>
      {/* Google Fonts y animaciones */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
          
          @keyframes pulse {
            0% { opacity: 0.3; }
            50% { opacity: 1; }
            100% { opacity: 0.3; }
          }
        `}
      </style>

      <div style={styles.container}>
        {/* Contenedor del logo para centrado */}
        <div style={styles.logoContainer}>
          {/* Asegúrate de que la ruta /logo.svg sea correcta en tu carpeta public */}
          <img src="/logo.svg" alt="Setra GPS" style={styles.logo} />
        </div>

        <h1 style={styles.h1}>404</h1>
        <h2 style={styles.h2}>Ubicación no encontrada</h2>

        <p style={styles.p}>
          La página que buscas no existe o fue movida.<br />
          Pero tu vehículo siempre estará localizado con Setra GPS.
        </p>

        <a href="/" style={styles.btn} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')} 
           onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
          Volver al inicio
        </a>

        <div style={styles.gpsAnimation}>
          📍 Señal GPS activa...
        </div>
      </div>
    </div>
  );
};

// Estilos actualizados
const styles: { [key: string]: React.CSSProperties } = {
  body: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at top, #1e293b, #020617)',
    color: '#ffffff',
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    overflow: 'hidden'
  },
  container: {
    textAlign: 'center' as const,
    maxWidth: '500px',
    padding: '30px',
    display: 'flex', // Flexbox para alinear elementos hijos
    flexDirection: 'column' as const, // Alinear en columna
    alignItems: 'center' as const, // Centrar horizontalmente los elementos hijos
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center' as const, // Centrar horizontalmente el logo dentro de su contenedor
    width: '100%', // Usar el ancho completo del contenedor
    marginBottom: '20px',
  },
  logo: {
    width: '80px',
    // margin: '0 auto', // Centrar el logo en sí mismo si no usamos logoContainer (alternativa)
  },
  h1: {
    fontSize: '5rem',
    fontWeight: 700,
    color: '#facc15', // Amarillo
    marginBottom: '10px',
    lineHeight: 1,
    width: '100%', // Asegurar que el h1 ocupe el ancho completo para el textAlign:center del container
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 600,
    marginBottom: '10px',
    width: '100%', // Asegurar que el h2 ocupe el ancho completo
  },
  p: {
    color: '#94a3b8', // Muted
    marginBottom: '25px',
    fontSize: '1rem',
    lineHeight: 1.6,
    width: '100%', // Asegurar que el p ocupe el ancho completo
  },
  btn: {
    display: 'inline-block',
    padding: '12px 25px',
    backgroundColor: '#facc15',
    color: '#000',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
  gpsAnimation: {
    marginTop: '30px',
    fontSize: '0.9rem',
    color: '#22c55e',
    animation: 'pulse 1.5s infinite',
    width: '100%', // Asegurar que la animación ocupe el ancho completo
  }
};

export default NotFound;
