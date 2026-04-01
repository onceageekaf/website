"use client"

import { DashboardWindowMock } from "@/components/elements/dashboard/DashboardWindowMock"
import { cn } from "@/lib/utils"

/**
 * System page /ttOS column: same dashboard window mock as Features, with submit CTA overlay
 * (no beams or bottom capability tiles — those stay on the home Features card only).
 */
export default function SystemDisclosureDashboardVisual() {
  return (
    <div className="flex w-full items-center justify-center py-4">
      <div className="relative inline-block">
        <DashboardWindowMock
          className="w-[220px]"
          bodyClassName="min-h-[132px]"
        />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center rounded-xl bg-white/25 backdrop-blur-[0.5px]">
          <button
            type="button"
            className={cn(
              "pointer-events-auto rounded-full bg-[#2563eb] px-4 py-2.5 text-center text-[12px] font-semibold leading-tight text-white shadow-[0_8px_24px_rgba(37,99,235,0.35)]",
              "ring-2 ring-white/90 transition hover:bg-[#1d4ed8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563eb]"
            )}
          >
            Submit an Invention
          </button>
        </div>
      </div>
    </div>
  )
}
