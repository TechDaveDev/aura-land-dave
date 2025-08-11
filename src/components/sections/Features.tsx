import { BarChart, Bot, Shield, Zap } from "../Icons"
import { Section } from "../shared/Section"
import { FeatureCard } from "../ui/FeatureCard"

export const Features = () => {
  return (
    <Section id="features" className="bg-background-secondary">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-action-button-blue bg-indigo-100 rounded-full mb-4">
          Nuestras Ventajas
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
          Diseñado para tu máximo rendimiento
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Descubre las herramientas que transformarán tu flujo de trabajo y te darán una ventaja competitiva.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 mt-24">
        <FeatureCard icon={<Bot className="w-7 h-7" />} title="AI Inteligente">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </FeatureCard>
        <FeatureCard icon={<Zap className="w-7 h-7" />} title="Flujos Rápidos">
          Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </FeatureCard>
        <FeatureCard icon={<Shield className="w-7 h-7" />} title="Alta Seguridad">
          Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </FeatureCard>
        <FeatureCard icon={<BarChart className="w-7 h-7" />} title="Analíticas Claras">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu.
        </FeatureCard>
      </div>
    </Section>
  )
}
