import { AppleIcon, GooglePlayIcon } from "../Icons"
import { Section } from "../shared/Section"
import { StoreButton } from "../StoreButton"

export const Hero = () => {
  return (
    <Section className="!pt-20 !pb-20 md:!pt-32 md:!pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-accent-terracotta/20 opacity-50 blur-[80px]"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tighter">
            Eleva tu productividad con <span className="text-action-button-blue">Inteligencia Artificial</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary max-w-xl mx-auto lg:mx-0">
            Nuestra app integra IA de vanguardia para automatizar tus tareas, optimizar tu tiempo y potenciar tus resultados. Descubre una nueva forma de trabajar.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <StoreButton
              platform="App Store"
              icon={<AppleIcon />}
              className="bg-foreground hover:bg-gray-700 w-full sm:w-auto"
            />
            <StoreButton
              platform="Google Play"
              icon={<GooglePlayIcon />}
              className="bg-foreground hover:bg-gray-700 w-full sm:w-auto"
            />
          </div>
          <div className="mt-8 text-center lg:text-left">
            <div className="flex justify-center lg:justify-start -space-x-2">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/E57373/FFFFFF?text=A" alt="User A" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/3F51B5/FFFFFF?text=B" alt="User B" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://placehold.co/40x40/FFD54F/1A237E?text=C" alt="User C" />
            </div>
            <p className="mt-2 text-sm text-text-secondary">
              <span className="font-semibold text-text-primary">Más de 100,000+ usuarios</span> ya confían en nosotros.
            </p>
          </div>
        </div>

        {/* Columna de la imagen */}
        <div className="relative flex items-center justify-center lg:h-full">
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-accent-sand/50 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-action-button-blue/30 rounded-full blur-2xl"></div>

          <div className="relative flex items-center justify-center p-4 sm:p-6 bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-200/60 h-[450px] w-full max-w-sm">
            <p className="text-text-secondary font-medium">[Phone Mockup Placeholder]</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
