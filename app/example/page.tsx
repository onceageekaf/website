import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import DotBackground from "@/components/chrome/DotBackground"
import Breadcrumb from "@/components/shared/Breadcrumb"
import PageCta from "@/components/shared/PageCta"
import ExamplePageIntro from "@/components/example-page/PageIntro"
import InventionOverview from "@/components/example-page/InventionOverview"
import TechnicalSpecs from "@/components/example-page/TechnicalSpecs"
import MarketApplications from "@/components/example-page/MarketApplications"
import DataRoomAccess from "@/components/example-page/DataRoomAccess"
import OnlineNdaMta from "@/components/example-page/OnlineNdaMta"
import BackToTtos from "@/components/example-page/BackToTtos"

export default function ExamplePage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10">
        <Breadcrumb />
        <ExamplePageIntro />
        <InventionOverview />
        <TechnicalSpecs />
        <MarketApplications />
        <DataRoomAccess />
        <OnlineNdaMta />
        <BackToTtos />
        <PageCta text="Want to see ttOS produce this for your inventions? Set up a call." />
      </div>
      <Footer />
    </main>
  )
}
