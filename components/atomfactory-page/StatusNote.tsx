import Section from "@/components/shared/Section"

export default function StatusNote() {
  return (
    <Section title="Status note">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6 text-sm leading-relaxed text-[#4c4d56] md:text-base">
        Status: Atom Factory has not yet executed a production run under the model described here. The roadmap is a
        method demonstration built from publicly available data, intended to invite the foundation funding and
        university partnerships that would make a first programme real. We are actively seeking both.
      </div>
    </Section>
  )
}
