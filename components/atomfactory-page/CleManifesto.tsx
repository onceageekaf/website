import Section from "@/components/shared/Section"

export default function CleManifesto() {
  return (
    <Section title="Why does every university have a different agreement?">
      <div className="rounded-2xl border border-[#dfe2e8] bg-white p-6 text-sm leading-relaxed text-[#4c4d56] md:text-base">
        <p>
          NDAs and MTAs are deployed thousands of times every year. Sponsored research and consulting agreements are
          similar across institutions. Yet every TTO drafts and negotiates them from scratch, every time.
        </p>
        <p className="mt-4">
          A truly global standard is hard. Jurisdictional differences are real. But a standard within a country is
          achievable: a standard NDA for the UK, a standard MTA for Germany, a standard consulting agreement template
          across G20 research universities.
        </p>
        <p className="mt-4">
          The Contract Logic Engine (CLE) extracts the logic of every clause — WHO, THEN, WITH, IF — so contracts can
          be compared, matched against institutional risk profiles, and executed faster.
        </p>
        <p className="mt-4 font-semibold text-[#2f3137]">
          Atom Factory is what CLE makes possible. Standardised consulting agreements turn the global academic lab
          network into a programmable manufacturing layer.
        </p>
      </div>
    </Section>
  )
}
