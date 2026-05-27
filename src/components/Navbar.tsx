import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#stack", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${
            scrolled ? "glass-card shadow-2xl" : ""
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="relative h-9 w-9 rounded-xl bg-gradient-primary grid place-items-center font-bold text-white shadow-[0_0_20px_oklch(0.58_0.22_27/0.5)]">
              LE
              <div className="absolute inset-0 rounded-xl bg-primary/40 blur-xl -z-10 group-hover:blur-2xl transition-all" />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-semibold text-sm leading-tight">Lucas Estevam</div>
              <div className="text-[10px] text-muted-foreground font-mono tracking-wider uppercase">Full Stack · Sistemas</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-primary text-sm font-medium hover:shadow-[0_0_24px_oklch(0.58_0.22_27/0.6)] transition-all"
          >
            Vamos conversar
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg glass"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-2 glass-card rounded-2xl p-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
