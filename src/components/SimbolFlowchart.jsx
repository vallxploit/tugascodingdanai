import React from 'react';
import { motion } from 'framer-motion';

const simbols = [
  { name: "Terminator", shape: "rounded-full", shapeCSS: "w-24 h-10", desc: "Menandakan titik awal (START) dan akhir (END) dari sebuah program.", color: "border-blue-500/50 bg-blue-500/10 text-blue-400" },
  { name: "Input / Output", shape: "skew-x-[-15deg]", shapeCSS: "w-24 h-10", desc: "Digunakan saat program meminta input dari pengguna, atau menampilkan hasil (output) ke layar.", color: "border-purple-500/50 bg-purple-500/10 text-purple-400" },
  { name: "Process", shape: "rounded-md", shapeCSS: "w-24 h-10", desc: "Blok di mana sistem melakukan proses perhitungan matematika (Kalkulasi).", color: "border-emerald-500/50 bg-emerald-500/10 text-emerald-400" },
  { name: "Decision", shape: "rotate-45", shapeCSS: "w-16 h-16", desc: "Percabangan logika. Digunakan saat sistem harus memilih (Contoh: Apakah operator yang dipilih adalah + atau -?).", color: "border-amber-500/50 bg-amber-500/10 text-amber-400" }
];

export default function SimbolFlowchart() {
  return (
    <section id="simbol" className="w-full max-w-6xl py-24 border-t border-white/5 scroll-mt-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Mengenal Simbol Flowchart</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">Standar visual untuk merepresentasikan algoritma komputer.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {simbols.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 flex flex-col items-center text-center"
          >
            <div className="h-24 flex items-center justify-center w-full mb-4 bg-dark-800/50 rounded-lg border border-white/5">
              <div className={`border-2 flex items-center justify-center font-mono text-[10px] ${item.shape} ${item.shapeCSS} ${item.color}`}>
                <span className={item.shape === 'skew-x-[-15deg]' ? 'skew-x-[15deg]' : item.shape === 'rotate-45' ? '-rotate-45' : ''}>Simbol</span>
              </div>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">{item.name}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}