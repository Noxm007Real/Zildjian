"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function TextReveal() {
  const text = "A legacy of rhythm. Built for drummers who demand the ultimate response and explosive power.";
    const characters = text.split("");
      const containerRef = useRef<HTMLDivElement>(null);

        const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 50%"] });

          return (
              <section ref={containerRef} className="min-h-screen flex items-center justify-center px-8 bg-[#121212] py-32">
                    <h3 className="text-4xl md:text-7xl font-bold text-center max-w-5xl leading-tight flex flex-wrap justify-center">
                            {characters.map((char, i) => {
                                      const start = i / characters.length;
                                                const end = start + (1 / characters.length);
                                                          // eslint-disable-next-line react-hooks/rules-of-hooks
                                                                    const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
                                                                              return (
                                                                                          <motion.span key={i} style={{ opacity }} className="text-white">
                                                                                                        {char === " " ? "\u00A0" : char}
                                                                                                                    </motion.span>
                                                                                                                              );
                                                                                                                                      })}
                                                                                                                                            </h3>
                                                                                                                                                </section>
                                                                                                                                                  );
                                                                                                                                                  }