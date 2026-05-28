import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MobileShowcase } from "@/components/sections/MobileShowcase";
import { DoctorShowcase } from "@/components/sections/DoctorShowcase";
import { CodexyShowcase } from "@/components/sections/CodexyShowcase";
import { ImperialShowcase } from "@/components/sections/ImperialShowcase";
import { Experience } from "@/components/sections/Experience";
import { Certifications } from "@/components/sections/Certifications";
import { Education } from "@/components/sections/Education";
import { Differentials } from "@/components/sections/Differentials";
import { Footer } from "@/components/sections/Footer";
import { BackToTop } from "@/components/BackToTop";
import { IntroScreen } from "@/components/IntroScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lucas Magalhães — Analista de Sistemas & Full Stack Developer" },
      { name: "description", content: "Portfólio de Lucas Magalhães — Analista de Sistemas Full Stack. Sistemas corporativos, automações e produtos SaaS com React, Node.js e TypeScript." },
      { property: "og:title", content: "Lucas Magalhães — Full Stack & Sistemas" },
      { property: "og:description", content: "Transformando processos em sistemas. Aplicações web, integrações e produtos SaaS." },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const force = new URLSearchParams(window.location.search).get("introPreview") === "1";
    const seen = sessionStorage.getItem("portfolio-intro-seen") === "1";
    if (force || !seen) setShowIntro(true);
  }, []);

  function handleIntroDone() {
    sessionStorage.setItem("portfolio-intro-seen", "1");
    setShowIntro(false);
  }

  return (
    <>
      {showIntro && <IntroScreen onDone={handleIntroDone} />}
      <div className="relative min-h-screen text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <CodexyShowcase />
          <MobileShowcase />
          <DoctorShowcase />
          <ImperialShowcase />
          <Experience />
          <Education />
          <Differentials />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
