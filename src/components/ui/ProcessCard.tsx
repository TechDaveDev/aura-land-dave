interface ProcessCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

export const ProcessCard = ({ icon, title, className, children }: ProcessCardProps) => {
  return (
    <div className={`relative bg-background-secondary/50 p-6 rounded-xl border border-slate-200/80 shadow-sm ${className}`}>
      <div className="mb-4 text-accent-sand flex justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary text-sm">{children}</p>
    </div>
  )
}
