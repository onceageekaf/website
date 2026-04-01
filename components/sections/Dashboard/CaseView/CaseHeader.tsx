"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type CaseStageKey = "evaluation" | "protection" | "marketing" | "licensing"

type Props = {
  className?: string
}

export default function CaseHeader({ className }: Props) {
  return (
    <div className={cn("px-6 pt-6", className)}>
      {/* inventors */}
      <div className="flex flex-wrap items-center gap-2">
        <InventorPill initials="JD" name="Jane Doe" org="Faculty of Medicine" />
        <InventorPill initials="JS" name="John Smith" org="Faculty of Medicine" />
      </div>

      {/* title */}
      <h1 className="mt-4 text-2xl md:text-3xl font-semibold tracking-tight text-black">
        RNA containing modified nucleosides and methods of use
      </h1>

    </div>
  )
}

function InventorPill({
  initials,
  name,
  org,
}: {
  initials: string
  name: string
  org: string
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5">
      <div className="h-7 w-7 rounded-full border border-black/10 bg-black/[0.03] flex items-center justify-center text-[12px] font-semibold text-black/70">
        {initials}
      </div>
      <div className="leading-tight">
        <div className="text-[12px] font-medium text-black/80">{name}</div>
        <div className="text-[11px] text-black/45">{org}</div>
      </div>
    </div>
  )
}