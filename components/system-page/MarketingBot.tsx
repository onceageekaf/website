import Link from "next/link"
import Section from "@/components/shared/Section"

export default function MarketingBot() {
  return (
    <Section title="Core Module 04 — Marketing Bot">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-lg font-semibold text-[#2f3137]">Make every invention legible to the market.</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4c4d56]">
            Marketing Bot generates invention pages, outreach assets, and deal-room context from core technical
            evidence so promising work does not get stuck behind manual packaging work.
          </p>
          <p className="mt-4 text-sm font-semibold text-[#2f3137]">
            See a worked example: a full deal room produced by Marketing Bot for a published ETH Zürich oxygen sensor
            —{" "}
            <Link href="/example" className="underline underline-offset-2">
              View example →
            </Link>
          </p>
        </article>
        <article className="rounded-2xl border border-[#dfe2e8] bg-white p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[#6b6d75]">Outputs</p>
          <ul className="mt-3 space-y-2 text-sm text-[#4c4d56]">
            <li>Technical brief translated for licensee decision makers</li>
            <li>Deal-room structure with controlled document access</li>
            <li>Target list and outbound narrative matched to sector context</li>
          </ul>
        </article>
      </div>
    </Section>
  )
}
