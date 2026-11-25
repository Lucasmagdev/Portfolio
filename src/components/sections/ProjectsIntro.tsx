import { Info } from "lucide-react";
import { Section } from "@/components/Section";

export function ProjectsIntro() {
  return (
    <Section id="projetos" index="02" eyebrow="Seleção" title="principais projetos">
      <div className="flex items-start gap-3 border border-line bg-panel p-5 max-w-2xl">
        <Info size={16} className="text-primary shrink-0 mt-0.5" aria-hidden />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Estes são os <span className="text-foreground">principais projetos</span>, e não todos os que desenvolvi.
        </p>
      </div>
    </Section>
  );
}
