import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { step: 1, name: "START & Buka Aplikasi", why: "Setiap algoritma harus memiliki titik awal yang jelas untuk menginisialisasi sistem.", next: "Sistem bersiap menunggu perintah." },
  { step: 2, name: "Input Parameter (Data)", why: "Kalkulator butuh bahan baku. Pengguna memasukkan Angka 1, Angka 2, dan memilih jenis operasi (+, -, x, ÷).", next: "Sistem membaca dan menyimpan input ke dalam memori." },
  { step: 3, name: "Decision: Identifikasi Operasi", why: "Sistem tidak tahu operasi apa yang dipilih. Percabangan (Decision) diperlukan untuk mengarahkan data ke rumus yang tepat.", next: "Data dialirkan ke proses penambahan, pengurangan, perkalian, atau pembagian." },
  { step: 4, name: "Validasi Khusus Pembagian", why: "Dalam ilmu matematika, membagi angka dengan 'Nol' tidak diperbolehkan (Undefined) dan akan menyebabkan aplikasi crash.", next: "Jika angka kedua = 0, tampilkan Error. Jika tidak, lanjutkan hitung." },
  { step: 5, name: "Process: Perhitungan", why: "Otak komputer (ALU) mengeksekusi perhitungan logika sesuai instruksi jalur yang terpilih.", next: "Menghasilkan satu nilai (hasil akhir)." },
  { step: 6, name: "Output & END", why: "Tujuan akhir kalkulator adalah memberitahu pengguna hasilnya melalui layar (Output), lalu program selesai (END).", next: "-" }
];

export default function PenjelasanLangkah() {
  return (
    <section className="w-full max-w-5xl py-24 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Penjelasan Langkah demi Langkah</h2>
        <p className="text-slate-400 text-base">Mengapa setiap nodus pada flowchart di atas diperlukan?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="glass-card p-6 border-l-4 border-l-blue-500">
            <h3 className="font-heading font-bold text-lg mb-2 text-white flex items-center gap-2">
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-mono">Langkah {item.step}</span>
              {item.name}
            </h3>
            <div className="text-sm text-slate-400 space-y-2 mt-4">
              <p><strong className="text-slate-200 font-medium">Mengapa diperlukan:</strong> {item.why}</p>
              <p><strong className="text-slate-200 font-medium">Selanjutnya:</strong> {item.next}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}