import { Github, Linkedin, Twitter } from "@/components/Icons";

export const Footer = () => {
  return (
    <footer className="bg-background-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 lg:grid-cols-10 gap-8">

          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold text-brand-blue mb-2">Aura</h3>
            <p className="text-text-secondary max-w-sm">
              Potenciando equipos con inteligencia artificial para alcanzar nuevos niveles de productividad.
            </p>
            <form className="mt-6">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-text-primary placeholder-gray-500 shadow-sm focus:border-action-button-blue focus:outline-none focus:ring-1 focus:ring-action-button-blue"
                  placeholder="Tu correo electrónico"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-md bg-action-button-blue px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-action-button-blue focus:ring-offset-2"
                >
                  Suscribirse
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Producto</h4>
              <ul className="space-y-3">
                <li><a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">Features</a></li>
                <li><a href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors">Pricing</a></li>
                <li><a href="#faq" className="text-text-secondary hover:text-text-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Compañía</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Careers</a></li>
                <li><a href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-text-secondary hover:text-text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-t border-gray-300">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} Aura. Todos los derechos reservados.
          </p>
          <div className="flex space-x-5 mt-4 sm:mt-0">
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Github className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Linkedin className="h-5 w-5" /></a>
          </div>
          <p className="text-sm text-text-secondary mt-8">Esta es una página de demostración con fines ilustrativos y no representa un producto o servicio real.</p>
        </div>
      </div>
    </footer>
  )
}
