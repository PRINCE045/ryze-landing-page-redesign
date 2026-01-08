export default function PricingPage() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">
            Pricing
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold">
            Simple, Transparent <br />
            <span className="text-orange-500">Pricing for Every Team</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-white/70">
            Choose a plan that fits your needs today. Scale seamlessly as your
            team grows.
          </p>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* STARTER */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-2xl font-semibold">Starter</h3>
            <p className="mt-3 text-white/60">
              For individuals and small teams exploring AI automation.
            </p>

            <div className="mt-8 text-4xl font-bold">
              Free
            </div>

            <ul className="mt-8 space-y-3 text-white/70">
              <li>• Basic automation workflows</li>
              <li>• Limited integrations</li>
              <li>• Community support</li>
            </ul>

            <button className="mt-10 w-full rounded-lg border border-white/30 py-3 hover:border-white transition">
              Get Started
            </button>
          </div>

          {/* PRO (HIGHLIGHTED) */}
          <div className="relative rounded-2xl border border-orange-500/50 bg-orange-500/10 p-10 shadow-[0_0_50px_-10px_rgba(249,115,22,0.4)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-sm font-medium text-black">
              Most Popular
            </div>

            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="mt-3 text-white/70">
              For growing teams that rely on AI-driven workflows.
            </p>

            <div className="mt-8 text-4xl font-bold">
              $49<span className="text-lg font-normal">/month</span>
            </div>

            <ul className="mt-8 space-y-3 text-white/80">
              <li>• Advanced automation</li>
              <li>• Real-time insights</li>
              <li>• Priority support</li>
              <li>• Team collaboration</li>
            </ul>

            <button className="mt-10 w-full rounded-lg bg-orange-500 py-3 font-medium text-black hover:bg-orange-600 transition">
              Book a Demo
            </button>
          </div>

          {/* ENTERPRISE */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-2xl font-semibold">Enterprise</h3>
            <p className="mt-3 text-white/60">
              Custom AI solutions for large organizations.
            </p>

            <div className="mt-8 text-4xl font-bold">
              Custom
            </div>

            <ul className="mt-8 space-y-3 text-white/70">
              <li>• Custom AI models</li>
              <li>• Dedicated infrastructure</li>
              <li>• Enterprise security</li>
              <li>• SLA & onboarding support</li>
            </ul>

            <button className="mt-10 w-full rounded-lg border border-white/30 py-3 hover:border-white transition">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="py-32 border-t border-white/10 text-center">
        <h2 className="text-4xl font-bold">
          Not Sure Which Plan Fits?
        </h2>

        <p className="mt-4 text-white/60">
          Talk to our team and we’ll help you choose the right solution.
        </p>

        <div className="mt-10">
          <button className="px-10 py-4 bg-orange-500 text-black rounded-lg font-medium hover:bg-orange-600 transition">
            Talk to Sales
          </button>
        </div>
      </section>
    </main>
  );
}
