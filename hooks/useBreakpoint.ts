"use client"

import { useEffect, useState } from "react"

export function useIsBelowLg() {
  const [isBelowLg, setIsBelowLg] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1024px)")

    const update = () => setIsBelowLg(mq.matches)
    update()

    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  return isBelowLg
}
