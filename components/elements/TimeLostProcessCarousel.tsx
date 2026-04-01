"use client"

import { useEffect, useState } from "react"
import {
  Building2,
  ClipboardList,
  Clock,
  FilePen,
  FileQuestion,
  FileText,
  LineChart,
  Scale,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

export const TIME_LOST_PROCESS_ITEMS = [
  "What is the status of [x]? Can you update me?",
  "Non-confidential summary - 1 page static pdf",
  "CRM - update work that has been done",
  "Create a report on the activities for the Department of X",
  "Legal review of NDA template of external",
  "Waiting for signature from Department head of X",
] as const

const INTERVAL_MS = 3200

const ICONS: LucideIcon[] = [
  FileQuestion,
  Scale,
  LineChart,
  FileText,
  ClipboardList,
  FilePen,
  Building2,
  Clock,
]

function StackCard({
  text,
  Icon,
  role,
}: {
  text: string
  Icon: LucideIcon
  role: "focus" | "behind"
}) {
  const isFocus = role === "focus"
  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 transition-[transform,opacity,box-shadow,background-color,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
        isFocus &&
          "bg-white shadow-[0_10px_28px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.06)]",
        !isFocus &&
          "border border-white/75 bg-white/70 shadow-none"
      )}
    >
      <div
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px]",
          isFocus ? "bg-sky-100" : "bg-sky-100/85"
        )}
      >
        <Icon
          className={cn("h-[18px] w-[18px]", isFocus ? "text-sky-600" : "text-sky-600/90")}
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <p
        className={cn(
          "min-w-0 flex-1 text-left text-[13px] leading-snug tracking-[-0.01em]",
          isFocus && "font-semibold text-neutral-900",
          !isFocus && "font-medium text-neutral-700"
        )}
      >
        {text}
      </p>
    </div>
  )
}

type Props = {
  className?: string
  intervalMs?: number
  panelClassName?: string
  /** Unused; kept so existing call sites stay valid. */
  fadeColor?: string
}

export default function TimeLostProcessCarousel({
  className,
  intervalMs = INTERVAL_MS,
  panelClassName = "bg-transparent",
  fadeColor: _fadeColor,
}: Props) {
  void _fadeColor
  const items = TIME_LOST_PROCESS_ITEMS
  const len = items.length
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % len)
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [intervalMs, len])

  const prev = (index - 1 + len) % len
  const next = (index + 1) % len

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[200px] w-full cursor-default select-none flex-col items-center justify-center px-4 py-5",
        panelClassName,
        className
      )}
    >
      <div className="relative z-10 flex w-full max-w-md flex-col items-stretch gap-6">
        <div
          className={cn(
            "relative z-[8] w-full origin-bottom scale-[0.88] opacity-[0.62]",
            "blur-[0.65px] transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "motion-reduce:blur-none"
          )}
        >
          <StackCard text={items[prev]} Icon={ICONS[prev]} role="behind" />
        </div>

        <div className="relative z-20 w-full transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]">
          <StackCard text={items[index]} Icon={ICONS[index]} role="focus" />
        </div>

        <div
          className={cn(
            "relative z-[8] w-full origin-top scale-[0.88] opacity-[0.62]",
            "blur-[0.65px] transition-[opacity,transform,filter] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
            "motion-reduce:blur-none"
          )}
        >
          <StackCard text={items[next]} Icon={ICONS[next]} role="behind" />
        </div>
      </div>
    </div>
  )
}
