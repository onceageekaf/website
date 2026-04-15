import DotBackground from "@/components/chrome/DotBackground"

const ROWS = [
  { stage: "Disclosure", current: "5 hours", ttos: "30 mins" },
  { stage: "Evaluation", current: "40 hours", ttos: "1 hour" },
  { stage: "Protection", current: "6 weeks", ttos: "2 days" },
  { stage: "Marketing", current: "3 months", ttos: "1 week" },
  { stage: "Licensing", current: "6+ months", ttos: "1+ month" },
] as const

export default function BlazinglyFastSection() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible py-16 md:py-24">
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mb-8 text-center md:mb-12">
          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">Blazingly fast.</h2>
          <p className="mt-2 text-[#55565d]">Turn hours into minutes.</p>
        </div>
        <div className="overflow-hidden rounded-2xl border border-[#e1e3e9] bg-white shadow-[0_1px_0_rgba(0,0,0,.04),0_12px_40px_rgba(26,34,48,.08)]">
          <div className="grid grid-cols-3 border-b border-[#eceef3] bg-[#f8f8fa] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#6b6d75] md:px-6">
            <span>Stage</span>
            <span className="text-center">Current</span>
            <span className="text-center">ttOS</span>
          </div>
          {ROWS.map((row) => (
            <div key={row.stage} className="grid grid-cols-3 items-center border-b border-[#f0f1f4] px-4 py-3 last:border-b-0 md:px-6">
              <p className="text-sm font-medium text-[#2f3137] md:text-base">{row.stage}</p>
              <p className="text-center text-sm text-[#6b6d75] line-through decoration-[#9ea2ad] md:text-base">{row.current}</p>
              <p className="text-center text-sm font-semibold text-[#2f3137] md:text-base">{row.ttos}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#6b6d75]">
          6 months to license is best case scenario. Best case scenario is 1 month with ttOS.
        </p>
        <p className="mt-2 text-center text-xs text-[#6b6d75]">
          Baseline timings drawn from 16 years of technology transfer practice across five universities and CERN.
        </p>
      </div>
    </section>
  )
}
