"use client"

import { useEffect, useMemo, useState } from "react"
import {
  type LucideIcon,
  Building2,
  ChartLine,
  ClipboardCheck,
  FileCheck2,
  FilePenLine,
  FileSearch,
  FileSignature,
  ListChecks,
  Scale,
  Search,
  Sigma,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

type Step = {
  label: string
  icon: LucideIcon
}

const STEPS: Step[] = [
  { label: "Invention Disclsoure form", icon: FilePenLine },
  { label: "Due dilgence", icon: Search },
  { label: "Prior art search", icon: Scale },
  { label: "Patent filing", icon: FileCheck2 },
  { label: "Marketing", icon: Building2 },
  { label: "Market search report", icon: FileSearch },
  { label: "Tech-economics analysis", icon: Sigma },
  { label: "Financial model", icon: ChartLine },
  { label: "List of licensees", icon: ListChecks },
  { label: "Agreement review", icon: ClipboardCheck },
  { label: "Technical due diligence", icon: Search },
  { label: "Followup on signatures", icon: FileSignature },
]

const INTERVAL_MS = 820

function badgeLabel(label: string, maxChars = 24) {
  if (label === "Invention Disclsoure form") return label
  if (label.length <= maxChars) return label
  return `${label.slice(0, maxChars - 1)}...`
}

export default function ReduceManualWorkBadgeStack({
  className,
  intervalMs = INTERVAL_MS,
}: {
  className?: string
  intervalMs?: number
}) {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => {
        if (t >= STEPS.length - 1) return t
        return t + 1
      })
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])

  const stackCount = Math.min(tick + 1, STEPS.length)
  const stepOrder = useMemo(() => STEPS.map((_, idx) => idx), [])

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[radial-gradient(circle_at_top,rgba(255,255,255,.82),transparent_65%)]",
        className
      )}
    >
      {Array.from({ length: stackCount }).map((_, i) => {
        const step = STEPS[stepOrder[i]]
        const isNewest = i === stackCount - 1
        // Single vertical pile: cards sit on top of each other without overlap.
        const band = 50
        const top = 86 - i * 21
        const wobbleClass = "stack-wobble-center"

        return (
          <div
            key={i}
            className={cn("absolute -translate-x-1/2 -translate-y-1/2", wobbleClass)}
            style={{
              left: `${band}%`,
              top: `${top}%`,
              zIndex: i + 1,
              opacity: isNewest ? 1 : 0.94,
              animationDelay: `${i * 45}ms`,
            }}
          >
            <span className="pointer-events-none absolute left-1/2 top-[95%] -z-10 h-2.5 w-[76%] -translate-x-1/2 rounded-[999px] bg-black/10 blur-[1px]" />
            <Badge
              variant="outline"
              className={cn(
                "h-auto w-[220px] rounded-full border-white/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-[#1f2937] shadow-[0_1px_2px_rgba(0,0,0,0.04),0_10px_22px_rgba(0,0,0,0.11)] backdrop-blur-[2px]",
                isNewest ? "bg-white/96 border-white/95" : ""
              )}
            >
              <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-100">
                <step.icon className="h-3.5 w-3.5 text-sky-700" strokeWidth={2} />
              </span>
              <span className="truncate">{badgeLabel(step.label)}</span>
            </Badge>
          </div>
        )
      })}
      <style jsx>{`
        .stack-wobble-left,
        .stack-wobble-center,
        .stack-wobble-right {
          transform-origin: center bottom;
          animation-duration: 2.3s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          will-change: transform;
        }
        .stack-wobble-left {
          animation-name: stack-tip-left;
        }
        .stack-wobble-center {
          animation-name: stack-tip-center;
        }
        .stack-wobble-right {
          animation-name: stack-tip-right;
        }
        @keyframes stack-tip-left {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(-0.6deg);
          }
          45% {
            transform: translate(-50%, -50%) rotate(0.8deg);
          }
        }
        @keyframes stack-tip-center {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0.2deg);
          }
          45% {
            transform: translate(-50%, -50%) rotate(-0.35deg);
          }
        }
        @keyframes stack-tip-right {
          0%,
          100% {
            transform: translate(-50%, -50%) rotate(0.6deg);
          }
          45% {
            transform: translate(-50%, -50%) rotate(-0.8deg);
          }
        }
      `}</style>
    </div>
  )
}

