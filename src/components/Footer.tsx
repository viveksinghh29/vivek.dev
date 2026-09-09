import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { title: "INSTAGRAM", href: "https://www.instagram.com/viveksinghh29/" },
    { title: "EMAIL",     href: "mailto:viveksinghhh29@gmail.com"           },
    { title: "GITHUB",    href: "https://github.com/viveksinghh29"          },
    { title: "LINKEDIN",  href: "https://www.linkedin.com/in/viveksinghh29" },
  ];

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-xs md:text-sm text-white/70 px-4 md:px-10 pt-3 pb-2">
        <p>Located in <span className="text-white">India</span></p>
        <p>{time}</p>
      </div>

      {/* Links — desktop: justify-between in one row / mobile: 2x2 grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-8">
        {/* Desktop — single row */}
        <div className="hidden md:flex items-center justify-between">
          {links.map((link) => (
            <motion.a
              whileHover={{ y: -4 }}
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-black tracking-tight text-white hover:text-sky-300 transition whitespace-nowrap"
            >
              {link.title}
            </motion.a>
          ))}
        </div>

        {/* Mobile — 2×2 grid matching desktop spacing feel */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:hidden">
          {links.map((link) => (
            <motion.a
              whileHover={{ y: -2 }}
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-black tracking-tight text-white hover:text-sky-300 transition whitespace-nowrap"
            >
              {link.title}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Marquee — smaller text on mobile */}
      <div className="relative overflow-hidden pb-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
          className="flex whitespace-nowrap text-[22px] md:text-[40px] font-black text-white/10"
        >
          {Array(12)
            .fill("© vivek.dev | 2027")
            .map((item, i) => (
              <span key={i} className="mx-6 md:mx-10">{item}</span>
            ))}
        </motion.div>
      </div>

    </footer>
  );
}