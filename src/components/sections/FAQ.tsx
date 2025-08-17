import { Section } from "../shared/Section"
import { FAQCard } from "../ui/FAQCard"

export const FAQ = () => {
  return (
    <Section id="faq" className="bg-white">
      <div className="grid lg:grid-cols-3 gap-x-12 gap-y-8">

        <div className="lg:col-span-1">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
            Answers to your questions
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            We&rsquo;ve compiled the most common questions to help you get started as quickly as possible.
          </p>
          <div className="mt-8 p-6 bg-background-secondary rounded-2xl border border-slate-200/80">
            <h3 className="font-bold text-text-primary">Can&rsquo;t find your answer?</h3>
            <p className="mt-2 text-sm text-text-secondary">
              Our support team is ready to help you.
            </p>
            <a
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-action-button-blue hover:underline"
            >
              Contact support &rarr;
            </a>
          </div>
        </div>

        <div className="lg:col-span-2">
          <dl>
            <FAQCard
              question="How difficult is initial integration?"
              answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus, veniam voluptatem commodi vel odit maiores iste soluta mollitia aperiam dolorem, similique dolor ratione dicta."
            />
            <FAQCard
              question="Is my data secure on the platform?"
              answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus, veniam voluptatem commodi vel odit maiores iste soluta mollitia aperiam dolorem, similique dolor ratione dicta."
            />
            <FAQCard
              question="Can I cancel my subscription at any time?"
              answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus, veniam voluptatem commodi vel odit maiores iste soluta mollitia aperiam dolorem, similique dolor ratione dicta."
            />
            <FAQCard
              question="Do you offer customized plans for large companies?"
              answer="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum, ducimus, veniam voluptatem commodi vel odit maiores iste soluta mollitia aperiam dolorem, similique dolor ratione dicta."
            />
          </dl>
        </div>

      </div>
    </Section>
  )
}
