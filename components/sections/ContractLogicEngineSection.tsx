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
  WHO: "border-emerald-500/35 bg-emerald-500/15 text-emerald-300",
  THEN: "border-blue-500/35 bg-blue-500/15 text-blue-300",
  WITH: "border-rose-500/40 bg-rose-950/40 text-rose-200",
  IF: "border-amber-500/35 bg-amber-950/50 text-amber-200/95",
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

function CleDemo() {
  const [openIndex, setOpenIndex] = React.useState(0)

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0f0f12] shadow-[0_24px_80px_rgba(0,0,0,.45)]">
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
      <div className="max-h-[min(420px,58vh)] overflow-y-auto p-3 sm:p-4">
        <ul className="space-y-2">
          {CLAUSES.map((row, i) => {
            const isOpen = openIndex === i
            return (
              <li key={row.title}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className={cn(
                    "w-full rounded-xl border px-3 py-2.5 text-left transition-[background-color,border-color,padding] duration-200",
                    isOpen
                      ? "border-blue-500/25 bg-[#151a2a]"
                      : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                  )}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[13px] font-semibold text-white/95">{row.title}</span>
                      <span className="ml-2 text-[11px] text-white/35">{row.clauseRef}</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {row.tags.map((t, j) => (
                        <LogicTag key={`${row.title}-tag-${j}`} kind={t} />
                      ))}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="mt-3 border-t border-white/[0.06] pt-3 text-[11px] leading-relaxed text-white/70">
                      {row.logic.map((line, lineIdx) => (
                        <span key={lineIdx} className="block">
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

export function CleSection() {
  return (
    <section
      id="cle"
      className="relative scroll-mt-24 overflow-hidden border-t border-white/[0.06] bg-[#060607] py-16 text-white md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-10">
          <div className="max-w-xl lg:pt-2">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-white/45">Contract Logic Engine</p>
            <h2 className="mt-3 max-w-[480px] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
              Contracts as code.
            </h2>
            <p className="mt-8 max-w-[560px] text-[15px] leading-relaxed text-white/65 md:text-base">
              Contract Logic Engine (CLE) extracts the logic of every clause. Contracts follow logic like computer code
              {" - "}
              <span className="inline-flex flex-wrap items-center gap-1 align-middle">
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
          <div className="w-full lg:self-center lg:justify-self-center lg:max-w-xl">
            <CleDemo />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ContractLogicEngineSection() {
  return <CleSection />
}
