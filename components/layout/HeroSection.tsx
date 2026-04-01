"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import PageShell from "@/components/layout/PageShell"

type Props = {
  headline: React.ReactNode
  subline?: React.ReactNode
  className?: string
  width?: "cards" | "full"
  children?: React.ReactNode
}

export default function HeroSection({
  headline,
  subline,
  className,
  width = "cards",
  children,
}: Props) {
  return (
    <section className={cn("w-full", className)}>
      {/* ✅ Containment frame for absolute children like DotBackground */}
      <div className="relative overflow-hidden">
        <PageShell width={width} className="py-10 md:py-14">
          {/* ✅ Content always above any absolute backgrounds */}
          <div className="relative z-10 mx-auto max-w-[860px] text-center">
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold tracking-tight text-black">
              {headline}
            </h1>

            {subline ? (
              <p className="mt-3 text-base md:text-lg text-black/55">
                {subline}
              </p>
            ) : null}

            {children ? (
              <div className="mt-8 flex justify-center">
                {children}
              </div>
            ) : null}
          </div>
        </PageShell>
      </div>
    </section>
  )
}