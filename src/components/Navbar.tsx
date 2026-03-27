import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
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
          className="md:hidden text-foreground p-2 -mr-2 touch-manipulation"
          onClick={toggleMenu}
          onTouchEnd={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          aria-label="Menu"
          type="button"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu - no animation for max Android compatibility */}
      {mobileOpen && (
        <div
          className="md:hidden border-t border-border overflow-hidden"
          style={{ backgroundColor: "hsl(var(--background) / 0.98)" }}
        >
          <div className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  closeMenu();
                  window.location.href = l.href;
                }}
                className="text-sm font-body font-medium tracking-widest uppercase text-foreground/80 active:text-primary transition-colors"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;
