import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Particles } from "@/components/Particles";
import { HeroOrb } from "@/components/HeroOrb";
import { Counter } from "@/components/Counter";
import { heroStats, socials } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
      <Particles count={50} />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-[0.2em] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponível para novos projetos
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient">Transformando</span>
            <br />
            <span className="text-gradient-primary">processos</span>{" "}
            <span className="text-gradient">em</span>
            <br />
            <span className="text-gradient">sistemas.</span>
          </h1>

          <div className="mt-6 space-y-1 text-muted-foreground text-base md:text-lg">
            <p className="text-white/90 font-medium">Analista de Sistemas e Inovação Jr · Full Stack Developer</p>
            <p>Construção de sistemas corporativos, automações e produtos SaaS.</p>
          </div>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Atuo criando aplicações web completas, integrações, soluções operacionais e produtos digitais com foco em eficiência, arquitetura e inovação.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary font-medium text-white shadow-[0_0_30px_oklch(0.58_0.22_27/0.4)] hover:shadow-[0_0_50px_oklch(0.58_0.22_27/0.7)] transition-all"
            >
              Ver Projetos
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 transition-all">
              <Github size={16} /> GitHub
            </a>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 transition-all">
              <Linkedin size={16} /> LinkedIn
            </a>
            <a href={socials.email} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 transition-all">
              <Mail size={16} /> Contato
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {heroStats.map((s) => (
              <div key={s.label} className="glass-card rounded-2xl p-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-primary">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <HeroOrb />
        </motion.div>
      </div>
    </section>
  );
}
