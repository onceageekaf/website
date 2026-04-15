import { dmSerifDisplay } from "./fonts"
import Navbar from "@/components/layout/Navbar"
import { cn } from "@/lib/utils"
import DotBackground from "@/components/chrome/DotBackground"
import FeatureTriadCards from "@/components/elements/FeatureTriadCards"
import ProductFeaturesSection from "@/components/elements/ProductFeaturesSection"
import ContractLogicEngineSection from "@/components/sections/ContractLogicEngineSection"
import CleEngagementSection from "@/components/sections/CleEngagementSection"
import DeepTechInfrastructureCtaSection from "@/components/sections/DeepTechInfrastructureCtaSection"
import VisionContactSection from "@/components/sections/VisionContactSection"
import Footer from "@/components/layout/Footer"
import AgentPipelineSection from "@/components/sections/AgentPipelineSection"
import BlazinglyFastSection from "@/components/sections/BlazinglyFastSection"
import PricingValuesSection from "@/components/sections/PricingValuesSection"
import CleAtomFactoryConnector from "@/components/sections/CleAtomFactoryConnector"

export default function page() {
  return (
    <main className="relative min-h-screen overflow-x-clip overflow-y-visible bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />

      <section className="relative flex min-h-[80svh] flex-col overflow-visible">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />

        <div className="relative z-10 mx-auto flex min-w-0 w-full max-w-7xl flex-1 flex-col justify-center px-4 sm:px-6 lg:px-10 xl:px-8 py-16 md:py-24">
          <div className="relative flex flex-col items-center text-center">
            <div className="relative z-20 mx-auto w-full min-w-0 max-w-4xl">
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-[#2f3137] min-w-0 sm:text-5xl md:text-6xl lg:text-[clamp(2.5rem,4vw+1rem,3.75rem)] xl:text-7xl">
              Inventions move fast. 
              <br /> Systems around them don&apos;t.
              </h1>
              <p className="mx-auto mt-10 max-w-3xl min-w-0 text-xl leading-relaxed text-[#4c4d56] sm:text-2xl">
                Infrastructure for research translation —
                <br />
                <span className={cn(dmSerifDisplay.className, "font-bold italic")}>free</span> for academics and
                Technology Transfer Offices.
              </p>
            </div>
          
          </div>
        </div>
      </section>

      <VisionContactSection />

      <section className="relative overflow-x-clip overflow-y-visible py-16 md:py-24">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
        <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-8">
          <div className="mb-10 mt-6 text-center md:mb-14 md:mt-10 lg:mb-16 lg:mt-12">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">
              Same invention. Different outcomes.
            </h2>
          </div>
          <FeatureTriadCards />
          <p className="mx-auto mt-8 max-w-4xl text-center text-xl font-semibold tracking-[-0.02em] text-[#2f3137] md:text-2xl">
            Standardization is what turns a roulette wheel into a pipeline.
          </p>
        </div>
      </section>

      <AgentPipelineSection />

      <section id="product-features" className="relative overflow-x-clip overflow-y-visible py-16 md:py-24 scroll-mt-24">
        <DotBackground />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
        <div className="relative z-10 min-w-0">
          <ProductFeaturesSection />
        </div>
      </section>

      <BlazinglyFastSection />
      <PricingValuesSection />
      <ContractLogicEngineSection />
      <CleAtomFactoryConnector />
      <CleEngagementSection />
      <DeepTechInfrastructureCtaSection />
      <Footer />
    </main>
  )
}