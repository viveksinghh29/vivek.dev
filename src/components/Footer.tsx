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
    {
      title: "INSTAGRAM",
      href: "https://www.instagram.com/viveksinghh29/",
    },
    {
      title: "EMAIL",
      href: "mailto:viveksinghhh29@gmail.com",
    },
    {
      title: "GITHUB",
      href: "https://github.com/viveksinghh29",
    },
    {
      title: "LINKEDIN",
      href: "https://www.linkedin.com/in/viveksinghh29",
    },
  ];

  return (
    <footer className="relative bg-black overflow-hidden border-t border-white/10">

      {/* Top Row */}
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-white/70 px-10 pt-3 pb-2">

        <p>
          Located in <span className="text-white">India</span>
        </p>

        <p>{time}</p>

      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-8 py-8">

        <div className="flex items-center justify-between">

          {links.map((link) => (
            <motion.a
              whileHover={{ y: -4 }}
              key={link.title}
              href={link.href}
              target="_blank"
              className="text-2xl font-black tracking-tight text-white hover:text-sky-300 transition whitespace-nowrap"
            >
              {link.title}
            </motion.a>
          ))}

        </div>

      </div>

      {/* Marquee */}

      <div className="relative overflow-hidden pb-3">

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 15,
          }}
          className="flex whitespace-nowrap text-[40px] font-black text-white/10"
        >
          {Array(12)
            .fill("© vivek.dev | 2027")
            .map((item, i) => (
              <span key={i} className="mx-10">
                {item}
              </span>
            ))}
        </motion.div>

      </div>

    </footer>
  );
}