import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import DotBackground from "@/components/chrome/DotBackground"
import Breadcrumb from "@/components/shared/Breadcrumb"
import PageCta from "@/components/shared/PageCta"
import SystemPageIntro from "@/components/system-page/PageIntro"
import BlazinglyFast from "@/components/system-page/BlazinglyFast"
import DisclosureBot from "@/components/system-page/DisclosureBot"
import EvaluationBot from "@/components/system-page/EvaluationBot"
import ProtectionBot from "@/components/system-page/ProtectionBot"
import MarketingBot from "@/components/system-page/MarketingBot"
import LicensingBot from "@/components/system-page/LicensingBot"

export default function SystemPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10">
        <Breadcrumb />
        <SystemPageIntro />
        <BlazinglyFast />
        <DisclosureBot />
        <EvaluationBot />
        <ProtectionBot />
        <MarketingBot />
        <LicensingBot />
        <PageCta text="Want to see ttOS running on real cases? Set up a call." />
      </div>
      <Footer />
    </main>
  )
}
