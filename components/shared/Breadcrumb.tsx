import Link from "next/link"

export default function Breadcrumb() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 pt-8 sm:px-6 lg:px-10 xl:px-8">
      <Link href="/" className="text-sm text-[#5a5d66] transition hover:text-[#2f3137]">
        ← ttOS
      </Link>
    </div>
  )
}
