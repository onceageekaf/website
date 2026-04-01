"use client";

import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type WorkflowKey =
  | "disclosure"
  | "evaluation"
  | "protection"
  | "marketing"
  | "licensing";

const ICON_STYLES: Record<WorkflowKey, string> = {
  disclosure: "bg-sky-500/80 text-sky-600",
  evaluation: "bg-cyan-500/80 text-cyan-600",
  protection: "bg-emerald-500/80 text-emerald-600",
  marketing: "bg-blue-500/80 text-blue-600",
  licensing: "bg-amber-500/80 text-amber-600",
};

export type ModuleCardItem = {
  id?: string;
  label: string;
  muted?: boolean;

  // Support both keys (so your page.tsx works unchanged)
  icon?: React.ReactNode;
  itemIcon?: React.ReactNode;

  href?: string;
  onClick?: () => void;

  right?: React.ReactNode;
};

export type ModuleCardFooter = {
  label: string;
};

export type ModuleCardVariant = "default" | "compact";

export type ModuleCardProps = {
  title: string;
  icon?: React.ReactNode;
  items: ModuleCardItem[];
  footer?: ModuleCardFooter;

  variant?: ModuleCardVariant;

  onItemClick?: (item: ModuleCardItem, index: number) => void;

  autoExpand?: boolean;
  expandDelayMs?: number;

  // used for icon styling + connector anchors
  anchorId?: WorkflowKey;

  className?: string;
};

type Port = "top" | "right" | "bottom" | "left";

function AnchorPorts({ anchorId }: { anchorId?: WorkflowKey }) {
  if (!anchorId) return null;

  const mk = (port: Port, cls: string) => (
    <span
      key={port}
      data-ttos-anchor={`${anchorId}:${port}`}
      className={cn("absolute block h-0 w-0", cls)}
      aria-hidden="true"
    />
  );

  return (
    <>
      {mk("top", "left-1/2 top-0 -translate-x-1/2")}
      {mk("right", "right-0 top-1/2 -translate-y-1/2")}
      {mk("bottom", "left-1/2 bottom-0 -translate-x-1/2")}
      {mk("left", "left-0 top-1/2 -translate-y-1/2")}
    </>
  );
}

export default function ModuleCard({
  title,
  icon,
  items,
  footer,
  variant = "default",
  onItemClick,
  autoExpand = false,
  expandDelayMs = 0,
  anchorId,
  className = "",
}: ModuleCardProps) {
  const [expanded, setExpanded] = useState(!autoExpand);

  useEffect(() => {
    if (!autoExpand) return;
    const t = setTimeout(() => setExpanded(true), expandDelayMs);
    return () => clearTimeout(t);
  }, [autoExpand, expandDelayMs]);

  const styles = useMemo(() => {
    const isCompact = variant === "compact";

    return {
      card: [
        "relative inline-flex flex-col",
        "rounded-2xl bg-white border border-black/10 overflow-hidden",
        "elevation-lg backdrop-blur-[10px]",
        "w-[200px]",
        className,
      ].join(" "),
      headerWrap: isCompact ? "px-3 pt-3 pb-2" : "px-5 pt-5 pb-4",
      title: isCompact
        ? "text-[14px] leading-none font-semibold text-black"
        : "text-[18px] leading-none font-semibold text-black",
      divider: isCompact ? "mx-3" : "mx-5",
      bodyPadX: isCompact ? "px-3" : "px-5",
      rowText: isCompact
        ? "text-[11px] leading-snug font-medium"
        : "text-[14px] leading-snug font-medium",
      rowPy: isCompact ? "py-2" : "py-3",
      footerText: isCompact ? "text-[11px]" : "text-[13px]",
      footerPad: isCompact ? "px-3 py-3" : "px-5 py-4",
    };
  }, [variant, className]);

  const RowEl = ({ item, index }: { item: ModuleCardItem; index: number }) => {
    const clickable = Boolean(item.href || item.onClick || onItemClick);
    const rowIcon = item.itemIcon ?? item.icon;

    const baseRow = (
      <div
        className={[
          styles.rowPy,
          "flex items-center justify-between gap-2",
          clickable ? "cursor-pointer" : "",
        ].join(" ")}
        onClick={() => {
          item.onClick?.();
          onItemClick?.(item, index);
        }}
      >
        <div className="flex items-center gap-1 min-w-0">
          {rowIcon ? (
            <span className="shrink-0 opacity-70">
            {rowIcon && React.isValidElement(rowIcon)
              ? React.cloneElement(
                  rowIcon as React.ReactElement<{ className?: string }>,
                  {
                    className: cn("size-4", (rowIcon as React.ReactElement<{ className?: string }>).props.className),
                  }
                )
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
    );

    if (item.href) {
      return (
        <a
          href={item.href}
          className="block outline-none focus-visible:ring-2 focus-visible:ring-black/20 rounded-lg"
          onClick={() => {
            item.onClick?.();
            onItemClick?.(item, index);
          }}
        >
          {baseRow}
        </a>
      );
    }

    return baseRow;
  };

  return (
    <div
      data-anchor-id={anchorId}
      className={[
        styles.card,
        "transition-all duration-300 ease-out",
        expanded ? "opacity-100" : "opacity-100",
      ].join(" ")}
    >
      {/* ✅ Connector anchor points (invisible) */}
      <AnchorPorts anchorId={anchorId} />

      {/* Header */}
      <div className={["flex items-center gap-2.5", styles.headerWrap].join(" ")}>
        <div
          className={cn(
            "flex h-6 w-6 items-center justify-center rounded-md",
            "relative",
            "shadow-[0_1px_1px_rgba(0,0,0,0.06),0_4px_12px_rgba(0,0,0,0.04)]",
            "before:absolute before:inset-0 before:rounded-md before:shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]",
            "opacity-85 transition-all duration-200 ease-out",
            "hover:opacity-100 hover:-translate-y-[1px]",
            "hover:shadow-[0_2px_2px_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)]",
            anchorId && anchorId in ICON_STYLES
              ? ICON_STYLES[anchorId as WorkflowKey]
              : "bg-emerald-500/15 text-emerald-600"
          )}
        >
          {icon ?? <div className="h-3.5 w-3.5 rounded bg-white/80" />}
        </div>

        <div className={styles.title}>{title}</div>
      </div>

      {/* Divider under header */}
      <div className={["h-px bg-black/10", styles.divider].join(" ")} />

      {/* Items */}
      <div className={styles.bodyPadX}>
        <div
          className={[
            "transition-all duration-300 ease-out",
            expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1",
          ].join(" ")}
        >
          {items.map((it, idx) => (
            <div key={it.id ?? `${it.label}-${idx}`}>
              <RowEl item={it} index={idx} />
              {idx < items.length - 1 ? <div className="h-px bg-black/10" /> : null}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {footer ? (
        <>
          <div className={["h-px bg-black/10", styles.divider].join(" ")} />
          <div className={styles.footerPad}>
            <FooterRow footer={footer} footerText={styles.footerText} />
          </div>
        </>
      ) : null}
    </div>
  );
}

function FooterRow({
  footer,
  footerText,
}: {
  footer: ModuleCardFooter;
  footerText: string;
}) {
  const raw = (footer?.label ?? "+ more attributes").trim();
  const hasPlus = raw.startsWith("+");
  const plus = hasPlus ? "+" : null;
  const rest = hasPlus ? raw.slice(1).trim() : raw;

  return (
    <div className="flex items-center gap-1 w-full select-none">
      {plus ? (
        <span className={cn(footerText, "font-semibold text-black/60")}>{plus}</span>
      ) : null}
      <span className={cn(footerText, "text-black/45 truncate")} title={raw}>
        {rest}
      </span>
    </div>
  );
}