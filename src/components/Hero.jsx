import React from 'react';
import { motion } from 'framer-motion';
import { Network, ArrowDown } from 'lucide-react';

export default function Hero() {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="w-full max-w-4xl min-h-[90vh] flex flex-col justify-center items-center text-center pt-20">
      <motion.div variants={{ show: { transition: { staggerChildren: 0.15 } } }} initial="hidden" animate="show" className="flex flex-col items-center">
        
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6">
          <Network className="w-4 h-4" />
          <span>Materi Kelas X SMK - Berpikir Komputasi</span>
        </motion.div>
        
        <motion.h1 variants={item} className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">
          Memahami Logika Dasar <br />
          <span className="text-gradient">Aplikasi Kalkulator</span>
        </motion.h1>
        
        <motion.p variants={item} className="text-slate-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Kalkulator bukan hanya alat hitung, melainkan kumpulan algoritma sistematis. Mari pelajari bagaimana komputer menerima input, membuat keputusan, dan menghasilkan output melalui Flowchart.
        </motion.p>
        
        <motion.div variants={item} className="flex gap-4">
          <a href="#konsep" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-full transition-colors focus-ring shadow-lg shadow-blue-500/20">
            Mulai Belajar
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
        
      </motion.div>
    </section>
  );
}