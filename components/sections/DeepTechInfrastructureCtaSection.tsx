import DotBackground from "@/components/chrome/DotBackground"
import { cn } from "@/lib/utils"

export default function DeepTechInfrastructureCtaSection() {
  return (
    <section
      id="deep-tech-infrastructure"
      className="relative scroll-mt-24 overflow-x-clip overflow-y-visible bg-[#f6f6f7] py-16 md:py-24"
      aria-labelledby="deep-tech-infrastructure-heading"
    >
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_40%,rgba(246,246,247,0.92)_82%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="relative mx-auto max-w-[52rem]">
          <div
            className="pointer-events-none absolute -inset-8 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_65%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)] opacity-90 blur-2xl md:-inset-12"
            aria-hidden
          />
          <div
            className={cn(
              "relative overflow-hidden rounded-[1.75rem] border border-[#e2e5ec]/95 bg-white/85 p-8",
              "shadow-[0_1px_0_rgba(0,0,0,.04),0_28px_90px_-36px_rgba(26,34,48,.18)]",
              "backdrop-blur-[6px] md:p-12 lg:p-14"
            )}
          >
            <div
              className="pointer-events-none absolute -right-20 -top-28 h-56 w-56 rounded-full bg-sky-400/[0.08] blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-[#2f3137]/[0.045] blur-3xl"
              aria-hidden
            />

            <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5a5d66] md:text-xs md:tracking-[0.16em] lg:text-left">
              Contact us
            </p>

            <div className="mt-5 flex flex-col gap-10 lg:mt-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <div className="min-w-0 flex-1 text-center lg:text-left">
                <h2
                  id="deep-tech-infrastructure-heading"
                  className="text-balance text-3xl font-semibold leading-[1.12] tracking-[-0.04em] text-[#2f3137] md:text-4xl lg:text-[2.35rem] lg:leading-[1.1]"
                >
                  The missing layer in research translation.
                </h2>
                <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-[#4c4d56] md:text-lg lg:mx-0">
                  Great teams and real breakthroughs stall every day — not because the science fails, but because the
                  system around it does.{" "}
                  <br />
                  <span className="mt-4 block font-semibold text-[#1c2230]">
                    ttOS is the infrastructure that gets out of their way.
                  </span>
                </p>
              </div>

              <div className="shrink-0 flex flex-col items-center border-t border-[#e8eaef] pt-8 lg:border-t-0 lg:border-l lg:border-[#e8eaef] lg:pl-10 lg:pt-0">
                <a
                  href="mailto:?subject=Start%20a%20conversation"
                  className="inline-flex h-12 w-full max-w-full items-center justify-center rounded-xl bg-[#2f3137] px-6 text-base font-medium text-white shadow-[0_1px_0_rgba(0,0,0,.08),0_10px_28px_rgba(47,49,55,.25)] transition hover:bg-[#212329] sm:w-auto sm:px-8"
                >
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
