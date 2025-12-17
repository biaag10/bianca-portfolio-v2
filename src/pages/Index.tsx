import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {

  return (
    <>
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
