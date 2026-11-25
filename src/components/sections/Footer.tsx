import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/portfolio";

const contacts = [
  { label: "whatsapp", href: socials.whatsapp },
  { label: "email", href: socials.email },
  { label: "linkedin", href: socials.linkedin },
  { label: "github", href: socials.github },
];

export function Footer() {
  return (
    <footer id="contato" className="relative border-t border-line scroll-mt-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-end">
        <h2 className="font-pixel text-5xl md:text-7xl leading-[1.05] lowercase">
          tem um<br />projeto<br />em mente<span className="text-primary animate-blink">?</span>
        </h2>
        <div>
          <a
            href={socials.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-lg font-bold link-underline hover:text-primary transition-colors"
          >
            VAMOS CONVERSAR <ArrowUpRight size={18} />
          </a>
          <ul className="mt-10 border-t border-line">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center justify-between py-3 border-b border-line text-xs uppercase hover:text-primary hover:pl-2 transition-all"
                >
                  {c.label}
                  <ArrowUpRight size={13} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-5 flex flex-col sm:flex-row justify-between gap-2 text-[11px] uppercase text-foreground/50">
          <span>© {new Date().getFullYear()} Lucas Magalhães</span>
          <span>Belo Horizonte — MG</span>
        </div>
      </div>
    </footer>
  );
}
