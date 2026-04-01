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
  idlePhrase: "No response",
  afterDisplay: "3 days",
  outcomePhrase: "Auto-delegate",
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
    title: "Auto-delegate if no action",
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

function LogicPill({
  children,
  tone,
}: {
  children: React.ReactNode
  tone: "neutral" | "accent" | "numeric"
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium leading-none",
        tone === "neutral" && "border-black/[0.08] bg-[#efeff2] text-[#3d3f46]",
        tone === "accent" && "border-violet-200/80 bg-violet-100/90 text-violet-950",
        tone === "numeric" && "border-sky-200/90 bg-sky-100/95 text-sky-950 tabular-nums"
      )}
    >
      {children}
    </span>
  )
}

function StepBlock({
  title,
  sub,
  status,
  phase,
}: {
  title: React.ReactNode
  sub: string
  status: string
  phase: RoutingPhase
}) {
  return (
    <div className="min-w-0 flex-1">
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

/** Vertical rail; Faculty Dean and Auto-delegate share one row (side by side). */
function VerticalApprovalTimeline({ rule }: { rule: TimeoutRoutingRule }) {
  const steps = SIGNATURE_ROUTING_STEPS
  const beforePair = steps.slice(0, 2)
  
  const dean = steps[2]!
  const autoDelegate = steps[3]!
  const afterPair = steps.slice(4)

  return (
    <ol className="m-0 flex w-full min-w-0 list-none flex-col p-0" aria-label="Approval order">
      {beforePair.map((step) => (
        <li key={step.n} className="flex w-full min-w-0 gap-3 pb-3">
          <TimelineRail phase={step.phase} connectorHeightClass="h-8" />
          <StepBlock title={step.title} sub={step.sub} status={step.status} phase={step.phase} />
        </li>
      ))}

      <li className="flex w-full min-w-0 gap-3 pb-3">
        <TimelineRail phase={dean.phase} connectorHeightClass="h-8" />
        <div className="relative grid min-w-0 flex-1 grid-cols-2 gap-2 sm:gap-3">
          <StepBlock
            title={
              <>
                {dean.title}
                <span className="ml-[30px] inline-block text-neutral-500">{".........."}</span>
              </>
            }
            sub={dean.sub}
            status={dean.status}
            phase={dean.phase}
          />
          <div className="relative min-w-0">
            <StepBlock
              title={autoDelegate.title}
              sub={autoDelegate.sub}
              status={autoDelegate.status}
              phase={autoDelegate.phase}
            />
            <div
              className={cn(
                "absolute left-0 top-full z-10 mt-4 w-full max-w-[min(100%,17.5rem)] rounded-xl border border-[#e8e8ec] bg-white p-3 text-[9px] leading-none text-[#6b6d75]",
                "elevation-lg"
              )}
            >
              <p className="text-[9px] font-semibold uppercase tracking-[0.04em] text-[#6b6d75]">
                Rule:
              </p>
              <div className="mt-2 space-y-1.5">
                <div className="flex flex-wrap items-center gap-1">
                  <span>If</span>
                  <LogicPill tone="neutral">{rule.idlePhrase}</LogicPill>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>after</span>
                  <LogicPill tone="numeric">{rule.afterDisplay}</LogicPill>
                </div>
                <div className="flex flex-wrap items-center gap-1">
                  <span>then</span>
                  <LogicPill tone="accent">{rule.outcomePhrase}</LogicPill>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      {afterPair.map((step, i) => {
        const isLast = i === afterPair.length - 1
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
      <div className="min-h-0 flex flex-1 items-center justify-center">
        <div className="mx-auto w-full max-w-[22rem]">
          <VerticalApprovalTimeline rule={timeoutRule} />
        </div>
      </div>
    </div>
  )
}
