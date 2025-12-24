import { ExternalLink, Github, AlertTriangle } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  githubUrlFront?: string;
  githubUrlBack?: string;
  liveUrl?: string;
  confidential?: boolean;
}

const ProjectCard = ({
  title,
  description,
  tags,
  image,
  githubUrl,
  githubUrlFront,
  githubUrlBack,
  liveUrl,
  confidential,
}: ProjectCardProps) => {
  return (
    <div className="glass-card rounded-lg overflow-hidden group hover:animate-pulse-glow transition-all duration-500 flex flex-col h-full">
      {/* Imagem do projeto ou placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl font-display text-primary/30 group-hover:text-primary/50 transition-colors">
            {"</>"}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground font-body text-sm mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-body rounded-full bg-primary/10 text-primary border border-primary/30"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {confidential ? (
            <div className="flex items-center gap-2 text-amber-400 text-sm font-body">
              <AlertTriangle size={16} />
              Projeto confidencial
            </div>
          ) : (
            <>
            {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  <Github size={16} />
                  Código
                </a>
              )}
              {githubUrlFront && (
                <a
                  href={githubUrlFront}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  <Github size={16} />
                  Front-end
                </a>
              )}
              {githubUrlBack && (
                <a
                  href={githubUrlBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-body"
                >
                  <Github size={16} />
                  Back-end
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm font-body"
                >
                  <ExternalLink size={16} />
                  Demo
                </a>
              )}
            </>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
