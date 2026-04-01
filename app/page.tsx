import { dmSerifDisplay } from "./fonts"
import Navbar from "@/components/layout/Navbar"
import { cn } from "@/lib/utils"
import DotBackground from "@/components/chrome/DotBackground"
import FeatureTriadCards from "@/components/elements/FeatureTriadCards"
import DashboardShell from "@/components/sections/Dashboard/layout/DashboardShell"
import InventorDashboard from "@/components/sections/Dashboard/Inventor"
import ProductFeaturesSection from "@/components/elements/ProductFeaturesSection"
import ContractLogicEngineSection from "@/components/sections/ContractLogicEngineSection"
import CleEngagementSection from "@/components/sections/CleEngagementSection"
import VisionContactSection from "@/components/sections/VisionContactSection"
import Footer from "@/components/layout/Footer"
import HeroExploreCTA from "@/components/elements/HeroExploreCTA"
import { ScrollReveal } from "@/components/elements/ScrollReveal"

export default function page() {
  return (
    <main className="relative min-h-screen overflow-x-clip overflow-y-visible bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />

      <section className="relative flex min-h-[90svh] flex-col overflow-visible">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-16 md:py-24">
          <div className="relative flex flex-col items-center text-center">
            <div className="relative z-20 mx-auto w-full max-w-4xl">
              {/* <p className="mb-8 inline-flex items-center gap-2 text-sm text-[#55565d]">
                Introducing tech transfer operating system
                <span className="animate-hero-arrow" aria-hidden="true">
                  {"->"}
                </span>
              </p> */}

              <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#2f3137] md:text-6xl xl:text-7xl">
                <span className="block whitespace-nowrap">
                  From{" "}
                  <span className={cn(dmSerifDisplay.className, "italic")}>invention</span>
                </span>
                <span className="block whitespace-nowrap">
                  to{" "}
                  <span className={cn(dmSerifDisplay.className, "italic")}>production</span>
                </span>
              </h1>

              <p className="mx-auto mt-2 max-w-3xl text-2xl leading-relaxed text-[#4c4d56]">
                Infrastructure for research translation
              </p>

              {/* <p
                className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-2xl leading-relaxed text-[#4c4d56]"
                aria-label="Capabilities"
              >
                <span>Evaluate</span>
                <span className="animate-hero-arrow-seq-0 text-black/35" aria-hidden="true">
                  →
                </span>
                <span>Protect</span>
                <span className="animate-hero-arrow-seq-1 text-black/35" aria-hidden="true">
                  →
                </span>
                <span>License</span>
                <span className="animate-hero-arrow-seq-2 text-black/35" aria-hidden="true">
                  →
                </span>
                <span>Manufacture</span>
                <span className="animate-hero-arrow-seq-3 text-black/35" aria-hidden="true">
                  →
                </span>
                <span>Scale</span>
              </p> */}

            </div>

            {/* <div className="flex w-full min-h-[min(260px,42vh)] items-center justify-center lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:min-h-[min(320px,48vh)]">
              <HeroAnimationSkeleton />
            </div> */}

            <HeroExploreCTA />

            {/* <h2 className="shrink-0 text-right text-lg font-semibold leading-snug tracking-[-0.03em] text-[#2f3137]/55 sm:text-xl md:text-2xl lg:max-w-[min(100%,16rem)] lg:pt-2 xl:max-w-[18rem]">
              <span className="block">Transparent</span>
              <span className="block">No manual updates</span>
              <span className="block">Automatic CRM</span>
            </h2> */}

            {/* Hero right: static dashboard preview (Image + browser chrome + 3D) — commented out
            <div className="relative w-full shrink-0 pb-4 lg:pointer-events-none lg:absolute lg:right-10 lg:top-1/2 lg:z-0 lg:mt-0 lg:w-[min(92vw,600px)] xl:w-[min(92vw,750px)] lg:max-w-none lg:-translate-y-1/2 lg:pb-0">
              <div className="[perspective:1400px] [perspective-origin:50%_50%]">
                <div
                  className={cn(
                    "flex flex-col gap-0 overflow-hidden rounded-2xl border border-[#dfdfe3] bg-white/80 elevation-lg backdrop-blur-sm",
                    "shadow-[0_20px_60px_rgba(26,34,48,.08)]",
                    "transform-gpu will-change-transform",
                    "max-lg:[transform:none]",
                    "lg:[transform:rotateY(-15deg)_translateZ(40px)]"
                  )}
                >
                  <div className="flex h-10 shrink-0 items-center justify-between border-b border-[#e3e4e8] bg-white/90 px-3">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-medium text-black/55">
                      inventor-view.ttos.ai
                    </span>
                    <div className="w-[42px]" aria-hidden="true" />
                  </div>
                  <div className="relative -mt-px w-full min-h-0 bg-white elevation-md [line-height:0] [&_span]:block [&_span]:leading-[0] [&_img]:block [&_img]:max-w-none">
                    <Image
                      src="/dashboard-hero.png"
                      alt="ttOS inventor dashboard preview"
                      width={2464}
                      height={1490}
                      className="block h-auto w-full rounded-none align-top"
                      sizes="(min-width: 1280px) 780px, (min-width: 1024px) 680px, 100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </section>

      <section
        id="dashboard-preview"
        className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-6 pb-10 pt-2 md:pb-14 md:pt-4"
        aria-label="Inventor dashboard"
      >
        <ScrollReveal>
          <div className="mx-[50px] overflow-hidden rounded-2xl border border-[#dfdfe3] bg-white elevation-lg max-sm:mx-4">
            <div className="flex h-10 shrink-0 items-center justify-between border-b border-[#e3e4e8] bg-white/90 px-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
              </div>
              <span className="text-xs font-medium text-black/55">inventor-view.ttos.ai</span>
              <div className="w-[42px]" aria-hidden="true" />
            </div>
            <DashboardShell
              width="full"
              variant="inventor"
              className="rounded-none border-0 shadow-none"
            >
              <InventorDashboard />
            </DashboardShell>
          </div>
        </ScrollReveal>
      </section>
      {/* Why ttOS */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
        <div className="relative z-10 mx-auto max-w-7xl ">
          <div className="text-center mb-30 mt-30">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">
              Breakthrough inventions move fast.
            </h2>
            <p className="mt-4 text-lg text-[#55565d]">
              The systems around them don&apos;t.
            </p>
          </div>
          <FeatureTriadCards />
          
        </div>
      </section>

      <section id="product-features" className="relative overflow-hidden py-16 md:py-24 scroll-mt-24">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
        <div className="relative z-10">
          <ProductFeaturesSection />
        </div>
      </section>

      <ContractLogicEngineSection />
      <CleEngagementSection />
      <VisionContactSection />
      <Footer />
    </main>
  )
}