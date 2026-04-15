import Section from "@/components/shared/Section"

const SPECS = [
  { label: "Detection range", value: "ppb to 20% O₂" },
  { label: "Lower detection limit", value: "<1 ppm (2.2 ppm @ 1 min), 157 ppb @ 60 min" },
  { label: "Response time", value: "~6 seconds" },
  { label: "Recovery time", value: "~9 minutes" },
  { label: "Humidity tolerance", value: "0–80% RH" },
  { label: "Power consumption", value: "<0.6W" },
]

export default function TechnicalSpecs() {
  return (
    <Section title="Technical specs">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {SPECS.map((spec) => (
            <div key={spec.label} className="rounded-xl border border-[#e8eaef] bg-[#f8f8fa] p-3">
              <p className="text-xs uppercase tracking-[0.08em] text-[#6b6d75]">{spec.label}</p>
              <p className="mt-1 text-sm font-semibold text-[#2f3137]">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
