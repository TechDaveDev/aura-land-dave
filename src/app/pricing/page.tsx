import { Section } from "@/components/shared/Section"
import { PricingCard } from "@/components/ui/PricingCard"

export default function PricingPage() {
  return (
    <main>
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">Planes para cada necesidad</h1>
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a ti. Todos los planes incluyen una prueba gratuita de 14 días.
        </p>
      </Section>
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <PricingCard
            planName="Básico"
            price="10"
            features={["Característica 1", "Característica 2", "Característica 3", "Soporte Básico"]}
          />
          <PricingCard
            planName="Pro"
            price="25"
            features={["Todo en Básico", "Característica 4", "Característica 5", "Analíticas Avanzadas", "Soporte Prioritario"]}
            isFeatured={true}
          />
          <PricingCard
            planName="Empresarial"
            price="50"
            features={["Todo en Pro", "Característica 6", "Integraciones SSO", "Manager Dedicado", "SLA Personalizado"]}
          />
        </div>
      </Section>
    </main>
  )
}
