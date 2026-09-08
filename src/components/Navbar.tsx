import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
const navLinks = [
  { label: 'About', href: '#about' },{ label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },{ label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },{ label: 'Contact', href: '#contact' },
]
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])
  const handleNav = (href: string) => { setMobileOpen(false); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
        <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16,1,0.3,1], delay: 0.2 }}
          className="pointer-events-auto rounded-b-3xl px-8 py-3 flex items-center gap-10 border-x border-b transition-colors duration-300"
          style={{ background:'rgba(0,0,0,0.88)', backdropFilter:'blur(20px)', borderColor: scrolled ? 'rgba(222,219,200,0.15)' : 'transparent' }}>
          <a href="#hero" onClick={e=>{e.preventDefault();handleNav('#hero')}} className="text-sm font-black" style={{ color:'#E1E0CC', letterSpacing:'-0.04em' }}>
            VKS<span style={{ color:'rgba(222,219,200,0.3)' }}>.</span>
          </a>
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={e=>{e.preventDefault();handleNav(link.href)}}
                className="text-xs tracking-wide transition-colors duration-200" style={{ color:'rgba(222,219,200,0.55)' }}
                onMouseEnter={e=>(e.currentTarget.style.color='#E1E0CC')}
                onMouseLeave={e=>(e.currentTarget.style.color='rgba(222,219,200,0.55)')}>{link.label}</a>
            ))}
          </div>
          <button className="md:hidden" style={{ color:'rgba(222,219,200,0.6)' }} onClick={()=>setMobileOpen(v=>!v)}>
            {mobileOpen ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </motion.div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
            style={{ background:'rgba(0,0,0,0.97)' }}>
            {navLinks.map((link,i) => (
              <motion.a key={link.href} href={link.href} onClick={e=>{e.preventDefault();handleNav(link.href)}}
                initial={{ y:20,opacity:0 }} animate={{ y:0,opacity:1 }} exit={{ y:20,opacity:0 }}
                transition={{ delay:i*0.07, ease:[0.16,1,0.3,1] }}
                className="text-3xl font-bold" style={{ color:'rgba(222,219,200,0.85)' }}>{link.label}</motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
