import Section from "@/components/shared/Section"

const TIERS = [
  { label: "XL", disclosures: "500+", staff: "50+", note: "Industrial-scale throughput" },
  { label: "Large", disclosures: "300+", staff: "30+", note: "Dedicated specialization by stage" },
  { label: "Medium", disclosures: "100+", staff: "10+", note: "Hybrid roles, heavy context switching" },
  { label: "Small", disclosures: "≤50", staff: "1–3", note: "Heroic effort, fragile continuity" },
]

export default function TtoSegmentation() {
  return (
    <Section title="One workflow doesn't fit every office.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {TIERS.map((tier) => (
          <article key={tier.label} className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.1em] text-[#6b6d75]">{tier.label}</p>
            <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[#2f3137]">{tier.disclosures}</p>
            <p className="text-sm text-[#6b6d75]">disclosures / year</p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#2f3137]">{tier.staff}</p>
            <p className="text-sm text-[#6b6d75]">staff</p>
            <p className="mt-4 text-sm leading-relaxed text-[#4c4d56]">{tier.note}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
