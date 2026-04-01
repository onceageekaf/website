import DotBackground from "@/components/chrome/DotBackground"
import { CheckCircle2 } from "lucide-react"

const UNI_ROWS = [
  { flag: "🇬🇧", name: "University A", price: "£2,000", time: "100 samples · 6 weeks" },
  { flag: "🇺🇸", name: "University B", price: "$2,200", time: "100 samples · 6 weeks" },
  { flag: "🇨🇦", name: "University C", price: "$2,100", time: "100 samples · 7 weeks" },
  { flag: "🇯🇵", name: "University D", price: "¥280,000", time: "100 samples · 5 weeks" },
  { flag: "🇨🇭", name: "University E", price: "CHF 2,400", time: "100 samples · 6 weeks" },
  { flag: "🇸🇬", name: "University F", price: "SGD 3,100", time: "100 samples · 7 weeks" },
] as const

function SourcingResultsCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e8e8ec] bg-white shadow-lg shadow-[0_1px_0_rgba(0,0,0,.04),0_12px_40px_rgba(26,34,48,.06)]">
      <div className="border-b border-[#e8e8ec] bg-[#f5f4f0] px-3 py-2.5 sm:px-4">
        <p className="text-center font-mono text-[11px] font-semibold leading-snug text-[#6b6d75]">
          Novel Composite Material · Sourcing results — 6 universities found
        </p>
      </div>
      <div className="divide-y divide-[#ececee] px-3 sm:px-4">
        {UNI_ROWS.map((row) => (
          <div
            key={row.name}
            className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3 sm:grid-cols-[1.2fr_0.95fr_0.85fr] sm:gap-4 sm:py-3.5"
          >
            <div className="flex min-w-0 items-center gap-2">
              <span className="text-base leading-none" aria-hidden>
                {row.flag}
              </span>
              <span className="text-sm font-semibold text-[#2f3137]">{row.name}</span>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold tabular-nums text-[#2f3137]">{row.price}</div>
              <div className="mt-0.5 text-[11px] text-[#6b6d75]">{row.time}</div>
            </div>
            <div className="hidden sm:block">
              <p className="flex items-center gap-1 text-[11px] leading-tight text-[#6b6d75]">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                <span>Agreement</span>
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] leading-tight text-[#6b6d75]">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                <span>Deliverables</span>
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-[11px] leading-tight text-[#6b6d75]">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                <span>Order</span>
              </p>
            </div>
            <div className="sm:hidden col-span-2">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] leading-tight text-[#6b6d75]">
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                  Agreement
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                  Deliverables
                </span>
                <span className="inline-flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                  Order
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ManufacturingSection() {
  return (
    <section
      id="manufacturing"
      className="relative scroll-mt-24 overflow-hidden border-t border-[#e8e8ec] bg-[#f6f6f7] py-16 md:py-24"
      aria-labelledby="manufacturing-heading"
    >
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <svg
          viewBox="0 0 980 180"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="AtomFactory"
          className="h-10 w-auto md:h-12"
        >
          <title>AtomFactory</title>
          <text
            x="20"
            y="128"
            fill="#000000"
            fontFamily="Cormorant Garamond, EB Garamond, Baskerville, Georgia, serif"
            fontSize="124"
            fontStyle="italic"
            fontWeight="600"
            letterSpacing="-3"
            opacity="0"
          >
            af
            <animate attributeName="opacity" begin="0s" dur="700ms" from="0" to="1" fill="freeze" />
            <animateTransform
              attributeName="transform"
              type="translate"
              begin="0s"
              dur="700ms"
              values="0 10; 0 0"
              fill="freeze"
            />
          </text>
        </svg>
        <h2
          id="manufacturing-heading"
          className="mt-3 whitespace-nowrap text-[clamp(1.35rem,3.6vw,3rem)] font-semibold leading-tight tracking-[-0.04em] text-[#2f3137]"
        >
          <span
            style={{ fontFamily: "Cormorant Garamond, EB Garamond, Baskerville, Georgia, serif" }}
            className="text-[1.2em] font-semibold italic"
          >
            a
          </span>
          tom{" "}
          <span
            style={{ fontFamily: "Cormorant Garamond, EB Garamond, Baskerville, Georgia, serif" }}
            className="text-[1.2em] font-semibold italic"
          >
            f
          </span>
          actory
        </h2>
        <div className="mt-6 max-w-none text-2xl font-normal leading-tight tracking-[-0.04em] text-[#2f3137] md:text-3xl">
          <p>
            Materials science is foundational to humanity&apos;s future. Every civilisational era has been defined by the
            materials it mastered.
          </p>
          <p className="mt-4">
            AI is accelerating discovery — the bottleneck is no longer finding new materials.
            <br />
            <span className="font-semibold">It&apos;s manufacturing them.</span>
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          <div>
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">
              2,000 samples.
              <br />
              Zero capex.
            </h2>
            <p className="mt-5 max-w-[480px] text-[15px] leading-relaxed text-[#4c4d56] md:text-base">
              Atom Factory uses CLE to unlock university infrastructure globally — equipment, cleanrooms, synthesis
              facilities — by making contractual access fast, standardised, and programmable. Commission production runs
              across multiple labs simultaneously, with milestone-linked payments.
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-base font-semibold leading-tight tracking-[-0.02em] text-[#2f3137] md:text-lg">
                20 labs × 100 samples = 2,000 samples.
              </p>
              
              <p className="max-w-[520px] text-base leading-[1.7] text-[#6b6d75] md:text-lg">
                Running across 20 labs also surfaces reproducibility data — where errors cluster and what fails to
                scale — before you commit to a pilot plant.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-8 md:gap-10">
              {[
                { n: "2,000", sub: "samples, first run" },
                { n: "20+", sub: "labs in parallel" },
                { n: "$0", sub: "capex required" },
              ].map((m) => (
                <div key={m.sub}>
                  <div className="text-2xl font-semibold leading-none tracking-[-0.04em] text-[#2f3137] tabular-nums md:text-3xl">
                    {m.n}
                  </div>
                  <div className="mt-1 text-[13px] text-[#6b6d75]">{m.sub}</div>
                </div>
              ))}
            </div>
          </div>
          <SourcingResultsCard />
        </div>
      </div>
    </section>
  )
}

export default function CleEngagementSection() {
  return <ManufacturingSection />
}
