import { Section } from "../shared/Section";
import { StoreButton } from "../StoreButton";
import { AppleIcon, GooglePlayIcon } from "../Icons";

export const CTA = () => {
  return (
    <Section className="!py-10">
      <div className="relative text-center bg-brand-blue rounded-2xl p-8 sm:p-12 overflow-hidden">
        {/* Efectos de luz de fondo */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[400px] h-[400px] rounded-full bg-accent-sand/20 blur-3xl"></div>
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2">
          <div className="w-[400px] h-[400px] rounded-full bg-accent-terracotta/20 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter">
            Transforma tu flujo de trabajo hoy
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            Únete a miles de equipos que ya están construyendo el futuro. No se requiere tarjeta de crédito para empezar.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="/pricing"
              className="bg-accent-sand text-brand-blue px-8 py-3.5 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg w-full sm:w-auto"
            >
              Empezar prueba gratuita
            </a>
          </div>
          <div className="mt-6 flex justify-center items-center gap-4">
            <StoreButton
              platform="App Store"
              icon={<AppleIcon />}
              className="bg-white/10 hover:bg-white/20 w-full sm:w-auto"
            />
            <StoreButton
              platform="Google Play"
              icon={<GooglePlayIcon />}
              className="bg-white/10 hover:bg-white/20 w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
