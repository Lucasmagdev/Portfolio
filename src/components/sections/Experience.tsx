import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";
import { experiences } from "@/data/portfolio";

export function Experience() {
  return (
    <Section id="experiencia" index="03" eyebrow="Trajetória" title="experiência">
      <Rows
        rows={experiences.map((e) => ({
          title: e.role,
          subtitle: e.company,
          period: e.period,
          bullets: e.bullets,
        }))}
      />
    </Section>
  );
}
