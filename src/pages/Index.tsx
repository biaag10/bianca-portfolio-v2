import { useState } from "react";
import StarField from "@/components/StarField";
import StarWarsIntro from "@/components/StarWarsIntro";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <StarWarsIntro onComplete={() => setShowIntro(false)} />}

      <div
        className={`min-h-screen transition-opacity duration-1000 ${
          showIntro ? "opacity-0" : "opacity-100"
        }`}
      >
        <StarField />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
