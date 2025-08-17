import { Section } from "@/components/shared/Section"
import { PricingCard } from "@/components/ui/PricingCard"

export default function PricingPage() {
  return (
    <main className="flex flex-col gap-8 font-roboto row-start-2 items-center">
      <Section className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">Plans for every need</h1>
        <p className="mt-4 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
          Choose the plan that best suits you. All plans include a 14-day free trial.
        </p>
      </Section>
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <PricingCard
            planName="Basic"
            price="10"
            features={["Feature 1", "Feature 2", "Feature 3", "Basic Support"]}
          />
          <PricingCard
            planName="Pro"
            price="25"
            features={["Everything Basic", "Feature 4", "Feature 5", "Advanced Analytics", "Priority Support"]}
            isFeatured={true}
          />
          <PricingCard
            planName="Business"
            price="50"
            features={["Everything Pro", "Feature 6", "SSO Integrations", "Dedicated Manager", "Customized SLA"]}
          />
        </div>
      </Section>
    </main>
  )
}
