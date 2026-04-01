"use client"

import Link from "next/link"
import * as React from "react"
import {
  ClipboardList,
  Sparkles,
  CheckCircle2,
  Users2,
  SearchCheck,
  BriefcaseBusiness,
  FolderKanban,
  Megaphone,
  ShieldCheck,
  Target,
  CircleDollarSign,
  FileText,
} from "lucide-react"
import FeatureDashboardVisual from "@/components/elements/FeatureDashboardVisual"
import { SignatureRoutingVisual } from "@/components/elements/SignatureRoutingVisual"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

type VisualKind = "dashboard" | "routing" | "bots"

const FEATURES: {
  key: string
  title: string
  blurb: string
  visual: VisualKind
}[] = [
  {
    key: "bots",
    title: "Automation Agents",
    blurb:
      "Fix manual work across disclosure, evaluation, marketing, and licensing with guided automated workflows.",
    visual: "bots",
  },
  {
    key: "routing",
    title: "Signature routing",
    blurb:
      "Fixes waiting on someone else by routing each signature step to the next owner, with auto-delegation when someone is delayed.",
    visual: "routing",
  },
  {
    key: "dashboard",
    title: "Dashboard",
    blurb:
      "Fixes manual updates with one live source of truth for CRM details and project status.",
    visual: "dashboard",
  },
]

const MEDIA_H = "min-h-[390px] h-[440px]"

function VisualBots() {
  const workflows = ["Disclosure", "Evaluation", "Marketing", "Licensing"] as const
  const DISCLOSURE_MS = {
    compose: 2200,
    running: 2400,
    done: 900,
  } as const
  const EVAL_STEP_MS = 900
  const MARKETING_STEP_MS = 900
  const LICENSING_STEP_MS = 900
  const FAST_MULTIPLIER = 5

  const evalGroups = [
    {
      title: "Due Diligence",
      lines: [
        "No Joint Inventors",
        "No encumbrances from funding grants",
      ],
    },
    {
      title: "Patent search",
      lines: [
        "extracted keywords",
        "Found 6 patents USPTO",
        "Found 9 patents Espacenet",
        "Found 4 technical papers",
      ],
    },
    {
      title: "Market Research",
      lines: [
        "Exisitng technologies",
        "Market analysis",
        "Potential licensees",
      ],
    },
  ] as const
  const marketingGroups = [
    {
      title: "Data Room",
      lines: ["NDA enabled. Digital signature", "Technical: 9 files"],
    },
    {
      title: "Marketing Campaign",
      lines: [
        "Contacts: 267",
        "Emails sent: 245",
        "Open rate: 48%",
        "Response rate: 11%",
        "Top prospects: 8",
      ],
    },
    {
      title: "Access Control",
      lines: [
        "Authorized Users: 18",
        "Pending Invitations: 5",
        "Downloads: 12",
      ],
    },
  ] as const
  const licensingGroups = [
    {
      title: "Negotiation Status",
      lines: [
        "Active Negotiations: 3 parties",
        "Round: Term Sheet",
        "Lead Prospect: BioTech Corp",
        "Timeline: 6 weeks",
      ],
    },
    {
      title: "Documentation",
      lines: [
        "License Agreement: Draft v3",
        "Technical Schedules: Complete",
        "Legal Review",
      ],
    },
    {
      title: "Negotiation Points",
      lines: [
        "Exclusive, Worldwide, Field of Use, Development timelines",
        "Sublicensing Rights, Milestone Payments, Termination",
      ],
    },
  ] as const

  const evalLineTotal = evalGroups.reduce((acc, g) => acc + g.lines.length, 0)
  const marketingLineTotal = marketingGroups.reduce((acc, g) => acc + g.lines.length, 0)
  const licensingLineTotal = licensingGroups.reduce((acc, g) => acc + g.lines.length, 0)
  const disclosureTotal = DISCLOSURE_MS.compose + DISCLOSURE_MS.running + DISCLOSURE_MS.done
  const evaluationTotal = evalLineTotal * EVAL_STEP_MS + 900
  const marketingTotal = marketingLineTotal * MARKETING_STEP_MS + 900
  const licensingTotal = licensingLineTotal * LICENSING_STEP_MS + 900
  const marketingStart = disclosureTotal + evaluationTotal
  const licensingStart = marketingStart + marketingTotal
  const totalLoop = disclosureTotal + evaluationTotal + marketingTotal + licensingTotal
  const [elapsed, setElapsed] = React.useState(0)
  const [pausedByUser, setPausedByUser] = React.useState(false)
  const [fastMode, setFastMode] = React.useState(false)
  const [stopAtElapsed, setStopAtElapsed] = React.useState<number | null>(null)
  const [userInteracted, setUserInteracted] = React.useState(false)

  React.useEffect(() => {
    if (pausedByUser) return
    const tickMs = 160
    const step = tickMs * (fastMode ? FAST_MULTIPLIER : 1)
    const id = window.setInterval(() => {
      setElapsed((t) => {
        if (stopAtElapsed !== null) {
          const unwrappedNext = t + step
          if (unwrappedNext >= stopAtElapsed) {
            setPausedByUser(true)
            setFastMode(false)
            setStopAtElapsed(null)
            return stopAtElapsed
          }
          return unwrappedNext
        }
        const next = t + step
        if (!userInteracted && next >= totalLoop - 1) {
          setPausedByUser(true)
          return totalLoop - 1
        }
        return next % totalLoop
      })
    }, tickMs)
    return () => window.clearInterval(id)
  }, [fastMode, pausedByUser, stopAtElapsed, totalLoop, userInteracted])

  const inDisclosure = elapsed < disclosureTotal
  const disclosureWithin = elapsed
  const disclosurePhase =
    disclosureWithin < DISCLOSURE_MS.compose
      ? "compose"
      : disclosureWithin < DISCLOSURE_MS.compose + DISCLOSURE_MS.running
        ? "running"
        : "done"
  const inEvaluation = elapsed >= disclosureTotal && elapsed < marketingStart
  const inMarketing = elapsed >= marketingStart && elapsed < licensingStart
  const inLicensing = elapsed >= licensingStart
  const evalElapsed = Math.max(0, elapsed - disclosureTotal)
  const evalCompletedLines = Math.min(evalLineTotal, Math.floor(evalElapsed / EVAL_STEP_MS))
  const evalActiveLine = Math.min(evalLineTotal - 1, Math.floor(evalElapsed / EVAL_STEP_MS))
  const evalStepProgress = (evalElapsed % EVAL_STEP_MS) / EVAL_STEP_MS
  const evalAllDone = evalCompletedLines >= evalLineTotal
  const marketingElapsed = Math.max(0, elapsed - marketingStart)
  const marketingCompletedLines = Math.min(marketingLineTotal, Math.floor(marketingElapsed / MARKETING_STEP_MS))
  const marketingActiveLine = Math.min(marketingLineTotal - 1, Math.floor(marketingElapsed / MARKETING_STEP_MS))
  const marketingStepProgress = (marketingElapsed % MARKETING_STEP_MS) / MARKETING_STEP_MS
  const marketingAllDone = marketingCompletedLines >= marketingLineTotal
  const licensingElapsed = Math.max(0, elapsed - licensingStart)
  const licensingCompletedLines = Math.min(
    licensingLineTotal,
    Math.floor(licensingElapsed / LICENSING_STEP_MS)
  )
  const licensingActiveLine = Math.min(
    licensingLineTotal - 1,
    Math.floor(licensingElapsed / LICENSING_STEP_MS)
  )
  const licensingStepProgress = (licensingElapsed % LICENSING_STEP_MS) / LICENSING_STEP_MS
  const licensingAllDone = licensingCompletedLines >= licensingLineTotal
  const attachments = [
    "Draft publication nature.pdf",
    "Writeup_notes.docx",
    "Presentation_nextyear.pptx",
  ] as const

  const extFor = (name: string) => {
    const i = name.lastIndexOf(".")
    return i >= 0 ? name.slice(i + 1).toUpperCase() : "FILE"
  }

  const extBadgeClass = (ext: string) =>
    ext === "PDF"
      ? "border-rose-200 bg-rose-50 text-rose-700"
      : ext === "DOCX"
        ? "border-sky-200 bg-sky-50 text-sky-700"
        : ext === "PPTX"
          ? "border-amber-200 bg-amber-50 text-amber-700"
          : "border-[#d7d9df] bg-[#f5f6f8] text-[#4c4d56]"

  const composeText = "please update manuscripts, documents, presentations."
  const agentText = "extracting information and filling the invention disclsoure form"
  const disclosureComposeProgress = Math.min(1, disclosureWithin / DISCLOSURE_MS.compose)
  const disclosureRunningElapsed = Math.max(0, disclosureWithin - DISCLOSURE_MS.compose)
  const disclosureRunningProgress = Math.min(1, disclosureRunningElapsed / DISCLOSURE_MS.running)
  const composeVisibleText =
    disclosurePhase === "compose"
      ? composeText.slice(0, Math.max(1, Math.floor(composeText.length * disclosureComposeProgress)))
      : composeText
  const agentVisibleText =
    disclosurePhase === "running"
      ? agentText.slice(0, Math.max(1, Math.floor(agentText.length * disclosureRunningProgress)))
      : agentText
  const visibleAttachments =
    disclosurePhase === "compose"
      ? Math.min(attachments.length, Math.max(1, Math.floor(disclosureWithin / 420)))
      : attachments.length

  const statusFor = (idx: number) => {
    if (idx === 0) return inDisclosure ? (disclosurePhase === "compose" ? "ai" : disclosurePhase) : "done"
    if (idx === 1) return inDisclosure ? "idle" : inEvaluation ? "running" : "done"
    if (idx === 2) return inMarketing ? (marketingAllDone ? "done" : "running") : inLicensing ? "done" : "idle"
    if (idx === 3) return inLicensing ? (licensingAllDone ? "done" : "running") : "idle"
    return "idle" as const
  }

  const activeGroups = inLicensing ? licensingGroups : inMarketing ? marketingGroups : evalGroups
  const activeActiveLine = inLicensing ? licensingActiveLine : inMarketing ? marketingActiveLine : evalActiveLine
  const activeStepProgress = inLicensing
    ? licensingStepProgress
    : inMarketing
      ? marketingStepProgress
      : evalStepProgress
  const activeAllDone = inLicensing ? licensingAllDone : inMarketing ? marketingAllDone : evalAllDone
  const jumpToStage = (idx: number) => {
    const stageStart =
      idx === 0
        ? 0
        : idx === 1
          ? disclosureTotal
          : idx === 2
            ? marketingStart
            : licensingStart
    const stageEnd =
      idx === 0
        ? disclosureTotal - 1
        : idx === 1
          ? marketingStart - 1
          : idx === 2
            ? licensingStart - 1
            : totalLoop - 1
    setElapsed(stageStart)
    setUserInteracted(true)
    setPausedByUser(false)
    setFastMode(true)
    setStopAtElapsed(stageEnd)
  }

  const iconForGroup = (title: string) => {
    if (title === "Due Diligence") return SearchCheck
    if (title === "Patent search") return ClipboardList
    if (title === "Market Research") return BriefcaseBusiness
    if (title === "Data Room") return FolderKanban
    if (title === "Marketing Campaign") return Megaphone
    if (title === "Access Control") return ShieldCheck
    if (title === "Negotiation Status") return Target
    if (title === "Documentation") return FileText
    if (title === "Negotiation Points") return CircleDollarSign
    return Users2
  }

  const toneForGroup = (title: string) => {
    if (title === "Due Diligence") return "bg-sky-50 text-sky-600"
    if (title === "Patent search") return "bg-violet-50 text-violet-600"
    if (title === "Market Research") return "bg-amber-50 text-amber-600"
    if (title === "Data Room") return "bg-blue-50 text-blue-600"
    if (title === "Marketing Campaign") return "bg-fuchsia-50 text-fuchsia-600"
    if (title === "Access Control") return "bg-emerald-50 text-emerald-600"
    if (title === "Negotiation Status") return "bg-blue-50 text-blue-600"
    if (title === "Documentation") return "bg-cyan-50 text-cyan-600"
    if (title === "Negotiation Points") return "bg-indigo-50 text-indigo-600"
    return "bg-slate-50 text-slate-600"
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center px-4 pb-4 pt-4">
      <div className="flex w-full max-w-[20rem] items-center justify-center gap-2">
        {workflows.map((w, idx) => {
          const status = statusFor(idx)
          return (
            <button
              type="button"
              key={w}
              onClick={() => jumpToStage(idx)}
              className={cn(
                "inline-flex h-6 w-[calc((100%-0.5rem)/4)] min-w-0 items-center justify-center gap-0.5 rounded-full border px-1 py-0 text-[9px] font-medium leading-none shadow-sm transition-colors",
                "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300",
                status === "done" && "border-emerald-300 bg-emerald-50 text-emerald-800",
                status === "ai" && "border-violet-200 bg-violet-50 text-violet-800",
                status === "running" && "border-sky-200 bg-sky-50 text-sky-800",
                status === "idle" && "border-[#e3e4e8] bg-white/95 text-[#4c4d56]"
              )}
            >
              {status === "ai" ? (
                <Sparkles className="h-2 w-2 animate-pulse shrink-0" />
              ) : status === "running" ? (
                <Spinner className="size-2 shrink-0" />
              ) : status === "done" ? (
                <CheckCircle2 className="h-2 w-2 shrink-0" />
              ) : (
                <span className="h-1 w-1 rounded-full bg-current/60 shrink-0" />
              )}
              <span>{w}</span>
            </button>
          )
        })}
      </div>

      <div className="mt-3 w-full max-w-[20rem] rounded-xl border border-[#dfe3ea] bg-white/95 p-2.5 shadow-[0_8px_24px_rgba(26,34,48,.08)]">
        <div
          className={cn(
            "relative overflow-hidden",
            inDisclosure
              ? "rounded-xl border border-[#e6e7eb] bg-white px-2.5 py-2"
              : "px-0 py-0"
          )}
        >
          {inDisclosure && disclosurePhase === "compose" ? (
            <div className="pointer-events-none absolute inset-0 z-20" aria-hidden>
              <div className="absolute left-4 top-4 rounded-lg border border-sky-100 bg-sky-50/70 px-2 py-1 text-[8px] font-medium text-sky-700">
                3 files selected
              </div>
              {attachments.map((file, i) => (
                <span
                  key={`drag-${file}`}
                  className="absolute inline-flex items-center gap-1 rounded-full border border-blue-300 bg-blue-600 px-2 py-0.5 text-[9px] font-medium text-white opacity-0 shadow-[0_5px_14px_rgba(37,99,235,.28)] animate-[bots-file-drop_2.1s_cubic-bezier(.24,.82,.31,1)_infinite]"
                  style={{
                    left: `${22 + i * 4}px`,
                    top: `${34 + i * 16}px`,
                    animationDelay: `${i * 90}ms`,
                  }}
                >
                  <span
                    className={cn(
                      "inline-flex h-3.5 min-w-0 items-center rounded border border-white/40 bg-white/20 px-1 text-[7px] font-bold leading-none text-white"
                    )}
                  >
                    {extFor(file)}
                  </span>
                  {file}
                </span>
              ))}
            </div>
          ) : null}
          {inDisclosure ? (
            <>
              <p className="text-[10px] leading-relaxed text-[#5c5d64]">
                {composeVisibleText}
              </p>

              <div className="mt-2 flex flex-wrap gap-1.5">
                {attachments.slice(0, visibleAttachments).map((file) => (
                  <span
                    key={file}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[9px] font-medium",
                      disclosurePhase === "done"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-800"
                        : "border-[#d7d9df] bg-[#f5f6f8] text-[#4c4d56]"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-3.5 min-w-0 items-center rounded border px-1 text-[7px] font-bold leading-none",
                        extBadgeClass(extFor(file))
                      )}
                    >
                      {extFor(file)}
                    </span>
                    {file}
                  </span>
                ))}
              </div>

              <div className="mt-2.5 border-t border-[#eceef2] pt-2">
                <div className="flex items-start gap-1.5">
                  {disclosurePhase === "compose" ? (
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 animate-pulse text-violet-600" />
                  ) : disclosurePhase === "running" ? (
                    <Spinner className="mt-0.5 h-3.5 w-3.5 text-sky-600" />
                  ) : (
                    <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-600" />
                  )}
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.03em] text-[#6b6d75]">
                      Disclosure agent
                    </p>
                    <p
                      className={cn(
                        "mt-0.5 text-[10px] leading-relaxed",
                        disclosurePhase === "done" ? "text-emerald-700" : "text-[#4c4d56]"
                      )}
                    >
                      {agentVisibleText}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-2">
              {activeGroups.map((group) => {
                let offset = 0
                for (const g of activeGroups) {
                  if (g.title === group.title) break
                  offset += g.lines.length
                }
                return (
                  <div key={group.title} className="rounded-lg border border-[#e8ebf0] bg-[#fafbfc] p-2">
                    <p className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#2f3137]">
                      <span
                        className={cn(
                          "inline-flex h-4 w-4 items-center justify-center rounded-full",
                          toneForGroup(group.title)
                        )}
                      >
                        {React.createElement(iconForGroup(group.title), { className: "h-2.5 w-2.5" })}
                      </span>
                      {group.title}
                    </p>
                    <div className="mt-1.5 space-y-1">
                      {group.lines.map((line, lineIdx) => {
                        const globalIdx = offset + lineIdx
                        const started = activeAllDone || globalIdx <= activeActiveLine
                        const done = activeAllDone || globalIdx < activeActiveLine
                        const isLegalReview = line === "Legal Review"
                        const isNegotiationPoints = group.title === "Negotiation Points"
                        const isNegotiationAgreed = isNegotiationPoints && lineIdx === 0
                        const isNegotiationRisk = isNegotiationPoints && lineIdx === 1
                        const negotiationPrefix = isNegotiationAgreed
                          ? "Agreed: "
                          : isNegotiationRisk
                            ? "Need to negotiate: "
                            : ""
                        const lineForTyping = `${negotiationPrefix}${line}`
                        const typingChars = Math.max(1, Math.floor(lineForTyping.length * activeStepProgress))
                        const visibleLine = !started ? "" : done ? lineForTyping : lineForTyping.slice(0, typingChars)
                        return (
                          <div key={line} className="flex items-center gap-1.5 text-[9px] text-[#4c4d56]">
                            {isLegalReview && done ? (
                              <span className="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-orange-300 bg-orange-50 text-[8px] font-bold leading-none text-orange-600">
                                !
                              </span>
                            ) : isNegotiationAgreed && done ? (
                              <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                            ) : isNegotiationRisk && done ? (
                              <span className="inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full border border-red-300 bg-red-50 text-[8px] font-bold leading-none text-red-600">
                                !
                              </span>
                            ) : done ? (
                              <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald-600" />
                            ) : started ? (
                              <Spinner className="h-3 w-3 shrink-0 text-sky-600" />
                            ) : (
                              <span className="h-3 w-3 shrink-0" />
                            )}
                            <span>{visibleLine}</span>
                            {isLegalReview && started ? (
                              <span className="inline-flex items-center rounded-full border border-[#d7d9df] bg-[#f3f4f6] px-1.5 py-0.5 text-[8px] font-semibold text-[#666a73]">
                                Ongoing
                              </span>
                            ) : null}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <style jsx>{`
          @keyframes bots-file-drop {
            0% {
              transform: translate(0px, 0px) scale(0.98);
              opacity: 0;
            }
            12% {
              opacity: 1;
            }
            62% {
              transform: translate(84px, 42px) scale(1);
              opacity: 0.95;
            }
            78% {
              transform: translate(92px, 48px) scale(0.99);
              opacity: 0.45;
            }
            100% {
              transform: translate(96px, 52px) scale(0.97);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  )
}

function FeatureVisual({ kind }: { kind: VisualKind }) {
  switch (kind) {
    case "dashboard":
      return <FeatureDashboardVisual />
    case "routing":
      return <SignatureRoutingVisual />
    case "bots":
      return <VisualBots />
    default:
      return null
  }
}

export default function ProductFeaturesSection() {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const el = rootRef.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true)
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={rootRef} className="mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center md:mb-14">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#55565d]">Features</p>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">
            Tech transfer made <br /> efficient, transparent, and scalable.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-7">
        {FEATURES.map((f, i) => (
          <article
            key={f.key}
            className={cn(
              "group flex flex-col overflow-hidden rounded-2xl border border-[#e8e8ec] bg-[#f3f3f5]/90",
              "shadow-[0_1px_0_rgba(0,0,0,.04),0_12px_40px_rgba(26,34,48,.06)]",
              "transition-[opacity,transform,box-shadow] duration-500 ease-out will-change-transform",
              "hover:-translate-y-0.5 hover:shadow-[0_12px_48px_rgba(26,34,48,.1)]",
              visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            )}
            style={{
              transitionDelay: visible ? `${i * 75}ms` : "0ms",
            }}
          >
            <div
              className={cn(
                "shrink-0 overflow-hidden border-b border-[#e8e8ec] bg-gradient-to-b from-white to-[#f6f6f8]",
                MEDIA_H
              )}
            >
              <FeatureVisual kind={f.visual} />
            </div>
            <div className="flex flex-1 flex-col p-6 text-left">
              <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#2f3137] md:text-xl">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4c4d56] md:text-[15px]">{f.blurb}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/#product-features"
          className="text-sm font-medium text-[#2f3137] transition-colors hover:text-[#111318]"
        >
          Learn more about the system
          <span className="ml-2 inline-block animate-hero-arrow" aria-hidden="true">
                  {"->"}
                </span>
        </Link>
      </div>
    </div>
  )
}
