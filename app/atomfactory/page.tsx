import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import DotBackground from "@/components/chrome/DotBackground"
import Breadcrumb from "@/components/shared/Breadcrumb"
import PageCta from "@/components/shared/PageCta"
import AtomfactoryPageIntro from "@/components/atomfactory-page/PageIntro"
import CleManifesto from "@/components/atomfactory-page/CleManifesto"
import AtomFactoryMechanism from "@/components/atomfactory-page/AtomFactoryMechanism"
import WorkedExample from "@/components/atomfactory-page/WorkedExample"
import PmfFundingModel from "@/components/atomfactory-page/PmfFundingModel"
import StatusNote from "@/components/atomfactory-page/StatusNote"

export default function AtomfactoryPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10">
        <Breadcrumb />
        <AtomfactoryPageIntro />
        <CleManifesto />
        <AtomFactoryMechanism />
        <WorkedExample />
        <PmfFundingModel />
        <StatusNote />
        <PageCta text="Want to explore an Atom Factory programme for a specific material? Set up a call." />
      </div>
      <Footer />
    </main>
  )
}
