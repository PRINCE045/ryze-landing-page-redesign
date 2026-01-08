"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="relative py-36 bg-black text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h2 className="text-4xl font-bold">
            Key Features That Empower Your Workflow
          </h2>
          <p className="mt-4 text-white/60">
            Designed for intelligence, speed, and scale.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Card 1 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition"
          >
            <div className="text-orange-500 text-xl">⚡</div>
            <h3 className="mt-4 text-xl font-semibold">
              AI Workflow Automation
            </h3>
            <p className="mt-2 text-white/60">
              Adaptive automation that improves over time and removes manual
              bottlenecks from your operations.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition"
          >
            <div className="text-orange-500 text-xl">📊</div>
            <h3 className="mt-4 text-xl font-semibold">
              Real-Time Intelligent Insights
            </h3>
            <p className="mt-2 text-white/60">
              Convert conversations and live data streams into actionable
              insights instantly.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition"
          >
            <div className="text-orange-500 text-xl">🔗</div>
            <h3 className="mt-4 text-xl font-semibold">
              Seamless Integrations
            </h3>
            <p className="mt-2 text-white/60">
              Connect Ryze with your existing tools and data sources
              effortlessly.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            variants={item}
            whileHover={{ y: -6 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 transition"
          >
            <div className="text-orange-500 text-xl">🔒</div>
            <h3 className="mt-4 text-xl font-semibold">
              Enterprise-Grade Security
            </h3>
            <p className="mt-2 text-white/60">
              Built with privacy, compliance, and security at the core.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
