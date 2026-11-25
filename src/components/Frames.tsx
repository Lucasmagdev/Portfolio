import { ExternalLink } from "lucide-react";

/** Square terminal-style window around a screenshot. */
export function BrowserFrame({
  url,
  src,
  alt,
  aspect = "aspect-[16/10]",
  href,
}: {
  url: string;
  src: string;
  alt: string;
  aspect?: string;
  href?: string;
}) {
  return (
    <div className="relative w-full border border-border bg-panel">
      <div className="flex items-center gap-3 px-3 py-2 border-b border-line">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 border border-border" />
          <span className="h-2 w-2 border border-border" />
          <span className="h-2 w-2 bg-primary" />
        </div>
        <div className="flex-1 truncate text-[10px] text-muted-foreground">{url}</div>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Abrir ${url}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={12} />
          </a>
        )}
      </div>
      <div className={`${aspect} overflow-hidden stripes`}>
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-left-top" />
      </div>
    </div>
  );
}

/** Slim phone outline around a mobile screenshot. */
export function PhoneFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="w-[200px] shrink-0 border border-border bg-panel p-2">
      <div className="aspect-[9/19.5] overflow-hidden border border-line">
        <img src={src} alt={alt} loading="lazy" className="w-full h-full object-cover object-top" />
      </div>
      <div className="mt-2 mx-auto h-px w-12 bg-border" />
    </div>
  );
}
