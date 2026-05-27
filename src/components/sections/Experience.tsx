import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title={<span className="text-gradient-primary">Experiência</span>}
    >
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
        <ul className="space-y-10">
          {experiences.map((e, i) => {
            const left = i % 2 === 0;
            return (
              <motion.li
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${left ? "" : "md:[&>*:first-child]:order-2"}`}
              >
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 h-8 w-8 rounded-full bg-gradient-primary grid place-items-center shadow-[0_0_24px_oklch(0.58_0.22_27/0.6)] z-10">
                  <e.icon size={14} className="text-white" />
                </div>

                <div className={`pl-14 md:pl-0 ${left ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="inline-flex px-2.5 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest text-primary mb-2">
                    {e.period}
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold">{e.role}</h3>
                  <div className="text-sm text-muted-foreground mt-0.5">{e.company}</div>
                </div>
                <div className={`pl-14 md:pl-0 mt-2 md:mt-0 ${left ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="glass-card rounded-2xl p-5 text-sm text-muted-foreground leading-relaxed">
                    {e.description}
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
