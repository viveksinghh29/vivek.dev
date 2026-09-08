"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    id: "01",
    headline: "Sofcon India Pvt. Ltd.",
    title: "Data Science & AI/ML Trainee | New Delhi",
    description:
      "Hands-on experience across the end-to-end data science and machine learning workflow, including data cleaning, transformation, preprocessing, model fitting and training, evaluation, and visualization. Worked with real-world datasets to develop predictive models and create interactive dashboards that turn raw data into meaningful insights.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-7 w-7"
      >
        <path
          d="M9 3H5.25A2.25 2.25 0 003 5.25v13.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V15m-9-3h8.25A1.75 1.75 0 0022 10.25V5.75A1.75 1.75 0 0020.25 4H15.75A1.75 1.75 0 0014 5.75v4.5A1.75 1.75 0 0015.75 12H18m-9 5h6m-6-4h3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

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
      id="experience"
      className="relative overflow-hidden bg-[var(--bg-primary)] px-6 py-32 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        <div ref={headerRef} className="max-w-3xl">
          
          <h3 className="mt-5 font-sans text-4xl leading-[0.94] tracking-[-0.03em] text-[var(--text-primary)] sm:text-6xl">
            WORK EXPERIENCE
          </h3>

        </div>

        <div
          ref={cardsRef}
          className="mt-16 grid gap-5 lg:grid-cols-3"
        >
          {useCases.map((uc) => (
            <div
  key={uc.id}
  className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)] p-7 lg:col-span-2 transition-colors duration-300 hover:border-[var(--text-primary)]/40 hover:bg-[var(--bg-secondary)]"
>
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors group-hover:border-[var(--text-primary)]/30 group-hover:bg-[var(--bg-secondary)]">
                  {uc.icon}
                </div>

                <span className="font-sans text-sm tracking-tight text-[var(--text-secondary)]">
                  [{uc.id}]
                </span>
              </div>

              <div className="mt-5">
                <h3 className="font-sans text-xl tracking-[-0.02em] text-[var(--text-primary)]">
                  {uc.headline}
                </h3>

                <p className="mt-2 font-sans text-base tracking-[-0.02em] text-[var(--text-primary)]">
                  {uc.title}
                </p>
              </div>

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