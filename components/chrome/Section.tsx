"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LAYOUT_WIDTHS, type LayoutWidth, CHROME } from "@/lib/layout"

type Props = {
  width?: LayoutWidth
  className?: string
  children: React.ReactNode
  // if true, adds the Attio-like subtle border + rounded container
  framed?: boolean
}

export default function Section({
  width = "cards",
  className,
  framed = false,
  children,
}: Props) {
  return (
    <section className={cn("w-full", className)}>
      <div className={cn("mx-auto w-full px-6", LAYOUT_WIDTHS[width])}>
        <div
          className={cn(
            framed && "bg-white",
            framed && CHROME.border
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}