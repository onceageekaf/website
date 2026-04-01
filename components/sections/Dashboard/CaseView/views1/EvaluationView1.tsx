"use client"

import * as React from "react"
import ViewLayout from "./ViewLayout"
import {
  BadgeCheck,
  ScanSearch,
  BookOpen,
  Activity,
  CheckCircle2,
  TrendingUp,
  DollarSign,
  Database,
  FileText,
} from "lucide-react"

import type { ViewCardProps } from "../cards/ViewCard"

const evaluationCards: ViewCardProps[] = [
  {
    title: "Due Diligence",
    icon: <BadgeCheck className="h-4 w-4 text-white" />,
    iconClassName: "bg-cyan-500/80 text-cyan-600",
    items: [
      { label: "NIH Agreement — March-in Rights", icon: <FileText className="h-4 w-4" /> },
      { label: "Sponsored Research Agreement — Background IP", icon: <FileText className="h-4 w-4" /> },
      { label: "Joint Inventors — Inter-institutional Agreement", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ more attributes" },
  },
  {
    title: "Prior Art",
    icon: <ScanSearch className="h-4 w-4 text-white" />,
    iconClassName: "bg-sky-500/80 text-sky-600",
    items: [
      { label: "US 8,234,567", icon: <FileText className="h-4 w-4" /> },
      { label: "US 7,891,234", icon: <FileText className="h-4 w-4" /> },
      { label: "US 9,567,123", icon: <FileText className="h-4 w-4" /> },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Literature",
    icon: <BookOpen className="h-4 w-4 text-white" />,
    iconClassName: "bg-indigo-500/80 text-indigo-600",
    items: [
      { label: "Science Journal" },
      { label: "Cell Biology Review" },
      { label: "Nature Biotechnology" },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Analysis Status",
    icon: <Activity className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Prior art search completed" },
      { label: "Novelty assessment" },
      { label: "Claim scope evaluation — pending", muted: true },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Key Findings",
    icon: <CheckCircle2 className="h-4 w-4 text-white" />,
    iconClassName: "bg-emerald-500/80 text-emerald-600",
    items: [
      { label: "Strong novelty indicators" },
      { label: "Clear inventive step" },
      { label: "Broad claim scope potential" },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Comparable Deals",
    icon: <TrendingUp className="h-4 w-4 text-white" />,
    iconClassName: "bg-violet-500/80 text-violet-600",
    items: [
      { label: "Vaccine Technology Sector" },
      { label: "Royalty Range: 1% to 3%" },
      { label: "Average Deal Size: $45M" },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Milestone Payments",
    icon: <DollarSign className="h-4 w-4 text-white" />,
    iconClassName: "bg-amber-500/80 text-amber-600",
    items: [
      { label: "Animal model validation: $150,000" },
      { label: "Human clinical trials: $250,000" },
      { label: "Phase III completion: $500,000" },
    ],
    footer: { label: "+ 3 more" },
  },
  {
    title: "Data Sources",
    icon: <Database className="h-4 w-4 text-white" />,
    iconClassName: "bg-slate-500/80 text-slate-600",
    items: [
      { label: "Royalty Range Database" },
      { label: "Data Alchemist Platform" },
      { label: "KtMine Analytics" },
    ],
    footer: { label: "+ 2 more" },
  },
]

export default function EvaluationView1({ revealStep = 8 }: { revealStep?: number }) {
  return (
    <ViewLayout
      cards={evaluationCards.map((c, idx) => ({
        ...c,
        // reveal one-by-one
        revealed: idx < revealStep,
        revealDelayMs: idx * 90,
        // keep skeleton transitions if your ViewCard supports it
        showSkeleton: true,
      }))}
    />
  )
}