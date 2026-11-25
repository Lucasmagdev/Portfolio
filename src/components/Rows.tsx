import { motion } from "framer-motion";

export type Row = {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  bullets?: string[];
};

/** Bordered table-style rows: index | title + place | period + description/bullets. */
export function Rows({ rows }: { rows: Row[] }) {
  return (
    <ol className="border-t border-line">
      {rows.map((r, i) => (
        <motion.li
          key={r.title + r.period}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group grid md:grid-cols-[80px_1fr_1.3fr] gap-x-8 gap-y-3 py-8 border-b border-line hover:bg-glass transition-colors"
        >
          <span className="font-pixel text-4xl text-foreground/30 group-hover:text-primary transition-colors leading-none">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-pixel text-2xl leading-tight">{r.title}</h3>
            <div className="mt-2 text-sm text-muted-foreground">{r.subtitle}</div>
          </div>
          <div>
            <div className="label text-primary mb-2">{r.period}</div>
            {r.description && <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>}
            {r.bullets && (
              <ul className="space-y-2">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
