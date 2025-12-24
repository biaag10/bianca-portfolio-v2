interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2025.2 - Atualmente",
    title: "Estágio",
    company: "SENAI CIMATEC",
    description: "Atuação na automação e aprimoramento dos processos de desenvolvimento, teste e deploy de software. Suporte na implementação e manutenção de pipelines de CI/CD. Pesquisa e teste de novas tecnologias e ferramentas para melhorar os processos de desenvolvimento e operação. Documentação de configurações, procedimentos e boas práticas.",
  },
  {
    year: "2024.2 - 2025.1",
    title: "Estágio",
    company: "NG7 Consultoria",
    description: "Atuação no desenvolvimento de um sistema de agendamento full stack com API do Google Calendar. Acompanhamento de todo o ciclo: desde a prototipação, desenvolvimento, testes e validação até o deploy.",
  },
  {
    year: "2023.2 - 2024.2",
    title: "Iniciação Científica",
    company: "CNPq",
    description: "Desenvolvimento de um modelo computacional de uma usina híbrida de geração de energia elétrica, composta por uma fonte solar e eólica com um sistema de armazenamento de energia.",
  },
  {
    year: "2022.2 - 2023.2",
    title: "Iniciação Científica",
    company: "FAPESB",
    description: "Desenvolvimento de um modelo computacional de uma planta híbrida de geração de energia elétrica, composta por uma fonte solar e eólica",
  },
  {
    year: "2022.2 - 2025.2",
    title: "Empresa Júnior",
    company: "CIMATEC Jr.",
    description: "Projetista, Coordenadora de Projeto e Gerente do Núcleo de Computação.",
  },
  {
    year: "2022.1 - Atualmente",
    title: "Engenharia de Computação",
    company: "SENAI CIMATEC",
    description: "Início da da graduação em Engenharia de Computação.",
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16 glow-text text-primary">
          TIMELINE PROFISSIONAL
        </h2>

        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/30" />

          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Content */}
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                }`}
              >
                <div className="glass-card p-6 rounded-lg hover:animate-pulse-glow transition-all duration-300">
                  <span className="text-primary font-display font-bold text-xl">
                    {item.year}
                  </span>
                  <h3 className="text-foreground font-display font-semibold text-lg mt-2">
                    {item.title}
                  </h3>
                  <p className="text-accent font-body text-sm mt-1">
                    {item.company}
                  </p>
                  <p className="text-muted-foreground font-body text-sm mt-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Center dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-box z-10" />

              {/* Empty space for alternating layout */}
              <div className="w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
