"use client"

import * as React from "react"
import PipelineProgress from "./PipelineProgress"

import EvaluationView1 from "./views1/EvaluationView1"
import ProtectionView1 from "./views1/ProtectionView1"
import MarketingView1 from "./views1/MarketingView1"
import LicensingView1 from "./views1/LicensingView1"

type StageKey = "evaluation" | "protection" | "marketing" | "licensing"

const STAGES: StageKey[] = ["evaluation", "protection", "marketing", "licensing"]
const STAGE_INTERVAL_MS = 3000

// Persistent storage for "played once" state across component remounts
// Since there's only one dashboard on the page, we use a simple boolean flag
let caseViewPlayedOnce = false

export default function CaseView() {
  const [stage, setStage] = React.useState<StageKey>("evaluation")
  const [cycleKey, setCycleKey] = React.useState(0)
  const [revealStep, setRevealStep] = React.useState(0)

  const revealRef = React.useRef<number | null>(null)
  const timeoutsRef = React.useRef<number[]>([])
  
  // Track if animations have played - persists across component remounts
  const hasPlayedOnceRef = React.useRef(caseViewPlayedOnce)

  const clearAllTimers = React.useCallback(() => {
    // clear stage timeouts
    timeoutsRef.current.forEach((t) => window.clearTimeout(t))
    timeoutsRef.current = []

    // clear reveal interval
    if (revealRef.current) window.clearInterval(revealRef.current)
    revealRef.current = null
  }, [])

  const startReveal = React.useCallback(() => {
    setRevealStep(0)
    if (revealRef.current) window.clearInterval(revealRef.current)

    revealRef.current = window.setInterval(() => {
      setRevealStep((s) => {
        const next = s + 1
        return next > 8 ? 8 : next
      })
    }, 180)
  }, [])

  const scheduleOneCycle = React.useCallback(() => {
    clearAllTimers()

    // always start from evaluation
    setStage("evaluation")
    setCycleKey((k) => k + 1)
    startReveal()

    // schedule the next 3 stage transitions (exactly one cycle)
    for (let i = 1; i < STAGES.length; i++) {
      const t = window.setTimeout(() => {
        const nextStage = STAGES[i]
        setStage(nextStage)
        setCycleKey((k) => k + 1)
        startReveal()
      }, i * STAGE_INTERVAL_MS)

      timeoutsRef.current.push(t)
    }

    // mark played once after the final transition window
    const doneT = window.setTimeout(() => {
      caseViewPlayedOnce = true
      hasPlayedOnceRef.current = true
      // optional: stop reveal interval once fully revealed
      // clearAllTimers()  // <-- uncomment if you want reveal timer cleared at the end
    }, STAGES.length * STAGE_INTERVAL_MS)

    timeoutsRef.current.push(doneT)
  }, [clearAllTimers, startReveal])

  React.useEffect(() => {
    if (hasPlayedOnceRef.current) return
    scheduleOneCycle()
    return () => {
      // important: cleanup for StrictMode + real unmounts
      clearAllTimers()
    }
  }, [scheduleOneCycle, clearAllTimers])

  const onUserSelectStage = (next: StageKey) => {
    // user takes control: stop any scheduled autoplay
    clearAllTimers()
    caseViewPlayedOnce = true
    hasPlayedOnceRef.current = true

    setStage(next)
    setCycleKey((k) => k + 1)
    startReveal()
  }

  return (
    <div className="w-full">
      <PipelineProgress
        activeStage={stage}
        cycleKey={cycleKey}
        onStageSelect={onUserSelectStage}
      />

      <div className="mt-4">
        {stage === "evaluation" ? <EvaluationView1 revealStep={revealStep} /> : null}
        {stage === "protection" ? <ProtectionView1 revealStep={revealStep} /> : null}
        {stage === "marketing" ? <MarketingView1 revealStep={revealStep} /> : null}
        {stage === "licensing" ? <LicensingView1 revealStep={revealStep} /> : null}
      </div>
    </div>
  )
}