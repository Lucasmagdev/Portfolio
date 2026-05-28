import {
  Code2, Server, Database, Cloud, Terminal, GitBranch, TestTube,
  Layers, Boxes, Cpu, Workflow, Brain, Briefcase, GraduationCap,
  Award, Network, Sparkles, Building2, ClipboardList, BarChart3,
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
  {
    title: "DoctorChatBot",
    tag: "SaaS · IA",
    description: "Plataforma SaaS com agenda inteligente para médicos. Chatbot automatiza agendamentos, confirmações e comunicação com pacientes via WhatsApp.",
    features: ["Agenda inteligente", "Chatbot IA", "WhatsApp", "Confirmações automáticas", "Multi-clínica"],
    stack: ["React", "Node.js", "IA", "WhatsApp API"],
    accent: "from-blue-600/30 to-cyan-500/20",
    icon: Brain,
    screenshot: "/doctorchatbot.jpg",
    link: "https://doctorchatbot.com.br",
  },
];

export const experiences = [
  {
    role: "Analista de Sistemas Full Stack",
    company: "Gontijo Fundações S.A.",
    period: "Out 2025 — Atual",
    description: "Desenvolvimento full stack com React, Node.js e integrações via APIs. Deploy e gerenciamento em DigitalOcean Droplets. Automações com IA, mapeamento de processos internos, sistemas operacionais e digitalização de rotinas da empresa.",
    icon: Cpu,
  },
  {
    role: "Técnico Administrativo IV",
    company: "Gontijo Fundações S.A.",
    period: "Dez 2023 — Out 2025",
    description: "Análise de dados e relatórios para tomada de decisão. Mapeamento e melhoria de processos (PDCA), indicadores de performance operacional e apoio na digitalização de rotinas internas.",
    icon: Workflow,
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
  {
    school: "PUC Minas",
    course: "Análise e Desenvolvimento de Sistemas",
    period: "2025 — Cursando",
    description: "Graduação em ADS com foco em engenharia de software, arquitetura de sistemas, banco de dados e desenvolvimento full stack.",
    icon: GraduationCap,
  },
  {
    school: "IFMG",
    course: "Bacharelado em Administração",
    period: "2023 — 2027",
    description: "Formação em gestão, finanças, processos e negócios — base sólida para visão estratégica aplicada a produtos e sistemas.",
    icon: GraduationCap,
  },
  {
    school: "SENAI CTTI MG",
    course: "Programação Web",
    period: "2023",
    description: "Curso técnico de programação web: HTML, CSS, JavaScript, lógica de programação, Windows Server e projetos práticos de interface.",
    icon: GraduationCap,
  },
];

export const differentials = [
  { title: "Sistemas Corporativos", desc: "CRM • OS • Inventário • Operações", icon: Building2 },
  { title: "Diário de Obras", desc: "Digitalização e gestão operacional", icon: ClipboardList },
  { title: "Automação", desc: "Fluxos • IA • Integrações", icon: Workflow },
  { title: "Arquitetura", desc: "APIs • Escalabilidade • Domínio", icon: Network },
  { title: "SaaS", desc: "Produtos multiempresa", icon: Sparkles },
  { title: "Dados", desc: "KPIs • Dashboards • Métricas", icon: BarChart3 },
  { title: "Infraestrutura", desc: "Deploy • VPS • Linux", icon: Server },
  { title: "IA Aplicada", desc: "Assistentes • Agentes • Produtividade", icon: Brain },
];

export const socials = {
  github: "https://github.com/Lucasmagdev",
  linkedin: "https://www.linkedin.com/in/lucas-estevam7",
  email: "mailto:lucasemb999@gmail.com",
  whatsapp: "https://wa.me/5531991666106",
};
