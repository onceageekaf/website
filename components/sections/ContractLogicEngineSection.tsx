"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/** Label colours aligned with the CLE reference (#5a9 → #55aa99, etc.) */
const LOGIC_LABEL: Record<"WHO" | "THEN" | "WITH" | "IF", string> = {
  WHO: "text-[#55aa99]",
  THEN: "text-[#5577aa]",
  WITH: "text-[#aa5577]",
  IF: "text-[#aaaa77]",
}

const TAG_STYLES: Record<"WHO" | "THEN" | "WITH" | "IF", string> = {
  WHO: "border-emerald-400/50 bg-emerald-500/22 text-emerald-200",
  THEN: "border-blue-400/50 bg-blue-500/22 text-blue-200",
  WITH: "border-rose-400/50 bg-rose-500/20 text-rose-200",
  IF: "border-amber-400/50 bg-amber-500/22 text-amber-200",
}

function LogicTag({ kind }: { kind: keyof typeof TAG_STYLES }) {
  return (
    <span
      className={cn(
        "rounded-md border px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        TAG_STYLES[kind]
      )}
    >
      {kind}
    </span>
  )
}

function LogicLabel({ kind }: { kind: keyof typeof LOGIC_LABEL }) {
  return (
    <strong
      className={cn(
        "font-mono text-[11px] font-semibold uppercase tracking-[0.05em]",
        LOGIC_LABEL[kind]
      )}
    >
      {kind}
    </strong>
  )
}

type LogicLine = { kind: keyof typeof LOGIC_LABEL; text: string }

type ClauseBlock = {
  title: string
  clauseRef: string
  tags: (keyof typeof TAG_STYLES)[]
  logic: LogicLine[]
}

const CLAUSES: ClauseBlock[] = [
  {
    title: "Licence Grant",
    clauseRef: "Clause 4.1",
    tags: ["WHO", "THEN", "WITH"],
    logic: [
      { kind: "WHO", text: "University → Licensee" },
      { kind: "THEN", text: "Grants personal, non-transferable, exclusive licence to Exploit" },
      { kind: "WITH", text: "Restricted to Field, Territory, and Term as defined" },
    ],
  },
  {
    title: "Sub-Licensing Rights",
    clauseRef: "Clause 4.3",
    tags: ["WHO", "THEN", "WITH", "IF"],
    logic: [
      { kind: "WHO", text: "Licensee" },
      { kind: "THEN", text: "May grant sub-licences with prior written approval" },
      { kind: "IF", text: "Written approval obtained from University in advance" },
    ],
  },
  {
    title: "Termination for Breach",
    clauseRef: "Clause 13",
    tags: ["IF", "THEN", "IF"],
    logic: [
      { kind: "IF", text: "Licensee is in material breach" },
      { kind: "THEN", text: "University may terminate with 30 days written notice" },
      { kind: "IF", text: "Breach not remedied within the notice period" },
    ],
  },
  {
    title: "Milestone Payments",
    clauseRef: "Clause 7.2",
    tags: ["WHO", "THEN", "IF", "WITH"],
    logic: [
      { kind: "WHO", text: "Licensee" },
      { kind: "THEN", text: "Pays milestone fees upon defined development events" },
      { kind: "IF", text: "Milestone achieved within agreed timelines" },
      { kind: "WITH", text: "30-day payment window from milestone date" },
    ],
  },
]

function CleDemo({ className }: { className?: string }) {
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <div
      className={cn(
        "flex w-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f12] shadow-[0_24px_80px_rgba(0,0,0,.45)]",
        className
      )}
    >
      <div className="flex h-9 shrink-0 items-center gap-2 border-b border-white/[0.06] px-3">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]/90" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]/90" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]/90" />
        </div>
        <p className="flex-1 truncate text-center text-[11px] font-medium text-white/45">
          License Agreement · CLE parse · 4 clauses shown
        </p>
        <div className="w-[42px]" aria-hidden="true" />
      </div>
      <div
        className={cn(
          "overflow-y-auto overscroll-contain px-3 pb-1.5 pt-3 sm:px-4 sm:pb-2 sm:pt-3.5 lg:px-3.5 lg:pb-1.5 lg:pt-3 xl:px-4 xl:pb-2 xl:pt-3.5",
          "max-h-[min(25.25rem,calc(72svh-2.5rem))] lg:max-h-[min(23.25rem,calc(55svh-2.5rem))] xl:max-h-[min(27.25rem,calc(62svh-2.5rem))]"
        )}
      >
        <ul className="space-y-1.5 lg:space-y-1.5 xl:space-y-2">
          {CLAUSES.map((row, i) => {
            const isOpen = openIndex === i
            return (
              <li key={row.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "w-full min-w-0 rounded-xl border px-3 py-2.5 text-left transition-[background-color,border-color,padding] duration-200",
                    "lg:px-2.5 lg:py-2 xl:px-3 xl:py-2.5",
                    isOpen
                      ? "border-blue-500/25 bg-[#151a2a]"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  )}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-1.5 lg:gap-y-1">
                    <div className="min-w-0 flex-1">
                      <span className="text-[13px] font-semibold text-white/95">{row.title}</span>
                      <span className="ml-2 text-[11px] text-white/35">{row.clauseRef}</span>
                    </div>
                    <div className="flex w-full min-w-0 shrink-0 flex-wrap gap-1 sm:w-auto sm:justify-end">
                      {row.tags.map((t, j) => (
                        <LogicTag key={`${row.title}-tag-${j}`} kind={t} />
                      ))}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="mt-3 border-t border-white/[0.06] pt-3 text-[11px] leading-relaxed text-white/70">
                      {row.logic.map((line, lineIdx) => (
                        <span key={lineIdx} className="block break-words">
                          <LogicLabel kind={line.kind} />
                          &nbsp;{line.text}
                        </span>
                      ))}
                    </div>
                  )}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

type CleFeatureCardSpec = {
  label: string
  hint: string
  /** When set, replaces pulse skeleton with a concrete mini visual */
  visual?: "diff-compare" | "governance" | "deal-context"
}

/** Shared floor so all three “What CLE unlocks” cards match height in the grid row. */
const CLE_FEATURE_CARD_MIN_H =
  "h-full min-h-[20rem] sm:min-h-[21rem] lg:min-h-[19rem] xl:min-h-[22rem]"

/** Shared mini diff table (Diff & compare + Deal context use the same chrome). */
const CLE_MINI_DIFF_CAPTION = "mb-2 text-[9px] font-medium uppercase tracking-[0.08em] text-white/30"
const CLE_MINI_DIFF_GRID =
  "grid min-w-0 grid-cols-[auto_1fr_1fr] gap-x-1.5 gap-y-2 text-[9px] leading-snug sm:gap-x-2 sm:text-[10px]"
const CLE_MINI_DIFF_HEADER_L =
  "truncate text-[8px] font-semibold uppercase tracking-[0.1em] text-emerald-400/85 sm:text-[9px]"
const CLE_MINI_DIFF_HEADER_R =
  "truncate text-[8px] font-semibold uppercase tracking-[0.1em] text-sky-400/85 sm:text-[9px]"
const CLE_MINI_DIFF_CELL_L =
  "min-w-0 rounded-md border border-white/[0.06] bg-white/[0.03] px-1.5 py-1 text-white/60 sm:px-2"
const CLE_MINI_DIFF_CELL_R =
  "min-w-0 rounded-md border border-white/[0.08] bg-white/[0.04] px-1.5 py-1 text-white/70 sm:px-2"
const CLE_MINI_DIFF_FOOTER = "mt-2.5 space-y-1.5 border-t border-white/[0.06] pt-2.5"

const MARK_AMBER =
  "rounded-sm bg-amber-400/35 px-0.5 text-amber-50 ring-1 ring-amber-400/40"
const MARK_SKY = "rounded-sm bg-sky-400/30 px-0.5 text-sky-50 ring-1 ring-sky-400/35"

type CleMiniDiffRow = {
  kind: keyof typeof LOGIC_LABEL
  left: React.ReactNode
  right: React.ReactNode
}

function CleMiniDiffTable({
  caption,
  colLeft,
  colRight,
  rows,
}: {
  caption: string
  colLeft: string
  colRight: string
  rows: CleMiniDiffRow[]
}) {
  return (
    <>
      <p className={CLE_MINI_DIFF_CAPTION}>{caption}</p>
      <div className={CLE_MINI_DIFF_GRID}>
        <div className="min-h-[1px]" aria-hidden />
        <div className={CLE_MINI_DIFF_HEADER_L}>{colLeft}</div>
        <div className={CLE_MINI_DIFF_HEADER_R}>{colRight}</div>
        {rows.map((row) => (
          <React.Fragment key={row.kind}>
            <div className="flex min-w-0 items-start pt-0.5">
              <LogicLabel kind={row.kind} />
            </div>
            <div className={CLE_MINI_DIFF_CELL_L}>{row.left}</div>
            <div className={CLE_MINI_DIFF_CELL_R}>{row.right}</div>
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

function CleMiniDiffCalloutAmber({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1.5 rounded-md border border-amber-500/35 bg-amber-500/10 px-2 py-1.5 text-[9px] leading-snug text-amber-100/95 sm:text-[10px]">
      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" aria-hidden />
      <span>{children}</span>
    </div>
  )
}

function CleMiniDiffCalloutEmerald({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-1.5 text-[9px] leading-snug text-emerald-100/90 sm:text-[10px]">
      <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" aria-hidden />
      <span>{children}</span>
    </div>
  )
}

const VARIANCE_REQUEST_COPY =
  "Total of 10 issued patents and patent expenses that need to be reimbursed is $500,000.\n15 provisionals filed and pending.\nLarge patent portfolio.\nLead investor wants to issue equity to cover patent costs on exclusive licensing terms. Currently at 15% for exclusive license for Field of use."

function CleVarianceTypewriter() {
  const [len, setLen] = React.useState(0)
  const full = VARIANCE_REQUEST_COPY
  const bootRef = React.useRef<number | null>(null)
  const intervalRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    setLen(0)
    if (bootRef.current) window.clearTimeout(bootRef.current)
    if (intervalRef.current) window.clearInterval(intervalRef.current)

    bootRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setLen((n) => {
          if (n >= full.length) {
            if (intervalRef.current) {
              window.clearInterval(intervalRef.current)
              intervalRef.current = null
            }
            return n
          }
          const next = n + 1
          if (next >= full.length && intervalRef.current) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = null
          }
          return next
        })
      }, 19)
    }, 280)

    return () => {
      if (bootRef.current) {
        window.clearTimeout(bootRef.current)
        bootRef.current = null
      }
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [full])

  const shown = full.slice(0, len)
  const done = len >= full.length

  return (
    <div className="mt-2.5 border-t border-white/[0.06] pt-2.5">
      <p className={CLE_MINI_DIFF_CAPTION}>Clause 8.2 · Variance request</p>
      <p className="mb-1.5 text-[8px] font-semibold uppercase tracking-[0.1em] text-white/40 sm:text-[9px]">
        Reasons for the variance request
      </p>
      <div
        className={cn(
          "min-h-[9.5rem] whitespace-pre-wrap rounded-md border border-white/[0.08] bg-black/35 px-2 py-1.5",
          "font-mono text-[9px] leading-relaxed tracking-tight text-white/75 sm:min-h-[10rem] sm:text-[10px]"
        )}
        role="status"
        aria-live="polite"
      >
        {shown}
        {!done ? (
          <span
            className="ml-px inline-block h-3 w-px translate-y-px bg-white/55 animate-pulse align-middle"
            aria-hidden
          />
        ) : null}
      </div>
    </div>
  )
}

const CLE_FEATURE_SKELETONS: CleFeatureCardSpec[] = [
  { label: "Diff & compare", hint: "See what changed, clause by clause", visual: "diff-compare" },
  { label: "Governance", hint: "Version control, policy, and audit trails", visual: "governance" },
  {
    label: "Deal context",
    hint: "Legal and Business development align",
    visual: "deal-context",
  },
]

/** Mini diff: same CLE logic lines as the demo; only deltas vs external are highlighted. */
function CleDiffCompareVisual() {
  const rows: CleMiniDiffRow[] = [
    {
      kind: "WHO",
      left: "University → Licensee",
      right: "University → Licensee",
    },
    {
      kind: "THEN",
      left: "Grants personal, non-transferable, exclusive licence to Exploit",
      right: (
        <>
          Grants personal, non-transferable, <mark className={MARK_AMBER}>non-exclusive</mark> licence to Exploit
        </>
      ),
    },
    {
      kind: "WITH",
      left: "Restricted to Field, Territory, and Term as defined",
      right: (
        <>
          Restricted to Field, Territory, and <mark className={MARK_SKY}>18-month</mark> Term as defined
        </>
      ),
    },
  ]

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-start" aria-hidden>
      <CleMiniDiffTable
        caption="Clause 4.1 · Licence Grant"
        colLeft="Your template"
        colRight="External"
        rows={rows}
      />
      <div className={CLE_MINI_DIFF_FOOTER}>
        <CleMiniDiffCalloutAmber>
          <span className="font-semibold text-amber-50/95">THEN</span> differs: external replaces{" "}
          <span className="font-semibold text-amber-50/95">exclusive</span> with{" "}
          <span className="font-semibold text-amber-50/95">non-exclusive</span> — flag before countersign.
        </CleMiniDiffCalloutAmber>
        <CleMiniDiffCalloutEmerald>
          <span className="font-semibold text-emerald-50/95">WHO</span> matches.{" "}
          <span className="font-semibold text-emerald-50/95">WITH</span> differs: external shortens term to{" "}
          <span className="font-semibold text-emerald-50/95">18 months</span> vs template term table.
        </CleMiniDiffCalloutEmerald>
      </div>
    </div>
  )
}

/** Deal room: diff vs risk rules, escalation to General counsel, rest of portfolio clear. */
function CleDealContextVisual() {
  const rows: CleMiniDiffRow[] = [
    {
      kind: "WHO",
      left: "Each party indemnifies the other within policy scope",
      right: "Each party indemnifies the other within policy scope",
    },
    {
      kind: "THEN",
      left: "Liability capped at fees paid in prior 12 months",
      right: (
        <>
          <mark className={MARK_AMBER}>Uncapped</mark> liability for IP infringement & regulatory claims
        </>
      ),
    },
    {
      kind: "WITH",
      left: "Warranties limited to knowledge & IP validity assertions",
      right: (
        <>
          <mark className={MARK_SKY}>Broad reps & warranties</mark> including fitness for any stated use
        </>
      ),
    },
  ]

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-start" aria-hidden>
      <CleMiniDiffTable
        caption="Clause 10 · Warranty & indemnity"
        colLeft="Risk rule set"
        colRight="This contract"
        rows={rows}
      />
      <div className={CLE_MINI_DIFF_FOOTER}>
        <CleMiniDiffCalloutAmber>
          <span className="font-semibold text-amber-50/95">Warranty & indemnity</span> needs to be raised with{" "}
          <span className="font-semibold text-amber-50/95">General counsel</span> for clearance.
        </CleMiniDiffCalloutAmber>
        <CleMiniDiffCalloutEmerald>
          All other clauses in compliance with the{" "}
          <span className="font-semibold text-emerald-50/95">risk rule set</span>.
        </CleMiniDiffCalloutEmerald>
      </div>
    </div>
  )
}

const EQUITY_MAX = 25
const EQUITY_POLICY_PCT = 10

function CleGovernanceVisual() {
  const [equity, setEquity] = React.useState(15)
  const overEquityPolicy = equity > EQUITY_POLICY_PCT
  const thresholdLeftPct = (EQUITY_POLICY_PCT / EQUITY_MAX) * 100

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="min-w-0">
        <div className="mb-1.5 flex items-baseline justify-between gap-2">
          <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-white/40 sm:text-[10px]">
            Equity
          </span>
          <span className="tabular-nums text-[10px] font-medium text-white/70 sm:text-[11px]">{equity}%</span>
        </div>
        <div className={cn("relative h-7 min-w-0", "mx-[7px]")}>
          <div
            className="pointer-events-none absolute left-0 right-0 top-1/2 z-0 h-2 -translate-y-1/2 rounded-full"
            style={{
              background: `linear-gradient(90deg, rgba(52,211,153,0.24) 0%, rgba(52,211,153,0.24) ${thresholdLeftPct}%, rgba(244,63,94,0.18) ${thresholdLeftPct}%, rgba(244,63,94,0.18) 100%)`,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-1/2 z-[1] w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.55)]"
            style={{ left: `${thresholdLeftPct}%`, height: "14px" }}
            aria-hidden
          />
          <input
            type="range"
            min={0}
            max={EQUITY_MAX}
            step={1}
            value={equity}
            onChange={(e) => setEquity(Number(e.target.value))}
            className={cn(
              "absolute inset-0 z-10 h-full w-full cursor-pointer appearance-none bg-transparent",
              "[&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white/25 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-md",
              "[&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:cursor-grab [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white/25 [&::-moz-range-thumb]:bg-white",
              "[&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-transparent",
              "[&::-moz-range-track]:h-2 [&::-moz-range-track]:rounded-full [&::-moz-range-track]:bg-transparent"
            )}
            aria-valuemin={0}
            aria-valuemax={EQUITY_MAX}
            aria-valuenow={equity}
            aria-label="Equity percentage"
          />
        </div>
        <div className="mt-1 flex justify-between text-[8px] text-white/30 sm:text-[9px]">
          <span>0%</span>
          <span className="text-rose-400/70">{EQUITY_POLICY_PCT}% max policy</span>
          <span>{EQUITY_MAX}%</span>
        </div>
        <div
          className={cn(
            "mt-2 overflow-hidden rounded-md border px-2 py-1.5 text-[9px] leading-snug transition-all duration-200 sm:text-[10px]",
            overEquityPolicy
              ? "max-h-16 border-rose-500/35 bg-rose-500/10 text-rose-100/90"
              : "max-h-0 border-transparent py-0 opacity-0"
          )}
          role="status"
        >
          {overEquityPolicy ? (
            <span className="flex gap-1.5">
              <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" aria-hidden />
              <span>Approval required for equity above {EQUITY_POLICY_PCT}%.</span>
            </span>
          ) : null}
        </div>
        <CleVarianceTypewriter />
      </div>
    </div>
  )
}

function CleFeatureSkeletonCard({ item }: { item: CleFeatureCardSpec }) {
  const { label, hint, visual } = item

  let visualNode: React.ReactNode
  if (visual === "diff-compare") {
    visualNode = <CleDiffCompareVisual />
  } else if (visual === "governance") {
    visualNode = <CleGovernanceVisual />
  } else if (visual === "deal-context") {
    visualNode = <CleDealContextVisual />
  } else {
    visualNode = (
      <div
        className="flex min-h-0 flex-1 flex-col justify-end space-y-2.5 sm:space-y-3"
        aria-hidden
      >
        <div className="h-2.5 w-20 rounded-full bg-white/12 animate-pulse" />
        <div className="h-4 w-3/4 max-w-[12rem] rounded-md bg-white/10 animate-pulse" />
        <div className="h-3 w-full rounded-md bg-white/[0.07] animate-pulse" />
        <div className="h-3 w-[92%] rounded-md bg-white/[0.07] animate-pulse" />
        <div className="h-3 w-[64%] rounded-md bg-white/[0.07] animate-pulse" />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "flex h-full min-w-0 flex-col rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 sm:p-6 lg:p-5 xl:p-7",
        CLE_FEATURE_CARD_MIN_H,
      )}
    >
      <div className="shrink-0 border-b border-white/[0.06] pb-3 lg:pb-3.5 xl:pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/45 sm:text-xs">{label}</p>
        <p className="mt-1 text-[12px] leading-snug text-white/35 sm:text-[13px]">{hint}</p>
      </div>
      <div className="mt-4 flex min-h-0 flex-1 flex-col">{visualNode}</div>
    </div>
  )
}

export function CleSection() {
  return (
    <section
      id="cle"
      className="relative flex min-h-[100svh] scroll-mt-24 flex-col overflow-x-clip overflow-y-visible border-t border-white/[0.06] bg-[#060607] py-16 text-white md:py-20 lg:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-7xl flex-1 flex-col px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid min-h-0 w-full min-w-0 flex-1 grid-cols-1 gap-10 sm:gap-12 lg:min-h-0 lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-10 xl:gap-x-14 xl:gap-y-8">
          <div className="flex min-w-0 max-w-xl flex-col justify-center self-start lg:max-w-none lg:py-1 xl:max-w-xl xl:py-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">Contract Logic Engine</p>
            <h2 className="mt-3 max-w-[480px] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-4xl xl:max-w-[520px] xl:text-5xl">
              Contracts as code.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-relaxed text-white/65 sm:mt-8 md:text-base lg:mt-6 xl:mt-8">
              Contract Logic Engine (CLE) extracts the logic of every clause. Contracts follow logic like computer code
              {" - "}
              <span className="inline-flex max-w-full flex-wrap items-center gap-1 align-middle">
                <LogicTag kind="WHO" />
                <LogicTag kind="THEN" />
                <LogicTag kind="WITH" />
                <LogicTag kind="IF" />
              </span>
              , and so on.
            </p>
            <p className="mt-6 max-w-[560px] text-sm leading-[1.7] text-white/65">
              Once extracted, it is easy to compare diffs, set rules, and let business development teams work within the
              institution&apos;s risk profile.
            </p>
            <p className="mt-6 max-w-[560px] text-sm leading-[1.7] text-white/65">
              CLE unlocks engagement with universities by making the process more transparent and predictable.
            </p>
          </div>
          <div className="flex w-full min-w-0 flex-col lg:max-w-full lg:justify-self-stretch xl:max-w-xl xl:justify-self-end">
            <CleDemo className="lg:max-w-full" />
          </div>
        </div>

        <div
          className="mt-12 w-full min-w-0 shrink-0 pt-10 sm:mt-16 sm:pt-12 md:mt-20 md:pt-16 lg:mt-14 lg:pt-12 xl:mt-20 xl:pt-20"
          aria-label="Contract Logic Engine capabilities preview"
        >
          <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.14em] text-white/40 sm:mb-8">
            What CLE unlocks
          </p>
          <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-7">
            {CLE_FEATURE_SKELETONS.map((item) => (
              <CleFeatureSkeletonCard key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContractLogicEngineSection() {
  return <CleSection />
}
