import { motion } from "framer-motion";
import { heroTechCards } from "@/data/portfolio";

export function HeroOrb() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* glowing orb */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[18%] rounded-full bg-gradient-to-br from-red-500/40 via-red-600/20 to-orange-500/30 blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[28%] rounded-full bg-gradient-to-br from-red-500 to-red-700 opacity-80 shadow-[0_0_120px_40px_rgba(220,38,38,0.5)]"
      />
      <div className="absolute inset-[34%] rounded-full bg-[#080B12] border border-white/10" />
      <div className="absolute inset-[34%] rounded-full bg-grid opacity-30" />

      {/* orbiting rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[10%] rounded-full border border-dashed border-white/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-white/5"
      />

      {/* floating tech cards */}
      {heroTechCards.map((t, i) => {
        const angle = (i / heroTechCards.length) * Math.PI * 2;
        const radius = 46; // percent
        const x = 50 + Math.cos(angle) * radius;
        const y = 50 + Math.sin(angle) * radius;
        return (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
            transition={{
              opacity: { delay: 0.1 * i, duration: 0.6 },
              scale: { delay: 0.1 * i, duration: 0.6 },
              y: { duration: 3 + i * 0.3, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ left: `${x}%`, top: `${y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
          >
            <div className={`glass-card rounded-xl px-3 py-1.5 text-xs font-mono whitespace-nowrap bg-gradient-to-br ${t.color} hover:scale-110 transition-transform`}>
              {t.name}
            </div>
          </motion.div>
        );
      })}

    </div>
  );
}
