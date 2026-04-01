// src/components/sections/Dashboard/index.tsx
import { cn } from "@/lib/utils"
import { LAYOUT_WIDTHS } from "@/lib/layout"

import DashboardShell from "./layout/DashboardShell"
import InventorDashboard from "./Inventor"
import CaseView from "./CaseView"

export default function DashboardSection() {
  return (
    <section className="mt-12 mb-8">
      <div className="space-y-10">
        <div className={cn("mx-auto w-full px-6", LAYOUT_WIDTHS.cards)}>
          <h2 className="text-sm font-medium text-black/70">Inventor Dashboard</h2>
        </div>

        <DashboardShell className="mt-4" width="cards" variant="inventor">
          <InventorDashboard />
        </DashboardShell>

        <div className={cn("mx-auto w-full px-6", LAYOUT_WIDTHS.cards)}>
          <h2 className="text-sm font-medium text-black/70">Case View Dashboard</h2>
        </div>

        <DashboardShell className="mt-4" width="cards" variant="case">
          <CaseView />
        </DashboardShell>
      </div>
    </section>
  )
}