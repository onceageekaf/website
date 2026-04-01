"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CaseGridProps = {
  children: React.ReactNode
  className?: string
}

/**
 * CaseGrid
 * - Owns ALL geometry
 * - Mirrors WorkflowHero grid logic
 * - Cards never define their own size
 */
export default function CaseGrid({ children, className }: CaseGridProps) {
  return (
    <div
      className={cn(
        "grid isolate",
        "grid-cols-4",
        "auto-rows-[32px]", // same unit feel as WorkflowHero (lg)
        "gap-5",
        "w-full",
        className
      )}
    >
      {children}
    </div>
  )
}

/**
 * CaseGridItem
 * Semantic placement wrapper
 */
export function CaseGridItem({
  col,
  row,
  colSpan = 1,
  rowSpan = 1,
  children,
}: {
  col: number
  row: number
  colSpan?: number
  rowSpan?: number
  children: React.ReactNode
}) {
  return (
    <div
      style={{
        gridColumn: `${col} / span ${colSpan}`,
        gridRow: `${row} / span ${rowSpan}`,
      }}
      className="relative"
    >
      {children}
    </div>
  )
}