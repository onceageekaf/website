"use client"

import * as React from "react"
import { ClipboardList, Handshake, Database } from "lucide-react"
import { DashboardWindowMock } from "@/components/elements/dashboard/DashboardWindowMock"
import { cn } from "@/lib/utils"

/** Animated dashboard diagram for the home Features section (Dashboard card). */
export default function FeatureDashboardVisual() {
  const [pulses, setPulses] = React.useState<
    Array<{ id: number; branch: "left" | "mid" | "right"; dir: "out" | "in" }>
  >([])
  const pulseIdRef = React.useRef(0)

  const capabilityCards = [
    { title: "Self service", icon: ClipboardList, tone: "border-blue-200 bg-blue-50 text-blue-600" },
    { title: "Collaborative", icon: Handshake, tone: "border-violet-200 bg-violet-50 text-violet-600" },
    { title: "Auto CRM", icon: Database, tone: "border-emerald-200 bg-emerald-50 text-emerald-600" },
  ]
  const branchPath: Record<"left" | "mid" | "right", string> = {
    left: "M156 97 L156 112 Q156 118 150 118 L78 118 Q72 118 72 124 L72 188",
    mid: "M156 97 L156 188",
    right: "M156 97 L156 112 Q156 118 162 118 L234 118 Q240 118 240 124 L240 188",
  }

  React.useEffect(() => {
    const branches: Array<"left" | "mid" | "right"> = ["left", "mid", "right"]
    const dirs: Array<"out" | "in"> = ["out", "in"]
    const emit = () => {
      const id = pulseIdRef.current++
      const branch = branches[Math.floor(Math.random() * branches.length)]
      const dir = dirs[Math.floor(Math.random() * dirs.length)]
      setPulses((prev) => [...prev, { id, branch, dir }])
      window.setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== id))
      }, 2400)
    }

    emit()
    const id = window.setInterval(emit, 820)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden border border-[#dfdfe3] bg-white p-4">
      <div className="relative h-[235px] w-full max-w-[312px]">
        <svg
          viewBox="0 0 312 235"
          className="pointer-events-none absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path d="M156 82 L156 97" stroke="#d3d6de" strokeWidth="2" fill="none" />
          <path
            d="M156 97 L156 112 Q156 118 150 118 L78 118 Q72 118 72 124 L72 188"
            stroke="#d3d6de"
            strokeWidth="2"
            fill="none"
          />
          <path d="M156 97 L156 188" stroke="#d3d6de" strokeWidth="2" fill="none" />
          <path
            d="M156 97 L156 112 Q156 118 162 118 L234 118 Q240 118 240 124 L240 188"
            stroke="#d3d6de"
            strokeWidth="2"
            fill="none"
          />

          {pulses.map((pulse) => (
            <path
              key={pulse.id}
              d={branchPath[pulse.branch]}
              className={`flow-path ${pulse.dir === "out" ? "flow-out" : "flow-in"}`}
              strokeWidth="1.8"
              fill="none"
            />
          ))}
          <circle cx="156" cy="97" r="4.5" fill="#e7ecfb" stroke="#2563eb" strokeWidth="1.4" />
        </svg>

        <div className="absolute left-1/2 top-3 w-[208px] -translate-x-1/2">
          <DashboardWindowMock />
        </div>

        <div className="absolute bottom-1 left-0 right-0 grid grid-cols-3 gap-2">
          {capabilityCards.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-center rounded-xl border border-[#e3e4e8] bg-white/95 px-1.5 py-2 text-center shadow-[0_8px_20px_rgba(26,34,48,.08)]"
            >
              <span
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-md border opacity-85",
                  item.tone
                )}
              >
                <item.icon className="h-4 w-4" />
              </span>
              <span className="mt-1.5 text-[9px] font-medium leading-tight text-[#4c4d56]">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <style jsx>{`
          .flow-path {
            stroke-dasharray: 12 188;
            stroke-linecap: round;
            shape-rendering: geometricPrecision;
            vector-effect: non-scaling-stroke;
            will-change: stroke-dashoffset, opacity;
            animation-duration: 2.2s, 2.2s;
            animation-timing-function: linear, ease-out;
            animation-fill-mode: forwards;
          }
          .flow-out {
            stroke: #2563eb;
            stroke-dashoffset: 220;
            animation-name: flow-out, flow-fade;
          }
          .flow-in {
            stroke: #16a34a;
            stroke-dashoffset: 0;
            animation-name: flow-in, flow-fade;
          }
          @keyframes flow-out {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes flow-in {
            to {
              stroke-dashoffset: 220;
            }
          }
          @keyframes flow-fade {
            0% {
              opacity: 0;
            }
            8% {
              opacity: 1;
            }
            88% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </div>
  )
}
