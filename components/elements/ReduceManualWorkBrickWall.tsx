"use client"

import { useEffect, useRef, useState } from "react"
import {
  Briefcase,
  ChartLine,
  Clock,
  FilePenLine,
  ListChecks,
} from "lucide-react"
import { cn } from "@/lib/utils"

const TOTAL_CASES = 847
const STAGGER_MS = 180
const AFTER_RESET_MS = 300
const CASE_INTERVAL_MS = 2800

const TASKS: { label: string; icon: typeof FilePenLine }[] = [
  { label: "Disclosure form", icon: FilePenLine },
  { label: "Prior art search", icon: Clock },
  { label: "Due diligence", icon: ListChecks },
  { label: "Market research", icon: ChartLine },
  { label: "1 Page Non-confidential summary", icon: Briefcase },
]

export default function ReduceManualWorkBrickWall({
  className,
}: {
  className?: string
}) {
  const [caseNum, setCaseNum] = useState(1)
  /** Number of pills visible (0–6); stagger advances this on a timer */
  const [visibleCount, setVisibleCount] = useState(0)
  const pendingResetDelay = useRef(false)

  const caseStr = String(caseNum).padStart(3, "0")
  const progressPct = Math.min(100, (caseNum / TOTAL_CASES) * 100)

  useEffect(() => {
    if (visibleCount >= 6) return

    let delay: number
    if (visibleCount === 0) {
      delay = pendingResetDelay.current ? AFTER_RESET_MS : 0
      pendingResetDelay.current = false
    } else {
      delay = STAGGER_MS
    }

    const t = window.setTimeout(() => {
      setVisibleCount((c) => c + 1)
    }, delay)
    return () => window.clearTimeout(t)
  }, [visibleCount])

  useEffect(() => {
    const id = window.setInterval(() => {
      pendingResetDelay.current = true
      setVisibleCount(0)
      setCaseNum((n) => (n >= TOTAL_CASES ? 1 : n + 1))
    }, CASE_INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div
      className={cn(
        "flex h-full w-full flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,.92),transparent_72%)] px-4 py-3",
        className
      )}
    >
      <div className="mb-4 flex items-baseline gap-2">
        <span className="font-mono text-[11px] text-[#6b6d75]">Case</span>
        <span className="font-mono text-[13px] font-medium tabular-nums text-[#2f3137]">
          {caseStr}
        </span>
        <span className="font-mono text-[11px] text-[#6b6d75]">of {TOTAL_CASES}</span>
      </div>

      <div className="mb-4 h-0.5 overflow-hidden rounded-sm bg-[#e4e5ea]">
        <div
          className="h-full rounded-sm bg-[#6b6d75] transition-[width] duration-75 ease-linear"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      <div className="mb-4 flex flex-wrap justify-center gap-1.5">
        {TASKS.map(({ label, icon: Icon }, i) => (
          <div
            key={label}
            className={cn(
              "flex items-center gap-1.5 rounded-[20px] border border-[#e4e5ea] bg-[#f3f3f5] px-2.5 py-1.5 text-[12px] text-[#4c4d56]",
              "transition-[opacity,transform] duration-200 ease-out",
              i < visibleCount
                ? "translate-y-0 opacity-100"
                : "translate-y-1 opacity-0"
            )}
          >
            <Icon className="h-3.5 w-3.5 shrink-0 opacity-50" strokeWidth={1.5} />
            <span className="leading-none">{label}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-[#e8e8ec] pt-4 text-center text-[11px] leading-snug text-[#6b6d75]">
        Same tasks. Every case. Every time.
      </div>
    </div>
  )
}
