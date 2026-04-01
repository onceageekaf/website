"use client"

import * as React from "react"
import ViewLayout from "./ViewLayout"
import {
  BadgeCheck,
  FileText,
  CalendarClock,
  Users,
  CheckCircle2,
  AlertTriangle,
  PencilRuler,
} from "lucide-react"

import type { ViewCardProps } from "../cards/ViewCard"

const protectionCards: ViewCardProps[] = [
  {
    title: "Approval status",
    icon: <BadgeCheck className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Status: Provisional filing approved", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Prior Art, Market Report", icon: <FileText className="h-4 w-4" /> },
      { label: "Financial Model", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "March 15, 2025" },
  },
  {
    title: "Filing Status",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Utility Patent filed — May 15, 2025", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Application # US 18/123.456", icon: <FileText className="h-4 w-4" /> },
      { label: "Status: Under Examination", icon: <AlertTriangle className="h-4 w-4" /> },
    ],
    footer: { label: "PCT TBD May 15, 2026" },
  },
  {
    title: "Drafting Progress",
    icon: <PencilRuler className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Abstract Complete", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Claims Complete", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Detailed Complete", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "AI draft + Attorney review" },
  },
  {
    title: "Inventors Review",
    icon: <Users className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Jane Doe — done", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Jack Smith — done", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Review status — approved", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 4 more" },
  },
  {
    title: "Required Documents",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Invention disclosure form", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Prior art search results", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Technical specifications", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Prosecution Timeline",
    icon: <CalendarClock className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "First Office Action : Expected November 2026", icon: <CalendarClock className="h-4 w-4" /> },
      { label: "Patent Grant - 2027-2029", icon: <CalendarClock className="h-4 w-4" /> },
      { label: "Fees: $ 3,260", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Inventor Approvals",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Intial Review: March 10,2025", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Co-Inventor Approval: March 18, 2025", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Final review completed: May 5, 2025", icon: <CheckCircle2 className="h-4 w-4" /> },
    ],
    footer: { label: "+ 10 More" },
  },
  {
    title: "Key Comments",
    icon: <FileText className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Technical description accurate", icon: <CheckCircle2 className="h-4 w-4" /> },
      { label: "Expand delivery mechanism", icon: <AlertTriangle className="h-4 w-4" /> },
      { label: "Claim 7 needs rewrite", icon: <AlertTriangle className="h-4 w-4" /> },
    ],
    footer: { label: "+ 10 More" },
  },
]

export default function ProtectionView1({ revealStep = 8 }: { revealStep?: number }) {
  return (
    <ViewLayout
      cards={protectionCards.map((c, idx) => ({
        ...c,
        revealed: idx < revealStep,
        revealDelayMs: idx * 90,
        showSkeleton: true,
        widthClassName: "w-full",
      }))}
    />
  )
}