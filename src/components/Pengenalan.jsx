import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Target, Cpu } from 'lucide-react';

const materi = [
  { title: "Apa itu Kalkulator?", desc: "Program komputer sederhana yang dirancang untuk mengeksekusi operasi aritmatika dasar secara otomatis dan presisi.", icon: Calculator, color: "text-blue-400" },
  { title: "Mengapa Dibuat?", desc: "Untuk menyelesaikan perhitungan matematis dengan cepat, menghilangkan human-error, dan melatih fundamental algoritma percabangan bagi programmer.", icon: Target, color: "text-emerald-400" },
  { title: "Fungsi Utama", desc: "Menerima dua input angka, mengidentifikasi operator matematika yang dipilih pengguna, memproses logika, dan menampilkan hasil akhir.", icon: Cpu, color: "text-purple-400" }
];

export default function Pengenalan() {
  return (
    <section id="konsep" className="w-full max-w-6xl py-24 border-t border-white/5 scroll-mt-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Pengantar Algoritma</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">Membedah esensi dari aplikasi kalkulator sederhana yang sering kita gunakan.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materi.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glass-card-hover p-8"
          >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 mb-6 ${item.color}`}>
              <item.icon className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}