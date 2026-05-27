import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { stackCategories } from "@/data/portfolio";

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack técnica"
      title={<>Ferramentas que uso para <span className="text-gradient-primary">construir produtos</span></>}
      description="Frontend moderno, backend robusto, infraestrutura confiável. Stack pensada para entregar em produção."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stackCategories.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative glass-card rounded-2xl p-6 overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-transparent -z-10" />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 rounded-xl bg-gradient-primary grid place-items-center shadow-[0_0_20px_oklch(0.58_0.22_27/0.4)]">
                <cat.icon size={18} className="text-white" />
              </div>
              <h3 className="font-display font-semibold text-lg">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((it) => (
                <span
                  key={it}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-white/80 hover:bg-primary/10 hover:border-primary/30 hover:text-white transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
