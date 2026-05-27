import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { socials } from "@/data/portfolio";

export function Footer() {
  return (
    <footer id="contato" className="relative px-6 pt-24 pb-10 border-t border-white/5">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[300px] w-[800px] rounded-full bg-primary/15 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono uppercase tracking-[0.2em] text-primary/90 mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Vamos construir algo
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
          <span className="text-gradient">Construindo sistemas,</span>
          <br />
          <span className="text-gradient-primary">produtos e inovação.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Tem um projeto em mente, uma operação para digitalizar ou um SaaS para tirar do papel? Vamos conversar.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a href={socials.email} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-primary font-medium text-white shadow-[0_0_30px_oklch(0.58_0.22_27/0.5)] hover:shadow-[0_0_50px_oklch(0.58_0.22_27/0.8)] transition-all">
            <Mail size={16} /> contato@lucasestevam.dev
          </a>
          <a href={socials.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 transition-all">
            <Github size={16} /> GitHub
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl glass-card hover:bg-white/5 transition-all">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-primary grid place-items-center font-bold text-xs">LE</div>
            <span>© {new Date().getFullYear()} Lucas Estevam</span>
          </div>
          <div className="inline-flex items-center gap-2">
            <MapPin size={14} className="text-primary" /> Belo Horizonte — MG
          </div>
        </div>
      </div>
    </footer>
  );
}
