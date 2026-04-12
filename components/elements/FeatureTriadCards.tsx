import { cn } from "@/lib/utils"
import { OutcomeVarianceVisual } from "@/components/elements/OutcomeVarianceVisual"
import TimeLostProcessCarousel from "@/components/elements/TimeLostProcessCarousel"
import ReduceManualWorkBrickWall from "@/components/elements/ReduceManualWorkBrickWall"

/** Visual strip: taller stacked cards below lg; compact strip when three-up from lg */
const SKELETON_PX = "max-lg:h-[260px] max-lg:min-h-[260px] lg:h-[240px] lg:min-h-[240px]"
const TEXT_MIN = "min-h-[152px]"

type Card = {
  key: string
  title: string
  description: string
  skeleton: "variance" | "chart" | "query"
}

/** Copy aligned with `components/experiment/whyttos.tsx` (three cards) */
const CARDS: Card[] = [
  {
    key: "variance",
    title: "Outcomes depend on where it lands",
    description:
      "The same invention can lead to radically different outcomes depending on the institution, team, and process around it.",
    skeleton: "variance",
  },
  {
    key: "timesinks",
    title: "Time sinks causes unpredictability",
    description:
      "If we fix recurring time sinks, we can make tech transfer more predictable.",
    skeleton: "chart",
  },
  {
    key: "Automation",
    title: "Reduce manual work",
    description:
      "Automate the manual parts of tech transfer and make it faster and predictable.",
    skeleton: "query",
  },
]

function CardSkeleton({ variant }: { variant: Card["skeleton"] }) {
  switch (variant) {
    case "variance":
      return <OutcomeVarianceVisual />
    case "chart":
      return (
        <TimeLostProcessCarousel
          className="h-full min-h-0"
          fadeColor="#f6f6f8"
        />
      )
    case "query":
      return <ReduceManualWorkBrickWall className="h-full min-h-0" />
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
