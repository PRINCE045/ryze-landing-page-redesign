"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const testimonials = [
  {
    quote:
      "Ryze completely transformed how we handle automation. What used to take hours is now handled in minutes.",
    name: "Amit Verma",
    role: "Product Manager, FinTech Startup",
  },
  {
    quote:
      "Our workflows are faster and smarter with Ryze. The insights help us make better decisions across teams.",
    name: "Sarah Johnson",
    role: "Head of Operations, SaaS Company",
  },
  {
    quote:
      "The AI feels intuitive and reliable. Ryze fits seamlessly into our enterprise workflow.",
    name: "Rahul Mehta",
    role: "CTO, Enterprise Solutions",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-36 bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold">Teams Trust Ryze</h2>
          <p className="mt-4 text-white/60">
            See how teams across industries use Ryze to work smarter.
          </p>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 space-y-20"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={item}>
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                “{t.quote}”
              </p>

              <div className="mt-6 text-xs uppercase tracking-widest text-white/50">
                {t.name}
              </div>

              <div className="mt-1 text-sm text-white/40">
                {t.role}
              </div>

              {i !== testimonials.length - 1 && (
                <div className="mx-auto mt-20 h-px w-24 bg-white/10" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}