import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

const projects = [
  { img: p1, title: "Bagno in Gres Porcellanato", cat: "Piastrelle" },
  { img: p2, title: "Parquet Spina Italiana", cat: "Parquet" },
  { img: p3, title: "Controsoffitto LED", cat: "Cartongesso" },
  { img: p4, title: "Piano Cucina in Marmo", cat: "Marmo" },
  { img: p5, title: "Rivestimento in Pietra", cat: "Pietra" },
  { img: p6, title: "Soffitto Design Moderno", cat: "Controsoffitti" },
];

const PortfolioSection = () => {
  return (
    <section id="progetti" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            I Nostri <span className="gold-gradient-text">Progetti</span>
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ogni lavoro racconta una storia di precisione, qualità e passione artigianale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/70 transition-all duration-500 flex items-end p-6">
                <div className="translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-primary font-body text-xs tracking-[0.2em] uppercase">{p.cat}</span>
                  <h3 className="font-display text-xl font-semibold text-foreground mt-1">{p.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contatti"
            className="inline-flex items-center gap-2 border border-primary text-primary px-8 py-4 rounded-sm font-semibold text-sm tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Vuoi un risultato così? Contattaci
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
