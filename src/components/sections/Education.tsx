import { Section } from "@/components/Section";
import { Rows } from "@/components/Rows";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section id="formacao" index="04" eyebrow="Estudos" title="formação">
      <Rows
        rows={education.map((e) => ({
          title: e.course,
          subtitle: e.school,
          period: e.period,
          description: e.description,
        }))}
      />
    </Section>
  );
}
