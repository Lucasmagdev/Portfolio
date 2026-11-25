import { Section } from "@/components/Section";
import { TagList } from "@/components/ProjectParts";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <Section id="conhecimentos" index="05" eyebrow="Stack" title="conhecimentos técnicos">
      <div className="border-t border-line">
        {skills.map((s) => (
          <div key={s.title} className="grid md:grid-cols-[260px_1fr] gap-4 md:gap-8 py-6 border-b border-line">
            <div className="label text-primary pt-1.5">{s.title}</div>
            <TagList items={s.items} />
          </div>
        ))}
      </div>
    </Section>
  );
}
