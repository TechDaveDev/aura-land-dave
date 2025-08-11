import { Section } from "../shared/Section"

const LogoCloud = () => {
  const logos = [
    { name: 'Statamic', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 4.233 27.267 10.7v10.534L16 27.767 4.733 21.234V10.7zM16 0l16 9.233v13.534L16 32 0 22.767V9.233z"></path></svg> },
    { name: 'Transistor', svg: <svg viewBox="0 0 28 28" fill="currentColor"><path d="M14 0a14 14 0 1 0 14 14A14 14 0 0 0 14 0zm0 25.2a11.2 11.2 0 1 1 11.2-11.2 11.21 11.21 0 0 1-11.2 11.2zM12.6 7h2.8v5.6h1.4V7h2.8v11.2h-2.8V12.6h-1.4v5.6H9.8V7h2.8z"></path></svg> },
    { name: 'Tuple', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 28.8C8.944 28.8 3.2 23.056 3.2 16S8.944 3.2 16 3.2c7.056 0 12.8 5.744 12.8 12.8s-5.744 12.8-12.8 12.8zM18.4 9.6h-4.8V22.4h4.8V9.6z"></path></svg> },
    { name: 'SavvyCal', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 32a16 16 0 1 1 16-16 16 16 0 0 1-16 16zM16 3.2a12.8 12.8 0 1 0 12.8 12.8A12.8 12.8 0 0 0 16 3.2zm-4.8 7.2h9.6v3.2h-9.6v-3.2zm0 8h9.6v3.2h-9.6v-3.2z"></path></svg> },
    { name: 'Reform', svg: <svg viewBox="0 0 32 32" fill="currentColor"><path d="M0 32h32V0H0zm3.2-3.2V3.2h25.6v25.6zM9.6 9.6h12.8v3.2H9.6zm0 6.4h12.8v3.2H9.6z"></path></svg> },
    { name: 'Laravel', svg: <svg viewBox="0 0 128 128" fill="currentColor"><path d="M125.8 80.1l-55-31.8c-.8-.4-1.6-.4-2.4 0l-55 31.8c-.8.4-1.2 1.2-1.2 2.1v6.3c0 .8.4 1.6 1.2 2.1l55 31.8c.8.4 1.6.4 2.4 0l55-31.8c.8-.4 1.2-1.2 1.2-2.1v-6.3c0-.8-.4-1.6-1.2-2.1zM64.4 115L12 84.8l52.4-30.2 52.4 30.2-52.4 30.2zM6.2 73.8l55-31.8c.8-.4 1.6-.4 2.4 0l55 31.8c.8.4 1.2 1.2 1.2 2.1v6.3c0 .8-.4 1.6-1.2 2.1L64.8 116c-.8.4-1.6.4-2.4 0l-55-31.8c-.8-.4-1.2-1.2-1.2-2.1v-6.3c0-.8.4-1.6 1.2-2.1zm58.2 30.3L116.8 74l-52.4-30.2L12 74l52.4 30.1zM64.4 34.5L12 4.3 64.4 34.5 116.8 4.3 64.4 34.5zM6.2 32l55-31.8c.8-.4 1.6-.4 2.4 0l55 31.8c.8.4 1.2 1.2 1.2 2.1v6.3c0 .8-.4 1.6-1.2 2.1L64.8 74c-.8.4-1.6.4-2.4 0L7.4 42.5c-.8-.4-1.2-1.2-1.2-2.1V34c0-.8.4-1.6 1.2-2.1z"></path></svg> },
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
          CON LA CONFIANZA DE LAS MEJORES EMPRESAS DEL MUNDO
        </p>
        <div className="mt-8">
          <LogoCloud />
        </div>
      </div>
    </Section>
  )
}
