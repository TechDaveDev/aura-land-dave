import { Section } from "@/components/shared/Section"

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-8 font-roboto row-start-2 items-center">
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary">Contact us</h1>
          <p className="mt-4 text-lg md:text-xl text-text-secondary">
            Have a question? Send us a message and we&rsquo;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="mt-16 max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-primary">Name</label>
              <input type="text" id="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-action-button-blue focus:border-action-button-blue" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary">Email</label>
              <input type="email" id="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-action-button-blue focus:border-action-button-blue" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-primary">Message</label>
              <textarea id="message" rows={4} className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-action-button-blue focus:border-action-button-blue"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-semibold text-white bg-action-button-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-action-button-blue transition-colors">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </main>
  )
}
