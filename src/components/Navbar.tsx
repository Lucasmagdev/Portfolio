import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#sobre", label: "sobre" },
  { href: "#projetos", label: "projetos" },
  { href: "#experiencia", label: "experiência" },
  { href: "#formacao", label: "formação" },
  { href: "#diferencial", label: "tecnologias" },
  { href: "#contato", label: "contato" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-[1440px] h-16 px-6 md:px-16 flex items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Lucas Magalhães — início">
          <span className="font-pixel text-2xl leading-none border border-foreground px-1.5 py-1 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
            LM
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-xs font-bold">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <a
            href="#contato"
            className="text-xs font-bold px-4 py-2 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            vamos conversar
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 border border-border"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line bg-background px-6 py-2 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-bold border-b border-line last:border-0 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
