import Section from "@/components/shared/Section"

export default function DisclosureBot() {
  return (
    <Section title="Core Module 01 — Disclosure Bot">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-lg font-semibold text-[#2f3137]">Nobody likes filling forms. ttOS fills them for you.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Upload manuscripts, slides, drawings, or lab notes and Disclosure Bot extracts key fields to draft a
            complete invention disclosure automatically. No documents yet? Start from guided prompts and build from
            scratch.
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Outputs</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4c4d56]">
            <li>Structured disclosure form with inventor and invention metadata</li>
            <li>First-pass market snapshot and development needs</li>
            <li>Editable submission package ready for evaluation</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}
