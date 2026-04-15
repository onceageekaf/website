import Link from "next/link"
import Section from "@/components/shared/Section"

export default function WorkedExample() {
  return (
    <Section title="Worked example: the ETH Zürich oxygen sensor">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Four-phase cost compression</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Phase 1 (~$680/sensor distributed) → Phase 2 (CRO bulk synthesis) → Phase 3 (~$74/sensor at low-cost
            nodes) → Phase 4 (~$9.50/sensor at scale).
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">University capability tiers</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Tier 1 (full glovebox + Pd catalysis, ~80 institutions), Tier 2 (airbrush + heating plate), Tier 3 (basic
            wet lab + electrical testing).
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Labour-rate map</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Effective postdoc rates: US ~$37/hr, Switzerland ~$60/hr, Germany ~$40/hr, UK ~$26/hr, Korea ~$23/hr,
            India ~$5.70/hr.
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Risk register highlight</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Rhenium supply risk: prices up +206% since Jan 2024 and +146% in 2025 alone. Fixed-price CRO contracting
            is recommended immediately.
          </p>
        </article>
      </div>
      <p className="mt-5 text-sm leading-relaxed text-[#4c4d56]">
        Every figure in this roadmap was constructed from publicly available sources: the Wettstein et al. paper,
        supplementary information, ETH Transfer technology sheet, and standard market data.
      </p>
      <p className="mt-5 text-base font-semibold text-[#2f3137]">
        <Link href="/atomfactory_worked_example.pdf" className="underline underline-offset-2">
          Read the full roadmap → Download the complete worked example (PDF, 25 pages)
        </Link>
      </p>
    </Section>
  )
}
