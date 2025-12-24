import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 relative">
      <div className="text-center animate-slide-up">
        <p className="text-primary font-body text-lg tracking-widest mb-4">
          DESENVOLVEDORA FULL STACK & ANALISTA DE DADOS
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 glow-text text-foreground">
          Bianca A. Galvão
        </h1>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Transformando ideias em código e sonhos em realidade. 
          <br />
          Construindo o futuro digital, uma linha por vez.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-primary text-primary-foreground font-display font-semibold rounded-lg hover:animate-pulse-glow transition-all duration-300"
          >
            VER PROJETOS
          </button>
          <a
            href="#timeline"
            className="px-8 py-3 border border-primary/50 text-primary font-display font-semibold rounded-lg hover:bg-primary/10 transition-all duration-300"
          >
            MINHA JORNADA
          </a>
        </div>
      </div>

      {/* Indicador de rolagem (scroll) */}
      <div className="absolute bottom-8 left-[48.7%] animate-float">
        <ChevronDown className="text-primary/50" size={32} />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 rounded-full bg-accent/5 blur-3xl" />
    </section>
  );
};

export default Hero;
