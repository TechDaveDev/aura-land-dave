import { Section } from "../shared/Section"
import { FeedbackCard } from "../ui/FeedbackCard"

export const Feedback = () => {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
          Amado por equipos de todo el mundo
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          No te fíes solo de nuestra palabra. Escucha lo que nuestros clientes tienen que decir sobre su experiencia.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 items-start">
        <div className="lg:mt-8">
          <FeedbackCard
            isFeatured={true}
            quote="Esta herramienta ha revolucionado por completo nuestro flujo de trabajo. Lo que antes nos llevaba días, ahora se hace en minutos. Es simplemente indispensable. No podríamos imaginar volver a trabajar sin ella."
            author="Jane Doe"
            position="CEO, Company"
            avatar="https://placehold.co/100x100/E57373/FFFFFF?text=JD"
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <FeedbackCard
            quote="La integración fue increíblemente sencilla y el soporte al cliente es de primer nivel. Resolvieron nuestras dudas en tiempo récord."
            author="John Smith"
            position="CTO, Startup"
            avatar="https://placehold.co/100x100/3F51B5/FFFFFF?text=JS"
          />
          <FeedbackCard
            quote="Las analíticas que proporciona son claras, potentes y nos han dado una visión que no teníamos antes. Totalmente recomendado."
            author="Emily White"
            position="Product Manager, Enterprise"
            avatar="https://placehold.co/100x100/FFD54F/1A237E?text=EW"
          />
        </div>
      </div>
    </Section>
  )
}
