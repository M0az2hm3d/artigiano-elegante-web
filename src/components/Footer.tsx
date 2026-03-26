const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-10">
      <div className="container mx-auto px-4 text-center">
        <p className="font-display text-xl font-bold gold-gradient-text mb-2">ELABD EDILE SRL</p>
        <p className="font-body text-sm text-muted-foreground mb-1">
          P.IVA 02971400185 — Corso Giuseppe Mazzini 23, Mortara (PV)
        </p>
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} ELABD EDILE SRL. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
