"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LAYOUT_WIDTHS, type LayoutWidth } from "@/lib/layout"

type Props = {
  width?: LayoutWidth
  className?: string
  children: React.ReactNode
}

export default function PageShell({
  width = "cards",
  className,
  children,
}: Props) {
  const widthClass = LAYOUT_WIDTHS[width] ?? LAYOUT_WIDTHS.cards

  return (
    <div className={cn("mx-auto w-full px-6", widthClass, className)}>
      {children}
    </div>
  )
}