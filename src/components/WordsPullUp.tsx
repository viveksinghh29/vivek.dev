import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
interface WordsPullUpProps { text: string; className?: string; delay?: number; showAsterisk?: boolean }
export default function WordsPullUp({ text, className = '', delay = 0, showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const words = text.split(' ')
  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="word-clip mr-[0.25em]">
          <motion.span className="inline-block"
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.08, ease: [0.16, 1, 0.3, 1] }}>
            {i === words.length - 1 && showAsterisk ? (
              <span className="relative">{word}
                <sup className="absolute font-normal" style={{ top:'0.65em', right:'-0.3em', fontSize:'0.31em', color:'#E1E0CC' }}>*</sup>
              </span>
            ) : word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
