"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { LAYOUT_WIDTHS } from "@/lib/layout"
import { useIsBelowLg } from "@/hooks/useBreakpoint"
import { ChevronLeft, ChevronRight } from "lucide-react"

import DashboardSidebar from "@/components/sections/Dashboard/layout/DashboardSidebar"
import Logo from "@/components/elements/Logo"

type Props = {
  children: React.ReactNode
  className?: string
  width?: "cards" | "full"
  variant?: "inventor" | "case" 
}

export default function DashboardShell({
  children,
  className,
  width = "full",
  variant = "case",
}: Props) {
  const isBelowLg = useIsBelowLg()

  // default collapsed <=1024
  const [collapsed, setCollapsed] = React.useState(true)
  React.useEffect(() => setCollapsed(isBelowLg), [isBelowLg])

  const sidebarWidth = collapsed
    ? "w-[60px]"
    : isBelowLg
      ? "w-[200px]"
      : "w-[248px]"

  return (
    <div
      className={cn(
        "w-full",
        width === "cards" && cn("mx-auto w-full px-6", LAYOUT_WIDTHS.cards)
      )}
    >
      <div
        className={cn(
          "relative flex w-full rounded-2xl border border-black/10 bg-white",
          "overflow-hidden",
          className
        )}
      >
        {/* Sidebar */}
        <aside
          className={cn(
            "shrink-0 bg-white transition-[width] duration-200 ease-out",
            "border-r border-black/10",
            "self-stretch",
            sidebarWidth
          )}
        >
          <DashboardSidebar collapsed={collapsed} variant={variant} />
        </aside>

        {/* MAIN */}
        <main className="flex flex-1 min-w-0 flex-col mx-auto">
          {/* TOP BAR */}
          <div className="relative z-10 flex h-12 items-center gap-3 border-b border-black/10 bg-white px-4">
            {/* LEFT CLUSTER */}
            <div className="flex items-center gap-3">
              {/* collapse button */}
              <button
                type="button"
                onClick={() => setCollapsed((v) => !v)}
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-black/10 bg-white shadow-sm hover:bg-black/[0.03]"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                {collapsed ? (
                  <ChevronRight className="h-4 w-4 text-black/60" />
                ) : (
                  <ChevronLeft className="h-4 w-4 text-black/60" />
                )}
              </button>

              {/* divider */}
              <span className="h-6 w-px bg-black/10" />

              {/* CASE PILL (case view only) */}
              {variant === "case" && (
               <span className="inline-flex h-6 items-center self-center leading-none rounded-full border border-black/10 bg-black/[0.03] px-2.5 text-[12px] font-medium text-black/70 max-md:h-7">
               Case #311
              </span>
              )}
            </div>

            {/* SPACER */}
            <div className="flex-1" />

            {/* RIGHT CLUSTER */}
            <div className="flex items-center gap-4">
              {variant === "case" && (
                <div className="text-[12px] text-black/45 whitespace-nowrap">
                  Status: License • Updated 2h ago
                </div>
              )}

              <span className="h-6 w-px bg-black/10" />

              <Logo width={20} height={20} className="opacity-80" />
            </div>
          </div>

          {/* CONTENT */}
          <div className="flex-1 min-h-0 pb-6 pt-14 md:pt-0 md:p-8 bg-white">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}