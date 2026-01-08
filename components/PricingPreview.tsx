"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function PricingPreview() {
  return (
    <section className="relative pt-44 pb-36 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <p className="mt-4 text-white/60">
          Choose a plan that fits your team’s needs.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Starter */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-8 transition"
          >
            <h3 className="text-xl font-semibold">Starter</h3>
            <p className="mt-3 text-white/60">
              Best for individuals getting started.
            </p>
            <button className="mt-6 w-full rounded-lg border border-white/20 py-3 hover:border-white transition">
              Get Started
            </button>
          </motion.div>

          {/* Pro */}
          <motion.div
            variants={card}
            whileHover={{ y: -8 }}
            className="relative rounded-xl bg-orange-500 p-8 text-black shadow-[0_0_80px_rgba(249,115,22,0.35)]"
          >
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-3 opacity-80">
              Advanced automation for growing teams.
            </p>
            <button className="mt-6 w-full rounded-lg bg-black py-3 text-white hover:bg-black/80 transition">
              Book a Demo
            </button>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            variants={card}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-8 transition"
          >
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-3 text-white/60">
              Custom AI solutions at scale.
            </p>
            <button className="mt-6 w-full rounded-lg border border-white/20 py-3 hover:border-white transition">
              Contact Sales
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}