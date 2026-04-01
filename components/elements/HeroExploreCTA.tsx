"use client"

import Link from "next/link"
import { ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

function ScrollMouseIcon({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex flex-col items-center", className)}
      aria-hidden
    >
      <div className="relative h-7 w-[18px] rounded-full border-2 border-[#2f3137]/35 bg-white/40">
        <div className="absolute left-1/2 top-1.5 h-1.5 w-1 -translate-x-1/2 rounded-full bg-[#2f3137]/55 animate-scroll-mouse-wheel" />
      </div>
      <span className="mt-1.5 text-[8px] font-medium uppercase tracking-[0.14em] text-[#6b6d75]">
        Scroll
      </span>
    </div>
  )
}

export default function HeroExploreCTA() {
  return (
    <div className="mt-10 flex w-full flex-col items-center gap-8">
      <Link
        href="#dashboard-preview"
        className="inline-flex h-12 items-center gap-2 rounded-xl bg-[#2f3137] px-6 text-base font-medium text-white shadow-[0_1px_0_rgba(0,0,0,.08),0_8px_24px_rgba(47,49,55,.28)] transition hover:bg-[#212329]"
      >
        Explore
        <ArrowDown className="h-4 w-4 shrink-0" strokeWidth={2.25} aria-hidden />
      </Link>

      <a
        href="#dashboard-preview"
        className="group flex flex-col items-center text-[#6b6d75] transition-colors hover:text-[#2f3137]"
        aria-label="Scroll to dashboard preview"
      >
        <ScrollMouseIcon />
      </a>
    </div>
  )
}
