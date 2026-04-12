import DotBackground from "@/components/chrome/DotBackground"
import { cn } from "@/lib/utils"

export default function VisionContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-x-clip overflow-y-visible bg-[#f6f6f7] py-16 md:py-24"
      aria-labelledby="manifesto-heading contact-heading"
    >
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mx-auto min-w-0 max-w-6xl py-2 md:py-4">
          <div className="relative mx-auto mb-6 max-w-[50rem] md:mb-8">
            <div
              className="pointer-events-none absolute -inset-10 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_70%_55%_at_50%_-10%,rgba(59,130,246,0.11),transparent_58%)] opacity-90 blur-2xl md:-inset-14"
              aria-hidden
            />
            <div
              className={cn(
                "relative overflow-hidden rounded-[1.75rem] border border-[#e2e5ec]/95 bg-white/80 p-8",
                "shadow-[0_1px_0_rgba(0,0,0,.04),0_28px_90px_-36px_rgba(26,34,48,.16)]",
                "backdrop-blur-[6px] md:px-12 md:py-14"
              )}
            >
              <div
                className="pointer-events-none absolute -right-16 -top-24 h-48 w-48 rounded-full bg-sky-400/[0.07] blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-12 h-40 w-40 rounded-full bg-[#2f3137]/[0.04] blur-2xl"
                aria-hidden
              />
              <h2
                id="manifesto-heading"
                className={cn(
                  "whitespace-nowrap text-center font-sans text-4xl font-semibold",
                  "leading-[1.1] tracking-[-0.06em] text-[#2f3137] md:text-left md:text-5xl lg:text-6xl"
                )}
              >
                Who we are building this for
              </h2>
              <div className="relative mt-9 md:mt-11 md:border-l-2 md:border-sky-500/35 md:pl-8">
                <p className="text-pretty text-center text-xl font-normal leading-relaxed tracking-[-0.02em] text-[#2f3137] md:text-left md:text-2xl md:leading-snug">
                  The startup ecosystem has scaled beautifully. Thousands of VCs, incubators, and accelerators, all
                  running the same proven playbook — plug-and-play infrastructure that turns ideas into companies.
                </p>
                <p className="mt-7 text-pretty text-center text-xl font-normal leading-relaxed tracking-[-0.02em] text-[#2f3137] md:mt-8 md:text-left md:text-2xl md:leading-snug">
                  But that playbook starts mid-stream. The real pipeline for deep tech is upstream, inside universities —
                  and that infrastructure was never built. Inventions move slowly, unevenly, and founders are left waiting
                  on a system that wasn&apos;t designed for them.
                </p>
                <p className="mt-7 text-pretty text-center text-xl font-normal leading-relaxed tracking-[-0.02em] text-[#2f3137] md:mt-8 md:text-left md:text-2xl md:leading-snug">
                  Fix the upstream and the downstream compounds. The ecosystem below is already fast.{" "} <br />
                  <span className="font-semibold text-[#1c2230] mt-4 block">ttOS makes the upstream match the speed - and the whole pipeline moves 10X.</span>
                </p>
              </div>
            </div>
          </div>
          <h2 id="contact-heading" className="sr-only">
            Partner with us
          </h2>
          <div className="pt-6 md:pt-8">
            <p
              id="audience-groups-bridge"
              className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5a5d66] md:mb-6 md:text-xs md:tracking-[0.16em]"
            >
              Three groups we are building for
            </p>
            <div className="grid min-w-0 grid-cols-1 items-stretch gap-4 lg:grid-cols-3 lg:gap-6">
              <article className="flex h-full min-h-[220px] min-w-0 flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-6 sm:p-8 md:min-h-[360px] md:p-9">
                <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">
                  Academic / Inventor
                </p>
                <div className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="min-h-0 flex-1 pb-6 md:pb-8">
                    <p className="max-w-prose text-pretty text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl lg:text-2xl xl:text-3xl">
                      Where you work, who handles it: neither should limit your impact
                    </p>
                  </div>
                  <div className="mt-auto min-h-[7.25rem] shrink-0 border-t border-[#e2e5eb] pt-4 md:pt-5">
                    <p className="text-base font-medium leading-snug text-neutral-500 md:text-lg lg:text-base xl:text-lg">
                      DIY. Self Service.
                      <br />
                      No waiting.
                      <br />
                      No variance.
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex h-full min-h-[220px] min-w-0 flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-6 sm:p-8 md:min-h-[360px] md:p-9">
                <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">
                  Technology Transfer Office
                </p>
                <div className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="min-h-0 flex-1 pb-6 md:pb-8">
                    <p className="max-w-prose text-pretty text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl lg:text-2xl xl:text-3xl">
                      Hiring more people to run the same system produces the same results.
                    </p>
                  </div>
                  <div className="mt-auto min-h-[7.25rem] shrink-0 border-t border-[#e2e5eb] pt-4 md:pt-5">
                    <p className="text-base font-medium leading-snug text-neutral-500 md:text-lg lg:text-base xl:text-lg">
                      Fix the time sinks.
                      <br />
                      Transparent.
                      <br />
                      Do what matters.
                    </p>
                  </div>
                </div>
              </article>

              <article className="flex h-full min-h-[220px] min-w-0 flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-6 sm:p-8 md:min-h-[360px] md:p-9">
                <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">Startup ecosystem</p>
                <div className="mt-4 flex min-h-0 flex-1 flex-col">
                  <div className="min-h-0 flex-1 pb-6 md:pb-8">
                    <p className="max-w-prose text-pretty text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl lg:text-2xl xl:text-3xl">
                      Universities are the biggest source of deep tech inventions and founders.
                    </p>
                  </div>
                  <div className="mt-auto min-h-[7.25rem] shrink-0 border-t border-[#e2e5eb] pt-4 md:pt-5">
                    <p className="text-base font-medium leading-snug text-neutral-500 md:text-lg lg:text-base xl:text-lg">
                      Venture ready pipeline.
                      <br />
                      Derisk manufacturing.
                      <br />
                      Compounding effect.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
