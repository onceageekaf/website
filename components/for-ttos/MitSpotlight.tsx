import Section from "@/components/shared/Section"

const METRICS = [
  { label: "Invention disclosures", value: "684" },
  { label: "New patents filed", value: "623" },
  { label: "Licenses and options", value: "137" },
  { label: "Technologies available", value: "2,849" },
]

const TEAM = [
  { label: "Total staff", value: "49" },
  { label: "Senior leadership", value: "5" },
  { label: "Licensing team", value: "16" },
  { label: "Admin and support", value: "28" },
]

export default function MitSpotlight() {
  return (
    <Section title="MIT Technology Licensing Office (TLO)">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[#6b6d75]">MIT TLO FY2025</p>
          <p className="mt-2 text-sm text-[#4c4d56]">
            Sources: MIT TLO FY2025 Annual Report and MIT TLO team page.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {METRICS.map((metric) => (
              <div key={metric.label} className="rounded-xl border border-[#e8eaef] bg-[#f8f8fa] p-3">
                <p className="text-xs text-[#6b6d75]">{metric.label}</p>
                <p className="mt-1 text-xl font-semibold text-[#2f3137]">{metric.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {TEAM.map((item) => (
              <div key={item.label} className="rounded-xl border border-[#e8eaef] bg-[#f8f8fa] p-3">
                <p className="text-xs text-[#6b6d75]">{item.label}</p>
                <p className="mt-1 text-xl font-semibold text-[#2f3137]">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.09em] text-[#6b6d75]">Automation benefit math</p>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#4c4d56]">
            <p>
              <span className="font-semibold text-[#2f3137]">Disclosure:</span> 684 disclosures × 5 hours = 3,420
              hours, roughly 2 FTE of academic effort spent on disclosure forms alone.
            </p>
            <p>
              <span className="font-semibold text-[#2f3137]">Evaluation:</span> 684 disclosures × 20 hours average =
              13,680 hours, roughly 7 FTE of TTO staff time.
            </p>
            <p>
              <span className="font-semibold text-[#2f3137]">With ttOS:</span> Disclosure Bot at ~30 minutes and
              Evaluation Bot at ~1 hour dramatically compress this baseline workload.
            </p>
          </div>
          <p className="mt-4 text-xs text-[#6b6d75]">
            Citation: MIT Technology Licensing Office FY2025 Annual Report.
          </p>
        </article>
      </div>
    </Section>
  )
}
