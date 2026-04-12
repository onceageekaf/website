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
    <div className={cn("mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-10 xl:px-8", widthClass, className)}>
      {children}
    </div>
  )
}