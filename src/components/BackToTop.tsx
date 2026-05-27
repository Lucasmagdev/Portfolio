import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-gradient-primary grid place-items-center shadow-[0_0_30px_oklch(0.58_0.22_27/0.6)] hover:shadow-[0_0_50px_oklch(0.58_0.22_27/0.9)] transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={18} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
