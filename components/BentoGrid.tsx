"use client";
// Tambahkan import Variants untuk tipe data
import { motion, Variants } from "framer-motion";

export default function BentoGrid() {
  // Deklarasikan tipe Variants agar TypeScript tenang
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
  };

  return (
    <section className="w-full min-h-screen bg-[#121212] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            Engineered for <span className="text-[#b07d47]">The Pocket.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-2xl">
            Setiap pasang diukur secara presisi. Keseimbangan optimal untuk
            respons pukulan yang natural dan artikulasi simbal yang tajam.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]"
        >
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-950 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  The Perfect Rebound
                </h3>
                <p className="text-gray-400 max-w-sm">
                  Desain medium taper kami memberikan keseimbangan luar biasa di
                  titik tumpu. Pukulan terasa ringan tanpa mengorbankan power
                  saat rimshot.
                </p>
              </div>
              <div className="w-full h-48 bg-zinc-800 rounded-xl mt-6 flex items-center justify-center border border-zinc-700 overflow-hidden text-zinc-500 italic">
                [Area Gambar: Close-up Taper & Fulcrum]
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 bg-zinc-900 rounded-3xl p-8 relative overflow-hidden group hover:border-[#b07d47] border border-transparent transition-colors duration-300"
          >
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                Select Hickory
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                Kayu dengan densitas tertinggi. Menyerap kejutan (shock
                absorption) jauh lebih baik.
              </p>
              <div className="text-[#b07d47] font-bold text-4xl mt-4">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">
                Premium Grade
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 row-span-1 bg-[#b07d47] rounded-3xl p-8 relative overflow-hidden flex flex-col justify-end group"
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            <div className="relative z-10 text-[#121212]">
              <h3 className="text-2xl font-bold mb-2">Acorn Tip</h3>
              <p className="text-sm font-medium opacity-80">
                Kontak permukaan luas menghasilkan suara ride cymbal yang dark
                dan kaya.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 row-span-1 bg-zinc-900 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between group"
          >
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">
                Pitch & Weight Matched
              </h3>
              <p className="text-gray-400 text-sm max-w-md">
                {/* Menggunakan format yang aman untuk tanda kutip di Next.js */}
                Tidak ada lagi rasa &quot;berat sebelah&quot;. Setiap pasang
                stik disortir secara akustik agar memiliki pitch (nada) dan
                berat yang identik.
              </p>
            </div>
            <button className="px-6 py-3 border border-gray-600 rounded-full text-white hover:bg-white hover:text-black transition-all cursor-pointer">
              Lihat Spesifikasi
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
