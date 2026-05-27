import {
  Code2, Server, Database, Cloud, Terminal, GitBranch, TestTube,
  Layers, Boxes, Cpu, Workflow, Brain, Briefcase, GraduationCap,
  Award, Network, Sparkles,
} from "lucide-react";

export const heroStats = [
  { label: "Projetos", value: 15, suffix: "+" },
  { label: "Stacks", value: 25, suffix: "+" },
  { label: "Anos de experiência", value: 3, suffix: "+" },
];

export const heroTechCards = [
  { name: "React 19", color: "from-cyan-500/20 to-blue-500/20" },
  { name: "Node.js", color: "from-emerald-500/20 to-green-500/20" },
  { name: "TypeScript", color: "from-blue-500/20 to-indigo-500/20" },
  { name: "MySQL", color: "from-orange-500/20 to-amber-500/20" },
  { name: "Linux VPS", color: "from-yellow-500/20 to-orange-500/20" },
  { name: "PM2", color: "from-purple-500/20 to-fuchsia-500/20" },
  { name: "AWS", color: "from-amber-500/20 to-orange-500/20" },
  { name: "Tailwind", color: "from-sky-500/20 to-cyan-500/20" },
];

export const stackCategories = [
  {
    title: "Frontend",
    icon: Layers,
    items: ["React 19", "TypeScript", "Vite", "Tailwind", "TanStack Query", "Zustand", "Axios", "React Router"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express 5", "MySQL", "AWS S3", "PDFKit", "multer", "bcrypt", "xlsx", "node-cron", "ssh2"],
  },
  {
    title: "Infraestrutura",
    icon: Cloud,
    items: ["Linux", "SSH", "PM2", "Deploy manual", "SCP", "MySQL remoto", "GitHub"],
  },
  {
    title: "Testes",
    icon: TestTube,
    items: ["Playwright"],
  },
];

export const projects = [
  {
    title: "Sistema Corporativo de Obras",
    tag: "Enterprise",
    description: "Plataforma interna completa para gestão operacional: diário de obras, medições, fluxos internos, relatórios e controle operacional em tempo real.",
    features: ["Diário de obras", "Medições", "Fluxos internos", "Relatórios", "Controle operacional"],
    stack: ["React", "Node.js", "MySQL", "Linux"],
    accent: "from-red-500/30 to-orange-500/20",
    icon: Briefcase,
  },
  {
    title: "CORTE A CORTE",
    tag: "SaaS Product",
    description: "Plataforma SaaS multi-tenant para barbearias com CRM, agenda inteligente, KPIs em dashboard, financeiro e programa de fidelização.",
    features: ["CRM", "Agenda", "KPIs", "Financeiro", "Fidelização"],
    stack: ["React 19", "TypeScript", "Node", "MySQL"],
    accent: "from-red-600/30 to-rose-500/20",
    icon: Sparkles,
  },
  {
    title: "Automações & Integrações",
    tag: "Automation",
    description: "Ecossistema de automações com WhatsApp via Evolution API, consultas CNPJ, cron jobs programados e pipelines de deploy automatizado.",
    features: ["WhatsApp", "Evolution API", "Consulta CNPJ", "Cron jobs", "Deploy automático"],
    stack: ["Node.js", "Linux", "Cron", "SSH"],
    accent: "from-orange-500/30 to-red-500/20",
    icon: Workflow,
  },
];

export const experiences = [
  {
    role: "Analista de Sistemas e Inovação Jr",
    company: "Gontijo Fundações",
    period: "2025 — Atual",
    description: "Desenvolvimento de sistemas corporativos, automações operacionais e transformação digital. Arquitetura full stack, infraestrutura Linux e integrações.",
    icon: Cpu,
  },
  {
    role: "Técnico Administrativo",
    company: "Gontijo Fundações",
    period: "2023 — 2025",
    description: "Operações administrativas, processos internos e primeiros projetos de automação que abriram caminho para a área de tecnologia.",
    icon: Workflow,
  },
  {
    role: "Auxiliar de Escritório",
    company: "Maurício Imóveis",
    period: "2022 — 2023",
    description: "Rotinas administrativas, controle documental e suporte operacional ao time comercial.",
    icon: Briefcase,
  },
];

export const certifications = [
  { title: "Hackers do Bem", issuer: "SoftEx / MCTI", icon: Award },
  { title: "Cibersegurança", issuer: "Trilha Profissionalizante", icon: Award },
  { title: "Machine Learning", issuer: "Especialização", icon: Brain },
  { title: "Indústria 4.0", issuer: "Tecnologia Aplicada", icon: Cpu },
  { title: "English for IT", issuer: "Comunicação Técnica", icon: Code2 },
  { title: "Programação Web", issuer: "Desenvolvimento Full Stack", icon: Code2 },
];

export const education = [
  { school: "PUC Minas", course: "Análise e Desenvolvimento de Sistemas", icon: GraduationCap },
  { school: "IFMG", course: "Administração", icon: GraduationCap },
  { school: "SENAI", course: "Programação Web", icon: GraduationCap },
];

export const differentials = [
  { title: "Produto", desc: "Visão de produto end-to-end", icon: Boxes },
  { title: "Arquitetura", desc: "Decisões de longo prazo", icon: Network },
  { title: "Automação", desc: "Eficiência operacional", icon: Workflow },
  { title: "IA", desc: "ML aplicado a negócio", icon: Brain },
  { title: "Negócio", desc: "Tecnologia com ROI claro", icon: Briefcase },
  { title: "SaaS", desc: "Multi-tenant, escalável", icon: Sparkles },
  { title: "Infraestrutura", desc: "Linux, VPS, deploy", icon: Server },
  { title: "Processos", desc: "Mapeamento e digitalização", icon: GitBranch },
];

export const socials = {
  github: "https://github.com/lucasestevam",
  linkedin: "https://linkedin.com/in/lucasestevam",
  email: "mailto:contato@lucasestevam.dev",
};
