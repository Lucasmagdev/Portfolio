import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Particles } from "@/components/Particles";
import { socials } from "@/data/portfolio";

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
          >
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-mono uppercase tracking-[0.2em] mb-6 hover:bg-white/10 transition-all"
            >
              <MessageCircle size={12} className="text-emerald-400" />
              Orçamentos via WhatsApp
            </a>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-gradient-primary">Lucas Magalhães</span>
          </h1>

          <div className="mt-3 space-y-0.5">
            <p className="text-xl sm:text-2xl font-semibold text-white/80">Analista de Sistemas e Inovação Jr</p>
            <p className="text-lg sm:text-xl text-white/50 font-medium">Full Stack Developer</p>
          </div>

          <div className="mt-6 space-y-1 text-muted-foreground text-base md:text-lg">
            <p>Construção de sistemas corporativos, automações e produtos SaaS.</p>
          </div>

          <p className="mt-6 text-muted-foreground max-w-xl leading-relaxed">
            Atuo criando aplicações web completas, integrações, soluções operacionais e produtos digitais com foco em eficiência, arquitetura e inovação.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <a
              href={socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-primary font-semibold text-white shadow-[0_0_30px_oklch(0.58_0.22_27/0.4)] hover:shadow-[0_0_50px_oklch(0.58_0.22_27/0.7)] transition-all"
            >
              Falar no WhatsApp
            </a>
            <a
              href="#projetos"
              className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-white transition-colors"
            >
              Ver projetos
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-1">
            <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all">
              <Github size={15} /> GitHub
            </a>
            <span className="text-white/10">·</span>
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all">
              <Linkedin size={15} /> LinkedIn
            </a>
            <span className="text-white/10">·</span>
            <a href={socials.email} className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all">
              <Mail size={15} /> Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative hidden lg:flex justify-center lg:justify-end"
        >
          {/* glow */}
          <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px] scale-75" />

          {/* photo */}
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px]">
            {/* spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-8px] rounded-full border border-dashed border-primary/30"
            />
            {/* static ring */}
            <div className="absolute inset-[-16px] rounded-full border border-white/5" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_60px_oklch(0.58_0.22_27/0.35)]">
              <img
                src="/lucas.png"
                alt="Lucas Estevam"
                className="w-full h-full object-cover object-top"
              />
              {/* subtle vignette */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_-60px_80px_rgba(8,11,18,0.5)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
