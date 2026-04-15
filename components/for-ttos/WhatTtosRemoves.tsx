import Section from "@/components/shared/Section"

const ITEMS = [
  "No manual CRM entry",
  "No chasing paperwork",
  "No manual updates",
  "No manual reports",
  "No market bottleneck",
  "No availability bias",
  "No more manual NDA, MTA",
  "No task switching",
]

export default function WhatTtosRemoves() {
  return (
    <Section title="What ttOS removes.">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map((item) => (
          <article key={item} className="rounded-2xl border border-[#dfe2e8] bg-white p-4">
            <p className="text-base font-semibold text-[#2f3137]">{item}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
