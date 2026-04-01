"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type SceneItem = {
  id: string
  /** Spoken / aria description for this column */
  ariaLabel: string
  flag?: string
  /** Bottom axis: flag only, no text (region scene) */
  axisFlagOnly?: boolean
  labelLine1?: string
  labelLine2?: string
  outcomePct: number
  barClass: string
}

type Scene = {
  key: string
  /** Rotates with the chart: what dimension outcomes vary on */
  dimensionLabel: string
  items: SceneItem[]
}

const SCENES: Scene[] = [
  {
    key: "region",
    dimensionLabel: "Country",
    items: [
      {
        id: "usa",
        ariaLabel: `United States ${88}%`,
        flag: "\u{1F1FA}\u{1F1F8}",
        axisFlagOnly: true,
        outcomePct: 88,
        barClass: "from-rose-500/55 to-rose-400/35",
      },
      {
        id: "uk",
        ariaLabel: `United Kingdom ${56}%`,
        flag: "\u{1F1EC}\u{1F1E7}",
        axisFlagOnly: true,
        outcomePct: 56,
        barClass: "from-sky-500/55 to-sky-400/35",
      },
      {
        id: "eu",
        ariaLabel: `European Union ${48}%`,
        flag: "\u{1F1EA}\u{1F1FA}",
        axisFlagOnly: true,
        outcomePct: 48,
        barClass: "from-violet-500/55 to-violet-400/35",
      },
    ],
  },
  {
    key: "uni",
    dimensionLabel: "University",
    items: [
      {
        id: "uk1",
        ariaLabel: `University UK 1 ${82}%`,
        flag: "\u{1F1EC}\u{1F1E7}",
        labelLine1: "Uni UK",
        labelLine2: "1",
        outcomePct: 82,
        barClass: "from-emerald-500/50 to-emerald-400/30",
      },
      {
        id: "uk2",
        ariaLabel: `University UK 2 ${44}%`,
        flag: "\u{1F1EC}\u{1F1E7}",
        labelLine1: "Uni UK",
        labelLine2: "2",
        outcomePct: 44,
        barClass: "from-amber-500/50 to-amber-400/30",
      },
      {
        id: "uk3",
        ariaLabel: `University UK 3 ${63}%`,
        flag: "\u{1F1EC}\u{1F1E7}",
        labelLine1: "Uni UK",
        labelLine2: "3",
        outcomePct: 63,
        barClass: "from-orange-500/45 to-orange-400/28",
      },
    ],
  },
  {
    key: "mgr",
    dimensionLabel: "Team member",
    items: [
      {
        id: "lm1",
        ariaLabel: `Licensing Manager 1 ${76}%`,
        labelLine1: "Licensing",
        labelLine2: "Manager 1",
        outcomePct: 76,
        barClass: "from-blue-600/50 to-indigo-400/35",
      },
      {
        id: "lm2",
        ariaLabel: `Licensing Manager 2 ${38}%`,
        labelLine1: "Licensing",
        labelLine2: "Manager 2",
        outcomePct: 38,
        barClass: "from-cyan-600/45 to-teal-400/30",
      },
      {
        id: "lm3",
        ariaLabel: `Licensing Manager 3 ${55}%`,
        labelLine1: "Licensing",
        labelLine2: "Manager 3",
        outcomePct: 55,
        barClass: "from-violet-600/45 to-violet-400/32",
      },
    ],
  },
]

const SCENE_MS = 4200

function ChartColumn({
  item,
  animate,
}: {
  item: SceneItem
  animate: boolean
}) {
  return (
    <div className="flex min-w-0 flex-col items-center justify-end gap-1.5">
      <div className="relative h-14 w-full max-w-[2.85rem] rounded-md border border-black/[0.06] bg-black/[0.03] sm:h-[3.75rem] sm:max-w-[3rem]">
        <div
          className={cn(
            "absolute inset-x-0.5 bottom-0.5 top-auto rounded-[4px] bg-gradient-to-t shadow-sm",
            item.barClass
          )}
          style={{
            height: animate ? `${item.outcomePct}%` : "0%",
          }}
        />
      </div>

      <div className="flex min-h-[2.75rem] flex-col items-center justify-start gap-0.5 px-0.5">
        {item.flag ? (
          <span
            className="select-none text-center text-[1.125rem] leading-none sm:text-[1.25rem]"
            aria-hidden
          >
            {item.flag}
          </span>
        ) : null}
        {item.axisFlagOnly ? null : (
          <>
            {item.labelLine1 ? (
              <span className="text-center text-[8px] font-semibold leading-tight text-[#2f3137] sm:text-[9px]">
                {item.labelLine1}
              </span>
            ) : null}
            {item.labelLine2 ? (
              <span className="text-center text-[8px] font-semibold leading-tight text-[#2f3137] sm:text-[9px]">
                {item.labelLine2}
              </span>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}

/** Three bars per scene; column keys fixed so slots stay aligned across scenes. */
function SceneChart({
  scene,
  animate,
}: {
  scene: Scene
  animate: boolean
}) {
  return (
    <div
      className="grid min-h-0 flex-1 grid-cols-3 items-end gap-1 sm:gap-1.5"
      role="img"
      aria-label={`Outcomes by ${scene.dimensionLabel}: ${scene.items.map((i) => i.ariaLabel).join(", ")}`}
    >
      {scene.items.map((item, i) => (
        <ChartColumn key={`col-${i}`} item={item} animate={animate} />
      ))}
    </div>
  )
}

export function OutcomeVarianceVisual({ className }: { className?: string }) {
  const [sceneIndex, setSceneIndex] = React.useState(0)
  const [barsOn, setBarsOn] = React.useState(false)
  const [reducedMotion, setReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const onChange = () => setReducedMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const scene = SCENES[sceneIndex] ?? SCENES[0]!

  /** One-time bar reveal on mount only — scene changes do not reset height or replay animation. */
  React.useEffect(() => {
    if (reducedMotion) {
      setBarsOn(true)
      return
    }
    setBarsOn(false)
    const grow = requestAnimationFrame(() => {
      requestAnimationFrame(() => setBarsOn(true))
    })
    return () => cancelAnimationFrame(grow)
  }, [reducedMotion])

  React.useEffect(() => {
    if (reducedMotion) return
    const id = window.setInterval(() => {
      setSceneIndex((i) => (i + 1) % SCENES.length)
    }, SCENE_MS)
    return () => window.clearInterval(id)
  }, [reducedMotion])

  return (
    <div
      className={cn(
        "flex h-full w-full min-w-0 flex-col p-4 sm:p-5",
        "bg-gradient-to-b from-white to-[#f6f6f8]",
        className
      )}
    >
      <div className="shrink-0 space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6b6d75]">Variance</p>
        <div className="flex flex-wrap items-center gap-1 text-[10px] font-semibold leading-snug text-[#2f3137] sm:text-[11px]">
          <span>Same invention</span>
          <ArrowRight className="h-3 w-3 shrink-0 text-[#5c5d64]" strokeWidth={2.25} aria-hidden />
          <span>different outcomes</span>
        </div>
        <p
          key={scene.key}
          className={cn(
            "text-[11px] font-semibold tracking-[-0.02em] text-[#2f3137] sm:text-xs",
            !reducedMotion && "animate-outcome-variance-caption"
          )}
          aria-live="polite"
        >
          {scene.dimensionLabel}
        </p>
      </div>

      <div className="mt-2 flex min-h-0 flex-1 flex-col">
        <SceneChart scene={scene} animate={barsOn} />

        <div className="mt-2 flex justify-center gap-1" aria-hidden>
          {SCENES.map((s, i) => (
            <span
              key={s.key}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === sceneIndex ? "w-4 bg-[#2f3137]/70" : "w-1 bg-black/15"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
