"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import {
  Shield,
  Search,
  TrendingUp,
  FileText,
  ChevronDown,
  ChevronRight,
  Inbox,
  Bell,
  ClipboardList,
  UserRound,
} from "lucide-react"
import CountryFlag  from "@/components/elements/CountryFlag"

type Severity = "neutral" | "amber" | "red"
function badgeFill(sev?: Severity) {
  if (sev === "red") return "bg-red-500 text-white border-transparent"
  if (sev === "amber") return "bg-amber-400 text-black border-transparent"
  return "bg-black/10 text-black/70 border-transparent"
}

type SidebarVariant = "inventor" | "case" 

type NavItem = {
  id: string
  title: string
  icon: React.ReactNode
  badge?: { count: number; severity?: Severity }
  items?: Array<{
    title: string
    badge?: { count: number; severity?: Severity }
  }>
}

/** ✅ CASE NAV (your existing) */
const CASE_NAV: NavItem[] = [
  {
    id: "evaluation",
    title: "Evaluation",
    icon: <Search className="h-4 w-4" />,
    items: [
      { title: "Due Diligence" },
      { title: "Patentability Assessment" },
      { title: "Market Research" },
      { title: "Financial Model" },
    ],
  },
  {
    id: "protection",
    title: "Protection",
    icon: <Shield className="h-4 w-4" />,
    items: [
      { title: "Provisional / Priority filing" },
      { title: "Claims + drafting" },
      { title: "Outside counsel" },
      { title: "Docket + deadlines" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: <TrendingUp className="h-4 w-4" />,
    items: [
      { title: "One-pager / tech brief" },
      { title: "Outbound shortlist" },
      { title: "Inbound interest" },
      { title: "Data room" },
    ],
  },
  {
    id: "licensing",
    title: "Licensing",
    icon: <FileText className="h-4 w-4" />,
    items: [
      { title: "NDA / MTA" },
      { title: "Term sheet" },
      { title: "License agreement" },
      { title: "Post-agreement follow-up" },
    ],
  },
]

/** ✅ INVENTOR NAV (badges + “urgent items” feel) */
const INVENTOR_NAV: NavItem[] = [
  {
    id: "inbox",
    title: "Inbox",
    icon: <Inbox className="h-4 w-4" />,
    badge: { count: 3, severity: "red" },
    items: [
      { title: "Signatures required", badge: { count: 2, severity: "red" } },
      { title: "Questions from TTO", badge: { count: 1, severity: "amber" } },
      { title: "FYI updates" },
    ],
  },
  {
    id: "actions",
    title: "Action items",
    icon: <ClipboardList className="h-4 w-4" />,
    badge: { count: 6, severity: "red" },
    items: [
      { title: "Confirm inventor list", badge: { count: 1, severity: "amber" } },
      { title: "Upload supporting data" },
      { title: "Review draft summary", badge: { count: 1, severity: "amber" } },
      { title: "Approve marketing blurb", badge: { count: 1, severity: "amber" } },
    ],
  },
  {
    id: "status",
    title: "Status",
    icon: <Bell className="h-4 w-4" />,
    items: [
      { title: "Inventions" },
      { title: "Patents" },
      { title: "Licenses" },
    ],
  },
  {
    id: "profile",
    title: "My profile",
    icon: <UserRound className="h-4 w-4" />,
    items: [
      
      { title: "Funding + grants" },
      { title: "COI disclosure" },
    ],
  },
]
export default function DashboardSidebar({
  collapsed,
  variant = "case",
}: {
  collapsed: boolean
  variant?: SidebarVariant
}) {
  const NAV =
    variant === "inventor"
      ? INVENTOR_NAV
        : CASE_NAV

  // open state per-variant
  const initialOpen = React.useMemo(() => {
    const o: Record<string, boolean> = {}
    NAV.forEach((n) => (o[n.id] = true))
    return o
  }, [variant]) // eslint-disable-line react-hooks/exhaustive-deps

  const [open, setOpen] = React.useState<Record<string, boolean>>(initialOpen)

  // reset open groups when variant changes (so we don't carry case state into inventor)
  React.useEffect(() => {
    setOpen(initialOpen)
  }, [initialOpen])

  return (
    <div className={cn("flex h-full flex-col", collapsed ? "px-1 py-2" : "px-3 py-2")}>
   {/* org header + aligned divider */}
        <div
          className={cn(
            "flex items-center gap-2 border-b border-black/10",
            "h-16", // pick the same height as the main header (h-12 / h-14 / h-16)
            collapsed ? "justify-center px-0" : "px-3"
          )}
        >
       <div className="h-9 w-9 flex items-center justify-center rounded-full">
            <CountryFlag
              country={variant === "case" ? "gb" : "eu"}
              size="md"
            />
          </div>

          {!collapsed ? (
            <div className="min-w-0">
              {variant === "case" ? (
                <>
                  <div className="text-sm font-medium text-black/85 truncate">
                    Tech Transfer Office
                  </div>
                  <div className="text-xs text-black/45 truncate">
                    University of UK
                  </div>
                </>
              ) : (
                <>
                  <div className="text-sm font-medium text-black/85 truncate">
                    University of Europe
                  </div>
                  <div className="text-xs text-black/45 truncate">
                    ttOS
                  </div>
                </>
              )}
            </div>
          ) : null}
        </div>

     

      {/* nav */}
      <nav className="space-y-0.5">
        {NAV.map((group) => {
          const isOpen = !!open[group.id]
          const hasChildren = !!group.items?.length

          return (
            <div key={group.id} className="mb-1">
              <button
                type="button"
                onClick={() => {
                  if (!hasChildren) return
                  setOpen((s) => ({ ...s, [group.id]: !s[group.id] }))
                }}
                className={cn(
                  "group flex w-full items-center gap-2 rounded-xl",
                  "px-2 py-1.5 hover:bg-black/[0.03] transition",
                  collapsed && "justify-center"
                )}
              >
                <span className="relative flex h-7 w-7 items-center justify-center text-black/70">
                  {group.icon}

                  {/* Collapsed badge overlay */}
                  {collapsed && group.badge ? (
                    <span
                      className={cn(
                        "absolute -right-1 -top-1",
                        "inline-flex h-5 min-w-5 items-center justify-center rounded-full",
                        "px-1 text-[11px] font-semibold",
                        // reuse your severity fills but make them round
                        badgeFill(group.badge.severity)
                      )}
                    >
                      {group.badge.count}
                    </span>
                  ) : null}
                </span>

                {!collapsed ? (
                  <>
                    <span className="flex-1 text-left text-[13px] font-medium text-black/75">
                      {group.title}
                    </span>

                    {group.badge ? (
                        <span
                          className={cn(
                            "inline-flex h-5 min-w-5 items-center justify-center rounded-full border px-1 text-[11px] font-semibold",
                            badgeFill(group.badge.severity)
                          )}
                        >
                          {group.badge.count}
                        </span>
                      ) : null}

                    {hasChildren ? (
                      isOpen ? (
                        <ChevronDown className="h-4 w-4 text-black/30" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-black/30" />
                      )
                    ) : null}
                  </>
                ) : null}
              </button>

              {/* children + vertical line that shrinks when closed */}
              {!collapsed && hasChildren ? (
                <div className="relative ml-9 mt-0.5 space-y-0.5">
                  {/* vertical line */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute left-0 top-0 w-px bg-black/10",
                      "transition-[height,opacity] duration-200 ease-out",
                      isOpen ? "h-full opacity-100" : "h-0 opacity-0"
                    )}
                  />

                  {isOpen ? (
                    <div className="space-y-0.5">
                      {group.items!.map((it) => (
                        <button
                          key={it.title}
                          type="button"
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left text-[13px] text-black/60 hover:bg-black/[0.03]"
                        >
                          <span className="flex-1">{it.title}</span>
                          {it.badge ? (
                            <span
                              className={cn(
                                "inline-flex h-5 min-w-5 items-center justify-center rounded-full border px-1 text-[11px] font-semibold",
                                badgeFill(it.badge.severity)
                              )}
                            >
                              {it.badge.count}
                            </span>
                          ) : null}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          )
        })}
      </nav>

      {/* push user to bottom */}
      <div className="mt-auto pt-2">
        <div
          className={cn(
            "flex items-center gap-2 rounded-xl border border-black/10 bg-white p-2",
            collapsed && "justify-center"
          )}
        >
          <div
            className={cn(
              "h-8 w-8 ",
              "flex items-center justify-center text-[12px] font-semibold text-black/70"
            )}
            aria-label="Jane Doe"
            title="Jane Doe"
          >
            JD
          </div>

          {!collapsed ? (
            <div className="min-w-0">
              <div className="text-sm font-medium text-black/80 truncate">Jane Doe</div>
              <div className="text-xs text-black/45 truncate">jane.doe@uni.edu</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}