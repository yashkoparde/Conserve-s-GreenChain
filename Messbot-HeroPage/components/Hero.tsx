
import React from 'react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import ComponentLabel from './ComponentLabel';

interface HeroProps {
  progress: MotionValue<number>;
}

const Hero: React.FC<HeroProps> = ({ progress }) => {
  // Text Animations
  const titleOpacity = useTransform(progress, [0, 0.12], [1, 0]);
  const titleY = useTransform(progress, [0, 0.12], [0, -50]);
  
  // Model Transformation
  const modelScale = useTransform(progress, [0, 0.2, 0.8], [0.85, 1, 1.1]);
  const modelY = useTransform(progress, [0, 0.2], ["10vh", "0vh"]);

  // Reveal Stages
  const lidY = useTransform(progress, [0.15, 0.45], [0, -280]);
  const lidRotate = useTransform(progress, [0.15, 0.45], [0, -5]);
  
  const shellOpacity = useTransform(progress, [0.4, 0.65], [1, 0.05]);
  const shellScale = useTransform(progress, [0.4, 0.65], [1, 1.05]);
  
  const internalReveal = useTransform(progress, [0.35, 0.55], [0, 1]);
  const internalScale = useTransform(progress, [0.35, 0.55], [0.95, 1]);

  // Labels
  const labelGroup1 = useTransform(progress, [0.3, 0.5], [0, 1]); // Brains
  const labelGroup2 = useTransform(progress, [0.5, 0.7], [0, 1]); // Weight
  const labelGroup3 = useTransform(progress, [0.7, 0.9], [0, 1]); // Movement

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />

      {/* Hero Content */}
      <motion.div 
        style={{ opacity: titleOpacity, y: titleY }}
        className="absolute z-50 text-center pointer-events-none"
      >
        <h1 className="text-9xl md:text-[14rem] font-black tracking-tighter text-white leading-none">
          MessBot
        </h1>
        <div className="mt-4 flex flex-col items-center gap-2">
          <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide max-w-xl">
            Autonomous food-waste intelligence
          </p>
          <div className="h-px w-24 bg-emerald-500 my-4" />
          <span className="text-xs uppercase tracking-[0.6em] text-emerald-500 font-bold">
            Measure. Move. Convert.
          </span>
        </div>
      </motion.div>

      {/* THE MESSBOT MODEL */}
      <motion.div 
        style={{ scale: modelScale, y: modelY }}
        className="relative z-10 w-[320px] h-[520px] flex flex-col items-center"
      >
        
        {/* TOP LID - Premium Pearl White */}
        <motion.div 
          style={{ y: lidY, rotateX: lidRotate }}
          className="absolute top-0 w-full h-[60px] z-40"
        >
          <div className="w-full h-full bg-[#F5F5F7] rounded-t-[50px] rounded-b-[10px] shadow-[0_10px_40px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,1)] flex items-center justify-center border-b border-black/5">
             {/* Sensor Lens */}
             <div className="w-16 h-1.5 bg-black/80 rounded-full shadow-inner" />
          </div>
        </motion.div>

        {/* MAIN OUTER SHELL */}
        <motion.div 
          style={{ opacity: shellOpacity, scale: shellScale }}
          className="absolute top-[65px] w-full h-[380px] z-30 overflow-hidden"
        >
          <div className="w-full h-full bg-gradient-to-b from-[#F5F5F7] to-[#E2E2E7] rounded-[20px] shadow-[0_40px_80px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.5)] border border-white/20">
            {/* Subtle Design Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-black/5" />
            <div className="absolute bottom-1/4 left-0 w-full h-px bg-black/5" />
            {/* Logo placeholder */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 text-4xl font-black tracking-tighter text-black rotate-90">
              CONSERVE
            </div>
          </div>
        </motion.div>

        {/* AUTONOMOUS BASE */}
        <motion.div 
          className="absolute bottom-0 w-[340px] h-[80px] z-30"
        >
          <div className="w-full h-full bg-[#1A1A1A] rounded-[25px] border border-white/5 shadow-2xl flex items-end justify-around pb-4">
             {/* Hidden Wheels Recess */}
             <div className="w-16 h-4 bg-black rounded-full shadow-inner" />
             <div className="w-16 h-4 bg-black rounded-full shadow-inner" />
          </div>
        </motion.div>

        {/* INTERNAL TECH SKELETON (The Reveal) */}
        <motion.div 
          style={{ opacity: internalReveal, scale: internalScale }}
          className="absolute top-[80px] w-[260px] h-[340px] z-20 flex flex-col items-center"
        >
          {/* Internal Chassis */}
          <div className="absolute inset-0 bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-inner overflow-hidden">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)]" />
          </div>

          {/* Brain - ESP32 */}
          <motion.div className="mt-8 relative w-20 h-16 bg-[#151515] border border-white/10 rounded flex flex-col items-center justify-center">
            <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/40 rounded shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse" />
            <span className="mt-1 text-[6px] text-emerald-500 font-bold uppercase tracking-tighter">Core Processor</span>
          </motion.div>

          {/* Load Cell Array */}
          <div className="mt-12 w-full px-6 flex flex-col gap-4">
            <div className="h-2 w-full bg-neutral-800 rounded-full flex overflow-hidden">
              <div className="h-full w-1/3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            </div>
            <div className="h-16 w-full bg-neutral-900 border border-white/5 rounded-lg flex items-center justify-center text-[8px] text-neutral-600 uppercase tracking-widest font-bold">
              Weight Analysis Grid
            </div>
          </div>

          {/* Motors */}
          <div className="mt-auto mb-4 w-full px-4 flex justify-between">
            <div className="w-10 h-10 rounded bg-gradient-to-br from-neutral-800 to-black border border-white/10" />
            <div className="w-10 h-10 rounded bg-gradient-to-br from-neutral-800 to-black border border-white/10" />
          </div>
        </motion.div>

        {/* COMPONENT LABELS */}
        <ComponentLabel 
          opacity={labelGroup1}
          side="left"
          yOffset="-140px"
          xOffset="-200px"
          title="ESP32 CORE"
          description="Industrial-grade automation controller"
          color="emerald"
        />
        <ComponentLabel 
          opacity={labelGroup1}
          side="right"
          yOffset="-200px"
          xOffset="220px"
          title="Ultrasonic AI"
          description="Fill level and proximity detection"
          color="blue"
        />
        <ComponentLabel 
          opacity={labelGroup2}
          side="right"
          yOffset="0px"
          xOffset="240px"
          title="RFID AUTH"
          description="Secure user and waste tracking"
          color="purple"
        />
        <ComponentLabel 
          opacity={labelGroup2}
          side="left"
          yOffset="60px"
          xOffset="-220px"
          title="LOAD SENSORS"
          description="Precision weight measurement"
          color="amber"
        />
        <ComponentLabel 
          opacity={labelGroup3}
          side="left"
          yOffset="140px"
          xOffset="-200px"
          title="HX711 BRIDGE"
          description="Low-noise signal amplification"
          color="amber"
        />
        <ComponentLabel 
          opacity={labelGroup3}
          side="right"
          yOffset="180px"
          xOffset="220px"
          title="L298N DRIVE"
          description="Dual-channel locomotion control"
          color="emerald"
        />

      </motion.div>
    </div>
  );
};

export default Hero;
