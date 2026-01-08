"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "500+", label: "Teams Using Ryze" },
  { value: "3×", label: "Faster Campaign Decisions" },
  { value: "24/7", label: "AI Monitoring" },
  { value: "99.9%", label: "Platform Uptime" },
];

export default function Metrics() {
  return (
    <section className="relative py-28 bg-black text-white border-t border-white/10 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center"
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="text-4xl font-extrabold text-orange-500">
                {m.value}
              </div>
              <div className="mt-2 text-sm text-white/60 uppercase tracking-widest">
                {m.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
