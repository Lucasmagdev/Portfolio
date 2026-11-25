import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "@/components/Section";
import { BrowserFrame } from "@/components/Frames";
import { FeatureList } from "@/components/ProjectParts";

const features = [
  "Times de 6 agentes paralelos (Tech + Marketing)",
  "Streaming em tempo real via SSE",
  "Síntese executiva combinando todas respostas",
  "Contexto de repositório Git injetado nos prompts",
  "Histórico de runs + memória de projeto",
  "Autenticação cookie-based",
];

const stack = [
  { label: "Framework", value: "Next.js 13.5" },
  { label: "Linguagem", value: "TypeScript" },
  { label: "Estilo", value: "Tailwind + Radix UI" },
  { label: "Animação", value: "Framer Motion" },
  { label: "LLM", value: "Ollama (qwen2.5:7b)" },
  { label: "Streaming", value: "SSE" },
  { label: "Deploy", value: "Netlify" },
  { label: "Testes", value: "Vitest" },
];

export function CodexyShowcase() {
  return (
    <Section id="codexy" index="P02" eyebrow="IA · Agentes · Open Source" title="codexy agents">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <BrowserFrame url="codexy-agents · devroom1921" src="/codexy.jpg" alt="Codexy Agents" aspect="aspect-[16/9]" />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Centro de operações de IA com times de agentes paralelos. Orquestra múltiplos agentes respondendo à mesma
            tarefa simultaneamente — com streaming em tempo real e síntese executiva.
          </p>
          <FeatureList items={features} />
          <a
            href="https://github.com/Lucasmagdev/devroom1921"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 border border-border text-xs font-bold hover:border-primary hover:text-primary transition-colors"
          >
            <Github size={14} /> repositório
          </a>
        </div>

        <div className="border border-line bg-panel">
          <div className="px-5 py-3 border-b border-line label text-primary">stack técnica</div>
          <div className="divide-y divide-line">
            {stack.map((s) => (
              <div key={s.label} className="flex items-center justify-between px-5 py-3 text-xs">
                <span className="text-muted-foreground">{s.label}</span>
                <span className="text-foreground/90">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
