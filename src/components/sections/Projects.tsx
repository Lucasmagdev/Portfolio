import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Smartphone, X } from "lucide-react";
import { Section } from "@/components/Section";
import { projects } from "@/data/portfolio";

type Project = typeof projects[number];

function PhoneModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 40 }}
          transition={{ type: "spring", damping: 20, stiffness: 200 }}
          onClick={(e) => e.stopPropagation()}
          className="relative flex flex-col items-center gap-6"
        >
          {/* close */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 z-10 h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 grid place-items-center transition-all"
          >
            <X size={14} />
          </button>

          {/* info */}
          <div className="text-center">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1">{project.tag}</div>
            <h3 className="font-display font-bold text-xl text-white">{project.title}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-xs">{project.description}</p>
          </div>

          {/* phone frame */}
          <div className="relative">
            {/* outer shell */}
            <div className="relative w-[280px] rounded-[42px] bg-[#1a1a1a] p-3 shadow-[0_0_80px_rgba(220,38,38,0.3),inset_0_0_0_1px_rgba(255,255,255,0.08)]">
              {/* notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 h-6 w-24 rounded-full bg-[#0d0d0d] z-10" />
              {/* screen */}
              <div className="relative rounded-[32px] overflow-hidden bg-[#111] aspect-[9/19.5]">
                {"screenshot" in project && project.screenshot ? (
                  <img
                    src={project.screenshot as string}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                    <project.icon size={48} className="text-white/20" strokeWidth={1} />
                  </div>
                )}
              </div>
              {/* home bar */}
              <div className="mt-2 mx-auto h-1 w-20 rounded-full bg-white/20" />
            </div>
          </div>

          {/* stack badges */}
          <div className="flex flex-wrap justify-center gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="px-2.5 py-1 rounded-md bg-white/[0.07] text-[11px] font-mono text-white/60">
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [showModal, setShowModal] = useState(false);
  const isMobile = "mobile" in project && project.mobile;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="group relative rounded-2xl overflow-hidden bg-[#0d1117] border border-white/[0.06] hover:border-white/[0.14] transition-colors cursor-pointer"
        onClick={() => isMobile && setShowModal(true)}
      >
        {/* preview area */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-80`} />
          <div className="absolute inset-0 bg-grid opacity-20" />

          {"screenshot" in project && project.screenshot ? (
            <img
              src={project.screenshot as string}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover object-left-top opacity-60 group-hover:opacity-80 transition-opacity duration-300"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <project.icon size={72} className="text-white/10 group-hover:text-white/20 transition-colors duration-500" strokeWidth={1} />
            </div>
          )}

          {/* hover overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-sm text-white/80 leading-relaxed text-center px-6">
              {isMobile ? "Ver no celular →" : project.description}
            </p>
          </div>

          {/* tag */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5">
            {isMobile && <Smartphone size={11} className="text-primary" />}
            <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/20">
              {project.tag}
            </span>
          </div>

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#0d1117] to-transparent" />
        </div>

        {/* info bar */}
        <div className="px-5 pb-5 pt-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display font-bold text-lg text-white leading-tight">{project.title}</h3>
            {"link" in project && project.link ? (
              <a
                href={project.link as string}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all mt-0.5"
              >
                <ExternalLink size={14} />
              </a>
            ) : (
              <button className="shrink-0 p-1.5 rounded-lg text-white/30 hover:text-white hover:bg-white/5 transition-all mt-0.5">
                {isMobile ? <Smartphone size={14} /> : <ExternalLink size={14} />}
              </button>
            )}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <span key={s} className="px-2 py-0.5 rounded-md bg-white/[0.05] text-[11px] font-mono text-white/50">{s}</span>
            ))}
          </div>
        </div>

        <div className={`absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      </motion.div>

      {showModal && <PhoneModal project={project} onClose={() => setShowModal(false)} />}
    </>
  );
}

export function Projects() {
  return (
    <Section
      id="projetos"
      eyebrow="Projetos selecionados"
      title={<span className="text-gradient-primary">Portfólio</span>}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
