import { motion } from 'framer-motion'
import WordsPullUp from '../components/WordsPullUp'

const ease = [0.16, 1, 0.3, 1] as const

export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="h-screen p-3 md:p-5 flex flex-col"
      style={{ background: '#000' }}
    >
      {/* Inset rounded container */}
      <div className="relative flex-1 rounded-2xl md:rounded-[2rem] overflow-hidden bg-[#0a0a0a]">

        {/* ── BACKGROUND IMAGE ── */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/herobg-2.avif')" }}
        />

        {/* Dark overlay for text contrast */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.20)' }}
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.07] mix-blend-overlay pointer-events-none" />

        {/* Bottom gradient — fades to black to blend into next section */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 55%, #000 100%)',
          }}
        />

        {/* Left vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, transparent 50%)',
          }}
        />

        {/* ── TOP-LEFT: availability badge ── */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="absolute top-6 left-6 md:top-8 md:left-8 flex items-center gap-2"
        >
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: '#22c55e' }}
          />
          <span
            className="text-[10px] md:text-xs tracking-widest uppercase"
            style={{ color: 'rgba(222,219,200,0.6)' }}
          >
            Available for opportunities
          </span>
        </motion.div>

        {/* ── BOTTOM CONTENT — 12-col grid ── */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-12 gap-4 p-6 md:p-10 pb-8 md:pb-12">

          {/* LEFT 8 cols — giant name */}
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-end">
            <h1
              className="font-black leading-[0.86] tracking-[-0.06em] select-none"
              style={{
                fontSize: 'clamp(52px, 12vw, 160px)',
                color: '#E1E0CC',
              }}
            >
              <WordsPullUp text="Vivek Kumar" delay={0.1} className="block" />
              <WordsPullUp text="Singh"        delay={0.3} showAsterisk className="block" />
            </h1>
          </div>

          {/* RIGHT 4 cols — photo + bio + CTA */}
          <div className="col-span-12 lg:col-span-4 flex flex-col justify-end items-center lg:items-start gap-5 pb-1 lg:pb-3">
          <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.65, ease }}
                className="text-xs sm:text-sm leading-[1.6] text-center lg:text-left"
                style={{ color: "rgba(222,219,200,0.6)" }}
              >
      
              </motion.p>


            {/* CTA buttons */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.85, ease }}
  className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full"
>
  {/* VIEW PROJECTS */}
  <button
    onClick={() => scrollTo('#projects')}
    className="group relative flex items-center justify-center h-8 md:h-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-[#111] hover:border-[#E1E0CC]/50"
    style={{
      background: '#000',
      borderColor: 'rgba(225,224,204,0.22)',
      color: '#E1E0CC',
    }}
  >
    <span className="text-sm md:text-base font-medium tracking-tight">
      View Projects
    </span>

    {/* subtle top shimmer */}
    <span
      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(225,224,204,0.45), transparent)',
      }}
    />
  </button>

  {/* RESUME */}
  <a
    href="/resume.pdf"
    download="Vivek_Kumar_Singh_Resume.pdf"
    className="group relative flex items-center justify-center h-8 md:h-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:bg-[#111] hover:border-[#E1E0CC]/50"
    style={{
      background: '#000',
      borderColor: 'rgba(225,224,204,0.22)',
      color: '#E1E0CC',
    }}
  >
    <span className="text-sm md:text-base font-medium tracking-tight">
      Resume
    </span>

    {/* subtle top shimmer */}
    <span
      className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background:
          'linear-gradient(90deg, transparent, rgba(225,224,204,0.45), transparent)',
      }}
    />
  </a>
</motion.div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
