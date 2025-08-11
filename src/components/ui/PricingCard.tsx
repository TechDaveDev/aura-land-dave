import { Check } from "../Icons";

interface PricingCardProps {
  planName: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export const PricingCard = ({ planName, price, features, isFeatured = false }: PricingCardProps) => {
  return (
    <div className={`rounded-2xl p-8 border ${isFeatured ? 'bg-brand-blue text-white border-brand-blue shadow-2xl' : 'bg-background-secondary border-gray-200'}`}>
      <h3 className={`text-2xl font-bold ${isFeatured ? 'text-accent-sand' : 'text-text-primary'}`}>{planName}</h3>
      <p className={`text-4xl font-extrabold my-4 ${isFeatured ? 'text-white' : 'text-foreground'}`}>${price}<span className={`text-base font-normal ${isFeatured ? 'text-gray-300' : 'text-text-secondary'}`}>/mes</span></p>
      <p className={`mb-6 h-12 ${isFeatured ? 'text-gray-300' : 'text-text-secondary'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${isFeatured ? 'bg-accent-sand text-brand-blue hover:bg-yellow-300' : 'bg-action-button-blue text-white hover:bg-indigo-700'}`}>
        Empezar ahora
      </button>
      <ul className="mt-8 space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className={`w-5 h-5 mr-3 ${isFeatured ? 'text-accent-sand' : 'text-action-button-blue'}`} />
            <span className={isFeatured ? 'text-gray-200' : 'text-text-secondary'}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
