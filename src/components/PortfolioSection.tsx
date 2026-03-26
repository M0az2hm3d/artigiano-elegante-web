import { motion } from "framer-motion";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";

const projects = [p1, p2, p3];

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
          {projects.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="overflow-hidden rounded-lg aspect-square"
            >
              <img
                src={img}
                alt={`Progetto ${i + 1}`}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
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
