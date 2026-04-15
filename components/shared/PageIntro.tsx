type PageIntroProps = {
  title: string
  text: string
}

export default function PageIntro({ title, text }: PageIntroProps) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-10 xl:px-8">
      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-[#2f3137] md:text-5xl">{title}</h1>
      <p className="mt-5 max-w-4xl text-lg leading-relaxed text-[#4c4d56] md:text-xl">{text}</p>
    </section>
  )
}
