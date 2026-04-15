import { ASH_LINKEDIN_URL } from "@/lib/siteLinks"

export default function Footer() {
  return (
    <footer className="border-t border-[#e8e8ec] bg-white py-10">
      <div className="mx-auto min-w-0 max-w-7xl space-y-2 px-4 text-center text-xs text-[#6b6d75] sm:px-6 lg:px-10 xl:px-8">
        <p>
          Built by{" "}
          <a href={ASH_LINKEDIN_URL} className="underline underline-offset-2 hover:text-[#2f3137]">
            Ash Ravikumar
          </a>{" "}
          — 16 years in research translation across CERN and five universities.
        </p>
        <p>© 2026. ttOS</p>
      </div>
    </footer>
  )
}
