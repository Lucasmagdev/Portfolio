import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <Section
      id="certificacoes"
      eyebrow="Certificações"
      title={<>Formação contínua em <span className="text-gradient-primary">tecnologia aplicada</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative glass-card rounded-2xl p-5 flex items-center gap-4 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/15 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="shrink-0 h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-[0_0_20px_oklch(0.58_0.22_27/0.4)]">
              <c.icon size={18} className="text-white" />
            </div>
            <div>
              <div className="font-display font-semibold">{c.title}</div>
              <div className="text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
