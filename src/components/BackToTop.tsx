import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-40 h-11 w-11 grid place-items-center border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={16} />
    </button>
  );
}
