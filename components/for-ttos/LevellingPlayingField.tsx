import Section from "@/components/shared/Section"

const ITEMS = [
  {
    title: "Automated discovery",
    description:
      "Surfaces innovations researchers might miss and eliminates availability bias by identifying labs with high potential regardless of institution size or location.",
  },
  {
    title: "Sector expertise",
    description:
      "Guides patent decisions and evaluation without resource constraints, enabling under-resourced institutions to make informed decisions on promising inventions.",
  },
  {
    title: "Equal infrastructure",
    description:
      "Same powerful discovery and evaluation system for S → XL offices, reducing structural visibility gaps and enabling earlier identification of promising inventions.",
  },
]

export default function LevellingPlayingField() {
  return (
    <Section title="Breakthrough innovation is not scarce; visibility is.">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {ITEMS.map((item) => (
          <article key={item.title} className="rounded-2xl border border-[#dfe2e8] bg-white p-5">
            <p className="text-lg font-semibold text-[#2f3137]">{item.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
