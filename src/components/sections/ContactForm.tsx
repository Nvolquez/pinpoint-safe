import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RECAPTCHA_SITE_KEY, POST_URL } from "@/config/contactForm";
import { useEffect } from "react";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  email: z.string().trim().email("Correo electrónico inválido").max(255),
  phone: z.string().trim().min(1, "El teléfono es requerido").max(20, "Máximo 20 caracteres"),
  message: z.string().trim().max(1000, "Máximo 1000 caracteres").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const loadRecaptchaScript = (() => {
  let loaded = false;
  return () => {
    if (loaded) return;
    loaded = true;
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    document.head.appendChild(script);
  };
})();

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  // Load recaptcha on first interaction
  const handleInteraction = () => loadRecaptchaScript();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const token = await new Promise<string>((resolve, reject) => {
  if (!window.grecaptcha) {
    reject(new Error("reCAPTCHA no cargado"));
    return;
  }

  window.grecaptcha.ready(() => {
    window.grecaptcha
      .execute(RECAPTCHA_SITE_KEY, { action: "contact" })
      .then(resolve)
      .catch(reject);
  });
});

      const res = await fetch(POST_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken: token }),
      });

      const text = await res.text();
      console.log("STATUS API:", res.status);
      console.log("RESPUESTA API:", text);

      if (!res.ok) {
        throw new Error(`Error API ${res.status}: ${text}`);
      }
      setStatus("success");
      form.reset();
    } catch (error) {
        console.error("ERROR FORMULARIO:", error);
        setStatus("error");
        }
  };
  
  useEffect(() => {
  loadRecaptchaScript();
}, []);

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/5" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl md:text-5xl font-black text-foreground">
              ¿Listo para <span className="text-gradient-glow">proteger</span> tu vehículo?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Déjanos tus datos y un asesor se comunicará contigo en minutos.
            </p>
          </div>

          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <CheckCircle className="w-16 h-16 text-[#25D366] mx-auto" />
              <h3 className="text-2xl font-heading font-bold text-foreground">¡Mensaje enviado!</h3>
              <p className="text-muted-foreground">Nos pondremos en contacto contigo pronto.</p>
              <Button variant="outline" onClick={() => setStatus("idle")} className="mt-4">
                Enviar otro mensaje
              </Button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form
                ref={formRef}
                onSubmit={form.handleSubmit(onSubmit)}
              
                className="space-y-5 bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="809-000-0000" type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Correo electrónico</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje (opcional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="¿Qué tipo de vehículo deseas proteger?" rows={4} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {status === "error" && (
                  <div className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" />
                    Error al enviar. Inténtalo de nuevo.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full h-12 text-base font-heading font-bold"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Enviar solicitud
                    </span>
                  )}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Protegido por reCAPTCHA de Google.{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline">Privacidad</a>
                  {" "}y{" "}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline">Términos</a>.
                </p>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
