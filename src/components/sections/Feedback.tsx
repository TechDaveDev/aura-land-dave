import { Section } from "../shared/Section"
import { FeedbackCard } from "../ui/FeedbackCard"

export const Feedback = () => {
  return (
    <Section>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
          Loved by teams around the world
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          Don&rsquo;t just take our word for it. Hear what our customers have to say about their experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 items-start">
        <div className="lg:mt-8">
          <FeedbackCard
            isFeatured={true}
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae fuga saepe, earum voluptatibus molestiae rerum, accusantium libero molestias perferendis, iste reprehenderit exercitationem error asperiores dicta!"
            author="Jane Doe"
            position="CEO, Company"
            avatar="https://placehold.co/100x100/E57373/FFFFFF?text=JD"
          />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <FeedbackCard
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate assumenda nostrum dolores amet beatae?"
            author="John Smith"
            position="CTO, Startup"
            avatar="https://placehold.co/100x100/3F51B5/FFFFFF?text=JS"
          />
          <FeedbackCard
            quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptate assumenda nostrum dolores amet beatae?"
            author="Emily White"
            position="Product Manager, Enterprise"
            avatar="https://placehold.co/100x100/FFD54F/1A237E?text=EW"
          />
        </div>
      </div>
    </Section>
  )
}
