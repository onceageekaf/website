import Section from "@/components/shared/Section"

export default function InventionOverview() {
  return (
    <Section title="Invention overview">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6 text-sm leading-relaxed text-[#4c4d56] md:text-base">
        <p>
          SO2LAR is a light-activated oxygen sensor developed at ETH Zürich. It applies a dye-sensitized architecture
          where visible light drives an electrical response linked to oxygen concentration.
        </p>
        <p className="mt-4">
          The core stack combines SWCNT, TiO₂, and a rhenium photosensitizer on gold interdigitated electrodes.
          Performance reported in the source paper includes low-power operation, high selectivity, humidity tolerance,
          and rapid response dynamics.
        </p>
      </div>
    </Section>
  )
}
