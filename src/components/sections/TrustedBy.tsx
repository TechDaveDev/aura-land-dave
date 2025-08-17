import { Section } from "../shared/Section"

const LogoCloud = () => {
  const logos = [
    { name: 'Statamic', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'Transistor', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'Tuple', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'SavvyCal', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'Reform', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'Laravel', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-10 animate-infinite-scroll">
        {logos.map((logo) => (
          <li key={logo.name}>
            <div className="h-10 w-28 text-gray-400 hover:text-text-primary transition-colors">
              {logo.svg}
            </div>
          </li>
        ))}
      </ul>

      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_svg]:h-10 animate-infinite-scroll" aria-hidden="true">
        {logos.map((logo) => (
          <li key={logo.name}>
            <div className="h-10 w-28 text-gray-400 hover:text-text-primary transition-colors">
              {logo.svg}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const TrustedBy = () => {
  return (
    <Section className="!py-12 sm:!py-16">
      <div className="text-center">
        <p className="text-sm font-semibold text-text-secondary tracking-wider">
          TRUSTED BY THE WORLD&rsquo;S BEST COMPANIES
        </p>
        <div className="mt-8">
          <LogoCloud />
        </div>
      </div>
    </Section>
  )
}
