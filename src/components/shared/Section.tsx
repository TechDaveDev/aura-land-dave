interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={`container py-4 ${className}`}>{children}</section>
  )
}
