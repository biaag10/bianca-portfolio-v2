import { useEffect, useState } from "react";

interface StarWarsIntroProps {
  onComplete: () => void;
}

const StarWarsIntro = ({ onComplete }: StarWarsIntroProps) => {
  const [showCrawl, setShowCrawl] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCrawl(true), 500);
    const timer2 = setTimeout(() => onComplete(), 8000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center overflow-hidden">
      {/* Initial title */}
      <div
        className={`absolute text-center transition-all duration-1000 ${
          showCrawl ? "opacity-0 scale-150" : "opacity-100 scale-100"
        }`}
      >
        <p className="text-primary text-lg tracking-[0.5em] mb-4 font-body">
          HÁ MUITO CÓDIGO ATRÁS...
        </p>
      </div>

      {/* Star Wars crawl */}
      <div
        className={`perspective-container w-full h-full absolute transition-opacity duration-1000 ${
          showCrawl ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="star-wars-text absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-2xl text-center">
          <h1 className="text-primary text-4xl md:text-6xl font-display font-bold mb-8 glow-text">
            PORTFÓLIO
          </h1>
          <div className="text-foreground/90 text-lg md:text-xl leading-relaxed space-y-6 font-body">
            <p>
              Em uma galáxia de códigos e inovação, um desenvolvedor emergiu das
              profundezas do universo digital...
            </p>
            <p>
              Armado com TypeScript, React e determinação inabalável, ele
              embarcou em uma jornada épica através de frameworks e paradigmas.
            </p>
            <p>
              Cada projeto, uma nova aventura. Cada linha de código, um passo em
              direção ao futuro da tecnologia.
            </p>
            <p className="text-primary font-semibold">
              Esta é a história de transformação digital...
            </p>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
      >
        Pular intro →
      </button>
    </div>
  );
};

export default StarWarsIntro;
