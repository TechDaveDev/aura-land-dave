interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Section = ({ className = '', children, ...props }: SectionProps) => {
  return (
    <section className={`container py-8 px-4 md:px-6 xl:px-4 w-full ${className}`} {...props}>{children}</section>
  )
}
