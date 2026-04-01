// src/components/sections/System/SectionIntro.tsx
import * as React from "react"
import { cn } from "@/lib/utils"

type Props = {
  eyebrow?: string
  title: string
  description?: React.ReactNode
  className?: string
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <div className={cn("section-prose mx-auto mb-40 text-left", className)}>
      {eyebrow ? (
        <div className="text-[11px] font-medium tracking-[0.12em] uppercase text-black/50">
          {eyebrow}
        </div>
      ) : null}

      <h1 className="mt-2 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-normal text-black">
        {title}
      </h1>

      {description ? (
        <p className="mt-3 text-base md:text-lg lg:text-xl xl:text-2xl text-black/55 tracking-normal">
          {description}
        </p>
      ) : null}
    </div>
  )
}