import { Section } from "@/components/Section";
import { socials } from "@/data/portfolio";

const facts = [
  { label: "Local", value: "Belo Horizonte, MG" },
  { label: "Empresa atual", value: "Gontijo Fundações S.A." },
  { label: "Na empresa desde", value: "2023" },
  { label: "Telefone", value: "(31) 99166-6106", href: socials.whatsapp },
  { label: "Email", value: "lucasemb999@gmail.com", href: socials.email },
  { label: "LinkedIn", value: "linkedin.com/in/lucas-estevam7", href: socials.linkedin },
  { label: "CNH", value: "Categoria B" },
];

export function About() {
  return (
    <Section id="sobre" index="01" eyebrow="Resumo" title="sobre">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <p className="text-lg leading-relaxed text-foreground/85 max-w-xl">
          Estou na Gontijo Fundações desde 2023. Comecei no administrativo, passei para o desenvolvimento de sistemas e
          hoje lidero a área de sistemas e inovação. Trabalho principalmente com Node.js, React e PostgreSQL, sempre
          perto da operação.
        </p>
        <dl className="border-t border-line">
          {facts.map((f) => (
            <div key={f.label} className="flex items-baseline justify-between gap-6 py-3 border-b border-line text-sm">
              <dt className="label">{f.label}</dt>
              <dd className="text-right">
                {f.href ? (
                  <a
                    href={f.href}
                    target={f.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
