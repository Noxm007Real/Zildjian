"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  {
    text: "These sticks feel like an extension of my own arms. Incredible balance.",
    author: "Travis Barker",
  },
  {
    text: "The rebound on the ride cymbal is unmatched. Pure articulation.",
    author: "Matt Garstka",
  },
  {
    text: "I hit hard, and these sticks take the abuse night after night.",
    author: "Dave Grohl",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full h-screen bg-[#121212] flex items-center justify-center relative overflow-hidden px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900/50 to-[#121212] z-0" />
      <div className="relative z-10 text-center max-w-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <p className="text-3xl md:text-5xl font-semibold text-white italic mb-8">&quot;{quotes[index].text}&quot;</p>
            <p className="text-[#b07d47] uppercase tracking-widest font-bold text-sm md:text-base">
              — {quotes[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
