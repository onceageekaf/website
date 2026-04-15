import DotBackground from "@/components/chrome/DotBackground"
import { cn } from "@/lib/utils"

export default function VisionContactSection() {
  return (
    <section
      id="manifesto"
      className="relative scroll-mt-24 overflow-x-clip overflow-y-visible bg-[#f6f6f7] py-16 md:py-24"
      aria-labelledby="manifesto-heading"
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
                  "text-center font-sans text-3xl font-semibold sm:text-4xl",
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
                <p className="mt-7 text-pretty text-center text-xl font-normal leading-relaxed tracking-[-0.02em] text-[#2f3137] md:mt-8 md:text-left md:text-2xl md:leading-snug">
                  Built for three audiences: inventors who want to self-serve, technology transfer offices that want
                  to fix their time sinks, and the startup ecosystem that needs a venture-ready upstream pipeline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
