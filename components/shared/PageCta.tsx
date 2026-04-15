import { CALENDLY_URL } from "@/lib/siteLinks"

type PageCtaProps = {
  text: string
}

export default function PageCta({ text }: PageCtaProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-10 text-center sm:px-6 lg:px-10 xl:px-8">
      <p className="mx-auto max-w-3xl text-lg leading-relaxed text-[#4c4d56]">{text}</p>
      <a
        href={CALENDLY_URL}
        className="mt-6 inline-flex h-12 items-center rounded-xl bg-[#2f3137] px-6 text-base font-medium text-white shadow-[0_1px_0_rgba(0,0,0,.08),0_8px_24px_rgba(47,49,55,.28)] transition hover:bg-[#212329]"
      >
        Set up a call
      </a>
    </section>
  )
}
