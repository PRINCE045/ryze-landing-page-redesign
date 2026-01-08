"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Connect Your Data",
    desc: "Integrate ad accounts, conversations, and workflows in minutes.",
  },
  {
    title: "AI Understands Context",
    desc: "Ryze analyzes intent, performance, and patterns continuously.",
  },
  {
    title: "Autonomous Action",
    desc: "The AI executes optimizations and recommendations automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-40 overflow-hidden bg-black text-white">
      {/* subtle divider */}
      <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-white/10" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-xl">
          <h2 className="text-4xl font-bold leading-tight">
            How Ryze Works
          </h2>
          <p className="mt-4 text-white/60">
            A simple system designed to feel intelligent, not complex.
          </p>
        </div>

        {/* horizontal flow */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex gap-10 overflow-x-auto pb-6"
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="min-w-[320px] rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <div className="text-sm text-orange-500 tracking-widest mb-4">
                STEP {i + 1}
              </div>
              <h3 className="text-2xl font-semibold">
                {step.title}
              </h3>
              <p className="mt-3 text-white/60">
                {step.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
