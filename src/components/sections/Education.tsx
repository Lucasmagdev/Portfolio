import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="formacao"
      eyebrow="Formação"
      title={<>Base sólida em <span className="text-gradient-primary">computação e gestão</span></>}
    >
      <div className="grid md:grid-cols-3 gap-6">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative glass-card rounded-3xl p-7 overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <div className="h-14 w-14 rounded-2xl bg-gradient-primary grid place-items-center shadow-[0_0_24px_oklch(0.58_0.22_27/0.5)] mb-5">
              <e.icon size={22} className="text-white" />
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Instituição</div>
            <h3 className="font-display text-xl font-bold">{e.school}</h3>
            <div className="text-sm text-muted-foreground mt-2">{e.course}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
