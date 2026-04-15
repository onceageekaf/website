import Section from "@/components/shared/Section"

const ROWS = [
  { stage: "Disclosure", current: "5 hours", ttos: "30 mins" },
  { stage: "Evaluation", current: "40 hours", ttos: "1 hour" },
  { stage: "Protection", current: "6 weeks", ttos: "2 days" },
  { stage: "Marketing", current: "3 months", ttos: "1 week" },
  { stage: "Licensing", current: "6+ months", ttos: "1+ month" },
]

export default function BlazinglyFast() {
  return (
    <Section title="Blazingly fast.">
      <div className="overflow-hidden rounded-2xl border border-[#dfe2e8] bg-white">
        <div className="grid grid-cols-3 border-b border-[#eceef3] bg-[#f8f8fa] px-4 py-3 text-xs font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">
          <span>Stage</span>
          <span className="text-center">Current</span>
          <span className="text-center">ttOS</span>
        </div>
        {ROWS.map((row) => (
          <div key={row.stage} className="grid grid-cols-3 items-center border-b border-[#f0f1f4] px-4 py-3 last:border-b-0">
            <p className="text-sm font-medium text-[#2f3137] md:text-base">{row.stage}</p>
            <p className="text-center text-sm text-[#6b6d75] line-through decoration-[#9ea2ad] md:text-base">{row.current}</p>
            <p className="text-center text-sm font-semibold text-[#2f3137] md:text-base">{row.ttos}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-[#6b6d75]">
        6 months to license is best case scenario. Best case scenario is 1 month with ttOS.
      </p>
      <p className="mt-2 text-xs text-[#6b6d75]">
        Baseline timings drawn from 16 years of technology transfer practice across CERN and five universities,
        cross-referenced with published TTO benchmarks (e.g. MIT TLO FY2025 Annual Report).
      </p>
    </Section>
  )
}
