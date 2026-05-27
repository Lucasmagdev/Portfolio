import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  align = "center",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <section id={id} className="relative py-24 md:py-32 px-6">
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`mb-14 md:mb-20 ${align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}`}
          >
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-mono uppercase tracking-[0.2em] text-primary/90 mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
