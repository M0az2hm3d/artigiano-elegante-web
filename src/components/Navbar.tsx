import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Chi Siamo", href: "#chi-siamo" },
  { label: "Servizi", href: "#servizi" },
  { label: "Progetti", href: "#progetti" },
  { label: "Contatti", href: "#contatti" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <a href="#home" className="font-display text-xl md:text-2xl font-bold tracking-wider gold-gradient-text">
          ELABD EDILE
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-body font-medium tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+393273987877"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 rounded-sm text-sm font-semibold tracking-wide hover:brightness-110 transition"
          >
            <Phone size={14} />
            Chiama Ora
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/98 backdrop-blur-lg border-t border-border"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-body font-medium tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="tel:+393273987877"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm font-semibold"
              >
                <Phone size={14} />
                Chiama Ora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
