"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type ViewCardVariant = "default" | "compact"

export type ViewCardItem = {
  id?: string
  label: string
  muted?: boolean
  icon?: React.ReactNode
  itemIcon?: React.ReactNode
  href?: string
  onClick?: () => void
  right?: React.ReactNode
}

export type ViewCardFooter = {
  label: string
}

export type ViewCardProps = {
  title: string
  icon?: React.ReactNode
  items: ViewCardItem[]
  footer?: ViewCardFooter

  variant?: ViewCardVariant
  onItemClick?: (item: ViewCardItem, index: number) => void

  /** Optional fixed width like ModuleCard (default = 200px) */
  widthClassName?: string

  /** Override icon chip colors (otherwise uses emerald default) */
  iconClassName?: string

  className?: string

  /** reveal animation controls */
  revealed?: boolean
  revealDelayMs?: number
  showSkeleton?: boolean
}

export default function ViewCard(props: ViewCardProps) {
  const {
    title,
    icon,
    items,
    footer,
    variant = "default",
    onItemClick,
    widthClassName = "w-[200px]",
    iconClassName,
    className = "",
    revealed = true,
    revealDelayMs = 0,
    showSkeleton = false,
  } = props

  const safeItems = Array.isArray(items) ? items : []

  const isCompact = variant === "compact"

  const styles = React.useMemo(() => {
    return {
      card: [
        "relative flex flex-col h-full w-full",
        "rounded-2xl bg-white border border-black/10 overflow-hidden",
        "elevation-lg backdrop-blur-[10px]",
        widthClassName,
        className,
      ].join(" "),
      headerWrap: isCompact ? "px-3 pt-3 pb-2" : "px-5 pt-5 pb-4",
      title: isCompact
        ? "text-[12px] leading-none font-semibold text-black"
        : "text-[14px] leading-none font-semibold text-black",
      divider: isCompact ? "mx-3" : "mx-5",
      bodyPadX: isCompact ? "px-3" : "px-5",
      rowText: isCompact
        ? "text-[10px] leading-snug font-medium"
        : "text-[12px] leading-snug font-medium",
      rowPy: isCompact ? "py-2" : "py-3",
      footerText: isCompact ? "text-[11px]" : "text-[13px]",
      footerPad: isCompact ? "px-3 py-3" : "px-5 py-4",
    }
  }, [isCompact, widthClassName, className])

  const RowEl = ({ item, index }: { item: ViewCardItem; index: number }) => {
    const clickable = Boolean(item.href || item.onClick || onItemClick)
    const rowIcon = item.itemIcon ?? item.icon

    const baseRow = (
      <div
        className={[
          styles.rowPy,
          "flex items-center justify-between gap-2",
          clickable ? "cursor-pointer" : "",
        ].join(" ")}
        onClick={() => {
          item.onClick?.()
          onItemClick?.(item, index)
        }}
      >
        <div className="flex items-center gap-1 min-w-0">
          {rowIcon ? (
            <span className="shrink-0 opacity-70">
              {React.isValidElement(rowIcon)
                ? React.cloneElement(rowIcon as React.ReactElement<{ className?: string }>, { className: "h-3.5 w-3.5" })
                : rowIcon}
            </span>
          ) : null}

          <div
            className={[
              styles.rowText,
              item.muted ? "text-black/45" : "text-black/70",
              "truncate",
            ].join(" ")}
            title={item.label}
          >
            {item.label}
          </div>
        </div>

        {item.right ? <div className="shrink-0">{item.right}</div> : null}
      </div>
    )

    if (item.href) {
      return (
        <a
          href={item.href}
          className="block outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg"
          onClick={() => {
            item.onClick?.()
            onItemClick?.(item, index)
          }}
        >
          {baseRow}
        </a>
      )
    }

    return baseRow
  }

  return (
    <div
      className={cn(
        styles.card,
        "transition-[transform,opacity] duration-800 ease-in-out",
        revealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      )}
      style={{ transitionDelay: `${revealDelayMs}ms` }}
    >
      {/* skeleton overlay */}
      {showSkeleton ? (
        <div
          className={cn(
            "absolute inset-0 pointer-events-none",
            "transition-opacity duration-800 ease-out",
            revealed ? "opacity-0" : "opacity-100"
          )}
          style={{ transitionDelay: `${revealDelayMs}ms` }}
          aria-hidden
        >
          <div className={cn("h-full w-full", isCompact ? "p-4" : "p-5")}>
            <div className="h-6 w-32 rounded bg-black/[0.06]" />
            <div className="mt-4 space-y-3">
              <div className="h-4 w-[85%] rounded bg-black/[0.06]" />
              <div className="h-4 w-[75%] rounded bg-black/[0.06]" />
              <div className="h-4 w-[80%] rounded bg-black/[0.06]" />
            </div>
            <div className="mt-6 h-4 w-24 rounded bg-black/[0.06]" />
          </div>
        </div>
      ) : null}

      {/* content */}
      <div
        className={cn(
          "relative flex flex-col h-full transition-opacity duration-300 ease-in-out",
          revealed ? "opacity-100" : "opacity-0"
        )}
        style={{ transitionDelay: `${revealDelayMs}ms` }}
      >
        {/* Header */}
        <div className={["flex items-center gap-2.5", styles.headerWrap].join(" ")}>
          <div
            className={cn(
              "flex h-6 w-6 items-center justify-center rounded-md",
              "relative",
              "shadow-[0_1px_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]",
              "before:absolute before:inset-0 before:rounded-md before:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
              "opacity-90 transition-all duration-200 ease-in-out",
              "hover:opacity-100 hover:-translate-y-[1px]",
              "hover:shadow-[0_2px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)]",
              iconClassName ?? "bg-emerald-500/15 text-emerald-600"
            )}
          >
            {icon ?? <div className="h-3.5 w-3.5 rounded bg-white/80" />}
          </div>

          <div className={styles.title}>{title}</div>
        </div>

        {/* Divider */}
        <div className={["h-px bg-black/10", styles.divider].join(" ")} />

        {/* Items */}
        <div className={cn(styles.bodyPadX, "flex-1")}>
          {safeItems.map((it, idx) => (
            <div key={it.id ?? `${it.label}-${idx}`}>
              <RowEl item={it} index={idx} />
              {idx < safeItems.length - 1 ? <div className="h-px bg-black/10" /> : null}
            </div>
          ))}
        </div>

        {/* Footer (stable) */}
        <div className="mt-auto">
          <div className={["h-px bg-black/10", styles.divider].join(" ")} />
          <div className={styles.footerPad}>
            <FooterRow
              footer={footer ?? { label: "+ 3 more" }}
              footerText={styles.footerText}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function FooterRow({
  footer,
  footerText,
}: {
  footer: ViewCardFooter
  footerText: string
}) {
  const raw = (footer?.label ?? "+ 3 more").trim()
  const hasPlus = raw.startsWith("+")
  const plus = hasPlus ? "+" : null
  const rest = hasPlus ? raw.slice(1).trim() : raw

  return (
    <div className="flex items-center gap-1 w-full select-none">
      {plus ? <span className={cn(footerText, "font-semibold text-black/60")}>{plus}</span> : null}
      <span className={cn(footerText, "text-black/45 truncate")} title={raw}>
        {rest}
      </span>
    </div>
  )
}