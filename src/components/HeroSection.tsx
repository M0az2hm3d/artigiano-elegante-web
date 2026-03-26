import { motion } from "framer-motion";
import { ArrowRight, Award, Building2, Calendar } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Lavori edili di alta qualità" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, hsla(0,0%,0%,0.65) 0%, hsla(0,0%,0%,0.5) 50%, hsla(0,0%,7%,1) 100%)" }} />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-6">
            Eccellenza Artigianale Italiana
          </p>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-foreground">
            Lavori Edili di Alta Qualità
            <br />
            <span className="gold-gradient-text">Precisione e Affidabilità</span>
          </h1>
          <p className="font-body text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Specialisti in piastrelle, marmo, cartongesso e ristrutturazioni.
            <br className="hidden md:block" />
            Trasformiamo i vostri spazi con maestria artigianale.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-sm text-base font-semibold tracking-wide hover:brightness-110 transition-all duration-300 hover:gap-3"
            >
              Richiedi un Preventivo
              <ArrowRight size={18} />
            </a>
            <a
              href="#progetti"
              className="inline-flex items-center gap-2 border border-foreground/30 text-foreground/90 px-8 py-4 rounded-sm text-base font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
            >
              Scopri i Nostri Lavori
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center"
        >
          <div className="text-center glass-card px-10 py-6">
            <Calendar className="mx-auto mb-2 text-primary" size={26} />
            <p className="font-display text-3xl md:text-4xl font-bold gold-gradient-text">+20</p>
            <p className="font-body text-sm text-muted-foreground">Anni di Esperienza</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
