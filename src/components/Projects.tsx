import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "BICINIC",
    description: "Solução tecnológica que tranforma dados médicos em visualizações claras através de gráficos, para acompanhamento de pacientes.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Excel API", "React Router", "Lucide Icons"],
    image: `${import.meta.env.BASE_URL}projects/biclinic.png`,
    confidential: true,
  },
  {
    title: "RankEat",
    description: "Software de rankeamento de restaurantes de comida.",
    tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "Foursquare API", "Google Geocoding API", "Express", "MongoDB", "JavaScript", "Node.js"],
    image: `${import.meta.env.BASE_URL}projects/rankeat.png`,
    githubUrlFront: "https://github.com/biaag10/RankEat",
    githubUrlBack: "https://github.com/biaag10/backend-rankeat",
    liveUrl: "https://rank-eat.vercel.app",
  },
  {
    title: "Workout Tracker",
    description: "Aplicativo de banco digital com funcionalidades de transferência, pagamentos e gestão financeira.",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrlFront: "https://github.com/biaag10/frontend-workout-tracker",
    githubUrlBack: "https://github.com/biaag10/backend-express-mongodb",
    liveUrl: "https://frontend-workout-tracker.vercel.app",
  },
  {
    title: "Social Media Clone",
    description: "Clone de rede social com feed em tempo real, chat integrado e sistema de notificações.",
    tags: ["Next.js", "Prisma", "WebSocket"],
    githubUrlFront: "#",
    liveUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo utilizando inteligência artificial para textos e imagens.",
    tags: ["Python", "OpenAI", "FastAPI"],
    githubUrlFront: "#",
  },
  {
    title: "Task Management",
    description: "Sistema de gerenciamento de tarefas com Kanban board, colaboração em equipe e integração com calendário.",
    tags: ["Vue.js", "Express", "Socket.io"],
    githubUrlFront: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-4 glow-text text-primary">
          PROJETOS
        </h2>
        <p className="text-muted-foreground font-body text-center mb-16 max-w-2xl mx-auto">
          Uma seleção dos meus trabalhos mais recentes e projetos pessoais
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
