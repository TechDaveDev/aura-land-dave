interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
}

export const FeatureCard = ({ icon, title, children }: FeatureCardProps) => {
  return (
    <div className="relative text-center bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md">
          <div className="flex items-center justify-center w-12 h-12 bg-accent-terracotta/10 text-accent-terracotta rounded-full">
            {icon}
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h3 className="text-lg font-bold text-text-primary mb-2">{title}</h3>
        <p className="text-text-secondary text-sm">{children}</p>
      </div>
    </div>
  )
}
