import { cn } from "@/lib/utils"

const ATTACHMENTS = [
  "Draft publication nature.pdf",
  "Writeup_notes.docx",
  "Presentation_nextyear.pptx",
] as const

function extFor(name: string) {
  const i = name.lastIndexOf(".")
  return i >= 0 ? name.slice(i + 1).toUpperCase() : "FILE"
}

function extBadgeClass(ext: string) {
  if (ext === "PDF") return "border-rose-200 bg-rose-50 text-rose-700"
  if (ext === "DOCX") return "border-sky-200 bg-sky-50 text-sky-700"
  if (ext === "PPTX") return "border-amber-200 bg-amber-50 text-amber-700"
  return "border-[#d7d9df] bg-[#f5f6f8] text-[#4c4d56]"
}

/** Example attachment pills for the system disclosure upload step. */
export default function DisclosureFileUploadMock() {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {ATTACHMENTS.map((file) => (
        <span
          key={file}
          className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-medium text-emerald-800"
        >
          <span
            className={cn(
              "inline-flex h-3.5 min-w-0 items-center rounded border px-1 text-[7px] font-bold leading-none",
              extBadgeClass(extFor(file))
            )}
          >
            {extFor(file)}
          </span>
          {file}
        </span>
      ))}
    </div>
  )
}
