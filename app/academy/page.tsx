import Navbar from "@/components/layout/Navbar"

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-[#f6f6f7] text-[#2a2a2f]">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 py-10 pb-16">
        <h1 className="text-3xl font-semibold tracking-tight text-[#2f3137]">
          Academy
        </h1>
        <p className="mt-3 max-w-2xl text-[#4c4d56]">
          Content for this page can go here.
        </p>
      </div>
    </main>
  )
}
