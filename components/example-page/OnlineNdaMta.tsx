import Section from "@/components/shared/Section"

const FLOW = [
  "Counterparty submits request for protected materials/data",
  "NDA/MTA template selected by institution policy profile",
  "Clause differences auto-highlighted for legal review",
  "Signature routing initiated with full audit trail",
]

export default function OnlineNdaMta() {
  return (
    <Section title="Online NDA / MTA flow">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
        <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-[#4c4d56] md:text-base">
          {FLOW.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </Section>
  )
}
