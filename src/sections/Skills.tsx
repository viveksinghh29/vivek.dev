"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    id: "01",
    title: "Programming Languages",
    description:
      "Python, C++, C, JavaScript, SQL building ML solutions, backend services, automation scripts, data workflows, and scalable applications.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12h8M12 8v8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "02",
    title: "Machine Learning & AI",
    description:
      "Scikit-Learn, XGBoost, TensorFlow, OpenCV, MediaPipe  developing predictive models, fraud detection systems, computer vision applications, and intelligent AI solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "03",
    title: "Data Science & Analytics",
    description:
      "Pandas, NumPy, Power BI, Matplotlib, Microsoft Excel, Seaborn, SQL transforming raw data through EDA, visualization, KPI analysis, and actionable business insights.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "04",
    title: "Web Development & Tools",
    description:
      "HTML, React, TypeScript, Tailwind CSS, Node.js, Socket.IO building scalable full-stack web apps with clean UI and real-time features.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "05",
    title: "Databases & Cloud",
    description:
      "MySQL, PostgreSQL, MongoDB, Docker, AWS  designing data systems, managing application infrastructure, and building reliable, scalable deployments",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "06",
    title: "Generative AI & Tools",
    description:
      "LangChain, RAG, Groq, Mistral, Ollama, Git, GitHub  building LLM-powered applications, AI assistants, grounded RAG systems, and intelligent developer workflows.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
        <path d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  
]

export default function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 60,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative overflow-hidden ..."
    >
      <div className="relative mx-auto max-w-7xl">
        <div ref={headerRef} className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">
            Skills
          </p>
          <h2 className="mt-5 font-sans text-4xl leading-[0.94] tracking-[-0.03em] text-[var(--text-primary)] sm:text-6xl">
            Tools that power intelligent applications for visionary builders
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map((uc) => (
            <div
              key={uc.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-7 transition-colors duration-300 hover:border-[var(--text-primary)]/40 hover:bg-[var(--bg-secondary)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--text-primary)]/30 group-hover:bg-[var(--bg-secondary)]">
                  {uc.icon}
                </div>
                <span className="font-sans text-sm tracking-tight text-[var(--text-secondary)]">
                  [{uc.id}]
                </span>
              </div>
              <h3 className="mt-5 font-sans text-xl tracking-[-0.02em] text-[var(--text-primary)]">
                {uc.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--text-secondary)]">
                {uc.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}