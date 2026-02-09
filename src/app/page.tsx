import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto pt-20 pb-32 px-6">
      {/* Introduction */}
      <section className="space-y-6">
        <h1 className="text-sm font-medium tracking-tight text-zinc-950">
          Aziz <span className="text-zinc-400">— B2B Marketer</span>
        </h1>
        
        <p className="text-[15px] leading-relaxed text-zinc-600 font-light">
          Three years of building growth engines in the B2B space. 
          Currently based in Tunis, focused on the intersection of 
          precision data and human-centric marketing.
        </p>

        {/* Navigation - Horizontal & Refined */}
        <nav className="flex gap-6 pt-4">
          <Link href="/writing" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
            Writing
          </Link>
          <Link href="/work" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
            Work
          </Link>
          <Link href="/ideas" className="text-xs uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors">
            Ideas
          </Link>
        </nav>
      </section>

      <hr className="my-16 border-zinc-100" />

      {/* Featured Section (Collison Style) */}
      <section className="space-y-12">
        <div className="group">
          <p className="text-[13px] text-zinc-400 mb-2">01. Strategy</p>
          <h2 className="text-lg font-medium tracking-tight group-hover:underline decoration-zinc-300 underline-offset-4">
            The Industrialist Approach to B2B Growth
          </h2>
          <p className="text-sm text-zinc-500 font-light mt-2">
            Why most marketing funnels are built with "carelessness" and how to 
            engineer them for long-term durability.
          </p>
        </div>
        
        <div className="group">
          <p className="text-[13px] text-zinc-400 mb-2">02. Measurement</p>
          <h2 className="text-lg font-medium tracking-tight group-hover:underline decoration-zinc-300 underline-offset-4">
            Beyond the CTR: Values that Matter
          </h2>
          <p className="text-sm text-zinc-500 font-light mt-2">
            A deep dive into the metrics Silicon Valley founders actually care about.
          </p>
        </div>
      </section>
    </div>
  )
}