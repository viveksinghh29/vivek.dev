"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    id: "01",
    headline: "DAV Institute of Engineering & Technology, Jalandhar",
    title: "Bachelor of Technology | 2023 - 2027",
    description:
      "Computer Science Engineering undergraduate with a focus on AI/ML, Data Analytics, software development, databases, operating systems, and computer networks. Expected Graduation: 2027",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <path
          d="M3 8.5L12 4l9 4.5-9 4.5L3 8.5zM6.5 10.25V15c0 1.5 2.46 3 5.5 3s5.5-1.5 5.5-3v-4.75M21 8.5v6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "02",
    headline: "Kendriya Vidyalaya, Duliajan",
    title: "Higher Secondary Education | 2020 - 2022",
    description:
      "Completed higher secondary education in the Science stream under the CBSE board. Developed a strong foundation in Mathematics, Physics, Chemistry, and Computer Science.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <path
          d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 016.5 22H20V2H6.5A2.5 2.5 0 004 4.5v15zM8 6h8M8 10h8M8 14h5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function EducationSection() {
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
      id="education"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-6 py-32 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <div ref={headerRef} className="max-w-3xl">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[var(--text-secondary)]">
            Education
          </p>

          <h2 className="mt-5 font-sans text-4xl leading-[0.94] tracking-[-0.03em] text-[var(--text-primary)] sm:text-6xl">
            The foundation behind the work
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-5 sm:grid-cols-2"
        >
          {education.map((edu) => (
            <div
              key={edu.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-7 transition-colors duration-300 hover:border-[var(--text-primary)]/40 hover:bg-[var(--bg-secondary)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--text-primary)]/30 group-hover:bg-[var(--bg-secondary)]">
                  {edu.icon}
                </div>

                <span className="font-sans text-sm tracking-tight text-[var(--text-secondary)]">
                  [{edu.id}]
                </span>
              </div>

             <div className="mt-5">
              <h3 className="font-sans text-xl font-medium tracking-[-0.02em] text-[var(--text-primary)]">
                {edu.headline}
              </h3>

              <p className="mt-2 font-sans text-base tracking-[-0.02em] text-[var(--text-secondary)]">
                {edu.title}
              </p>
            </div>

            <p className="mt-3 font-sans text-sm leading-relaxed text-[var(--text-secondary)]">
              {edu.description}
            </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}