"use client";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  // Menggunakan fungsi versi terbaru untuk Framer Motion v12
  useMotionValueEvent(springValue, "change", (latest) => {
    if (ref.current) {
      // Memastikan format datanya Number agar TypeScript tidak marah
      ref.current.textContent =
        Intl.NumberFormat("en-US").format(Number(latest.toFixed(0))) + suffix;
    }
  });

  return (
    <span ref={ref} className="text-5xl md:text-7xl font-bold text-[#b07d47]" />
  );
}

export default function Stats() {
  return (
    <section className="w-full py-24 bg-[#121212] border-y border-zinc-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div>
          <Counter value={100} suffix="%" />
          <p className="mt-4 text-gray-400 font-medium uppercase tracking-widest">
            Select Hickory
          </p>
        </div>
        <div>
          <Counter value={240} suffix="+" />
          <p className="mt-4 text-gray-400 font-medium uppercase tracking-widest">
            Quality Checks
          </p>
        </div>
        <div>
          <Counter value={50} suffix="M+" />
          <p className="mt-4 text-gray-400 font-medium uppercase tracking-widest">
            Drummers Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
