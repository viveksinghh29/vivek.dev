import { useRef, CSSProperties } from 'react'
import { motion, useInView } from 'framer-motion'
interface Segment { text: string; className?: string; style?: CSSProperties }
interface Props { segments: Segment[]; className?: string; delay?: number }
export default function WordsPullUpMultiStyle({ segments, className = '', delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const allWords: { word: string; className: string; style?: CSSProperties }[] = []
  segments.forEach(seg => seg.text.split(' ').forEach(word => { if (word) allWords.push({ word, className: seg.className ?? '', style: seg.style }) }))
  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center gap-x-[0.28em] gap-y-[0.1em] ${className}`}>
      {allWords.map((item, i) => (
        <span key={i} className="word-clip">
          <motion.span className={`inline-block ${item.className}`} style={item.style}
            initial={{ y: '110%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: '110%', opacity: 0 }}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] }}>
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}
