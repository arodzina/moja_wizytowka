import Hero from "@/components/sections/Hero";
import ExamStakes from "@/components/sections/ExamStakes";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import FreeGuides from "@/components/sections/FreeGuides";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExamStakes />
      <About />
      <Testimonials />
      <FreeGuides />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
