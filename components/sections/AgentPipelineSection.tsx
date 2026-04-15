import DotBackground from "@/components/chrome/DotBackground"

const PIPELINE_COLUMNS = [
  {
    title: "Disclosure",
    items: ["Details of the invention", "Inventor(s) details", "Keywords"],
  },
  {
    title: "Evaluation",
    items: ["Due diligence", "Prior art search", "Market research"],
  },
  {
    title: "Protection",
    items: ["Send evaluation to patent", "Draft provisional patent", "Update CRM"],
  },
  {
    title: "Marketing",
    items: ["Webpage for invention", "Deal room", "NDA / MTA access"],
  },
  {
    title: "Licensing",
    items: ["Draft term sheet", "Full license", "Post-agreement follow-up"],
  },
] as const

export default function AgentPipelineSection() {
  return (
    <section className="relative overflow-x-clip overflow-y-visible py-16 md:py-24">
      <DotBackground />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(246,246,247,0)_42%,rgba(246,246,247,0.9)_85%,rgba(246,246,247,1)_100%)]" />
      <div className="relative z-10 mx-auto min-w-0 max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-8">
        <div className="mb-8 text-center md:mb-12">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#55565d]">System map</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#2f3137] md:text-5xl">
            The pipeline, end to end.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {PIPELINE_COLUMNS.map((column) => (
            <article
              key={column.title}
              className="rounded-2xl border border-[#e1e3e9] bg-white p-5 shadow-[0_1px_0_rgba(0,0,0,.04),0_12px_40px_rgba(26,34,48,.06)]"
            >
              <h3 className="text-base font-semibold tracking-[-0.02em] text-[#2f3137]">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.items.map((item) => (
                  <li key={item} className="rounded-lg border border-[#eceef3] bg-[#f8f8fa] px-3 py-2 text-sm text-[#4c4d56]">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-medium text-[#6b6d75]">+ more attributes</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
