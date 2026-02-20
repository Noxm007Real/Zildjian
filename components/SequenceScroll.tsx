"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 192;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0 || !canvasRef.current) return;

    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * frameCount)
    );
    const currentImage = images[frameIndex];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx || !currentImage.complete) return;

    const renderScale = Math.max(
      canvas.width / currentImage.width,
      canvas.height / currentImage.height
    );
    const renderWidth = currentImage.width * renderScale;
    const renderHeight = currentImage.height * renderScale;
    const x = (canvas.width - renderWidth) / 2;
    const y = (canvas.height - renderHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, x, y, renderWidth, renderHeight);
  });

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const opacityText1 = useTransform(scrollYProgress, [0, 0.1, 0.15], [1, 1, 0]);
  const opacityText2 = useTransform(
    scrollYProgress,
    [0.25, 0.3, 0.4, 0.45],
    [0, 1, 1, 0]
  );
  const opacityText3 = useTransform(
    scrollYProgress,
    [0.55, 0.6, 0.7, 0.75],
    [0, 1, 1, 0]
  );
  const opacityText4 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative w-full h-[400vh] bg-[#121212]">
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-black/30 z-10" />

        <motion.div
          style={{ opacity: opacityText1 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
            The Perfect Strike.
          </h1>
          <p className="mt-4 text-xl text-[#b07d47]">
            Feel the raw energy of Zildjian Hickory.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: opacityText2 }}
          className="absolute inset-0 z-20 flex items-center justify-start px-10 md:px-32"
        >
          <h2 className="text-4xl md:text-6xl font-semibold max-w-lg text-white">
            Crafted for precision and{" "}
            <span className="text-[#b07d47]">explosive power.</span>
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacityText3 }}
          className="absolute inset-0 z-20 flex items-center justify-end px-10 md:px-32 text-right"
        >
          <h2 className="text-4xl md:text-6xl font-semibold max-w-lg text-white">
            Every splinter, every grain,
            <br />
            engineered for your sound.
          </h2>
        </motion.div>

        <motion.div
          style={{ opacity: opacityText4 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Find Your Signature Pair
          </h2>
          <button className="px-8 py-4 bg-[#b07d47] text-[#121212] font-bold rounded-full text-lg hover:bg-white transition-colors cursor-pointer">
            Explore Collection
          </button>
        </motion.div>
      </div>
    </div>
  );
}
