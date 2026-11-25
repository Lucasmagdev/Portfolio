import { Section } from "@/components/Section";
import { BrowserFrame, PhoneFrame } from "@/components/Frames";
import { FeatureList, InfoBlock, TagList } from "@/components/ProjectParts";

const features = [
  "Catálogo público de carnes + carrinho + checkout",
  "Painel admin: pedidos, clientes, produtos, KPIs",
  "Autenticação por papel (admin / cliente)",
  "Integração WhatsApp via Z-API por mudança de status",
  "Geração de documentos PDF de pedidos",
  "Calculadora de churrasco",
];

const stack = ["React 18", "TypeScript", "Supabase", "TanStack Query", "Tailwind", "shadcn/ui", "Z-API", "jsPDF"];

export function ImperialShowcase() {
  return (
    <Section id="imperial" index="P05" eyebrow="E-commerce · Enterprise" title="imperial flow gold">
      <div className="flex flex-col md:flex-row items-center md:items-end gap-6 mb-16">
        <PhoneFrame src="/imperial.jpg" alt="Imperial mobile" />
        <BrowserFrame url="imperialflow.com.br/admin" src="/imperial-web.jpg" alt="Imperial admin web" />
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sistema web completo para açougue e distribuidora de carnes. Área pública para clientes com catálogo,
            carrinho e checkout — painel admin com pedidos, clientes, produtos e KPIs.
          </p>
          <FeatureList items={features} />
        </div>
        <div className="flex flex-col gap-4">
          <InfoBlock title="App Mobile">
            Interface responsiva otimizada para celular. Clientes acessam o catálogo, montam carrinho e finalizam
            pedidos diretamente pelo smartphone.
          </InfoBlock>
          <InfoBlock title="Painel Admin">
            Dashboard com KPIs, gestão completa de pedidos, clientes e produtos, upload de fotos e integração WhatsApp
            para notificações automáticas.
          </InfoBlock>
          <TagList items={stack} />
        </div>
      </div>
    </Section>
  );
}
