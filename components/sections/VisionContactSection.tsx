import Link from "next/link"
import DotBackground from "@/components/chrome/DotBackground"

export default function VisionContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-[#f6f6f7] py-16 md:py-24"
      aria-labelledby="contact-heading"
    >
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-6xl py-2 md:py-4">
          <h2 className="mb-6 text-center text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:mb-8 md:text-5xl">
            Who we&apos;re building this for.
          </h2>
          <h2 id="contact-heading" className="sr-only">
            Partner with us
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:items-stretch md:gap-5">
              <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-8 md:min-h-[360px] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">Academic / Inventor</p>
                <p className="mt-4 max-w-[18ch] text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl">
                  The impact of your research shouldn&apos;t depend on where you work or who manages your invention.
                </p>
              </article>

              <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-8 md:min-h-[360px] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">Technology Transfer Office</p>
                <p className="mt-4 max-w-[18ch] text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl">
                  Hiring more people to run the same system produces the same results. There&apos;s a better way.
                </p>
              </article>

              <article className="flex h-full min-h-[220px] flex-col rounded-2xl border border-[#d7d9df] bg-white/80 p-8 md:min-h-[360px] md:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-[#6b6d75]">
                  Startup ecosystem
                </p>
                <p className="mt-4 max-w-[18ch] text-2xl font-semibold leading-[1.14] tracking-[-0.03em] text-[#1f2127] md:text-3xl">
                  Universities are the biggest source of deep tech inventions and founders. They need infrastructure. We
                  are building it.
                </p>
              </article>
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="mailto:ash@ttos.ai"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-[#2f3137] px-7 text-sm font-medium text-white shadow-[0_1px_0_rgba(0,0,0,.08),0_8px_24px_rgba(47,49,55,.28)] transition hover:bg-[#212329] md:h-12 md:px-8 md:text-base"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
