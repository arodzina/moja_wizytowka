import Hero from "@/components/sections/Hero";
import ExamStakes from "@/components/sections/ExamStakes";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExamStakes />
      <About />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
