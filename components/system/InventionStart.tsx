import type { ReactNode } from "react"
import { ArrowDown, Building2, Mail } from "lucide-react"
import TtosWayDisclosureFlow from "@/components/system/TtosWayDisclosureFlow"
import { cn } from "@/lib/utils"

function ComparisonColumn({
  title,
  timeText,
  children,
  variant = "centered",
}: {
  title: string
  timeText?: string
  children: ReactNode
  variant?: "centered" | "flow"
}) {
  return (
    <div
      className={cn(
        "flex min-h-0 flex-col rounded-[28px] bg-[#f5f5f5] px-6 pb-10 pt-10 md:px-10 md:pt-12",
        variant === "centered" && "min-h-[min(420px,70vh)] md:min-h-[480px]",
        variant === "flow" && "md:h-full"
      )}
    >
      <h2 className="text-center text-lg font-semibold tracking-[-0.03em] text-neutral-900 md:text-xl">
        {title}
      </h2>
      {timeText ? (
        <p className="mt-1 text-center text-[12px] font-medium text-neutral-500 md:text-[13px]">
          {timeText}
        </p>
      ) : null}
      <div
        className={cn(
          "flex flex-1 flex-col pt-7 md:pt-9",
          variant === "centered" && "items-center justify-center",
          variant === "flow" && "w-full items-stretch"
        )}
      >
        {children}
      </div>
    </div>
  )
}

function DisclosureIntakeLabel() {
  return (
    <p className="mb-4 border-b border-neutral-100 pb-3 text-center text-[11px] font-medium uppercase tracking-wide text-neutral-500">
      Disclosure intake
    </p>
  )
}

function DisclosureIntakeCardShell({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[380px] rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] md:max-w-[420px] md:p-6">
      <DisclosureIntakeLabel />
      {children}
    </div>
  )
}

function ProcessArrow() {
  return (
    <div className="flex justify-center py-1.5" aria-hidden>
      <ArrowDown className="h-4 w-4 text-neutral-400" strokeWidth={2} />
    </div>
  )
}

function ManualFormMockup() {
  return (
    <div
      className="mt-2.5 space-y-2.5 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm"
      aria-hidden
    >
      <div>
        <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
          Department
        </p>
        <div className="mt-1 flex h-7 items-center rounded border border-neutral-200 bg-[#f8fafc] px-2 text-[10px] text-neutral-400">
          Select…
        </div>
      </div>
      <div>
        <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
          Sponsor / funding
        </p>
        <div className="mt-1 h-7 rounded border border-neutral-200 bg-[#f8fafc]" />
      </div>
      <div>
        <p className="text-[9px] font-medium uppercase tracking-wide text-neutral-400">
          Description of invention
        </p>
        <div className="mt-1 min-h-[4.5rem] rounded border border-neutral-200 bg-[#f8fafc] p-2">
          <p className="text-[9px] leading-relaxed text-neutral-400">
            Type or paste narrative here…
          </p>
        </div>
      </div>
    </div>
  )
}

function OutboundEmailMockup() {
  return (
    <div className="mt-2.5 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-neutral-100 bg-[#eef2ff]/60 px-2.5 py-2">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white shadow-sm ring-1 ring-neutral-200/80">
          <Mail className="h-3.5 w-3.5 text-[#3b82f6]" strokeWidth={1.75} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] text-neutral-500">To</p>
          <p className="truncate text-[11px] font-medium text-neutral-800">tto@institution.edu</p>
        </div>
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-medium text-neutral-800">
          Subject: Disclosure submission
        </p>
        <p className="mt-2 text-[9px] leading-relaxed text-neutral-500">
          Attached please find our completed disclosure and supporting materials for your
          review.
        </p>
      </div>
    </div>
  )
}

function CaseAssignmentMockup() {
  return (
    <div className="mt-2.5 space-y-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-2.5">
        <span className="text-[10px] font-medium text-neutral-500">Tech transfer case</span>
        <code className="rounded-md bg-[#eef2ff] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#1d4ed8]">
          TT-2026-0184
        </code>
      </div>
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700 ring-2 ring-white">
          LM
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold text-neutral-900">Licensing manager</p>
          <p className="text-[9px] text-neutral-500">Case owner · Assigned</p>
        </div>
      </div>
    </div>
  )
}

function ReceiptEmailMockup() {
  return (
    <div className="mt-2.5 overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <div className="border-b border-neutral-100 bg-[#f6f8fa] px-2.5 py-2">
        <p className="text-[9px] text-neutral-500">From · TTO</p>
        <p className="text-[11px] font-medium text-neutral-800">tto@institution.edu</p>
      </div>
      <div className="p-2.5">
        <p className="text-[10px] font-medium text-neutral-800">
          Your disclosure was received
        </p>
        <p className="mt-2 text-[9px] leading-relaxed text-neutral-600">
          We assigned case <span className="font-mono text-[#1d4ed8]">TT-2026-0184</span> and
          will follow up with next steps. A copy of your submission is attached for your
          records.
        </p>
      </div>
    </div>
  )
}

function CrmRecordMockup() {
  return (
    <div className="mt-2.5 flex items-start gap-3 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-50 ring-1 ring-emerald-100">
        <Building2 className="h-5 w-5 text-emerald-700" strokeWidth={1.75} />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-1.5">
          <p className="text-[11px] font-semibold text-neutral-900">New disclosure</p>
          <span className="rounded-full bg-emerald-100 px-2 py-px text-[9px] font-medium text-emerald-800">
            Intake
          </span>
        </div>
        <p className="mt-1 text-[9px] text-neutral-500">CRM record updated · Synced to pipeline</p>
        <div className="mt-2 flex gap-2 border-t border-neutral-100 pt-2">
          <span className="text-[9px] text-neutral-400">Last activity</span>
          <span className="text-[9px] font-medium text-neutral-600">Just now</span>
        </div>
      </div>
    </div>
  )
}

function CurrentTtoProcessFlow() {
  return (
    <DisclosureIntakeCardShell>
      <div className="text-left text-[13px] leading-snug text-neutral-800">
        <div>
          <p className="font-semibold text-neutral-900">Manual filling the form</p>
          <ManualFormMockup />
        </div>

        <ProcessArrow />

        <div>
          <p className="font-semibold text-neutral-900">Email to the TTO generic email</p>
          <OutboundEmailMockup />
          <p className="mt-2 text-[11px] text-neutral-500">Generic TTO inbox</p>
        </div>

        <ProcessArrow />

        <div>
          <p className="font-semibold text-neutral-900">
            TTO assigns a tech transfer case number and assigns the case to a licensing
            manager
          </p>
          <CaseAssignmentMockup />
        </div>

        <ProcessArrow />

        <div>
          <p className="font-semibold text-neutral-900">
            Receipt of submission and details email to the inventor
          </p>
          <ReceiptEmailMockup />
        </div>

        <ProcessArrow />

        <div>
          <p className="font-semibold text-neutral-900">CRM updated</p>
          <CrmRecordMockup />
        </div>
      </div>
    </DisclosureIntakeCardShell>
  )
}

export default function InventionStart() {
  return (
    <section className="bg-white pb-16 pt-14 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[1180px] px-6">
        <header className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
          <p className="text-[13px] font-medium text-neutral-500 md:text-sm">System</p>
          <h1 className="mt-3 text-[1.65rem] font-semibold leading-[1.15] tracking-[-0.035em] text-neutral-900 md:text-4xl md:leading-[1.12]">
            How does ttOS work?
          </h1>
        </header>

        <div className="flex flex-col gap-10 md:gap-12">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-neutral-900 md:text-2xl">
              Everything starts with an invention
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-600 md:text-base">
              The start of the technology transfer process is when an invention is
              submitted to the TTO using the Invention Disclosure Form.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 md:items-stretch md:gap-6 lg:gap-8">
            <ComparisonColumn title="Current TTO process" timeText="2 to 5 hours" variant="flow">
              <CurrentTtoProcessFlow />
            </ComparisonColumn>
            <ComparisonColumn title="ttOS way" timeText="30 mins" variant="flow">
              <DisclosureIntakeCardShell>
                <TtosWayDisclosureFlow />
              </DisclosureIntakeCardShell>
            </ComparisonColumn>
          </div>
        </div>
      </div>
    </section>
  )
}
