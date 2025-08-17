import { SVGProps } from "react";

import { Section } from "../shared/Section"
import { ProcessCard } from "../ui/ProcessCard"

type IconProps = SVGProps<SVGSVGElement>;

const Step1Icon = (props: IconProps) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>;
const Step2Icon = (props: IconProps) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>;
const Step3Icon = (props: IconProps) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.7.7a5.4 5.4 0 0 0-7.65 7.65l.7.7a5.4 5.4 0 0 0 7.65 0l.7-.7a5.4 5.4 0 0 0 0-7.65z"></path><line x1="6" y1="18" x2="18" y2="6"></line></svg>;
const Step4Icon = (props: IconProps) => <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22V12"></path></svg>;

export const Process = () => {
  return (
    <Section className="bg-white">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tighter">
          Get started in just 4 simple steps
        </h2>
        <p className="mt-4 text-lg text-text-secondary">
          We&rsquo;ve designed an intuitive workflow so you can seamlessly harness the power of our AI.
        </p>
      </div>

      <div className="relative mt-20">
        {/* Conector punteado para Desktop */}
        <div
          aria-hidden="true"
          className="absolute inset-0 top-10 hidden md:flex items-center"
        >
          <div className="w-full border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* Grid de Pasos */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-gray-300 text-brand-blue z-10">
              <p className="text-3xl font-bold">1</p>
            </div>
            <ProcessCard
              className="mt-[-2.5rem] pt-16"
              icon={<Step1Icon className="w-8 h-8" />}
              title="Create your account"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
            </ProcessCard>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-gray-300 text-brand-blue z-10">
              <p className="text-3xl font-bold">2</p>
            </div>
            <ProcessCard
              className="mt-[-2.5rem] pt-16"
              icon={<Step2Icon className="w-8 h-8" />}
              title="Connect your data"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
            </ProcessCard>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-gray-300 text-brand-blue z-10">
              <p className="text-3xl font-bold">3</p>
            </div>
            <ProcessCard
              className="mt-[-2.5rem] pt-16"
              icon={<Step3Icon className="w-8 h-8" />}
              title="Define your goals"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
            </ProcessCard>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-background border-4 border-gray-300 text-brand-blue z-10">
              <p className="text-3xl font-bold">4</p>
            </div>
            <ProcessCard
              className="mt-[-2.5rem] pt-16"
              icon={<Step4Icon className="w-8 h-8" />}
              title="Observe the Magic"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, animi.
            </ProcessCard>
          </div>
        </div>
      </div>
    </Section>
  )
}
