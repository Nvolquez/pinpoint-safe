import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/18091234567?text=Hola%2C%20quiero%20información%20sobre%20rastreo%20GPS";

const WhatsAppFloat = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

export default WhatsAppFloat;
