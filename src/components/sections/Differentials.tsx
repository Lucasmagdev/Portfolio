import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { differentials } from "@/data/portfolio";

export function Differentials() {
  return (
    <Section id="diferencial" index="06" eyebrow="Áreas de atuação" title="tecnologias">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-line">
        {differentials.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="group relative p-6 min-h-[200px] flex flex-col justify-between border-r border-b border-line hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <div className="flex items-start justify-between">
              <span className="text-xs tabular-nums text-foreground/40 group-hover:text-primary-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </span>
              <d.icon size={18} className="text-primary group-hover:text-primary-foreground" />
            </div>
            <div>
              <div className="font-pixel text-2xl leading-tight">{d.title}</div>
              <div className="mt-2 text-xs text-muted-foreground group-hover:text-primary-foreground/70">{d.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
