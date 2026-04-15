import { cn } from "@/lib/utils"
import { OutcomeVarianceVisual } from "@/components/elements/OutcomeVarianceVisual"
import { Building2, FlaskConical, UserRound } from "lucide-react"

/** Visual strip: taller stacked cards below lg; compact strip when three-up from lg */
const SKELETON_PX = "max-lg:h-[260px] max-lg:min-h-[260px] lg:h-[240px] lg:min-h-[240px]"
const TEXT_MIN = "min-h-[152px]"

type Card = {
  key: string
  title: string
  description: string
  skeleton: "variance" | "universities" | "office"
}

const CARDS: Card[] = [
  {
    key: "variance",
    title: "Across countries",
    description:
      "The same invention reaches the market in one country and dies in another. Different rules, different speed, different outcomes — before the science is even questioned.",
    skeleton: "variance",
  },
  {
    key: "universities",
    title: "Between universities",
    description:
      "Two universities receive comparable inventions in the same field. One licenses in eighteen months. The other is still drafting the disclosure. The institution shapes the outcome more than the science does.",
    skeleton: "universities",
  },
  {
    key: "office",
    title: "Inside one university",
    description:
      "Same office. Same process. Different officer picks up the case — different result. The system runs on individual judgment, not standards.",
    skeleton: "office",
  },
]

function OutcomePill({ label, tone }: { label: string; tone: string }) {
  return (
    <span className={cn("rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]", tone)}>
      {label}
    </span>
  )
}

function BetweenUniversitiesVisual() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-4 sm:p-5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dde6] bg-white shadow-sm">
        <FlaskConical className="h-5 w-5 text-[#2f3137]" />
      </div>
      <div className="relative mt-6 grid w-full max-w-[18rem] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6] sm:left-[16.666%]" />
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6]" />
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6] sm:left-[83.333%]" />
        <div className="hidden sm:block absolute left-[16.666%] right-[16.666%] top-[-18px] h-px bg-[#d9dde6]" />
        {[
          { label: "Licensed", tone: "border-emerald-200 bg-emerald-50 text-emerald-700" },
          { label: "Shelved", tone: "border-rose-200 bg-rose-50 text-rose-700" },
          { label: "In evaluation", tone: "border-amber-200 bg-amber-50 text-amber-700" },
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-[#e3e6ed] bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-[#4c4d56]" />
              <span className="text-xs font-semibold text-[#2f3137]">University {idx + 1}</span>
            </div>
            <div className="mt-2">
              <OutcomePill label={item.label} tone={item.tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InsideUniversityVisual() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center p-4 sm:p-5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d9dde6] bg-white shadow-sm">
        <Building2 className="h-5 w-5 text-[#2f3137]" />
      </div>
      <div className="relative mt-6 grid w-full max-w-[18rem] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6] sm:left-[16.666%]" />
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6]" />
        <div className="absolute left-1/2 top-[-18px] h-5 w-px -translate-x-1/2 bg-[#d9dde6] sm:left-[83.333%]" />
        <div className="hidden sm:block absolute left-[16.666%] right-[16.666%] top-[-18px] h-px bg-[#d9dde6]" />
        {[
          { label: "Licensed", tone: "border-emerald-200 bg-emerald-50 text-emerald-700" },
          { label: "Escalated", tone: "border-sky-200 bg-sky-50 text-sky-700" },
          { label: "Still pending", tone: "border-amber-200 bg-amber-50 text-amber-700" },
        ].map((item, idx) => (
          <div key={idx} className="rounded-xl border border-[#e3e6ed] bg-white p-3 shadow-sm">
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-[#4c4d56]" />
              <span className="text-xs font-semibold text-[#2f3137]">Officer {idx + 1}</span>
            </div>
            <div className="mt-2">
              <OutcomePill label={item.label} tone={item.tone} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CardSkeleton({ variant }: { variant: Card["skeleton"] }) {
  switch (variant) {
    case "variance":
      return <OutcomeVarianceVisual />
    case "universities":
      return <BetweenUniversitiesVisual />
    case "office":
      return <InsideUniversityVisual />
    default:
      return null
  }
}

export default function FeatureTriadCards() {
  return (
    <div className="grid min-w-0 grid-cols-1 items-stretch gap-6 lg:grid-cols-3 lg:gap-6">
      {CARDS.map((card) => (
        <article
          key={card.key}
          className={cn(
            "flex h-full min-h-0 min-w-0 flex-col overflow-hidden rounded-2xl border border-[#e8e8ec] bg-[#f3f3f5]/90",
            "shadow-[0_1px_0_rgba(0,0,0,.04),0_12px_40px_rgba(26,34,48,.06)]"
          )}
        >
          <div
            className={cn(
              "shrink-0 overflow-hidden border-b border-[#e8e8ec] bg-gradient-to-b from-white to-[#f6f6f8]",
              SKELETON_PX
            )}
          >
            <CardSkeleton variant={card.skeleton} />
          </div>
          <div
            className={cn(
              "flex flex-1 flex-col justify-start p-6 text-left",
              TEXT_MIN
            )}
          >
            <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#2f3137] md:text-xl">
              {card.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-[#4c4d56] md:text-[15px]">
              {card.description}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}
