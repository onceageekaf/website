"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Tone = "neutral" | "amber" | "red" | "green"

type Stat = {
  label: string
  value: string
  tone?: Tone
}

type CaseItem = {
  id: string
  title: string
  status: string
  stats: Stat[]
}

type Props = {
  className?: string
  items?: CaseItem[]
}

function circleTone(tone?: Tone) {
  if (tone === "red") return "bg-red-100 text-red-700"
  if (tone === "amber") return "bg-amber-100 text-amber-700"
  if (tone === "green") return "bg-emerald-100 text-emerald-700"
  return "bg-black/10 text-black/70"
}

function NumberCircle({
  value,
  tone = "neutral",
}: {
  value: number
  tone?: Tone
}) {
  return (
    <span
      className={cn(
        "inline-flex h-7 min-w-[28px] items-center justify-center",
        "rounded-full px-1.5 text-[12px] font-semibold leading-none",
        circleTone(tone)
      )}
    >
      {value}
    </span>
  )
}

export default function StatusPanel({ className, items }: Props) {
  const defaultItems: CaseItem[] = [
    {
      id: "case-252",
      title: "Case 252 · Thermal Paste",
      status: "Provisional filed 1/4/2025 · PCT due 1/4/2026",
      stats: [
        { label: "Contacted", value: "250" },
        { label: "Interested", value: "10", tone: "amber" },
        { label: "NDA", value: "5", tone: "amber" },
        { label: "MTA", value: "2" },
      ],
    },
    {
      id: "case-311",
      title: "Case 311 · Graphene manufacturing process",
      status: "Evaluation complete 12/11/2024 · Filing decision pending",
      stats: [
        { label: "Contacted", value: "120" },
        { label: "Interested", value: "8", tone: "amber" },
        { label: "NDA", value: "3", tone: "amber" },
        { label: "MTA", value: "1" },
      ],
    },
 
  ]

  const data = items?.length ? items : defaultItems

  return (
    <section className={cn("mt-6", className)}>
      {/* <div className="mb-3 px-1">
        <h3 className="text-sm font-medium text-black/80">Status</h3>
      </div> */}

      {/* 2 × 2 grid, fit to content */}
      <div className="mx-auto w-fit max-w-full">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {data.map((item) => (
            <div
              key={item.id}
              className={cn(
                "w-[420px] max-w-full",
                "rounded-xl border border-black/10 bg-white p-4",
                "shadow-[0_6px_16px_rgba(0,0,0,0.04)]"
              )}
            >
              <div className="text-[13px] font-medium text-black/85 truncate">
                {item.title}
              </div>

              {/* Status */}
              <div className="mt-2 flex gap-3">
                <div className="w-[72px] shrink-0 text-[11px] font-medium text-black/45">
                  Status
                </div>
                <div className="text-[11px] leading-snug text-black/70">
                  {item.status}
                </div>
              </div>

              {/* Marketing */}
              <div className="mt-2 flex gap-3">
                <div className="w-[72px] shrink-0 text-[11px] font-medium text-black/45">
                  Marketing
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  {item.stats.map((s) => (
                    <div
                      key={s.label}
                      className="inline-flex items-center gap-2"
                    >
                      <NumberCircle
                        value={Number(s.value)}
                        tone={s.tone}
                      />
                      <span className="text-[11px] text-black/55">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}