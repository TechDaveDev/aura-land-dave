import { Section } from "../shared/Section"
import { FAQCard } from "../ui/FAQCard"

export const FAQ = () => {
  return (
    <Section id="faq" className="bg-white">
      <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">

        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
            Respuestas a tus dudas
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Hemos recopilado las preguntas más comunes para ayudarte a empezar lo más rápido posible.
          </p>
          <div className="mt-8 p-6 bg-background-secondary rounded-2xl border border-slate-200/80">
            <h3 className="font-bold text-text-primary">¿No encuentras tu respuesta?</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Nuestro equipo de soporte está listo para ayudarte.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-action-button-blue hover:underline"
            >
              Contactar con soporte &rarr;
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <dl>
            <FAQCard
              question="¿Qué tan difícil es la integración inicial?"
              answer="Nuestra plataforma está diseñada para una integración rápida y sencilla. La mayoría de nuestros clientes están operativos en menos de una hora. Ofrecemos guías detalladas y SDKs para las plataformas más populares."
            />
            <FAQCard
              question="¿Mis datos están seguros en la plataforma?"
              answer="Absolutamente. La seguridad es nuestra máxima prioridad. Utilizamos encriptación de extremo a extremo (AES-256), cumplimos con normativas como GDPR y SOC 2, y realizamos auditorías de seguridad periódicas."
            />
            <FAQCard
              question="¿Puedo cancelar mi suscripción en cualquier momento?"
              answer="Sí, puedes cancelar tu plan en cualquier momento desde el panel de tu cuenta, sin preguntas. Seguirás teniendo acceso a las funciones de tu plan hasta el final del ciclo de facturación."
            />
            <FAQCard
              question="¿Ofrecen planes personalizados para grandes empresas?"
              answer="Sí, para equipos grandes o con necesidades específicas, ofrecemos planes 'Enterprise' con características avanzadas, soporte dedicado y acuerdos de nivel de servicio (SLA) personalizados. Contáctanos para más detalles."
            />
          </dl>
        </div>

      </div>
    </Section>
  )
}
