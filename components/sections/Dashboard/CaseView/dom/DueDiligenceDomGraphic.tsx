import * as React from "react"
import { cn } from "@/lib/utils"

export default function DueDiligenceDomGraphic({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-black/10 bg-white",
        "shadow-[0_18px_55px_rgba(0,0,0,0.10)]",
        className
      )}
    >
      {/* subtle header bar like your other cards */}
      <div className="h-10 border-b border-black/10 bg-black/[0.03]" />

      <div className="relative p-5 md:p-6">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {/* LEFT: Funding Agreement -> Emails expands */}
          <div className="relative">
            <div className="rr-card rr-funding">
              <CardHeader icon="doc" color="blue" title="Funding Agreement" />

              <div className="mt-5 space-y-3">
                <Row label="Foundation" value="Ash Foundation, GR-123-4567" />
                <LinkRow />
                <div className="pt-3">
                  <div className="text-[13px] font-semibold text-black/75">Summary</div>
                  <div className="mt-1 text-[13px] leading-relaxed text-black/55">
                    Notify Foundation about invention and intent to seek patent protection.
                  </div>
                </div>
              </div>

              {/* Emails section reveals / expands */}
              <div className="rr-emailBlock mt-5 border-t border-black/10 pt-4">
                <div className="flex items-center gap-3">
                  <IconEnvelope className="h-5 w-5 text-emerald-600" />
                  <div className="text-[16px] font-semibold text-black/85">Emails</div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-y-3 text-[13px]">
                  <div className="font-medium text-black/70">Email sent:</div>
                  <div className="text-right tabular-nums text-black/55">12.03.2025</div>

                  <div className="font-medium text-black/70">Approval received:</div>
                  <div className="text-right tabular-nums text-black/55">15.03.2025</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Joint Inventors -> morph into Inter-institution Agreement */}
          <div className="relative">
            <div className="rr-stack">
              {/* base card */}
              <div className="rr-card rr-joint">
                <CardHeader icon="doc" color="purple" title="Joint Inventors" />
                <div className="mt-5 space-y-3">
                  <Row label="Joint inventors" value="Yes" align="right" />
                  <Row label="Institution" value="University of Oxford" align="right" />
                </div>
              </div>

              {/* overlay card that “grows in” */}
              <div className="rr-card rr-inter">
                <CardHeader icon="envelope" color="orange" title="Inter-institution Agreement" />
                <div className="mt-5 space-y-3">
                  <Row label="Status" value="Signed" align="right" />
                  <Row label="Emailed" value="21.03.2025" align="right" />
                  <Row label="Signed" value="21.04.2025" align="right" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* tiny caption row (optional, remove if you want) */}
        <div className="mt-4 flex items-center justify-between text-[12px] text-black/45">
          <span>Due diligence check</span>
          <span className="tabular-nums">Auto-updated</span>
        </div>
      </div>

      <style>{CSS}</style>
    </div>
  )
}

/* ---------- tiny building blocks ---------- */

function CardHeader({
  icon,
  color,
  title,
}: {
  icon: "doc" | "envelope"
  color: "blue" | "purple" | "orange"
  title: string
}) {
  const Icon = icon === "doc" ? IconDoc : IconEnvelope
  const tone =
    color === "blue"
      ? "text-blue-600"
      : color === "purple"
        ? "text-violet-600"
        : "text-orange-600"

  return (
    <div className="flex items-center gap-3">
      <Icon className={cn("h-6 w-6", tone)} />
      <div className="text-[22px] font-semibold tracking-tight text-black/90">{title}</div>
    </div>
  )
}

function Row({
  label,
  value,
  align = "left",
}: {
  label: string
  value: string
  align?: "left" | "right"
}) {
  return (
    <div className="grid grid-cols-[160px_1fr] items-center gap-3">
      <div className="text-[13px] font-semibold text-black/70">{label}:</div>
      <div className={cn("text-[15px] text-black/55", align === "right" && "text-right")}>
        {value}
      </div>
    </div>
  )
}

function LinkRow() {
  return (
    <div className="flex items-center gap-3 pt-2">
      <IconLink className="h-5 w-5 text-blue-600" />
      <span className="text-[16px] font-medium text-blue-600">Document Link</span>
    </div>
  )
}

/* ---------- icons (inline, minimal) ---------- */

function IconDoc({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M14 3v4h4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconEnvelope({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="m4 8 8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconLink({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 13a5 5 0 0 1 0-7l1.2-1.2a5 5 0 0 1 7 7L17 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 11a5 5 0 0 1 0 7l-1.2 1.2a5 5 0 0 1-7-7L7 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* ---------- animations ---------- */

const CSS = `
/* cards */
.rr-card{
  border: 1px solid rgba(0,0,0,0.10);
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 14px 40px rgba(0,0,0,0.10);
}

/* Emails grows in */
.rr-emailBlock{
  transform-origin: top;
  animation: rr_emailGrow 2.6s ease-in-out infinite;
}
@keyframes rr_emailGrow{
  0%, 18% { opacity: 0; transform: scaleY(.85); filter: blur(0.2px); }
  32%, 82% { opacity: 1; transform: scaleY(1); filter: blur(0px); }
  100% { opacity: 0; transform: scaleY(.85); }
}

/* Right stack: joint -> inter-institution */
.rr-stack{
  position: relative;
  height: 100%;
  min-height: 220px;
}
.rr-joint{
  position: relative;
  z-index: 1;
  animation: rr_jointPulse 2.6s ease-in-out infinite;
}
@keyframes rr_jointPulse{
  0%, 18% { transform: translateY(0) scale(1); opacity: 1; }
  32%, 82% { transform: translateY(2px) scale(.985); opacity: .35; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
}
.rr-inter{
  position: absolute;
  left: 0; right: 0;
  top: 0;
  z-index: 2;
  transform-origin: top left;
  animation: rr_interGrow 2.6s ease-in-out infinite;
}
@keyframes rr_interGrow{
  0%, 18% { opacity: 0; transform: translateY(10px) scale(.96); }
  32%, 82% { opacity: 1; transform: translateY(0) scale(1); }
  100% { opacity: 0; transform: translateY(10px) scale(.96); }
}

/* reduce motion */
@media (prefers-reduced-motion: reduce){
  .rr-emailBlock, .rr-joint, .rr-inter{ animation: none !important; }
}
`