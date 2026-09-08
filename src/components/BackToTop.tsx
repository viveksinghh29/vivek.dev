import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  return (
    <AnimatePresence>
      {visible && (
        <motion.button initial={{ opacity:0,y:16 }} animate={{ opacity:1,y:0 }} exit={{ opacity:0,y:16 }}
          transition={{ duration:0.4,ease:[0.16,1,0.3,1] }}
          onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
          className="fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full flex items-center justify-center hover:-translate-y-1 transition-transform duration-300"
          style={{ background:'#DEDBC8' }} aria-label="Back to top">
          <ChevronUp size={18} color="#000" strokeWidth={2.5}/>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
