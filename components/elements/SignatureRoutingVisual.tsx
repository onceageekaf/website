"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/** Shown as pills: what waits, how long, then what happens */
export type TimeoutRoutingRule = {
  idlePhrase: string
  afterDisplay: string
  outcomePhrase: string
}

export const DEFAULT_TIMEOUT_RULE: TimeoutRoutingRule = {
  idlePhrase: "No reply",
  afterDisplay: "3 days",
  outcomePhrase: "Delegate",
}

export type RoutingPhase = "signing" | "awaiting" | "pending"

export const SIGNATURE_ROUTING_STEPS: {
  n: number
  title: string
  sub: string
  status: string
  phase: RoutingPhase
}[] = [
  {
    n: 1,
    title: "Legal Review",
    sub: "General Counsel Office",
    status: "Signed 2 days ago",
    phase: "signing",
  },
  {
    n: 2,
    title: "Department Head",
    sub: "Prof. J. Lindström",
    status: "Signed yesterday",
    phase: "signing",
  },
  {
    n: 3,
    title: "Faculty Dean",
    sub: "Prof. A. Okonkwo",
    status: "Awaiting – Day 2",
    phase: "awaiting",
  },
  {
    n: 4,
    title: "Auto-delegate",
    sub: "Dr. R. Mehta (Acting)",
    status: "Routes in 3 days",
    phase: "pending",
  },
  {
    n: 5,
    title: "Head of TTO",
    sub: "Final signatory",
    status: "Pending",
    phase: "pending",
  },
]

const phaseDot: Record<RoutingPhase, string> = {
  signing: "rounded-[3px] border-emerald-600 bg-emerald-500 shadow-[0_0_0_2px_rgba(255,255,255,1)]",
  awaiting:
    "rounded-[3px] border-blue-600 bg-blue-500 shadow-[0_0_0_2px_rgba(255,255,255,1),0_0_0_4px_rgba(59,130,246,0.2)]",
  pending: "rounded-[3px] border-[#b8b9c0] bg-[#d8d9de]",
}

const phaseStatus: Record<RoutingPhase, string> = {
  signing: "border-emerald-200/90 bg-emerald-50 text-emerald-900",
  awaiting: "border-blue-200/90 bg-blue-50 text-blue-900",
  pending: "border-[#e3e4e8] bg-[#f4f4f6] text-[#5c5d64]",
}

/** CLE-style keyword pills for light backgrounds (same hue families as LogicTag, no near-black fill). */
const RULE_KEYWORD_PILL: Record<"IF" | "AFTER" | "THEN", string> = {
  IF: "border-amber-300/90 bg-amber-100 text-amber-950",
  AFTER: "border-emerald-300/90 bg-emerald-100 text-emerald-950",
  THEN: "border-blue-300/90 bg-blue-100 text-blue-950",
}

function RuleKeywordPill({ kind, children }: { kind: keyof typeof RULE_KEYWORD_PILL; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-md border px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide sm:text-[9px]",
        RULE_KEYWORD_PILL[kind]
      )}
    >
      {children}
    </span>
  )
}

function LogicPill({
  children,
  tone,
  compact,
}: {
  children: React.ReactNode
  tone: "neutral" | "accent" | "numeric"
  compact?: boolean
}) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full min-w-0 items-center rounded-md border font-medium leading-tight",
        compact ? "px-1 py-0.5 text-[8px] sm:px-1.5 sm:text-[9px]" : "px-2 py-0.5 text-[11px] leading-none",
        tone === "neutral" && "border-black/[0.08] bg-[#efeff2] text-[#3d3f46]",
        tone === "accent" && "border-violet-200/80 bg-violet-100/90 text-violet-950",
        tone === "numeric" && "border-sky-200/90 bg-sky-100/95 text-sky-950 tabular-nums"
      )}
    >
      {/* Compact pills live in narrow columns: wrap instead of truncate */}
      <span className={cn("min-w-0", compact ? "whitespace-normal break-words text-left" : "truncate")}>
        {children}
      </span>
    </span>
  )
}

function StepBlock({
  title,
  sub,
  status,
  phase,
  shrinkToContent = false,
}: {
  title: React.ReactNode
  sub: string
  status: string
  phase: RoutingPhase
  /** When true, width follows title/sub/status instead of growing to fill the row. */
  shrinkToContent?: boolean
}) {
  return (
    <div className={cn("min-w-0", shrinkToContent ? "w-max max-w-full" : "flex-1")}>
      <p className="text-[11px] font-semibold leading-tight text-[#2f3137]">{title}</p>
      <p className="mt-0.5 text-[10px] leading-snug text-[#6b6d75]">{sub}</p>
      <p
        className={cn(
          "mt-1 inline-block rounded-md border px-1.5 py-0.5 text-[9px] font-medium tabular-nums",
          phaseStatus[phase]
        )}
      >
        {status}
      </p>
    </div>
  )
}

function TimelineRail({
  phase,
  connectorHeightClass,
}: {
  phase: RoutingPhase
  connectorHeightClass: string
}) {
  return (
    <div className="flex w-5 shrink-0 flex-col items-center pt-1">
      <span className={cn("h-2.5 w-2.5 shrink-0", phaseDot[phase])} aria-hidden />
      <span
        className={cn(
          "mt-1 w-0 shrink-0 border-l-2 border-dashed border-[#c5cad6]",
          connectorHeightClass
        )}
        aria-hidden
      />
    </div>
  )
}

/** Branch: left stack Dean → Head of TTO; right stack Auto-delegate → Rule (Rule sits under Auto text). */
function VerticalApprovalTimeline({ rule }: { rule: TimeoutRoutingRule }) {
  const steps = SIGNATURE_ROUTING_STEPS
  const beforePair = steps.slice(0, 2)

  const dean = steps[2]!
  const autoDelegate = steps[3]!
  const headOfTto = steps[4]!
  const tailSteps = steps.slice(5)

  return (
    <ol className="m-0 flex w-full min-w-0 list-none flex-col p-0" aria-label="Approval order">
      {beforePair.map((step) => (
        <li key={step.n} className="flex w-full min-w-0 gap-3 pb-3">
          <TimelineRail phase={step.phase} connectorHeightClass="h-8" />
          <StepBlock title={step.title} sub={step.sub} status={step.status} phase={step.phase} />
        </li>
      ))}

      <li className="w-full min-w-0 pb-3">
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-3 sm:min-w-[46%]">
            <div className="flex min-w-0 gap-3">
              <TimelineRail phase={dean.phase} connectorHeightClass="h-8" />
              <StepBlock title={dean.title} sub={dean.sub} status={dean.status} phase={dean.phase} />
            </div>
            <div className="flex min-w-0 gap-3">
              <TimelineRail phase={headOfTto.phase} connectorHeightClass="h-0" />
              <StepBlock
                title={headOfTto.title}
                sub={headOfTto.sub}
                status={headOfTto.status}
                phase={headOfTto.phase}
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-col gap-2 self-start">
            <div className="flex min-w-0 gap-3">
              <TimelineRail phase={autoDelegate.phase} connectorHeightClass="h-0" />
              <StepBlock
                title={autoDelegate.title}
                sub={autoDelegate.sub}
                status={autoDelegate.status}
                phase={autoDelegate.phase}
                shrinkToContent
              />
            </div>
            {/* Rule: same left edge as timeline dot; width matches icon + Auto-delegate row */}
            <div className="min-w-0 w-full">
              <div
                className={cn(
                  "rounded-lg border border-[#e8e8ec] bg-white p-2 text-[8px] leading-snug text-[#6b6d75] sm:p-2.5 sm:text-[9px]",
                  "elevation-lg w-full min-w-0 max-w-full"
                )}
              >
                <p className="text-[8px] font-semibold uppercase tracking-[0.04em] text-[#6b6d75] sm:text-[9px]">
                  Rule
                </p>
                <div className="mt-1.5 space-y-2 sm:mt-2">
                  <div className="flex w-full min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <RuleKeywordPill kind="IF">IF</RuleKeywordPill>
                    <div className="self-end sm:self-auto">
                      <LogicPill tone="neutral" compact>
                        {rule.idlePhrase}
                      </LogicPill>
                    </div>
                  </div>
                  <div className="flex w-full min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <RuleKeywordPill kind="AFTER">AFTER</RuleKeywordPill>
                    <div className="self-end sm:self-auto">
                      <LogicPill tone="numeric" compact>
                        {rule.afterDisplay}
                      </LogicPill>
                    </div>
                  </div>
                  <div className="flex w-full min-w-0 flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                    <RuleKeywordPill kind="THEN">THEN</RuleKeywordPill>
                    <div className="self-end sm:self-auto">
                      <LogicPill tone="accent" compact>
                        {rule.outcomePhrase}
                      </LogicPill>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {tailSteps.map((step, i) => {
        const isLast = i === tailSteps.length - 1
        return (
          <li key={step.n} className="flex w-full min-w-0 gap-3 pb-3 last:pb-0">
            <div className="flex w-5 shrink-0 flex-col items-center pt-1">
              <span className={cn("h-2.5 w-2.5 shrink-0", phaseDot[step.phase])} aria-hidden />
              {!isLast ? (
                <span
                  className="mt-1 h-8 w-0 shrink-0 border-l-2 border-dashed border-[#c5cad6]"
                  aria-hidden
                />
              ) : null}
            </div>
            <StepBlock title={step.title} sub={step.sub} status={step.status} phase={step.phase} />
          </li>
        )
      })}
    </ol>
  )
}

export function SignatureRoutingVisual({
  className,
  timeoutRule = DEFAULT_TIMEOUT_RULE,
}: {
  className?: string
  timeoutRule?: TimeoutRoutingRule
}) {
  return (
    <div
      className={cn(
        "flex h-full w-full min-w-0 flex-col overflow-y-auto overflow-x-hidden border border-[#e8e8ec] bg-white p-3.5 sm:p-4",
        className
      )}
    >
      <div className="min-h-0 flex flex-1 items-start justify-center px-0.5 pt-1 sm:items-center sm:pt-0">
        <div className="mx-auto w-full min-w-0 max-w-[min(100%,28rem)]">
          <VerticalApprovalTimeline rule={timeoutRule} />
        </div>
      </div>
    </div>
  )
}
