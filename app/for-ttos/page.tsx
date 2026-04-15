import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import DotBackground from "@/components/chrome/DotBackground"
import Breadcrumb from "@/components/shared/Breadcrumb"
import PageCta from "@/components/shared/PageCta"
import ForTtosPageIntro from "@/components/for-ttos/PageIntro"
import TtoSegmentation from "@/components/for-ttos/TtoSegmentation"
import MitSpotlight from "@/components/for-ttos/MitSpotlight"
import WhatTtosRemoves from "@/components/for-ttos/WhatTtosRemoves"
import LevellingPlayingField from "@/components/for-ttos/LevellingPlayingField"

export default function ForTtosPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10">
        <Breadcrumb />
        <ForTtosPageIntro />
        <TtoSegmentation />
        <MitSpotlight />
        <WhatTtosRemoves />
        <LevellingPlayingField />
        <PageCta text="Want to see how this works for your office? Set up a call." />
      </div>
      <Footer />
    </main>
  )
}
