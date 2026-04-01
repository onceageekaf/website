"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Step = {
  key: string
  title: string
  current: string
  ttos: string
}

const STEPS: Step[] = [
  { key: "disclosure", title: "Disclosure", current: "5 hours", ttos: "30 mins" },
  { key: "evaluation", title: "Evaluation", current: "40 hours", ttos: "1 hour" },
  { key: "protection", title: "Protection", current: "6 weeks", ttos: "2 days" },
  { key: "marketing", title: "Marketing", current: "3 months", ttos: "1 week" },
  { key: "licensing", title: "Licensing", current: "6+ months", ttos: "1+ month" },
]

type Props = {
  className?: string
  /** start automatically */
  autoplay?: boolean
  /** ms before the first step begins */
  initialDelayMs?: number
  /** ms between each step */
  staggerMs?: number
  /** ms for each step phase */
  phaseMs?: number
}

export default function SystemHeroAnimation({
  className,
  autoplay = true,
  initialDelayMs = 300,
  staggerMs = 220,
  phaseMs = 420,
}: Props) {
  // phase per card:
  // 0 = show current only
  // 1 = strike current
  // 2 = show ttOS time
  const [phases, setPhases] = React.useState<number[]>(
    () => new Array(STEPS.length).fill(0)
  )

  React.useEffect(() => {
    if (!autoplay) return

    const timers: number[] = []

    STEPS.forEach((_, i) => {
      // Sequential timing: each step waits for previous to complete strike + ttOS before starting
      // Base delay accumulates: initial + (previous steps' full cycle time)
      const previousStepsTime = i * (phaseMs * 2 + staggerMs)
      const base = initialDelayMs + previousStepsTime

      // strike current time
      timers.push(
        window.setTimeout(() => {
          setPhases((p) => {
            const next = [...p]
            next[i] = Math.max(next[i], 1)
            return next
          })
        }, base + phaseMs)
      )

      // show ttOS time (after strike completes)
      timers.push(
        window.setTimeout(() => {
          setPhases((p) => {
            const next = [...p]
            next[i] = Math.max(next[i], 2)
            return next
          })
        }, base + phaseMs * 2)
      )
    })

    return () => timers.forEach((t) => window.clearTimeout(t))
  }, [autoplay, initialDelayMs, staggerMs, phaseMs])

  return (
    <div className={cn("w-full", className)}>
      <div
        className={cn(
          "grid gap-3",
          "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        )}
      >
        {STEPS.map((s, i) => {
          const phase = phases[i]
          const struck = phase >= 1
          const showTtos = phase >= 2

          return (
            <div
              key={s.key}
              className={cn(
                "relative rounded-2xl border border-black/10 bg-white/95 backdrop-blur-[1px]",
                "px-4 py-4 shadow-[0_2px_6px_rgba(0,0,0,0.06),_0_16px_40px_rgba(0,0,0,0.12)]",
                "transition-transform duration-300 ease-in-out",
                "hover:-translate-y-[1px]"
              )}
            >
              <div className="text-[13px] font-semibold text-black/85">
                {s.title}
              </div>

              <div className="mt-3 space-y-2">
                {/* Current */}
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[12px] text-black/45">Current</span>

                  <span className="relative text-[14px] font-semibold text-black/75">
                    {/* text */}
                    <span
                      className={cn(
                        "transition-opacity duration-300 ease-in-out",
                        struck ? "opacity-55" : "opacity-100"
                      )}
                    >
                      {s.current}
                    </span>

                    {/* strike line (animated in) */}
                    <span
                      className={cn(
                        "pointer-events-none absolute left-0 right-0 top-1/2 h-px",
                        "bg-black/35 origin-left",
                        "transition-transform duration-300 ease-in-out",
                        struck ? "scale-x-100" : "scale-x-0"
                      )}
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* ttOS */}
                <div
                  className={cn(
                    "flex items-baseline justify-between gap-3",
                    "transition-all duration-300 ease-in-out",
                    showTtos
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  )}
                >
                  <span className="text-[12px] text-black/45">ttOS</span>
                  <span className="text-[14px] font-semibold text-black">
                    {s.ttos}
                  </span>
                </div>
              </div>

              
            </div>
          )
        })}
      </div>

      {/* optional: small caption row */}
      <div className="mt-4 text-center text-xs text-black/45">
       6 months to license is best case scenario. Best case scenario is 1 month with ttOS.
      </div>
    </div>

    
  )
}
