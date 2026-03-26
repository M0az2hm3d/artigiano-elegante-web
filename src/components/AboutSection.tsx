import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const strengths = [
  "Materiali di prima qualità selezionati",
  "Lavorazioni certificate a regola d'arte",
  "Puntualità garantita nei tempi di consegna",
  "Preventivi trasparenti e senza sorprese",
];

const AboutSection = () => {
  return (
    <section id="chi-siamo" className="section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Chi Siamo</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
              Artigiani con <span className="gold-gradient-text">Passione</span>
            </h2>
            <div className="gold-line w-16 mb-8" />
            <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed mb-6">
              Siamo artigiani con oltre <strong className="text-foreground">20 anni di esperienza</strong> nel settore edilizio,
              guadagnando la fiducia di centinaia di clienti in tutta la Lombardia.
            </p>
            <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed mb-8">
              Ogni progetto per noi è un'opera d'arte. Dalla scelta dei materiali alla posa finale,
              curiamo ogni dettaglio con la dedizione che solo un vero artigiano italiano può offrire.
            </p>

            <ul className="space-y-3">
              {strengths.map((s) => (
                <li key={s} className="flex items-center gap-3 font-body text-foreground/80">
                  <CheckCircle className="text-primary shrink-0" size={18} />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — big number display */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { num: "+20", desc: "Anni di esperienza" },
              { num: "∞", desc: "Passione artigianale" },
            ].map((item) => (
              <div key={item.desc} className="glass-card p-8 text-center hover:border-primary/40 transition-colors duration-500">
                <p className="font-display text-4xl md:text-5xl font-bold gold-gradient-text mb-2">{item.num}</p>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
