import Section from "@/components/shared/Section"

const STEPS = [
  {
    title: "1. Standardised contracts.",
    text: "CLE-parsed consulting and services agreements with each participating university, with variable parts (scope, process, deliverables) confined to a structured appendix.",
  },
  {
    title: "2. Parallel sourcing.",
    text: "A single material design is sent to multiple qualified university labs simultaneously, with quotes, timelines, and deliverables compared in one place.",
  },
  {
    title: "3. Distributed production.",
    text: "Orders are placed across the network. The dashboard tracks progress by node, milestone payments release on delivery, and reproducibility data surfaces from multi-site execution.",
  },
]

export default function AtomFactoryMechanism() {
  return (
    <Section title="The Atom Factory mechanism">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {STEPS.map((step) => (
          <article key={step.title} className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
            <p className="text-base font-semibold text-[#2f3137]">{step.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">{step.text}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
