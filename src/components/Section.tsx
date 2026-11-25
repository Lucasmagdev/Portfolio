import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  index?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section id={id} className="relative border-t border-line scroll-mt-16">
      <div className="mx-auto max-w-[1440px] px-6 md:px-16 py-20 md:py-28">
        {(eyebrow || title || description) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className={children ? "mb-12 md:mb-16" : undefined}
          >
            {eyebrow && (
              <div className="label flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-primary" />
                <span>{eyebrow}</span>
                {index && <span className="text-foreground/40">/ {index}</span>}
              </div>
            )}
            {title && (
              <h2 className="font-pixel text-5xl md:text-7xl leading-[1.05] text-foreground">{title}</h2>
            )}
            {description && (
              <p className="mt-6 max-w-2xl text-muted-foreground leading-relaxed">{description}</p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
