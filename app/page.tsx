import Navbar from "@/components/Navbar";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <TechStack />

      <Contact />
    </>
  );
}