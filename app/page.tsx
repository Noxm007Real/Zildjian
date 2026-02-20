import SmoothScroll from "@/components/SmoothScroll";
import SequenceScroll from "@/components/SequenceScroll";
import Navbar from "@/components/Navbar";
import TextReveal from "@/components/TextReveal";
import BentoGrid from "@/components/BentoGrid";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative w-full bg-[#121212]">
        <Navbar />
        <SequenceScroll />

        <div className="relative z-10 bg-[#121212] -mt-[100vh]">
          <TextReveal />
          <BentoGrid />
          <Stats />
          <Testimonials />

          <section className="w-full py-40 flex flex-col items-center justify-center text-center relative overflow-hidden bg-zinc-900">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 mix-blend-overlay"></div>
            <h2 className="text-5xl md:text-8xl font-black text-white z-10 tracking-tighter mb-8">
              READY TO <span className="text-[#b07d47]">PLAY?</span>
            </h2>
            <button className="relative z-10 group overflow-hidden rounded-full bg-white px-10 py-5 text-[#121212] font-bold text-xl uppercase tracking-wider transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="relative z-10">Get Your Pair</span>
              <div className="absolute inset-0 h-full w-0 bg-[#b07d47] transition-all duration-500 ease-out group-hover:w-full"></div>
            </button>
          </section>

          <footer className="w-full bg-[#0a0a0a] py-12 px-8 text-center md:text-left">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <h1 className="text-3xl font-bold uppercase tracking-widest text-white">
                Zildjian
              </h1>
              <div className="flex gap-6 text-sm text-gray-500 font-medium">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </div>
              <p className="text-xs text-zinc-600">
                © 2026 Zildjian. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </main>
    </SmoothScroll>
  );
}
