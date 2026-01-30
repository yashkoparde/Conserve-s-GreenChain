
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 35,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full h-[600vh] bg-[#050505]">
      <Navbar />
      
      {/* Sticky container for the visual reveal */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <Hero progress={smoothProgress} />
      </div>

      {/* Spacer sections to drive scroll */}
      <div className="h-[500vh] pointer-events-none" />

      {/* Footer / Final Message */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6 z-10 bg-black">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <div className="w-20 h-px bg-emerald-500 mx-auto mb-8" />
          <h2 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter text-white">
            JOIN THE <br/>REVOLUTION<span className="text-emerald-500">.</span>
          </h2>
          <p className="text-neutral-500 text-lg md:text-xl font-light mb-12 max-w-lg mx-auto uppercase tracking-widest">
            Efficiency is the only way forward.
          </p>
          <button className="group relative px-12 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all duration-500">
            Get Started
            <div className="absolute inset-0 rounded-full border border-white group-hover:scale-125 group-hover:opacity-0 transition-all duration-500" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
