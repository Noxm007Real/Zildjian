"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ["Home", "Products", "The Wood", "Artists", "Contact"];

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 w-full p-8 flex justify-between items-center z-[100] mix-blend-difference text-white">
        <div className="font-bold text-2xl tracking-widest uppercase cursor-pointer">
          Zildjian
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-semibold uppercase tracking-wider cursor-pointer focus:outline-none"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#121212] z-[90] flex flex-col justify-center px-10 md:px-32"
          >
            <div className="flex flex-col gap-4">
              {links.map((link, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.a
                    href="#"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{
                      delay: 0.2 + i * 0.1,
                      duration: 0.6,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="text-6xl md:text-8xl font-bold text-white hover:text-[#b07d47] transition-colors cursor-pointer block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link}
                  </motion.a>
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-16 flex gap-8 text-gray-400 font-medium uppercase tracking-widest text-sm"
            >
              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
