"use client"

import { useEffect, useId, useState } from "react"
import {
  type LucideIcon,
  Building2,
  ChartLine,
  ClipboardCheck,
  FileCheck2,
  FileSearch,
  FileSignature,
  FilePenLine,
  ListChecks,
  Scale,
  Search,
  Sigma,
} from "lucide-react"
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
const VIEW_W = 340
const VIEW_H = 240
const CARD_H = 42
const ICON_BOX = 20
const ICON_SIZE = 12

function pseudoShuffle<T>(arr: T[], seed: number): T[] {
  const out = [...arr]
  let s = (seed + 1) * 9301 + 49297
  for (let i = out.length - 1; i > 0; i--) {
    s = (s * 233280 + 49297) % 233280
    const j = s % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}
const MIN_CARD_W = 108
const MAX_CARD_W = 220

function badgeLabel(label: string, maxChars = 24) {
  if (label === "Invention Disclsoure form") return label
  if (label.length <= maxChars) return label
  return `${label.slice(0, maxChars - 1)}...`
}

function cardWidthForLabel(label: string) {
  const textW = label.length * 5.7
  const base = 12 + ICON_BOX + 8 + textW + 14
  return Math.max(MIN_CARD_W, Math.min(MAX_CARD_W, Math.round(base)))
}

export default function ReduceManualWorkCarousel({
  className,
  intervalMs = INTERVAL_MS,
}: {
  className?: string
  intervalMs?: number
}) {
  const [tick, setTick] = useState(0)
  const MAX_STACK = 50
  const clipId = useId().replace(/:/g, "")
  const gradientId = `${clipId}-bg`
  const shadowId = `${clipId}-shadow`

  useEffect(() => {
    const id = window.setInterval(() => {
      setTick((t) => t + 1)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs])

  const stackCount = Math.min(tick + 1, MAX_STACK)

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden",
        className
      )}
    >
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="h-full w-full"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <clipPath id={clipId}>
            <rect x="0" y="0" width={VIEW_W} height={VIEW_H} rx="22" ry="22" />
          </clipPath>
          <radialGradient id={gradientId} cx="50%" cy="5%" r="75%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.82)" />
            <stop offset="65%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
          <filter id={shadowId} x="-30%" y="-30%" width="170%" height="220%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.4" floodColor="#000000" floodOpacity="0.04" />
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.08" />
          </filter>
        </defs>

        <g clipPath={`url(#${clipId})`}>
          <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill={`url(#${gradientId})`} />

        {Array.from({ length: stackCount }).map((_, i) => {
          const batch = Math.floor(i / STEPS.length)
          const posInBatch = i % STEPS.length
          // Keep "Invention Disclsoure form" first, then shuffled each batch.
          const stepOrder = [
            0,
            ...pseudoShuffle(Array.from({ length: STEPS.length - 1 }, (_, k) => k + 1), batch + 97),
          ]
          const step = STEPS[stepOrder[posInBatch]]
          const label = badgeLabel(step.label)
          const cardW = cardWidthForLabel(label)

          // Layered pile order: 1 (base), then 2, then 3, then 3...
          const layerSizes = [1, 2, 3]
          let remaining = posInBatch
          let layer = 0
          while (remaining >= (layerSizes[layer] ?? 3)) {
            remaining -= layerSizes[layer] ?? 3
            layer += 1
          }
          const layerCount = layerSizes[layer] ?? 3
          const layerPos = remaining
          const xBandsByCount: Record<number, number[]> = {
            1: [50],
            2: [37, 63],
            3: [24, 50, 76],
          }
          const xBands = xBandsByCount[layerCount] ?? xBandsByCount[3]
          const col = Math.min(layerPos, xBands.length - 1)
          const colX = xBands[col]
          const colIdx = colX < 40 ? 0 : colX > 60 ? 2 : 1
          const stackBaseY = VIEW_H - CARD_H / 2 - 10
          const cyRaw = stackBaseY - Math.min(layer * 13, VIEW_H - CARD_H - 22)
          const leanOffset = colIdx === 0 ? -4 : colIdx === 2 ? 4 : 0
          const cxRaw = (colX / 100) * VIEW_W + leanOffset + (layer % 2 === 0 ? -1 : 1)
          const cx = Math.max(cardW / 2 + 14, Math.min(VIEW_W - cardW / 2 - 14, cxRaw))
          const cy = Math.max(CARD_H / 2 + 12, Math.min(VIEW_H - CARD_H / 2 - 12, cyRaw))
          const isNewest = i === stackCount - 1
          const cardFill = isNewest ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.9)"
          const cardStroke = isNewest ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.72)"
          return (
            <g
              key={i}
              transform={`translate(${cx} ${cy})`}
              opacity={isNewest ? 1 : 0.94}
            >
              <g
                className={cn(
                  "stack-wobble",
                  colIdx === 0
                    ? "stack-wobble-left"
                    : colIdx === 1
                      ? "stack-wobble-center"
                      : "stack-wobble-right"
                )}
                style={{ animationDelay: `${(layer + colIdx) * 70}ms` }}
              >
                <ellipse
                  cx="0"
                  cy={CARD_H / 2 + 5}
                  rx={cardW / 2.25}
                  ry="4.5"
                  fill="rgba(15,23,42,0.12)"
                />
                <rect
                  x={-cardW / 2}
                  y={-CARD_H / 2}
                  width={cardW}
                  height={CARD_H}
                  rx="999"
                  ry="999"
                  fill={cardFill}
                  stroke={cardStroke}
                  filter={`url(#${shadowId})`}
                />
                <rect
                  x={-cardW / 2 + 2}
                  y={-CARD_H / 2 + 2}
                  width={cardW - 4}
                  height={CARD_H / 2 - 2}
                  rx="999"
                  fill="rgba(255,255,255,0.45)"
                />
                <rect
                  x={-cardW / 2 + 12}
                  y={-ICON_BOX / 2}
                  width={ICON_BOX}
                  height={ICON_BOX}
                  rx="999"
                  fill="rgba(224,242,254,0.98)"
                />
                <step.icon
                  x={-cardW / 2 + 12 + (ICON_BOX - ICON_SIZE) / 2}
                  y={-ICON_SIZE / 2}
                  width={ICON_SIZE}
                  height={ICON_SIZE}
                  color="rgb(14,116,144)"
                  strokeWidth={2}
                />
                <text
                  x={-cardW / 2 + 12 + ICON_BOX + 8}
                  y={0}
                  fill="rgba(31,41,55,0.96)"
                  fontSize="10"
                  fontWeight="600"
                  letterSpacing="-0.08"
                  dominantBaseline="middle"
                >
                  {label}
                </text>
              </g>
            </g>
          )
        })}
        </g>
      </svg>
      <style jsx>{`
        .stack-wobble {
          transform-box: fill-box;
          transform-origin: center bottom;
          animation: stack-tip 2.4s ease-in-out infinite;
          will-change: transform;
        }
        .stack-wobble-left {
          animation-name: stack-tip-left;
        }
        .stack-wobble-right {
          animation-name: stack-tip-right;
        }
        .stack-wobble-center {
          animation-name: stack-tip-center;
        }
        @keyframes stack-tip-left {
          0%,
          100% {
            transform: rotate(-1.8deg) translateY(0px);
          }
          45% {
            transform: rotate(2.3deg) translateY(-0.8px);
          }
        }
        @keyframes stack-tip-center {
          0%,
          100% {
            transform: rotate(0.7deg) translateY(0px);
          }
          45% {
            transform: rotate(-1.1deg) translateY(-0.9px);
          }
        }
        @keyframes stack-tip-right {
          0%,
          100% {
            transform: rotate(1.8deg) translateY(0px);
          }
          45% {
            transform: rotate(-2.3deg) translateY(-0.8px);
          }
        }
      `}</style>
    </div>
  )
}

