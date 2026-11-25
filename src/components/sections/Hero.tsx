import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { socials } from "@/data/portfolio";

const featured = [
  { title: "RotaGestão", tag: "gestão · logística", src: "/rotagestao.jpg", href: "#rotagestao" },
  { title: "Codexy Agents", tag: "IA · open source", src: "/codexy.jpg", href: "#codexy" },
  { title: "App Gontijo", tag: "PWA · admin web", src: "/appgontijoweb.png", href: "#app-gontijo" },
  { title: "DoctorChatBot", tag: "SaaS · IA", src: "/doctorchatbot.jpg", href: "#doctorchatbot" },
  { title: "Imperial Flow Gold", tag: "e-commerce", src: "/imperial-web.jpg", href: "#imperial" },
];

function FeaturedProject() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % featured.length), 4500);
    return () => clearInterval(t);
  }, []);

  const p = featured[i];

  return (
    <div className="w-full max-w-[640px]">
      <div className="label mb-4">projeto em destaque</div>
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="font-pixel text-3xl md:text-4xl uppercase leading-none">{p.title}</h2>
        <span className="label text-primary flex items-center gap-2 shrink-0">
          <span className="h-1.5 w-1.5 bg-primary" />
          {p.tag}
        </span>
      </div>
      <a href={p.href} className="block relative border border-border bg-panel aspect-[16/10] overflow-hidden group stripes">
        <AnimatePresence mode="wait">
          <motion.img
            key={p.src}
            src={p.src}
            alt={p.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0 w-full h-full object-cover object-left-top"
          />
        </AnimatePresence>
        <span className="absolute top-3 right-3 h-8 w-8 grid place-items-center bg-background/80 border border-border group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
          <ArrowUpRight size={14} />
        </span>
      </a>
      <div className="mt-4 flex items-center gap-2" role="tablist" aria-label="Projetos em destaque">
        {featured.map((f, n) => (
          <button
            key={f.title}
            onClick={() => setI(n)}
            aria-label={f.title}
            aria-selected={n === i}
            role="tab"
            className={`h-1 flex-1 transition-colors ${n === i ? "bg-primary" : "bg-foreground/20 hover:bg-foreground/40"}`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative pt-16 min-h-screen flex flex-col">
      <div className="flex-1 mx-auto w-full max-w-[1440px] grid lg:grid-cols-2 lg:border-x border-line">
        {/* left */}
        <div className="relative flex flex-col justify-between px-6 md:px-16 py-12 lg:py-16 lg:border-r border-line min-h-[560px]">
          {/* Behance-style meta row */}
          <div className="flex justify-between gap-6 text-[11px] italic text-foreground/60">
            <div>
              <div>Líder de Sistemas e Inovação</div>
              <div className="not-italic text-foreground/40">Gontijo Fundações</div>
            </div>
            <div className="text-right">
              <div>Full Stack Dev</div>
              <div className="not-italic text-foreground/40">Belo Horizonte, MG</div>
            </div>
          </div>

          <div className="py-12">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-pixel text-[clamp(3rem,8vw,6.25rem)] leading-[0.95] lowercase"
            >
              full-stack
              <br />
              developer
              <span className="text-primary animate-blink">_</span>
            </motion.h1>
            <p className="mt-8 max-w-md text-sm text-muted-foreground leading-relaxed">
              Lucas Magalhães. Lidero a área de sistemas e inovação da Gontijo Fundações. Trabalho principalmente com
              Node.js, React e PostgreSQL, sempre perto da operação.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold hover:bg-primary-hover transition-colors"
              >
                falar no whatsapp <ArrowUpRight size={14} />
              </a>
              <a href="#projetos" className="inline-flex items-center gap-2 text-xs font-bold link-underline hover:text-primary transition-colors">
                ver projetos <ArrowDown size={13} />
              </a>
            </div>
          </div>

          <div>
            <div className="border-t border-line pt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase">
              <span className="flex items-center gap-2 text-primary font-bold">
                <span className="h-1.5 w-1.5 bg-primary animate-blink" />
                disponível para projetos
              </span>
              <span className="text-foreground/20">|</span>
              <span className="text-foreground/50">UTC −3</span>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="relative flex items-center justify-center px-6 md:px-16 py-12 lg:py-16 border-t lg:border-t-0 border-line">
          <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" aria-hidden />
          <div className="relative w-full flex justify-center">
            <FeaturedProject />
          </div>
        </div>
      </div>

      {/* marquee strip */}
      <div className="border-y border-line overflow-hidden" aria-hidden>
        <div className="flex w-max animate-marquee py-3 text-[11px] uppercase text-foreground/50">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {["Node.js", "NestJS", "React", "Tailwind", "PostgreSQL", "Redis", "RabbitMQ", "Docker", "AWS", "Microsoft 365 / Azure", "Microsserviços"].map((t) => (
                <span key={`${k}-${t}`} className="flex items-center">
                  <span className="px-6">{t}</span>
                  <span className="text-primary">■</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
