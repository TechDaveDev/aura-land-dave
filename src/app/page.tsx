import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Features } from "@/components/sections/Features";
import { Feedback } from "@/components/sections/Feedback";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { TrustedBy } from "@/components/sections/TrustedBy";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 font-roboto row-start-2 items-center">
      <Hero />
      <TrustedBy />
      <Process />
      <Features />
      <Feedback />
      <FAQ />
      <CTA />
    </main>
  );
}
