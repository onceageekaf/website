import type { ReactNode } from "react"
import { Ban, MousePointer2, Plane } from "lucide-react"
import { cn } from "@/lib/utils"

function TravelCard({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-[28px] bg-[#f4f4f4] p-10 md:min-h-[520px] md:p-12 lg:p-14",
        className
      )}
    >
      {children}
    </div>
  )
}

function BluePill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-[#eef2ff] px-2 py-0.5 text-[13px] font-medium text-[#3b82f6]">
      {children}
    </span>
  )
}

export default function ComparisonProcess() {
  return (
    <section className="border-t border-neutral-100 bg-white pb-20 pt-12 md:pb-28 md:pt-16">
      <div className="mx-auto max-w-[1180px] px-6">
        <header className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
          <h2 className="text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.035em] text-neutral-900 md:text-4xl md:leading-[1.12]">
            Custom travel policies enforced at booking.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-neutral-600 md:text-base">
            No more &apos;can I book this?&apos; messages or travel requests lost in
            a manager&apos;s inbox.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Left — Flight policy */}
          <TravelCard>
            <h3 className="text-lg font-semibold leading-snug tracking-[-0.03em] text-neutral-900 md:text-xl">
              Set policies that adapt to every traveler and every trip.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Customize guardrails by location, duration, and department — like
              business class for longer flights, and economy for local trips.
            </p>

            <div className="mt-auto flex flex-1 flex-col justify-end pt-10">
              <div className="mx-auto w-full max-w-[340px] rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="flex items-center gap-2 border-b border-neutral-100 pb-3">
                  <Plane className="h-4 w-4 text-neutral-700" strokeWidth={1.75} />
                  <span className="text-[15px] font-semibold text-neutral-900">
                    Flight policy
                  </span>
                </div>
                <div className="space-y-4 pt-4 text-[14px] leading-snug text-neutral-700">
                  <p>
                    Book up to <BluePill>20% above</BluePill> avg. price
                  </p>
                  <p>
                    Must book <BluePill>7 days</BluePill> in advance
                  </p>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span>Cabin class</span>
                    <button
                      type="button"
                      className="relative h-7 w-12 shrink-0 rounded-full bg-[#3b82f6] transition"
                      aria-pressed="true"
                    >
                      <span className="absolute right-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-sm" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Economy</span>
                    <BluePill>Always approve</BluePill>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span>Business</span>
                    <BluePill>8+ hours</BluePill>
                  </div>
                </div>
              </div>
            </div>
          </TravelCard>

          {/* Right — Approval routing */}
          <TravelCard>
            <h3 className="text-lg font-semibold leading-snug tracking-[-0.03em] text-neutral-900 md:text-xl">
              Route approval requests to the right person, at the right time.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600">
              Don&apos;t get caught in approval chain bottlenecks — handle requests
              quickly, while staying compliant.
            </p>

            <div className="relative mt-auto flex flex-1 flex-col justify-end pt-10">
              <div className="mx-auto w-full max-w-[340px] rounded-2xl border border-neutral-200/80 bg-white p-5 pb-12 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <p className="text-[11px] font-medium uppercase tracking-wide text-neutral-500">
                  Travel policy
                </p>
                <p className="mt-1 text-[14px] text-neutral-800">
                  Max cost of flight is{" "}
                  <span className="font-semibold text-[#3b82f6]">$800</span>
                </p>

                <div className="mt-4 flex items-start gap-3 rounded-xl border border-neutral-100 bg-[#fafafa] p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100">
                    <Ban className="h-4 w-4 text-orange-600" strokeWidth={2} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[14px] font-semibold text-neutral-900">
                      United Airlines
                    </p>
                    <p className="text-[12px] font-medium text-orange-600">
                      Out of policy
                    </p>
                  </div>
                  <span className="text-[15px] font-semibold tabular-nums text-neutral-900">
                    $986
                  </span>
                </div>

                <div className="relative mt-4 grid grid-cols-2 gap-3">
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full rounded-xl bg-[#ffe8dc] py-3 text-[14px] font-semibold text-[#c2410c]"
                    >
                      Reject
                    </button>
                    <div className="pointer-events-none absolute -bottom-9 left-1/2 flex -translate-x-1/2 flex-col items-center">
                      <MousePointer2
                        className="h-5 w-5 text-neutral-900 drop-shadow"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                      <span className="mt-0.5 rounded bg-neutral-900 px-2 py-0.5 text-[10px] font-medium text-white">
                        Controller
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="rounded-xl bg-[#d1fae5] py-3 text-[14px] font-semibold text-[#15803d]"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </TravelCard>
        </div>

        <p className="mx-auto mt-16 max-w-2xl text-center text-[1.35rem] font-semibold leading-snug tracking-[-0.035em] text-neutral-900 md:mt-24 md:text-3xl">
          Every trip and travel dollar in one place.
        </p>
      </div>
    </section>
  )
}
