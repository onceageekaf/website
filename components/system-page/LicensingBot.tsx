import Section from "@/components/shared/Section"

export default function LicensingBot() {
  return (
    <Section title="Core Module 05 — Licensing Bot">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-lg font-semibold text-[#2f3137]">Close faster, with fewer loops.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Licensing Bot assembles term sheet drafts, clause options, and negotiation summaries from upstream
            context so legal and business development can converge on decisions quickly.
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Outputs</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4c4d56]">
            <li>Draft term sheet and license structure options</li>
            <li>Clause-level diffs against institution policy templates</li>
            <li>Negotiation brief aligned to risk profile and deal status</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}
