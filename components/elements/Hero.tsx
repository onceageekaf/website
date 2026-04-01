"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export default function Hero({
  className,
  headline,
  subline,
}: {
  className?: string
  headline: string
  subline: string
}) {
  return (
    <div className={cn("w-full", className)}>
      <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight">
        {headline}
      </h1>
      <p className="mt-3 font-medium text-black/55 text-[22px] lg:text-[20px] xl:text-[26px]">
        {subline}
      </p>
    </div>
  )
}