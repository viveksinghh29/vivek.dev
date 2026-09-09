"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Shield,
  Hand,
  Home,
  BarChart3,
  Database,
  Code2,
  ShoppingCart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ease = [0.22, 1, 0.36, 1] as const;

const projects = [
  {
    id: "01",
    title: "FraudShield AI",
    description:
      "AI-powered fraud detection and analyst assistant platform using Machine Learning and Generative AI to detect suspicious transactions in real time, explain model predictions, and generate analyst-friendly risk assessments.",
    icon: <Shield className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/FraudShield-AI"
  },
  {
    id: "02",
    title: "AI Hand Gesture Controller",
    description:
      "Real-time computer vision system that uses 21 hand landmarks to translate gestures into system actions including volume control, media playback, screenshots, and Spotify automation.",
    icon: <Hand className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/AI-Hand-Gesture-Controller"
  },
  {
    id: "03",
    title: "Bangalore House Price Prediction",
    description:
      "End-to-end machine learning application covering data preprocessing, exploratory data analysis, feature engineering, model training, and prediction using Random Forest, with approximately 98% accuracy.",
    icon: <Home className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/Bangalore-House-Price-Prediction"
  },
  {
    id: "04",
    title: "E-Commerce Predictive Analytics",
    description:
      "Predictive e-commerce analytics platform processing 100K+ records across multiple datasets, using SQL, Python, EDA, and Power BI to uncover business insights, track KPIs, and support revenue forecasting.",
    icon: <BarChart3 className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/Ecommerce-Predictive-Analytics"
  },
  {
    id: "05",
    title: "SQL RAG Assistant",
    description:
      "Enterprise AI-powered text-to-SQL system that converts natural language into secure SQL queries using Retrieval-Augmented Generation, executes them against relational databases, and delivers intelligent insights with visual analytics.",
    icon: <Database className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/SQL-RAG-Assistant"
  },
  {
    id: "06",
    title: "AI Code Review Agent",
    description:
      "Intelligent code review system that analyzes GitHub repositories using AST-based source analysis and LLMs to identify bugs, security vulnerabilities, code smells, and potential optimization opportunities.",
    icon: <Code2 className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/AI-Code-Review-Agent"
  },
  {
    id: "07",
    title: "Uber Ride Business Analytics",
    description:
      "End-to-end business analytics and exploratory data analysis of 150K+ Uber ride bookings to uncover demand patterns, revenue drivers, customer behavior, cancellations, and operational insights.",
    icon: <ShoppingCart className="h-7 w-7" strokeWidth={1.5} />,
    github: "https://github.com/viveksinghh29/Uber-Ride-Business-Analytics"
  },
];

const leftVariants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease,
    },
  },
};

function StickyHeading() {
  return (
    <motion.div
      variants={leftVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="lg:sticky lg:top-24"
    >
      <h2
        className="text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl"
        style={{ color: "#E1E0CC" }}
      >
        PROJECTS
      </h2>

      <h2
        className="text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl"
        style={{ color: "#E1E0CC" }}
      >
        THAT
      </h2>

      <h2
        className="text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl"
        style={{ color: "#E1E0CC" }}
      >
        CREATE
      </h2>

      <h2
        className="text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl"
        style={{ color: "#E1E0CC" }}
      >
        REAL
      </h2>

      <h2
        className="text-5xl font-black leading-none tracking-[-0.06em] md:text-6xl"
        style={{ color: "#E1E0CC" }}
      >
        IMPACTS
      </h2>
    </motion.div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
      id="projects"
      className="relative overflow-visible bg-[var(--bg-primary)] px-6 py-32 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-7xl">
        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.5fr_1.15fr] lg:gap-20">
          {/* LEFT — STICKY ANIMATED WORDS */}
          <div className="relative">
            <StickyHeading />
          </div>

          {/* RIGHT — STACKING PROJECT CARDS */}
          <div
            ref={cardsRef}
            className="relative"
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="relative"
                style={{
                  height: index === projects.length - 1 ? "100vh" : "auto",
                }}
              >
                <div
                  className="sticky"
                  style={{
                    top: `${90 + index * 12}px`,
                    zIndex: index + 1,
                  }}
                >
                  <div
                    className="
                      group
                      relative
                      mb-5
                      overflow-hidden
                      rounded-2xl
                      border
                      border-[var(--border)]
                      bg-[var(--bg-primary)]
                      p-6
                      transition-all
                      duration-300
                      hover:border-[var(--text-primary)]/40
                      hover:bg-[var(--bg-secondary)]
                    "
                  >
                    {/* Hover glow */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "radial-gradient(circle at top right, rgba(255,255,255,0.045), transparent 60%)",
                      }}
                    />

                    {/* Top shimmer */}
                    <div
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-px
                        opacity-0
                        transition-opacity
                        duration-500
                        group-hover:opacity-100
                      "
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(225,224,204,0.3), transparent)",
                      }}
                    />

                    {/* Card content */}
                    <div className="relative z-10">
                      {/* Icon + Number */}
                      <div className="flex items-start justify-between">
                        <div
                          className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-[var(--border)]
                            bg-[var(--bg-secondary)]
                            text-[var(--text-primary)]
                            transition-colors
                            duration-300
                            group-hover:border-[var(--text-primary)]/30
                          "
                        >
                          {project.icon}
                        </div>

                        <span className="font-sans text-sm tracking-tight text-[var(--text-secondary)]">
                          [{project.id}]
                        </span>
                      </div>

                      {/* Title */}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title mt-5 inline-flex items-center gap-2 font-sans text-xl tracking-[-0.02em] text-[var(--text-primary)] transition-opacity duration-300 hover:opacity-70 sm:text-2xl"
                      >
                        <span>{project.title}</span>

                        <span className="text-sm opacity-0 transition-all duration-300 group-hover/title:translate-x-0.5 group-hover/title:opacity-60">
                          ↗
                        </span>
                      </a>

                      {/* Description */}
                      <p className="mt-3 max-w-4xl font-sans text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            

            {/* Bottom scrolling space */}
            <div className="h-[40vh]" />
          </div>
        </div>
      </div>
    </section>
  );
}