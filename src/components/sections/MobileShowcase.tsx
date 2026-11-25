import { Section } from "@/components/Section";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { FeatureList, InfoBlock, TagList } from "@/components/ProjectParts";

const features = [
  "Diário de obras digital",
  "Pontos e comunicados internos",
  "Registro de fatos observados",
  "Painel administrativo web",
  "Indicação de obras e oportunidades",
  "Cursos e provas integrados",
];

const stack = ["React", "PWA", "Node.js", "MySQL", "Linux", "Express"];

export function MobileShowcase() {
  return (
    <Section id="app-gontijo" index="P03" eyebrow="Mobile PWA + Admin Web" title="app gontijo fundações">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-16">
        <PhoneFrame src="/app-gontijo.jpg" alt="App mobile" />
        <BrowserFrame url="app.gontijo.com.br/admin" src="/appgontijoweb.png" alt="Painel administrativo" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Aplicativo PWA para a equipe operacional da Gontijo Fundações — substitui processos manuais por fluxos
            digitais acessíveis de qualquer celular, com painel administrativo web completo.
          </p>
          <FeatureList items={features} />
        </div>
        <div className="flex flex-col gap-4">
          <InfoBlock title="Mobile PWA">
            Interface otimizada para celular. Funciona offline, instalável como app nativo. Usado diariamente pelos
            colaboradores em campo.
          </InfoBlock>
          <InfoBlock title="Admin Web">
            Painel administrativo completo para gestores: visualização de diários, relatórios, controle de usuários e
            configurações do sistema.
          </InfoBlock>
          <TagList items={stack} />
        </div>
      </div>
    </Section>
  );
}
