import { useEffect, useRef } from 'react'
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const fn = (e: MouseEvent) => { if(ref.current){ref.current.style.left=e.clientX+'px';ref.current.style.top=e.clientY+'px'} }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])
  return <div ref={ref} className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
    style={{ width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle, rgba(222,219,200,0.04) 0%, transparent 70%)',transition:'left 0.08s linear, top 0.08s linear' }} />
}
