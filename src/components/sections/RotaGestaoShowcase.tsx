import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { BrowserFrame } from "@/components/Frames";
import { FeatureList } from "@/components/ProjectParts";

const features = [
  "Orçamento automático a partir de tabela de preços por cidade",
  "Planejamento de rotas e viagens com capacidade, janelas de horário e custo estimado",
  "Controle de frota e combustível",
  "Faturamento de clientes com recebimento parcial",
  "Contas a pagar",
  "Fechamento de pagamento de motoristas e freelancers",
  "Perfis de acesso, auditoria e backup diário",
];

const stack = [
  { label: "Front-end", value: "React, TypeScript, Vite, Tailwind" },
  { label: "Back-end", value: "Fastify" },
  { label: "Banco de dados", value: "PostgreSQL" },
  { label: "Multiempresa", value: "Isolamento por empresa (RLS)" },
  { label: "Infraestrutura", value: "Docker e Caddy" },
];

export function RotaGestaoShowcase() {
  return (
    <Section id="rotagestao" index="P01" eyebrow="Gestão · Logística" title="rotagestão">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <BrowserFrame
          url="jr-logistica.netlify.app"
          src="/rotagestao.jpg"
          alt="Landing page da JR Logística"
          aspect="aspect-[1440/760]"
          href="https://jr-logistica.netlify.app/"
        />
        <div className="mt-3 label">landing page · JR Logística</div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-foreground/85 text-lg leading-relaxed mb-3">Gestão para transportadora.</p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Sistema web que substitui as planilhas de uma transportadora de rotas recorrentes. Gera orçamento
            automático, planeja rotas e viagens, controla a frota, fatura clientes e fecha o pagamento de motoristas e
            freelancers.
          </p>
          <FeatureList items={features} />
        </div>

        <div className="border border-line bg-panel">
          <div className="px-5 py-3 border-b border-line label text-primary">stack técnica</div>
          <div className="divide-y divide-line">
            {stack.map((s) => (
              <div key={s.label} className="flex items-center justify-between gap-6 px-5 py-3 text-xs">
                <span className="text-muted-foreground shrink-0">{s.label}</span>
                <span className="text-foreground/90 text-right">{s.value}</span>
              </div>
            ))}
          </div>
          <div className="stripes h-24 border-t border-line" aria-hidden />
        </div>
      </div>
    </Section>
  );
}
