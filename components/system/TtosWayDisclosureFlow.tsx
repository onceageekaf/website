import { ArrowDown, Sparkles } from "lucide-react"
import DisclosureFileUploadMock from "@/components/system/DisclosureFileUploadMock"
import SystemDisclosureDashboardVisual from "@/components/system/SystemDisclosureDashboardVisual"
import { SlackLogo, TeamsLogo } from "@/components/system/CollabChannelLogos"

function FlowArrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden>
      <ArrowDown className="h-4 w-4 text-neutral-400" strokeWidth={2} />
    </div>
  )
}

function AgentFillsFormMock() {
  return (
    <div className="mt-2.5 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="flex items-start gap-2">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-violet-600" strokeWidth={1.75} />
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500">
            Disclosure agent
          </p>
          <p className="mt-0.5 text-[10px] leading-relaxed text-neutral-600">
            Extracting information and filling the invention disclosure form.
          </p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 border-t border-neutral-100 pt-2.5">
        {["Title of invention", "Inventor list", "Funding & sponsors"].map((label) => (
          <div
            key={label}
            className="flex items-center justify-between gap-2 rounded-md border border-neutral-100 bg-[#fafafa] px-2 py-1.5"
          >
            <span className="text-[9px] text-neutral-500">{label}</span>
            <span className="text-[9px] font-medium text-emerald-700">Auto-filled</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function MissingPartsMock() {
  return (
    <div className="mt-2.5 space-y-2 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <p className="text-[10px] font-medium text-neutral-800">Field review</p>
      <div className="rounded-md border-2 border-amber-400 bg-amber-50/60 px-2.5 py-2">
        <p className="text-[9px] font-semibold text-amber-900">Missing · Government rights statement</p>
        <p className="mt-1 text-[9px] text-amber-800/90">Required when federal funding is involved.</p>
      </div>
      <div className="rounded-md border-2 border-amber-400 bg-amber-50/60 px-2.5 py-2">
        <p className="text-[9px] font-semibold text-amber-900">Missing · Publication timeline</p>
      </div>
    </div>
  )
}

function ParallelReviewMock() {
  return (
    <div className="mt-2.5 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <p className="text-[10px] leading-relaxed text-neutral-600">
        Licensing manager for the case and faculty can view the submission, chat with the
        inventor, and review in parallel.
      </p>
      <div className="mt-3 flex items-center justify-center gap-5">
        <TeamsLogo className="h-5 w-5 shrink-0" alt="Microsoft Teams" />
        <SlackLogo className="h-5 w-5 shrink-0" alt="Slack" />
      </div>
    </div>
  )
}

/** Full ttOS disclosure intake flow (System page only; Features on home unchanged). */
export default function TtosWayDisclosureFlow() {
  return (
    <div className="text-left text-[13px] leading-snug text-neutral-800">
      <div>
        <p className="font-semibold text-neutral-900">Submit an Invention</p>
        <SystemDisclosureDashboardVisual />
      </div>

      <FlowArrow />

      <div>
        <p className="font-semibold text-neutral-900">
          Upload manuscripts, presentation, and data about your invention
        </p>
        <DisclosureFileUploadMock />
      </div>

      <FlowArrow />

      <div>
        <p className="font-semibold text-neutral-900">
          Disclosure Agent extracts the information and fills the form
        </p>
        <AgentFillsFormMock />
      </div>

      <FlowArrow />

      <div>
        <p className="font-semibold text-neutral-900">
          Chat Bot helps filling the missing parts
        </p>
        <MissingPartsMock />
      </div>

      <FlowArrow />

      <div>
        <p className="font-semibold text-neutral-900">
          Licensing manager & faculty review in parallel
        </p>
        <ParallelReviewMock />
      </div>
    </div>
  )
}
