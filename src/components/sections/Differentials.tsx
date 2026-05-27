import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { differentials } from "@/data/portfolio";

export function Differentials() {
  return (
    <Section
      id="diferencial"
      eyebrow="Além do código"
      title={<>Tecnologia conectada a <span className="text-gradient-primary">produto e negócio</span></>}
      description="Engenharia é meio, não fim. Penso em arquitetura, automação, IA e infraestrutura como peças de um mesmo sistema: gerar valor."
    >
      <div className="relative">
        {/* connecting lines svg */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#DC2626" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#DC2626" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative">
          {differentials.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative glass-card rounded-2xl p-5 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="mx-auto h-12 w-12 rounded-xl bg-gradient-primary grid place-items-center shadow-[0_0_20px_oklch(0.58_0.22_27/0.4)] mb-4">
                <d.icon size={18} className="text-white" />
              </div>
              <div className="font-display font-semibold">{d.title}</div>
              <div className="text-xs text-muted-foreground mt-1">{d.desc}</div>
              {/* connection dots */}
              <div className="absolute top-1/2 -right-2 h-1.5 w-1.5 rounded-full bg-primary/50 hidden md:block last:hidden" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
