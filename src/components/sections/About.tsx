import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { experiences } from "@/data/portfolio";

export function About() {
  return (
    <Section id="sobre" eyebrow="Sobre mim" title={<>Engenharia de sistemas <span className="text-gradient-primary">com visão de produto</span></>}>
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-orange-500/20" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center p-8">
                <div className="mx-auto h-32 w-32 rounded-full bg-gradient-primary grid place-items-center text-5xl font-display font-bold shadow-[0_0_60px_oklch(0.58_0.22_27/0.6)]">
                  LE
                </div>
                <div className="mt-6 font-display text-xl font-semibold">Lucas Magalhães</div>
                <div className="text-sm text-muted-foreground mt-1">Belo Horizonte · MG</div>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Building systems
                </div>
              </div>
            </div>
            <div className="absolute -bottom-px inset-x-0 h-32 bg-gradient-to-t from-[#080B12] to-transparent" />
          </div>
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl -z-10" />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
          >
            <p>
              Sou <span className="text-white font-medium">Analista de Sistemas Full Stack</span> atuando no desenvolvimento de soluções corporativas, automações e transformação digital.
            </p>
            <p>
              Tenho experiência com <span className="text-white">React, Node.js, TypeScript, infraestrutura Linux, VPS, integrações</span> e construção de sistemas internos que rodam em produção.
            </p>
            <p>
              Acredito em código limpo, decisões de arquitetura sustentáveis e em resolver problemas reais de negócio com tecnologia.
            </p>
          </motion.div>

          <div className="mt-10 relative">
            <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
            <ul className="space-y-6">
              {experiences.map((e, i) => (
                <motion.li
                  key={e.role}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 h-8 w-8 rounded-full bg-gradient-primary grid place-items-center shadow-[0_0_20px_oklch(0.58_0.22_27/0.6)]">
                    <e.icon size={14} className="text-white" />
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-semibold text-white">{e.role}</span>
                    <span className="text-xs font-mono text-primary">{e.period}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">{e.company}</div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
