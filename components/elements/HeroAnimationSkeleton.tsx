import { cn } from "@/lib/utils"

function Bar({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-2.5 rounded-md bg-black/[0.08] animate-pulse", className)}
      aria-hidden="true"
    />
  )
}

/**
 * Placeholder for a future hero animation; swap this component when ready.
 */
export default function HeroAnimationSkeleton() {
  return (
    <div
      className="w-full max-w-[min(100%,520px)] overflow-hidden rounded-2xl border border-[#dfdfe3] bg-white/70 p-4 shadow-[0_1px_0_rgba(0,0,0,.04)] backdrop-blur-[2px]"
      aria-label="Animation placeholder"
      role="img"
    >
      <div className="mb-4 flex items-center gap-2 border-b border-black/[0.06] pb-3">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
          <span className="h-2 w-2 rounded-full bg-black/[0.12]" />
        </div>
        <Bar className="ml-auto h-2 w-24" />
      </div>
      <div className="space-y-3">
        <Bar className="h-3 w-[88%]" />
        <Bar className="h-3 w-[72%]" />
        <div className="grid grid-cols-3 gap-2 pt-1">
          <div className="aspect-[4/3] rounded-lg bg-black/[0.06] animate-pulse" />
          <div className="aspect-[4/3] rounded-lg bg-black/[0.06] animate-pulse" />
          <div className="aspect-[4/3] rounded-lg bg-black/[0.06] animate-pulse" />
        </div>
        <Bar className="h-3 w-[64%]" />
        <Bar className="h-3 w-[80%]" />
      </div>
    </div>
  )
}
