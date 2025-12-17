interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Developer",
    company: "Tech Company",
    description: "Liderança técnica em projetos de alta complexidade com React e Node.js.",
  },
  {
    year: "2022",
    title: "Full Stack Developer",
    company: "Startup XYZ",
    description: "Desenvolvimento de aplicações web escaláveis e APIs robustas.",
  },
  {
    year: "2020",
    title: "Front-end Developer",
    company: "Agency Digital",
    description: "Criação de interfaces modernas e responsivas com foco em UX.",
  },
  {
    year: "2018",
    title: "Junior Developer",
    company: "Software House",
    description: "Início da jornada profissional, aprendizado intensivo em desenvolvimento web.",
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
