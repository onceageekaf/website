import Section from "@/components/shared/Section"

export default function ProtectionBot() {
  return (
    <Section title="Core Module 03 — Protection Bot">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-lg font-semibold text-[#2f3137]">Protect what is worth protecting.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Protection Bot translates evaluation outputs into filing strategy recommendations, draft structures, and
            timeline guidance so teams can move from intent to action without process drift.
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Outputs</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4c4d56]">
            <li>Protection strategy options by jurisdiction and field of use</li>
            <li>Patent counsel handoff package with structured evidence</li>
            <li>Milestone timeline tied to decision checkpoints</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}
