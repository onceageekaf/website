"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import ViewCard from "../cards/ViewCard"

type ViewLayoutCard = React.ComponentProps<typeof ViewCard>

type Props = {
  cards: ViewLayoutCard[]
  className?: string
}

export default function ViewLayout({ cards, className }: Props) {
  const [visibleCount, setVisibleCount] = React.useState(0)

  // reveal sequentially on mount
  React.useEffect(() => {
    let alive = true
    setVisibleCount(0)

    const stepMs = 120 // card-to-card cadence
    const t0 = window.setTimeout(() => {
      if (!alive) return
      setVisibleCount(1)
    }, 10)

    const timers: number[] = [t0]

    for (let i = 1; i < cards.length; i++) {
      const t = window.setTimeout(() => {
        if (!alive) return
        setVisibleCount((v) => Math.max(v, i + 1))
      }, i * stepMs)
      timers.push(t)
    }

    return () => {
      alive = false
      timers.forEach((t) => window.clearTimeout(t))
    }
  }, [cards.length])

  return (
    <section className={cn("w-full", className)}>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, idx) => {
          const revealed = idx < visibleCount
          const delay = idx * 80 // per-card ease delay
          return (
            <div key={("id" in card && typeof card.id === "string" ? card.id : undefined) ?? `${card.title}-${idx}`} className="flex">
              <ViewCard
                {...card}
                className={cn("h-full w-full", card.className)}
                revealed={revealed}
                revealDelayMs={delay}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}