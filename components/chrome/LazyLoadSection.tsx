"use client"

import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type Props = {
  children: React.ReactNode
  /** When to trigger loading (e.g., "top 80%" means when top of element is 80% down viewport) */
  start?: string
  /** Placeholder to show while not loaded */
  placeholder?: React.ReactNode
}

/**
 * Lazy loads children only when they're about to enter the viewport using GSAP ScrollTrigger
 */
export default function LazyLoadSection({
  children,
  start = "top 80%",
  placeholder,
}: Props) {
  const [shouldLoad, setShouldLoad] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el || shouldLoad) return

    const scrollTrigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true, // Only trigger once
      onEnter: () => {
        setShouldLoad(true)
      },
    })

    return () => {
      scrollTrigger.kill()
    }
  }, [start, shouldLoad])

  return (
    <div ref={containerRef}>
      {shouldLoad ? children : placeholder || <div style={{ minHeight: "400px" }} />}
    </div>
  )
}
