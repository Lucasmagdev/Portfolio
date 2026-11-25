/** Numbered feature list: "01  text" with hairline separators. */
export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="border-t border-line">
      {items.map((f, i) => (
        <li key={f} className="flex items-baseline gap-4 py-3 border-b border-line text-sm text-foreground/80">
          <span className="text-primary text-xs tabular-nums">{String(i + 1).padStart(2, "0")}</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((s) => (
        <span key={s} className="px-2.5 py-1 border border-border bg-glass text-[11px] text-foreground/70">
          {s}
        </span>
      ))}
    </div>
  );
}

export function InfoBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-line bg-panel p-5">
      <div className="label text-primary mb-3">{title}</div>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
