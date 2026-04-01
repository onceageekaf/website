"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type Variant = "tall" | "wide"

export default function CardSkeleton({
  variant = "tall",
  className,
}: {
  variant?: Variant
  className?: string
}) {
  return (
    <div
      className={cn(
        "h-full w-full rounded-xl bg-white",
        // subtle internal padding so it matches your CaseInfoCard density
        "p-0",
        className
      )}
    >
      <div className="h-full w-full animate-pulse">
        {variant === "tall" ? <TallSkeleton /> : <WideSkeleton />}
      </div>
    </div>
  )
}

function TallSkeleton() {
  return (
    <div className="h-full w-full">
      {/* header */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-black/[0.06]" />
        <div className="space-y-2">
          <div className="h-4 w-36 rounded bg-black/[0.06]" />
          <div className="h-3 w-52 rounded bg-black/[0.05]" />
        </div>
      </div>

      {/* body */}
      <div className="mt-5 space-y-3">
        <SkeletonRow w="w-[86%]" />
        <SkeletonRow w="w-[74%]" />
        <SkeletonRow w="w-[90%]" />
        <SkeletonRow w="w-[68%]" />
      </div>

      {/* footer */}
      <div className="mt-6 flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-black/[0.05]" />
        <div className="h-8 w-24 rounded-full bg-black/[0.06]" />
      </div>
    </div>
  )
}

function WideSkeleton() {
  return (
    <div className="h-full w-full">
      {/* header */}
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-black/[0.06]" />
        <div className="space-y-2">
          <div className="h-4 w-44 rounded bg-black/[0.06]" />
          <div className="h-3 w-64 rounded bg-black/[0.05]" />
        </div>
      </div>

      {/* two-column-ish body */}
      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <div className="space-y-3">
          <SkeletonRow w="w-[86%]" />
          <SkeletonRow w="w-[78%]" />
          <SkeletonRow w="w-[70%]" />
        </div>
        <div className="space-y-3">
          <SkeletonRow w="w-[82%]" />
          <SkeletonRow w="w-[74%]" />
          <SkeletonRow w="w-[66%]" />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="h-3 w-36 rounded bg-black/[0.05]" />
        <div className="h-8 w-28 rounded-full bg-black/[0.06]" />
      </div>
    </div>
  )
}

function SkeletonRow({ w }: { w: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-5 rounded-full bg-black/[0.05]" />
      <div className={cn("h-3 rounded bg-black/[0.05]", w)} />
    </div>
  )
}