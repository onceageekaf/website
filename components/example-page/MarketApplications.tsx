import Section from "@/components/shared/Section"

const APPLICATIONS = [
  "Automotive exhaust analysis and emissions control",
  "Food spoilage detection in modified atmosphere packaging",
  "Breath monitoring and respiratory diagnostics",
  "Water and air quality monitoring",
  "Industrial process control in oxygen-sensitive workflows",
]

export default function MarketApplications() {
  return (
    <Section title="Market applications">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {APPLICATIONS.map((application) => (
          <article key={application} className="rounded-2xl border border-[#dfe2e8] bg-white p-4">
            <p className="text-sm leading-relaxed text-[#4c4d56]">{application}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
