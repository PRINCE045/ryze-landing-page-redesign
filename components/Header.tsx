import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        
        {/* Logo */}
        <Link href="/" className="text-lg font-semibold">
          Ryze
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm text-white/80">
          <Link href="/features" className="hover:text-white">
            Features
          </Link>

          <Link href="/pricing" className="hover:text-white">
            Pricing
          </Link>

          <button className="rounded-md border border-white/20 px-4 py-2 hover:border-white">
            Book a Demo
          </button>
        </nav>
      </div>
    </header>
  );
}
