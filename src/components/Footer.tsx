const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground font-body text-sm">
          © {new Date().getFullYear()}. Bianca Andrade Galvão. Todos os direitos reservados.
        </p>
        <p className="text-muted-foreground/50 font-body text-xs mt-2">
          Desenvolvido com React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
