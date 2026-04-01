"use client"

import * as React from "react"
import ViewLayout from "./ViewLayout"
import {
  Handshake,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
  DollarSign,
  BadgeCheck,
} from "lucide-react"

import type { ViewCardProps, ViewCardItem } from "../cards/ViewCard"

function CountBadgeGreen({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold bg-emerald-500/15 text-emerald-700">
      {children}
    </span>
  )
}

function Pill({ children, tone }: { children: React.ReactNode; tone: "green" | "blue" }) {
  const cls =
    tone === "green"
      ? "bg-emerald-500/15 text-emerald-700"
      : "bg-blue-500/15 text-blue-700"
  return (
    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${cls}`}>
      {children}
    </span>
  )
}

const licensingCards: ViewCardProps[] = [
  {
    title: "Licensing Strategy",
    icon: <Handshake className="h-4 w-4 text-white" />,
    iconClassName: "bg-amber-500/80 text-amber-600",
    items: [
      { label: "Key Milestones", icon: <FileText className="h-4 w-4" /> },
      { label: "Success Metrics", icon: <BadgeCheck className="h-4 w-4" /> },
      { label: "Target Partners", icon: <Users className="h-4 w-4" /> },
    ],
    footer: { label: "+ 5 more" },
  },
  {
    title: "Key Findings",
    icon: <TrendingUp className="h-4 w-4 text-white" />,
    iconClassName: "bg-violet-500/80 text-violet-600",
    items: [
      { label: "Novel mechanism validated in multiple models", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Strong patent protection with 15+ year runway", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Manufacturing scale-up requires optimization", icon: <AlertTriangle className="h-4 w-4" /> },
    ],
    footer: { label: "+ 2 more" },
  },
  {
    title: "Negotiation",
    icon: <Handshake className="h-4 w-4 text-white" />,
    iconClassName: "bg-blue-500/80 text-blue-600",
    items: [
      { label: "Status - Active ", icon: <Handshake className="h-4 w-4" />, right: <CountBadgeGreen>4</CountBadgeGreen> },
      { label: "Lead Prospect - BioTech Corp", icon: <Users className="h-4 w-4" /> },
      { label: "Timeline - 6 weeks", icon: <FileText className="h-4 w-4" /> },
    ] as ViewCardItem[],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Key points",
    icon: <BadgeCheck className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Exclusive territory", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Field of use", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Dev Timelines", icon: <AlertTriangle className="h-4 w-4" /> },
    ],
    footer: { label: "+ 8 more" },
  },
  {
    title: "Tech Due Diligence",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-slate-500/80 text-slate-600",
    items: [
      { label: "Documentation Review", icon: <FileText className="h-4 w-4" /> },
      { label: "Data Verification", icon: <BadgeCheck className="h-4 w-4" /> },
      { label: "Timeline", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ 10 more" },
  },
  {
    title: "Expert Review Panel",
    icon: <Users className="h-4 w-4 text-white" />,
    iconClassName: "bg-indigo-500/80 text-indigo-600",
    items: [
      { label: "Dr. Sarah Chen — mRNA Technology", icon: <Users className="h-4 w-4" /> },
      { label: "Complete", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Dr. Lisa Park — Manufacturing (In Progress)", icon: <AlertTriangle className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Financial terms",
    icon: <DollarSign className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Upfront: $ 3.5 million", icon: <DollarSign className="h-4 w-4" /> },
      { label: "Milestones: $ 42 million", icon: <DollarSign className="h-4 w-4" /> },
      { label: "Royalties: 3%", icon: <DollarSign className="h-4 w-4" /> },
    ],
    footer: { label: "Minimum: $ 8M/year" },
  },
  {
    title: "Offers",
    icon: <Handshake className="h-4 w-4 text-white" />,
    iconClassName: "bg-sky-500/80 text-sky-600",
    items: [
      { label: "BioTech Corp", icon: <Handshake className="h-4 w-4" />, right: <Pill tone="green">Lead</Pill> },
      { label: "PharmaCorp", icon: <Handshake className="h-4 w-4" />, right: <Pill tone="blue">Active</Pill> },
      { label: "VentureXBio", icon: <Handshake className="h-4 w-4" />, right: <Pill tone="blue">Active</Pill> },
    ] as ViewCardItem[],
    footer: { label: "+ 1 More" },
  },
]

export default function LicensingView1({ revealStep = 8 }: { revealStep?: number }) {
  return (
    <ViewLayout
      cards={licensingCards.map((c, idx) => ({
        ...c,
        revealed: idx < revealStep,
        revealDelayMs: idx * 90,
        showSkeleton: true,
        widthClassName: "w-full",
      }))}
    />
  )
}