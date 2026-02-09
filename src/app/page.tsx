import Link from 'next/link'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Bio Section */}
      <section className="space-y-4">
        <h1 className="text-sm font-medium tracking-tight">
          Aziz <span className="text-zinc-400">— B2B Marketer</span>
        </h1>
        <p className="text-[15px] leading-relaxed text-zinc-500 font-light max-w-md">
          Three years of building growth engines. Currently based in Tunis, 
          focused on engineering durable B2B marketing systems.
        </p>
        
        <nav className="flex gap-6 pt-2">
          <Link href="/writing" className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-950 transition-colors">
            Writing
          </Link>
          <Link href="/work" className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-950 transition-colors">
            Work
          </Link>
          <Link href="/ideas" className="text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-950 transition-colors">
            Ideas
          </Link>
        </nav>
      </section>

      {/* Content List - Collison Style */}
      <section className="space-y-10">
        <div className="group cursor-pointer">
          <p className="text-[12px] text-zinc-400 tabular-nums mb-1">2026</p>
          <h2 className="text-[16px] font-medium tracking-tight group-hover:text-zinc-600 transition-colors">
            The Industrialist Approach to B2B Growth
          </h2>
        </div>

        <div className="group cursor-pointer">
          <p className="text-[12px] text-zinc-400 tabular-nums mb-1">2025</p>
          <h2 className="text-[16px] font-medium tracking-tight group-hover:text-zinc-600 transition-colors">
            Beyond the CTR: Values that Matter in SV
          </h2>
        </div>
      </section>

      <footer className="pt-16">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <p className="text-[12px] text-zinc-400 font-light">Available for select projects from Tunis</p>
        </div>
      </footer>
    </div>
  )
}