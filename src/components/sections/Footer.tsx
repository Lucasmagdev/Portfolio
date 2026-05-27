import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="relative px-6 py-8 border-t border-white/5">
      <div className="relative mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Lucasmagdev</span>
        </div>
        <div className="inline-flex items-center gap-2">
          <MapPin size={14} className="text-primary" /> Belo Horizonte — MG
        </div>
      </div>
    </footer>
  );
}
