import { motion } from "framer-motion";
import { Layers, Gem, Grid3X3, TreePine, PaintBucket, Lamp } from "lucide-react";

const services = [
  { icon: Layers, title: "Lavori in Pietra", desc: "Rivestimenti e lavorazioni in pietra naturale per interni ed esterni di prestigio." },
  { icon: Gem, title: "Installazione Marmo", desc: "Posa e lucidatura di marmo pregiato: pavimenti, scale, piani cucina e bagni." },
  { icon: Grid3X3, title: "Posa Piastrelle", desc: "Piastrellature di ogni formato e stile, con finiture precise e durature." },
  { icon: TreePine, title: "Posa Parquet", desc: "Installazione di parquet massello e prefinito con tecnica a spina, fascia e listoni." },
  { icon: PaintBucket, title: "Cartongesso e Decorazioni", desc: "Pareti divisorie, nicchie, velette e lavori decorativi su misura." },
  { icon: Lamp, title: "Controsoffitti", desc: "Controsoffitti moderni con illuminazione LED integrata e design personalizzato." },
];

const ServicesSection = () => {
  return (
    <section id="servizi" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">I Nostri Servizi</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Soluzioni <span className="gold-gradient-text">Complete</span>
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Offriamo una gamma completa di servizi edili artigianali, dalla progettazione alla realizzazione.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-8 group hover:border-primary/50 transition-all duration-500 cursor-default"
            >
              <s.icon className="text-primary mb-5 group-hover:scale-110 transition-transform duration-300" size={36} />
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <a href="#contatti" className="inline-flex items-center text-sm text-primary font-medium hover:underline">
                Richiedi Preventivo →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
