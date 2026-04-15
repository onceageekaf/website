import Section from "@/components/shared/Section"

export default function EvaluationBot() {
  return (
    <Section title="Core Module 02 — Evaluation Bot">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-lg font-semibold text-[#2f3137]">Decide faster, with evidence.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Evaluation Bot removes bottlenecks by producing structured decision-ready assessments directly from
            disclosure data, including patentability signals, prior art indicators, and commercial relevance.
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Outputs</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4c4d56]">
            <li>Due diligence checklist with source-backed flags</li>
            <li>Prior art and novelty risk snapshot</li>
            <li>Market and pathway summary for go/no-go decisions</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}
