import { useState } from "react";
import Navbar from "@/components/Navbar";
import StarField from "@/components/StarField";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <>
        <StarField />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <Timeline />
          <Contact />
        </main>
        <Footer />
    </>
  );
};

export default Index;
