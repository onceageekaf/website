import Section from "@/components/shared/Section"

export default function PmfFundingModel() {
  return (
    <Section title="How Atom Factory makes money: PmF">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6 text-sm leading-relaxed text-[#4c4d56] md:text-base">
        <p>
          Atom Factory is operated alongside a venture vehicle: PmF — the Promethium Materials Fund. PmF selects a
          small set of high-potential published materials, commissions full Atom Factory production runs, then chooses
          one of three paths per asset.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5">
          <li>Spin out with the original academic team.</li>
          <li>License to an existing industrial player.</li>
          <li>Recruit an external operator-founder.</li>
        </ul>
        <p className="mt-4">
          The name carries three meanings: Promethium is the only element that has to be manufactured; 61 is its
          atomic number and an Australian nod; and PmF is a quiet pun on Product–Market Fit.
        </p>
        <p className="mt-4">
          <span className="font-semibold text-[#2f3137]">What is free and what is not:</span> ttOS agents are free for
          academics and Technology Transfer Offices, with users paying only actual AI token cost at no margin. Atom
          Factory production runs are commercial and margin-priced to venture builders, corporate R&D, and PmF.
        </p>
      </div>
    </Section>
  )
}
