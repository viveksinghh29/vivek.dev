import { useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface GalleryItem {
  title: string
  src: string
  alt: string
}

const galleryItems: GalleryItem[] = [
  {
    title: 'CURIOUS BY NATURE',
    src: '/gallery/photo1.jpg',
    alt: 'Vivek 1',
  },
  {
    title: 'LIFE LATELY',
    src: '/gallery/photo2.jpg',
    alt: 'Vivek 2',
  },
  {
    title: 'SOMEWHERE BETWEEN CODE & CHAOS',
    src: '/gallery/photo3.jpg',
    alt: 'Vivek 3',
  },
  {
    title: 'MOMENTS IN FRAME',
    src: '/gallery/photo4.jpg',
    alt: 'Vivek 4',
  },
  {
    title: 'STILL FIGURING IT OUT',
    src: '/gallery/photo5.jpg',
    alt: 'Vivek 5',
  },
  {
    title: 'GOOD TIMES, GOOD MEMORIES',
    src: '/gallery/photo6.jpg',
    alt: 'Vivek 6',
  },
  {
    title: 'ALWAYS UP FOR SOMETHING NEW',
    src: '/gallery/photo7.jpg',
    alt: 'Vivek 7',
  },
]

const ease = [0.16, 1, 0.3, 1] as const

export default function Gallery() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })

  // Header animation refs
  const headerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(headerRef, {
    once: true,
    margin: '-80px',
  })

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement>
  ) => {
    setMouse({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden border-t bg-black"
      style={{
        borderColor: 'rgba(225,224,204,0.08)',
      }}
      onMouseMove={handleMouseMove}
    >

      {/* ─────────────────────────────────────
          HEADER
      ───────────────────────────────────── */}

      <div
        ref={headerRef}
        className="mx-auto max-w-7xl px-6 pb-14 pt-24 sm:px-8 md:pt-32 lg:px-12"
      >
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{
            duration: 0.7,
            ease,
          }}
          className="font-sans text-xs uppercase tracking-[0.4em]"
          style={{
            color: 'rgba(225,224,204,0.8)',
          }}
        >
          DIGITAL GALLERY
        </motion.p>

        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={
            inView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 30 }
          }
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease,
          }}
          className="mt-5 max-w-6xl font-sans text-4xl leading-[0.94] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
          style={{
            color: '#E1E0CC',
          }}
        >
          Moments that define who I am.
        </motion.h2>
      </div>

      {/* ─────────────────────────────────────
          IMAGE REVEAL
      ───────────────────────────────────── */}

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="gallery-cursor-image pointer-events-none fixed z-50"
            initial={{
              opacity: 0,
              scale: 0.8,
              rotate: -5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotate: 5,
            }}
            transition={{
              duration: 0.35,
              ease,
            }}
            style={{
              left: mouse.x + 35,
              top: mouse.y - 180,
            }}
          >
            <img
              src={activeItem.src}
              alt={activeItem.alt}
              className="gallery-cursor-img"
            />

            {/* Image number */}
            <div className="gallery-image-number">
              {String(
                galleryItems.indexOf(activeItem) + 1
              ).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─────────────────────────────────────
          IMAGE LIST
      ───────────────────────────────────── */}

      <div className="gallery-list mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {galleryItems.map((item, index) => (
          <motion.div
            key={item.title}
            className="gallery-item flex cursor-pointer items-center border-t py-6"
            style={{
              borderColor: 'rgba(225,224,204,0.12)',
            }}
            onMouseEnter={() => setActiveItem(item)}
            onMouseLeave={() => setActiveItem(null)}
            whileHover={{
              x: 18,
            }}
            transition={{
              duration: 0.35,
              ease,
            }}
          >
            {/* Number */}
            <span
              className="gallery-item-number w-16 font-sans text-sm"
              style={{
                color: 'rgba(225,224,204,0.4)',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            {/* Title */}
            <span
              className="gallery-item-title flex-1 font-sans text-2xl font-medium tracking-[-0.03em] sm:text-3xl md:text-4xl"
              style={{
                color: '#E1E0CC',
              }}
            >
              {item.title}
            </span>

            {/* Arrow */}
            <span
              className="gallery-item-arrow text-xl"
              style={{
                color: 'rgba(225,224,204,0.5)',
              }}
            >
              ↗
            </span>
          </motion.div>
        ))}

        {/* Bottom border */}
        <div
          className="border-t"
          style={{
            borderColor: 'rgba(225,224,204,0.12)',
          }}
        />
      </div>

      {/* ─────────────────────────────────────
          FOOTER
      ───────────────────────────────────── */}

      <div className="mx-auto flex max-w-7xl justify-end px-6 py-8 sm:px-8 lg:px-12">
        <span
          className="font-sans text-xs uppercase tracking-[0.3em]"
          style={{
            color: 'rgba(225,224,204,0.35)',
          }}
        >
          {String(galleryItems.length).padStart(2, '0')} FRAMES
        </span>
      </div>

    </section>
  )
}