"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function CaseInfoCard({
  title,
  subtitle,
  className,
  children,
}: {
  title: string
  subtitle?: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "h-full w-full rounded-2xl border border-black/10 bg-white",
        "shadow-[0_10px_30px_rgba(0,0,0,0.06)]",
        className
      )}
    >
      <div className="flex h-full w-full flex-col p-5 md:p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="text-[13px] font-semibold text-black/80">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-1 text-[11px] font-normal text-black/45">
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 text-[11px] font-normal text-black/70 [&_*]:font-normal">
          {children}
        </div>
      </div>
    </div>
  )
}