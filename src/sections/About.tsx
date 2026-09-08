import { motion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as const

export default function Manifesto() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black border-t border-b"
      style={{ borderColor: 'rgba(222,219,200,0.08)' }}
    >
      <div className="w-full px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-32">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease }}
          className="mb-5 md:mb-6"
        >
          <span
            className="text-[10px] md:text-xs font-bold tracking-[0.22em] uppercase"
            style={{ color: 'rgba(222,219,200,0.45)' }}
          >
            Manifesto
          </span>
        </motion.div>

        {/* Main manifesto */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.1, ease }}
          className="max-w-[1450px]"
        >
          <p
            className="
              manifesto-text
              font-black
              tracking-[-0.045em]
              leading-[0.96]
              text-[clamp(1.5rem,3vw,4rem)]
            "
            style={{ color: '#E1E0CC' }}
          >
            For me, building means{' '}
            
            <span className="manifesto-highlight">
              curiosity,
            </span>{' '}
            
            problem-solving, and turning ideas into{' '}
            
            <span className="manifesto-highlight">
              working solutions.
            </span>{' '}
            
            I work across Machine Learning, Generative AI, Data Analytics, and
            Full-Stack Development. From transforming complex datasets into{' '}
            
            <span className="manifesto-highlight">
              actionable insights
            </span>{' '}
            
            to building intelligent applications and predictive systems, I
            enjoy taking problems from concept to implementation. I build to
            learn, experiment, solve real problems, and{' '}
            
            <span className="manifesto-highlight">
              keep getting better.
            </span>
          </p>
        </motion.div>
      </div>

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-[0.04]"
        style={{ background: '#6FA8DC' }}
      />
    </section>
  )
}