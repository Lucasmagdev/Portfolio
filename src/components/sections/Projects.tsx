import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";

function TiltCard({ project }: { project: typeof projects[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-50, 50], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-50, 50], [-8, 8]), { stiffness: 200, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className="group relative glass-card rounded-3xl p-7 overflow-hidden h-full flex flex-col"
    >
      <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-br ${project.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity`} />
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />

      <div className="relative flex items-start justify-between mb-5">
        <div className="h-12 w-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-[0_0_24px_oklch(0.58_0.22_27/0.5)]">
          <project.icon size={20} className="text-white" />
        </div>
        <span className="px-2.5 py-1 rounded-full glass text-[10px] font-mono uppercase tracking-widest text-primary">
          {project.tag}
        </span>
      </div>

      <h3 className="relative font-display text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
      <p className="relative text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

      <ul className="relative space-y-1.5 mb-6">
        {project.features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-white/80">
            <Check size={14} className="text-primary shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-center justify-between pt-5 border-t border-white/5">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span key={s} className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[10px] font-mono text-white/70">{s}</span>
          ))}
        </div>
        <button className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-white transition-colors">
          Visualizar <ArrowUpRight size={14} />
        </button>
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos selecionados"
      title={<>Sistemas em produção, <span className="text-gradient-primary">não apenas demos</span></>}
      description="Uma seleção de projetos corporativos, produtos SaaS e automações que entreguei nos últimos anos."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <TiltCard project={p} />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
