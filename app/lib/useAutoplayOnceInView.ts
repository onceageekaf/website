// src/lib/useAutoplayOnceInView.ts
"use client"

import * as React from "react"

type Options = {
  /** unique id for this autoplay (e.g. "dashboard:inventor->case") */
  id: string
  /** how much should be visible before triggering */
  threshold?: number
  /** root margin for early trigger */
  rootMargin?: string
  /** persist across refreshes (localStorage). If false, uses session memory only */
  persist?: boolean
}

const memoryPlayed = new Set<string>()

function hasPlayed(id: string, persist: boolean) {
  if (memoryPlayed.has(id)) return true
  if (!persist) return false
  try {
    return localStorage.getItem(`autoplay:${id}`) === "1"
  } catch {
    return false
  }
}

function markPlayed(id: string, persist: boolean) {
  memoryPlayed.add(id)
  if (!persist) return
  try {
    localStorage.setItem(`autoplay:${id}`, "1")
  } catch {
    // ignore
  }
}

export function useAutoplayOnceInView<T extends HTMLElement>(
  opts: Options,
  onPlayOnce: () => void
) {
  const { id, threshold = 0.35, rootMargin = "0px 0px -10% 0px", persist = false } = opts
  const ref = React.useRef<T | null>(null)

  const [played, setPlayed] = React.useState(() => hasPlayed(id, persist))

  // keep the callback stable
  const playOnceRef = React.useRef(onPlayOnce)

  React.useEffect(() => {
    playOnceRef.current = onPlayOnce
  }, [onPlayOnce])

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (played) return

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry) return
        if (entry.isIntersecting) {
          markPlayed(id, persist)
          setPlayed(true)
          playOnceRef.current()
          io.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [id, threshold, rootMargin, persist, played])

  /**
   * Manual replay (e.g. button click).
   * Does NOT reset "played" or re-arm IntersectionObserver.
   * Just re-runs the callback.
   */
  const replay = React.useCallback(() => {
    playOnceRef.current()
  }, [])

  /**
   * Optional: allow callers to reset the "played" state manually.
   * Useful if you want to re-arm autoplay on the same session.
   */
  const resetPlayed = React.useCallback(() => {
    memoryPlayed.delete(id)
    if (persist) {
      try {
        localStorage.removeItem(`autoplay:${id}`)
      } catch {
        // ignore
      }
    }
    setPlayed(false)
  }, [id, persist])

  return { ref, played, replay, resetPlayed }
}