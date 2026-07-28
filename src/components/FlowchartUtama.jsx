import React, { memo } from 'react';
import { motion } from 'framer-motion';

const Node = memo(({ type, text, color, delay }) => {
  let baseClass = "px-4 py-2 border shadow-lg backdrop-blur-md font-mono text-xs font-semibold z-10 flex items-center justify-center text-center leading-tight transition-transform hover:scale-105 cursor-default ";
  
  if (type === "terminator") baseClass += `rounded-full ${color}`;
  else if (type === "io") baseClass += `rounded-md skew-x-[-10deg] ${color}`;
  else if (type === "process") baseClass += `rounded-md ${color}`;
  else if (type === "decision") baseClass += `w-20 h-20 rotate-45 rounded-xl ${color}`;

  const InnerText = () => (
    <span dangerouslySetInnerHTML={{ __html: text }} className={
      type === "io" ? "skew-x-[10deg]" : type === "decision" ? "-rotate-45 text-[10px]" : ""
    } />
  );

  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay }}>
      <div className={baseClass}><InnerText /></div>
    </motion.div>
  );
});

const Line = ({ h = "h-8", delay = 0 }) => (
  <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 0.3, delay }} className={`w-[2px] bg-slate-500 relative ${h}`}>
    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400" />
  </motion.div>
);

export default function FlowchartUtama() {
  return (
    <section id="flowchart" className="w-full max-w-6xl py-24 border-t border-white/5 scroll-mt-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-heading font-bold mb-4">Flowchart Logika Kalkulator</h2>
        <p className="text-slate-400 text-base max-w-xl mx-auto mb-2">Representasi visual algoritma percabangan operasi matematika.</p>
        <span className="text-xs text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">(Geser ke kanan pada layar kecil untuk melihat keseluruhan)</span>
      </div>

      {/* Container dengan Horizontal Scroll untuk Mobile */}
      <div className="glass-card w-full p-8 overflow-x-auto custom-scrollbar relative flex flex-col items-center min-w-full">
        <div className="min-w-[800px] flex flex-col items-center pb-8">
          
          {/* Top Section */}
          <Node type="terminator" text="START" color="bg-blue-500/10 border-blue-400 text-blue-300" delay={0.1} />
          <Line delay={0.2} />
          <Node type="io" text="Buka Aplikasi" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={0.3} />
          <Line delay={0.4} />
          <Node type="io" text="Input Angka 1<br/>Input Angka 2<br/>Pilih Operasi" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={0.5} />
          <Line delay={0.6} />
          <Node type="process" text="Sistem Membaca Input" color="bg-emerald-500/10 border-emerald-400 text-emerald-300" delay={0.7} />
          <Line delay={0.8} h="h-12" />

          {/* Main Decision Matrix */}
          <div className="relative w-full flex flex-col items-center">
            
            <Node type="decision" text="Operasi<br/>Apa?" color="bg-amber-500/10 border-amber-400 text-amber-300" delay={0.9} />
            
            {/* Horizontal Distribution Line */}
            <div className="absolute top-[80px] w-[600px] flex justify-between px-[75px]">
              <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once:true }} transition={{ duration:0.5, delay: 1 }} className="h-[2px] bg-slate-500 absolute top-0 left-[75px] w-[450px]" />
            </div>

            {/* 4 Branches */}
            <div className="w-[700px] flex justify-between mt-4 relative">
              
              {/* Branch + */}
              <div className="flex flex-col items-center w-[150px]">
                <div className="w-[2px] h-6 bg-slate-500 mb-1 relative"><div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400" /></div>
                <span className="font-mono text-xs text-amber-400 font-bold mb-2 bg-dark-900 px-2 rounded">Jika [+]</span>
                <Node type="process" text="Angka 1 + Angka 2" color="bg-emerald-500/10 border-emerald-400 text-emerald-300" delay={1.1} />
                <Line delay={1.2} />
                <Node type="io" text="Tampilkan Hasil" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={1.3} />
                <Line delay={1.4} />
                <Node type="terminator" text="END" color="bg-slate-700 border-slate-500 text-slate-300" delay={1.5} />
              </div>

              {/* Branch - */}
              <div className="flex flex-col items-center w-[150px]">
                <div className="w-[2px] h-6 bg-slate-500 mb-1 relative"><div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400" /></div>
                <span className="font-mono text-xs text-amber-400 font-bold mb-2 bg-dark-900 px-2 rounded">Jika [-]</span>
                <Node type="process" text="Angka 1 - Angka 2" color="bg-emerald-500/10 border-emerald-400 text-emerald-300" delay={1.1} />
                <Line delay={1.2} />
                <Node type="io" text="Tampilkan Hasil" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={1.3} />
                <Line delay={1.4} />
                <Node type="terminator" text="END" color="bg-slate-700 border-slate-500 text-slate-300" delay={1.5} />
              </div>

              {/* Branch * */}
              <div className="flex flex-col items-center w-[150px]">
                <div className="w-[2px] h-6 bg-slate-500 mb-1 relative"><div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400" /></div>
                <span className="font-mono text-xs text-amber-400 font-bold mb-2 bg-dark-900 px-2 rounded">Jika [x]</span>
                <Node type="process" text="Angka 1 x Angka 2" color="bg-emerald-500/10 border-emerald-400 text-emerald-300" delay={1.1} />
                <Line delay={1.2} />
                <Node type="io" text="Tampilkan Hasil" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={1.3} />
                <Line delay={1.4} />
                <Node type="terminator" text="END" color="bg-slate-700 border-slate-500 text-slate-300" delay={1.5} />
              </div>

              {/* Branch / (Special with Sub-Decision) */}
              <div className="flex flex-col items-center w-[220px]">
                <div className="w-[2px] h-6 bg-slate-500 mb-1 relative"><div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-r-[4px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400" /></div>
                <span className="font-mono text-xs text-amber-400 font-bold mb-2 bg-dark-900 px-2 rounded">Jika [÷]</span>
                <Node type="decision" text="Angka 2<br/>== 0?" color="bg-red-500/10 border-red-400 text-red-300" delay={1.1} />
                
                <div className="relative flex w-full justify-between mt-2 px-4">
                  {/* Div ZERO - YA */}
                  <div className="flex flex-col items-center">
                     <span className="font-mono text-[10px] text-red-400 font-bold">YA</span>
                     <Line h="h-4" delay={1.2} />
                     <Node type="io" text="Output:<br/>'Tidak dapat membagi 0'" color="bg-red-500/10 border-red-400 text-red-300" delay={1.3} />
                     <Line delay={1.4}/>
                     <Node type="terminator" text="END" color="bg-slate-700 border-slate-500 text-slate-300" delay={1.5} />
                  </div>
                  
                  {/* Div ZERO - TIDAK */}
                  <div className="flex flex-col items-center">
                     <span className="font-mono text-[10px] text-emerald-400 font-bold">TIDAK</span>
                     <Line h="h-4" delay={1.2} />
                     <Node type="process" text="Angka 1 ÷ Angka 2" color="bg-emerald-500/10 border-emerald-400 text-emerald-300" delay={1.3} />
                     <Line delay={1.4} />
                     <Node type="io" text="Tampilkan Hasil" color="bg-purple-500/10 border-purple-400 text-purple-300" delay={1.5} />
                     <Line delay={1.6}/>
                     <Node type="terminator" text="END" color="bg-slate-700 border-slate-500 text-slate-300" delay={1.7} />
                  </div>
                </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}