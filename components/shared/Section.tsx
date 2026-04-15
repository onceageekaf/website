import type { ReactNode } from "react"

type SectionProps = {
  title: string
  children: ReactNode
}

export default function Section({ title, children }: SectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10 xl:px-8">
      <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#2f3137] md:text-3xl">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  )
}
