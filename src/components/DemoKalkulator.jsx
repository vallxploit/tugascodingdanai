import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, PlaySquare, AlertCircle } from 'lucide-react';

export default function DemoKalkulator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [logs, setLogs] = useState([]);
  const [isCalculating, setIsCalculating] = useState(false);

  const addLog = (msg, type = "normal") => {
    setLogs(prev => [...prev, { id: Date.now() + Math.random(), msg, type }]);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (num1 === '' || num2 === '') return;

    setLogs([]); // Clear logs
    setResult(null);
    setError(null);
    setIsCalculating(true);
    
    addLog(`[START] Aplikasi berjalan.`);
    
    setTimeout(() => {
      addLog(`[INPUT] Angka 1: ${num1}, Angka 2: ${num2}, Operasi: ${operator}`);
      addLog(`[DECISION] Mengarahkan ke jalur operasi '${operator}'`);

      setTimeout(() => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (operator === '/') {
          addLog(`[DECISION] Apakah Angka 2 == 0? (${n2} == 0)`, "warning");
          if (n2 === 0) {
            setTimeout(() => {
              addLog(`[OUTPUT] Ya! Tidak dapat membagi dengan nol!`, "error");
              setError("Tidak dapat membagi dengan nol.");
              addLog(`[END] Proses dihentikan.`);
              setIsCalculating(false);
            }, 800);
            return;
          } else {
            addLog(`[PROCESS] Tidak. Lanjut menghitung pembagian.`);
          }
        }

        setTimeout(() => {
          let res = 0;
          if (operator === '+') res = n1 + n2;
          if (operator === '-') res = n1 - n2;
          if (operator === '*') res = n1 * n2;
          if (operator === '/') res = n1 / n2;

          addLog(`[PROCESS] Perhitungan selesai. Hasil = ${res}`);
          setTimeout(() => {
            setResult(res);
            addLog(`[OUTPUT] Menampilkan hasil ke layar.`, "success");
            addLog(`[END] Algoritma selesai.`);
            setIsCalculating(false);
          }, 800);
        }, 800);

      }, 800);
    }, 800);
  };

  return (
    <section id="demo" className="w-full max-w-5xl py-24 border-t border-white/5 scroll-mt-16 mb-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-heading font-bold mb-4">Demo Implementasi Flowchart</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto">Coba masukkan angka dan pilih operasi. Lihat bagaimana sistem memproses input Anda secara *real-time* di panel log.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Form Kalkulator */}
        <div className="glass-card p-6 md:p-8 bg-dark-800/80 shadow-2xl relative">
          <div className="flex items-center gap-2 mb-6 text-slate-300 font-heading font-bold">
            <Calculator className="w-5 h-5 text-blue-400" />
            Aplikasi Kalkulator
          </div>
          
          <form onSubmit={handleCalculate} className="space-y-4 relative z-10">
            <div>
              <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Input Angka Pertama</label>
              <input type="number" step="any" required value={num1} onChange={e => setNum1(e.target.value)} disabled={isCalculating}
                className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus-ring transition-colors disabled:opacity-50" placeholder="0" />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Pilih Operasi (Decision)</label>
              <div className="grid grid-cols-4 gap-2">
                {['+', '-', '*', '/'].map(op => (
                  <button key={op} type="button" onClick={() => setOperator(op)} disabled={isCalculating}
                    className={`p-3 rounded-lg border font-mono font-bold text-lg transition-all focus-ring disabled:opacity-50 ${operator === op ? 'bg-blue-600 border-blue-400 text-white' : 'bg-dark-900 border-white/10 text-slate-400 hover:bg-white/5'}`}>
                    {op === '*' ? '×' : op === '/' ? '÷' : op}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1 font-mono uppercase tracking-wider">Input Angka Kedua</label>
              <input type="number" step="any" required value={num2} onChange={e => setNum2(e.target.value)} disabled={isCalculating}
                className="w-full bg-dark-900 border border-white/10 rounded-lg p-3 text-white focus-ring transition-colors disabled:opacity-50" placeholder="0" />
            </div>

            <button type="submit" disabled={isCalculating} className="w-full bg-emerald-600 hover:bg-emerald-500 border border-emerald-400 text-white font-bold py-3 rounded-lg mt-4 transition-all focus-ring shadow-lg shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-2">
              {isCalculating ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>Jalankan Flowchart <PlaySquare className="w-4 h-4" /></>
              )}
            </button>
          </form>

          {/* Layar Output */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <span className="block text-xs text-slate-400 mb-2 font-mono uppercase tracking-wider">Layar Output</span>
            <AnimatePresence mode="wait">
              {result !== null && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-center font-mono text-2xl font-bold">
                  = {result}
                </motion.div>
              )}
              {error !== null && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                  <AlertCircle className="w-5 h-5" /> {error}
                </motion.div>
              )}
              {result === null && error === null && (
                <div className="bg-dark-900 border border-white/10 text-slate-600 p-4 rounded-xl text-center font-mono text-xl">
                  -
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Panel Log (System Trace) */}
        <div className="glass-card p-0 overflow-hidden flex flex-col h-[500px]">
          <div className="bg-dark-900 border-b border-white/10 p-4">
            <span className="font-mono text-sm font-semibold text-slate-300">Log Eksekusi Sistem</span>
          </div>
          <div className="p-4 flex-1 overflow-y-auto font-mono text-xs space-y-2 custom-scrollbar">
            {logs.length === 0 ? (
              <p className="text-slate-600 italic">Menunggu input pengguna...</p>
            ) : (
              logs.map((log) => (
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} key={log.id}
                  className={`border-l-2 pl-3 py-1 ${
                    log.type === 'error' ? 'border-red-500 text-red-400' :
                    log.type === 'warning' ? 'border-amber-500 text-amber-300' :
                    log.type === 'success' ? 'border-emerald-500 text-emerald-400' :
                    'border-blue-500 text-slate-300'
                  }`}>
                  {log.msg}
                </motion.div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}