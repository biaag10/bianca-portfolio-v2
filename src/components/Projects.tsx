import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho de compras, pagamentos integrados e painel administrativo.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados em tempo real com gráficos e métricas customizáveis.",
    tags: ["TypeScript", "D3.js", "PostgreSQL"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "App Mobile Banking",
    description: "Aplicativo de banco digital com funcionalidades de transferência, pagamentos e gestão financeira.",
    tags: ["React Native", "Firebase", "Redux"],
    githubUrl: "#",
  },
  {
    title: "Social Media Clone",
    description: "Clone de rede social com feed em tempo real, chat integrado e sistema de notificações.",
    tags: ["Next.js", "Prisma", "WebSocket"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "Ferramenta de geração de conteúdo utilizando inteligência artificial para textos e imagens.",
    tags: ["Python", "OpenAI", "FastAPI"],
    githubUrl: "#",
  },
  {
    title: "Task Management",
    description: "Sistema de gerenciamento de tarefas com Kanban board, colaboração em equipe e integração com calendário.",
    tags: ["Vue.js", "Express", "Socket.io"],
    githubUrl: "#",
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
