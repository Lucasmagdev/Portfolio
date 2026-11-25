import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Section";
import { BrowserFrame } from "@/components/Frames";
import { FeatureList, TagList } from "@/components/ProjectParts";

const features = [
  "Agenda inteligente automatizada",
  "Chatbot via WhatsApp",
  "Confirmação e cancelamento automático",
  "Gestão de pacientes e histórico",
  "Notificações e lembretes",
  "Painel administrativo para clínicas",
];

const stack = ["React", "Node.js", "WhatsApp API", "MySQL", "IA", "Linux"];

export function DoctorShowcase() {
  return (
    <Section id="doctorchatbot" index="P04" eyebrow="SaaS · IA" title="doctorchatbot">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
            Plataforma SaaS com agenda inteligente para médicos e clínicas. O chatbot automatiza agendamentos,
            confirmações e a comunicação com pacientes — sem intervenção manual.
          </p>
          <FeatureList items={features} />
          <div className="mt-8">
            <TagList items={stack} />
          </div>
          <a
            href="https://doctorchatbot.com.br"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-primary text-primary-foreground text-xs font-bold hover:bg-primary-hover transition-colors"
          >
            ver produto ao vivo <ArrowUpRight size={14} />
          </a>
        </div>

        <BrowserFrame
          url="doctorchatbot.com.br"
          src="/doctorchatbot.jpg"
          alt="DoctorChatBot"
          aspect="aspect-[16/9]"
          href="https://doctorchatbot.com.br"
        />
      </div>
    </Section>
  );
}
