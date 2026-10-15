import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Helmet } from "react-helmet-async";
import { termsSections, termsLastUpdated } from "@/data/termsContent";

const TermsPage = () => (
  <>
    <Helmet>
      <title>Términos y Condiciones | Setra GPS</title>
      <meta name="description" content="Términos y condiciones de uso de los servicios de rastreo GPS vehicular de Setra GPS en República Dominicana." />
    </Helmet>
    <Navbar />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
          Términos y Condiciones
        </h1>

        <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
          {termsSections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-lg font-semibold text-foreground mb-3">{section.title}</h2>
              {section.content && <p>{section.content}</p>}
              {section.list && (
                <ul className="list-disc list-inside space-y-2 ml-2 mt-2">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <p className="text-xs text-muted-foreground/60 pt-4 border-t border-border">
            Última actualización: {termsLastUpdated}
          </p>
        </div>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default TermsPage;
