import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:seu@email.com", label: "Email" },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text text-primary">
          VAMOS CONECTAR
        </h2>
        <p className="text-muted-foreground font-body mb-12 max-w-xl mx-auto">
          Interessado em trabalhar junto? Tem um projeto em mente? Vamos
          conversar sobre como posso ajudar.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:animate-pulse-glow transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </div>

        <a
          href="mailto:seu@email.com"
          className="inline-block px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-display font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          ENVIAR MENSAGEM
        </a>
      </div>
    </section>
  );
};

export default Contact;
