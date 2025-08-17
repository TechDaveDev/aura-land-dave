import { BarChart, Bot, Shield, Zap } from "../Icons"
import { Section } from "../shared/Section"
import { FeatureCard } from "../ui/FeatureCard"

export const Features = () => {
  return (
    <Section id="features" className="bg-background-secondary">
      <div className="text-center max-w-2xl mx-auto">
        <span className="inline-block px-4 py-1 text-sm font-semibold text-action-button-blue bg-indigo-100 rounded-full mb-4">
          Our Advantages
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
          Designed for your maximum performance
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Discover the tools that will transform your workflow and give you a competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20 mt-24">
        <FeatureCard icon={<Bot className="w-7 h-7" />} title="Intelligent AI">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
        </FeatureCard>
        <FeatureCard icon={<Zap className="w-7 h-7" />} title="Fast Flows">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
        </FeatureCard>
        <FeatureCard icon={<Shield className="w-7 h-7" />} title="High Security">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
        </FeatureCard>
        <FeatureCard icon={<BarChart className="w-7 h-7" />} title="Clear Analytics">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
        </FeatureCard>
      </div>
    </Section>
  )
}
