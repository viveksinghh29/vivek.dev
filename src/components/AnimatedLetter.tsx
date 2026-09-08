import { motion, useScroll, useTransform } from 'framer-motion'
interface Props { char: string; index: number; total: number; containerRef: React.RefObject<HTMLElement> }
export default function AnimatedLetter({ char, index, total, containerRef }: Props) {
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.85', 'end 0.2'] })
  const charProgress = index / total
  const opacity = useTransform(scrollYProgress, [charProgress - 0.05, charProgress + 0.08], [0.15, 1])
  if (char === ' ') return <span>&nbsp;</span>
  return <motion.span style={{ opacity }} className="inline-block">{char}</motion.span>
}
