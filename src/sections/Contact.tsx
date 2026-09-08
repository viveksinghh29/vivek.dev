import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const ease = [0.16, 1, 0.3, 1] as const

export default function CollabBanner() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      id="contact"
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease }}
      className="relative w-full overflow-hidden rounded-[38px] border min-h-[280px] flex items-center justify-center"
      style={{ borderColor: 'rgba(96,165,250,0.2)' }}
    >
      {/* ── Animated GIF background ── */}
      <img
        src="/new-section.gif"
        alt="Collaboration background"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ filter: 'brightness(0.75) saturate(1.1)' }}
      />

      

      {/* Blue tint overlay — ties into your palette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'rgba(29,78,216,0.08)' }}
      />

      {/* ── Frosted glass card ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.25, ease }}
        className="relative z-10 flex flex-col items-center text-center px-8 py-8 md:px-10 md:py-4 rounded-2xl max-w-4xl mx-4"
        style={{
          background: 'rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
        }}
      >
        {/* Available dot */}
        <div className="flex items-center gap-2 mb-3">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#22c55e' }}
          />
          <span
            className="text-[10px] tracking-[0.22em] uppercase font-medium"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Open to work
          </span>
        </div>

        {/* Main heading */}
        <h3
          className="font-black leading-[0.9] tracking-tight mb-3 whitespace-nowrap"
          style={{
            fontSize: 'clamp(22px, 3.5vw, 42px)',
            letterSpacing: '-0.04em',
            color: '#fff',
          }}
        >
          Let's build{' '}
          <span
            className="font-serif italic font-normal"
            style={{ color: 'rgba(147,197,253,0.9)' }}
          >
            something real.
          </span>
        </h3>


        {/* ── CTA Buttons ── */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Send a message — solid blue */}
          <a
            href="mailto:viveksinghhh29@gmail.com"
            className="group flex items-center gap-2 rounded-full pl-2 pr-2 py-0.5 text-sm font-bold transition-all duration-300 hover:gap-3 hover:-translate-y-0.5 hover:brightness-110"
            style={{
                    background: 'rgba(255,255,255,0.10)',
                    backdropFilter: 'blur(8px)',
                    WebkitBackdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.9)',
                    }}
          >
            Contact Us
            <span
              className="w-9 h-9 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    }}
            >
              <ArrowRight size={15} color="#fff" />
            </span>
          </a>

          {/* Download resume — frosted ghost */}
          <a
            href="/resume.pdf"
            download="Vivek_Kumar_Singh_Resume.pdf"
            className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5"
            style={{
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.85)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.18)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
            }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
