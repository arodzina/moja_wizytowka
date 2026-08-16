import Hero from "@/components/sections/Hero";
import ExamStakes from "@/components/sections/ExamStakes";
import CkeAlignment from "@/components/sections/CkeAlignment";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import HowItWorks from "@/components/sections/HowItWorks";
import LeadMagnet from "@/components/sections/LeadMagnet";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExamStakes />
      <CkeAlignment />
      <About />
      <Pricing />
      <HowItWorks />
      <LeadMagnet />
      <FAQ />
      <Contact />
    </>
  );
}
