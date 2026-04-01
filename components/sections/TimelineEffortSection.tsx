"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { TIMELINE_STAGES, type TimelineStage } from "@/data/timeline-stages"

function StageVisual({ stage }: { stage: TimelineStage }) {
  if (stage.imageSrc) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#dfdfe3] bg-white shadow-[0_12px_40px_rgba(26,34,48,.06)]">
        <Image
          src={stage.imageSrc}
          alt={stage.imageAlt ?? ""}
          fill
          className="object-cover object-center"
          sizes="(min-width: 1024px) 42vw, 100vw"
        />
      </div>
    )
  }
  return (
    <div
      className={cn(
        "relative flex aspect-[4/3] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-[#dfdfe3] bg-gradient-to-br from-white to-[#f0f0f2]",
        "shadow-[0_12px_40px_rgba(26,34,48,.06)]"
      )}
      aria-hidden
    >
      <div className="flex gap-2 opacity-90">
        <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#4c4d56] shadow-sm">
          MES
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#4c4d56] shadow-sm">
          QMS
        </span>
        <span className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-[#4c4d56] shadow-sm">
          ERP
        </span>
      </div>
    </div>
  )
}

export default function TimelineEffortSection({
  stages = TIMELINE_STAGES,
}: {
  stages?: TimelineStage[]
}) {
  const scrollRootRef = React.useRef<HTMLDivElement>(null)
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const update = () => {
      const el = scrollRootRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY
      const scrollable = Math.max(1, el.offsetHeight - window.innerHeight)
      const raw = (window.scrollY - top) / scrollable
      const p = Math.min(1, Math.max(0, raw))
      setProgress(reduceMotion ? Math.round(p * 100) / 100 : p)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <section className="relative bg-[#f6f6f7] text-[#2a2a2f]" aria-labelledby="timeline-effort-heading">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-16 text-center md:pb-14 md:pt-20">
        <p className="mb-4 inline-flex rounded-full border border-[#e3e4e8] bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-[#b45309]">
          Remove time sinks
        </p>
        <h2
          id="timeline-effort-heading"
          className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-4xl lg:text-[2.75rem]"
        >
          Timesinks
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-relaxed text-[#4c4d56] md:text-xl">
          Every TTO has a few timesinks that reduce productivity. <br /> if we remove them, the licensing managers can focus on the work that matters. 
          Licensing Deals. Servicing the researchers.
        </p>
      </div>

      {/* Scroll-driven rail (full height) + stacked steps */}
      <div ref={scrollRootRef} className="relative mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div
          className="pointer-events-none absolute bottom-0 left-4 top-0 z-0 flex w-9 justify-center sm:left-6 md:left-8"
          aria-hidden="true"
        >
          <div className="relative h-full w-[3px] overflow-hidden rounded-full bg-[#e3e4e8]">
            <div
              className="absolute left-0 top-0 w-full origin-top rounded-full bg-gradient-to-b from-[#dc2626] via-[#b91c1c] to-[#991b1b] transition-[height] duration-100 ease-out motion-reduce:transition-none"
              style={{ height: `${progress * 100}%` }}
            />
          </div>
          <div
            className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#f6f6f7] bg-[#2f3137] shadow-sm transition-[top] duration-100 ease-out motion-reduce:transition-none"
            style={{ top: `calc(${progress * 100}% - 6px)` }}
          />
        </div>

        <div className="relative z-10 space-y-20 pl-10 sm:pl-12 md:space-y-28 md:pl-20">
          {stages.map((stage, index) => (
            <article
              key={`${stage.dayRange}-${stage.title}-${index}`}
              className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-x-12 xl:gap-x-14"
            >
              <div className="min-w-0 text-left">
                <p className="text-4xl font-semibold tracking-[-0.04em] text-[#2f3137] md:text-5xl">
                  {stage.dayRange}
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.03em] text-[#2f3137] md:text-[1.75rem]">
                  {stage.title}
                </h3>
                <div className="mt-3 max-w-md space-y-3 text-lg leading-relaxed text-[#4c4d56] md:text-xl">
                  {stage.paragraphs.map((block, i) => (
                    <p key={i}>{block}</p>
                  ))}
                </div>
              </div>
              <div className="min-w-0">
                <StageVisual stage={stage} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
