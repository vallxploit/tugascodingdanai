import React, { lazy, Suspense } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy load components untuk optimasi performa
const Pengenalan = lazy(() => import('./components/Pengenalan'));
const SimbolFlowchart = lazy(() => import('./components/SimbolFlowchart'));
const FlowchartUtama = lazy(() => import('./components/FlowchartUtama'));
const PenjelasanLangkah = lazy(() => import('./components/PenjelasanLangkah'));
const DemoKalkulator = lazy(() => import('./components/DemoKalkulator'));

const LoadingFallback = () => (
  <div className="w-full h-40 flex flex-col items-center justify-center text-slate-500 font-mono text-sm gap-3">
    <div className="w-6 h-6 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
    Memuat modul pembelajaran...
  </div>
);

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
      <div className="bg-grid" aria-hidden="true" />
      <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <Header />
      
      <main className="relative z-10 w-full flex flex-col items-center px-4 sm:px-8">
        <Hero />
        <Suspense fallback={<LoadingFallback />}>
          <Pengenalan />
          <SimbolFlowchart />
          <FlowchartUtama />
          <PenjelasanLangkah />
          <DemoKalkulator />
        </Suspense>
      </main>

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-white/5 w-full relative z-10 mt-10 bg-dark-900/50">
        <p className="font-medium text-slate-300">Tugas Berpikir Komputasi - Kelas X SMK</p>
        <p className="mt-2 text-slate-500">Membangun logika dasar pemrograman melalui analisis flowchart.</p>
      </footer>
    </ReactLenis>
  );
}