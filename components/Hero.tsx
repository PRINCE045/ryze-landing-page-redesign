"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax depth
  const outerY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -35]);
  const coreY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/15 md:bg-orange-500/20 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 items-center gap-20 px-6 pt-32">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/80">
            RYZE — AI Powered Automation for Modern Teams
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            More Than{" "}
            <span className="text-orange-500">Just Automation</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            Ryze transforms conversations, workflows, and data into intelligent
            actions using next-generation AI systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <button className="rounded-lg bg-orange-500 px-8 py-4 font-medium text-black hover:bg-orange-600 transition">
              Get Started
            </button>
            <button className="rounded-lg border border-white/30 px-8 py-4 font-medium text-white hover:border-white transition">
              Book a Demo
            </button>
          </div>
        </div>

        {/* RIGHT — AI CORE (PARALLAX) */}
        <div className="relative flex items-center justify-center">
          {/* Outer ring */}
          <motion.div
            style={{ y: outerY }}
            className="absolute h-[520px] w-[520px] rounded-full border border-white/10"
          />

          {/* Mid ring */}
          <motion.div
            style={{ y: midY }}
            className="absolute h-[380px] w-[380px] rounded-full border border-white/20"
          />

          {/* Core */}
          <motion.div
            style={{ y: coreY }}
            className="absolute h-[220px] w-[220px] rounded-full border border-white flex items-center justify-center"
          >
            <span className="text-sm tracking-widest text-orange-400">
              AI CORE
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
