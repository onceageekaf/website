"use client"

import * as React from "react"
import ViewLayout from "./ViewLayout"
import {
  Globe,
  Sparkles,
  FolderLock,
  Activity,
  BarChart3,
  FileText,
  Mail,
  CheckCircle2,
  Badge,
} from "lucide-react"

import type { ViewCardProps, ViewCardItem } from "../cards/ViewCard"

function CountBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold bg-black/10 text-black/70">
      {children}
    </span>
  )
}

const marketingCards: ViewCardProps[] = [
  {
    title: "Invention Overview",
    icon: <Globe className="h-4 w-4 text-white" />,
    iconClassName: "bg-blue-500/80 text-blue-600",
    items: [
      { label: "mRNA Vaccine Technology", icon: <FileText className="h-4 w-4" /> },
      { label: "Breakthrough technology", icon: <Sparkles className="h-4 w-4" /> },
      { label: "Proof of Concept", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 5 more" },
  },
  {
    title: "Target Applications",
    icon: <Sparkles className="h-4 w-4 text-white" />,
    iconClassName: "bg-indigo-500/80 text-indigo-600",
    items: [
      { label: "Pandemic response vaccines", icon: <FileText className="h-4 w-4" /> },
      { label: "Personalized cancer immunotherapy", icon: <FileText className="h-4 w-4" /> },
      { label: "Rare disease treatments", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Data Room",
    icon: <FolderLock className="h-4 w-4 text-white" />,
    iconClassName: "bg-violet-500/80 text-violet-600",
    items: [
      {
        label: "Document Categories",
        icon: <FolderLock className="h-4 w-4" />,
        right: <CountBadge>3</CountBadge>,
      },
      {
        label: "Access Control",
        icon: <Badge className="h-4 w-4" />,
        right: <CountBadge>18</CountBadge>,
      },
      {
        label: "Activity Summary",
        icon: <Activity className="h-4 w-4" />,
        right: <CountBadge>4K</CountBadge>,
      },
    ] as ViewCardItem[],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Recent Activity",
    icon: <Activity className="h-4 w-4 text-white" />,
    iconClassName: "bg-slate-500/80 text-slate-600",
    items: [
      { label: "BioTech Corp accessed Financial Models 2h ago", icon: <Activity className="h-4 w-4" /> },
      { label: "VentureX downloaded Executive Summary 5h ago", icon: <Activity className="h-4 w-4" /> },
      { label: "New user invitation sent 1d ago", icon: <Mail className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Key Benefits",
    icon: <Sparkles className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Rapid vaccine development", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Enhanced immune response", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Scalable manufacturing", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 10 more" },
  },
  {
    title: "Prosecution Timeline",
    icon: <BarChart3 className="h-4 w-4 text-white" />,
    iconClassName: "bg-amber-500/80 text-amber-600",
    items: [
      { label: "First Office Action : Expected November 2026", icon: <BarChart3 className="h-4 w-4" /> },
      { label: "Patent Grant - 2027-2029", icon: <BarChart3 className="h-4 w-4" /> },
      { label: "Fees: $ 3,260", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Legal Agreements",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-sky-500/80 text-sky-600",
    items: [
      { label: "NDA signed 15/18", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "MTA Signed 8/12", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Due Diligence 5 Active", icon: <Activity className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Metrics",
    icon: <BarChart3 className="h-4 w-4 text-white" />,
    iconClassName: "bg-black/60 text-black",
    items: [
      { label: "Email sent : 328", icon: <Mail className="h-4 w-4" /> },
      { label: "Open rate - 69%", icon: <BarChart3 className="h-4 w-4" /> },
      { label: "Response rate - 9%", icon: <BarChart3 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 10 More" },
  },
]

export default function MarketingView1({ revealStep = 8 }: { revealStep?: number }) {
  return (
    <ViewLayout
      cards={marketingCards.map((c, idx) => ({
        ...c,
        revealed: idx < revealStep,
        revealDelayMs: idx * 90,
        showSkeleton: true,
        widthClassName: "w-full",
      }))}
    />
  )
}