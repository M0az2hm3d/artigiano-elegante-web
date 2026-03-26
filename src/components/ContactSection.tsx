import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ nome: "", email: "", telefono: "", messaggio: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Richiesta preventivo dal sito");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nEmail: ${form.email}\nTelefono: ${form.telefono}\n\n${form.messaggio}`
    );
    window.location.href = `mailto:elabd.edile.srl@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contatti" className="section-padding" style={{ background: "var(--section-gradient)" }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Contatti</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Parliamo del Tuo <span className="gold-gradient-text">Progetto</span>
          </h2>
          <div className="gold-line w-16 mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Contattaci oggi per un preventivo gratuito e senza impegno. Rispondiamo entro 24 ore.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">ELABD EDILE SRL</h3>

            {[
              { icon: Phone, label: "+39 327 398 7877", href: "tel:+393273987877" },
              { icon: Mail, label: "elabd.edile.srl@gmail.com", href: "mailto:elabd.edile.srl@gmail.com" },
              { icon: MapPin, label: "Corso Giuseppe Mazzini 23, Mortara (PV)", href: "https://maps.google.com/?q=Corso+Giuseppe+Mazzini+23+Mortara" },
              { icon: Clock, label: "Lun–Ven: 8:00–18:00 | Sab: 8:00–13:00" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <item.icon className="text-primary mt-1 shrink-0" size={20} />
                <div>
                  {item.href ? (
                    <a href={item.href} className="font-body text-foreground/80 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <span className="font-body text-foreground/80">{item.label}</span>
                  )}
                </div>
              </div>
            ))}

            <p className="font-body text-sm text-muted-foreground mt-4">P.IVA: 02971400185</p>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden border border-border aspect-video">
              <iframe
                title="Sede ELABD EDILE SRL"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.5!2d8.7388!3d45.2536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDE1JzEzLjAiTiA4wrA0NCcyMC4xIkU!5e0!3m2!1sit!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Richiedi un Preventivo Gratuito</h3>
              <p className="font-body text-sm text-muted-foreground mb-4">Compila il form e ti ricontatteremo entro 24 ore.</p>

              {[
                { name: "nome" as const, label: "Nome e Cognome", type: "text" },
                { name: "email" as const, label: "Email", type: "email" },
                { name: "telefono" as const, label: "Telefono", type: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block font-body text-sm text-foreground/70 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={form[field.name]}
                    onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              ))}

              <div>
                <label className="block font-body text-sm text-foreground/70 mb-1">Descrivi il tuo progetto</label>
                <textarea
                  required
                  rows={4}
                  value={form.messaggio}
                  onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-sm px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 rounded-sm font-semibold tracking-wide hover:brightness-110 transition-all duration-300"
              >
                <Send size={16} />
                Invia Richiesta
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
