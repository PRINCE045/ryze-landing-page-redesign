export default function FeaturesPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Platform Capabilities
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            Powerful AI Features <br />
            <span className="text-orange-500">Built for Scale</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            Ryze combines automation, intelligence, and security to help teams
            move faster and make smarter decisions.
          </p>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-2 gap-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-10 hover:border-orange-500/40 transition"
            >
              <div className="text-3xl">{feature.icon}</div>

              <h3 className="mt-6 text-3xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-4 text-white/60 leading-relaxed">
                {feature.description}
              </p>

              <ul className="mt-6 space-y-3 text-white/70">
                {feature.points.map((point, idx) => (
                  <li key={idx}>• {point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">
          Ready to See Ryze in Action?
        </h2>

        <p className="mt-4 text-white/60">
          Discover how AI-driven workflows can transform your business.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="px-10 py-4 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-600 transition">
            Get Started
          </button>

          <button className="px-10 py-4 border border-white/30 rounded-lg hover:border-white transition">
            Book a Demo
          </button>
        </div>
      </section>
    </main>
  );
}

/* DATA */
const features = [
  {
    icon: "⚡",
    title: "AI Workflow Automation",
    description:
      "Automate complex workflows with adaptive AI logic that improves continuously.",
    points: [
      "No-code automation setup",
      "Adaptive learning models",
      "Reduced operational overhead",
    ],
  },
  {
    icon: "📊",
    title: "Real-Time Intelligent Insights",
    description:
      "Turn conversations and data streams into insights that drive decisions.",
    points: [
      "Live analytics dashboards",
      "Conversation intelligence",
      "Actionable recommendations",
    ],
  },
  {
    icon: "🔗",
    title: "Seamless Integrations",
    description:
      "Connect Ryze with your existing tools and infrastructure effortlessly.",
    points: [
      "CRM & SaaS integrations",
      "API-first architecture",
      "Fast onboarding",
    ],
  },
  {
    icon: "🔒",
    title: "Enterprise-Grade Security",
    description:
      "Security, privacy, and compliance built into every layer.",
    points: [
      "SOC2-ready architecture",
      "Data encryption",
      "Role-based access control",
    ],
  },
];
