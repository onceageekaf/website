"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import type { AudienceView } from "@/lib/types"

type Props = {
  value: AudienceView
  onChange: (v: AudienceView) => void
  className?: string
  demoRunning?: boolean
  demoMs?: number
}

const TABS: Array<{ key: AudienceView; label: string }> = [
  { key: "inventor", label: "Inventor" },
  { key: "case", label: "Case View" },
]

export default function DashboardTopTabs({
  value,
  onChange,
  className,
  demoRunning = false,
  demoMs = 2500,
}: Props) {
  const activeIndex = Math.max(0, TABS.findIndex((t) => t.key === value))
  const translateClass = activeIndex === 0 ? "translate-x-0" : "translate-x-full"

  return (
          <div className={cn(
          "elevation-md relative overflow-hidden rounded-xl border border-black/10 bg-white",
          className
            )}
          >
            <div className="grid grid-cols-2 items-center">
              {TABS.map((t, idx) => {
                const active = value === t.key
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => onChange(t.key)}
                    className={cn(
                      "relative py-3 text-sm font-medium transition",
                      "text-black/60 hover:text-black/80 hover:bg-black/[0.02]",
                      active && "text-black"
                    )}
                  >
                    <span className="inline-flex w-full justify-center">{t.label}</span>

                    {idx < TABS.length - 1 && (
                      <span className="absolute right-0 top-1/2 h-full w-px -translate-y-1/2 bg-black/10" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Sliding underline */}
            <div className="pointer-events-none absolute bottom-0 left-0 h-[2px] w-1/2">
              <div
                className={cn(
                  "relative h-full w-full bg-black/40",
                  "transition-transform duration-1000 ease-out",
                  translateClass
                )}
              >
                {/* Progress sweep (only during demo autoplay) */}
                {demoRunning && (
                  <span
                    className="absolute inset-0 origin-left bg-black/70"
                    style={{
                      transform: "scaleX(0)",
                      animation: `dashTabSweep ${demoMs}ms linear forwards`,
                    }}
                  />
                )}
              </div>
            </div>
          </div>

           
  )
}