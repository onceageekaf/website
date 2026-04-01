import { cn } from "@/lib/utils"

type Props = {
  className?: string
  /** Main content row; default fixed height for Features diagram layout */
  bodyClassName?: string
}

/**
 * Shared mini browser/dashboard chrome used by FeatureDashboardVisual and system page variants.
 */
export function DashboardWindowMock({ className, bodyClassName }: Props) {
  return (
    <div
      className={cn(
        "w-[208px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm",
        className
      )}
    >
      <div className="flex h-7 border-b border-black/10 bg-white">
        <div className="flex w-12 shrink-0 items-center gap-1.5 border-r border-black/10 bg-[#f6f6f8] px-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#ff5f57] [aspect-ratio:1/1]" aria-hidden />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#febc2e] [aspect-ratio:1/1]" aria-hidden />
          <span className="h-2 w-2 shrink-0 rounded-full bg-[#28c840] [aspect-ratio:1/1]" aria-hidden />
        </div>
        <div className="flex flex-1 items-center justify-between px-2">
          <div className="h-1.5 w-14 animate-pulse rounded bg-black/[0.08]" />
          <div className="h-1.5 w-6 animate-pulse rounded bg-black/[0.07]" />
        </div>
      </div>
      <div className={cn("flex bg-white", bodyClassName ?? "h-16")}>
        <div className="w-12 shrink-0 border-r border-black/10 bg-[#f6f6f8] px-1.5 py-2">
          <div className="space-y-1.5">
            <div className="h-1.5 w-full animate-pulse rounded bg-black/[0.08]" />
            <div className="h-1.5 w-4/5 animate-pulse rounded bg-black/[0.08]" />
            <div className="h-1.5 w-3/4 animate-pulse rounded bg-black/[0.08]" />
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-1.5 p-2">
          <div className="grid grid-cols-3 gap-1">
            <div className="h-5 animate-pulse rounded border border-rose-200 bg-rose-50" />
            <div className="h-5 animate-pulse rounded border border-amber-200 bg-amber-50" />
            <div className="h-5 animate-pulse rounded border border-emerald-200 bg-emerald-50" />
          </div>
          <div className="h-1.5 w-5/6 animate-pulse rounded bg-black/[0.06]" />
        </div>
      </div>
    </div>
  )
}
