"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import { AlertTriangle, PenLine, Clock3, FileText } from "lucide-react";

type Pill = {
  label: string;
  icon?: LucideIcon; // ✅ optional icon per pill
};

type Box = {
  key: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  count?: number;
  severity?: "neutral" | "amber" | "red";
  pills?: Pill[];
  onClick?: () => void;
  active?: boolean;
};

type Props = {
  items?: Box[];
  onSelect?: (key: string) => void;
  selectedKey?: string;
};

function countBadgeClasses(sev?: Box["severity"]) {
  if (sev === "red") {
    return "bg-red-500/70 text-white border-red-500";
  }
  if (sev === "amber") {
    return "bg-amber-400/70 text-black border-amber-400";
  }
  return "bg-black/5 text-black/60 border-black/10";
}

export default function AttentionBoxes({ items, onSelect, selectedKey }: Props) {
  const defaultItems: Box[] = [
    {
      key: "action-items",
      title: "Action items",
      subtitle: "Needs follow-up",
      icon: AlertTriangle,
      count: 6,
      severity: "amber",
    },
    {
      key: "signatures",
      title: "Need signatures",
      subtitle: "Contracts pending",
      icon: PenLine,
      count: 2,
      severity: "red",
      pills: [
        { label: "NDA", icon: FileText }, // ✅ PDF icon
        { label: "Term sheet", icon: FileText }, // ✅ PDF icon
      ],
    },
    {
      key: "deadlines",
      title: "Deadlines coming up",
      subtitle: "Next 14 days",
      icon: Clock3,
      count: 2,
      severity: "amber",
      pills: [{ label: "P" }, { label: "T" }],
    },
  ];

  const data = items?.length ? items : defaultItems;

  return (
    <div className="mx-auto mt-10 w-full max-w-[980px] px-2">
      {/* ✅ 3-up on lg, centered */}
      <div className="grid grid-cols-1 gap-3 place-items-center sm:grid-cols-2 lg:grid-cols-3">
        {data.map((b) => {
          const Icon = b.icon;
          const isActive = selectedKey ? selectedKey === b.key : !!b.active;

          return (
            <button
              key={b.key}
              type="button"
              onClick={() => {
                b.onClick?.();
                onSelect?.(b.key);
              }}
              className={[
                "group w-full max-w-[320px] text-left reminder-none",
                "rounded-2xl border border-black/10 bg-white",
                "h-full px-4 py-3", // ✅ fixed height so content fits consistently
                "shadow-[0_10px_22px_rgba(0,0,0,0.05)] hover:bg-black/[0.02]",
                "transition",
                isActive ? "ring-2 ring-black/10" : "",
              ].join(" ")}
            >
              <div className="flex h-full flex-col justify-between min-w-0">
                {/* Top row */}
                <div className="flex items-start justify-between gap-3 min-w-0">
                  <div className="flex items-start gap-2 min-w-0 flex-1">
                    <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white shrink-0">
                      <Icon className="h-4 w-4 text-black/60" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-sm font-medium text-black/80 truncate">
                        {b.title}
                      </div>
                      <div className="text-xs text-black/45 truncate">
                        {b.subtitle}
                      </div>
                    </div>
                  </div>

                  {typeof b.count === "number" ? (
                    <div
                      className={[
                        "flex h-7 min-w-7 items-center justify-center rounded-full border px-2 text-[11px] font-medium",
                        countBadgeClasses(b.severity), // ✅ fill color based on severity
                      ].join(" ")}
                    >
                      {b.count}
                    </div>
                  ) : null}
                </div>

                {/* Pills */}
                {b.pills?.length ? (
                  <div className="mt-2 flex flex-nowrap gap-1.5 overflow-hidden">
                    {b.pills.map((p) => {
                      const PillIcon = p.icon;
                      return (
                        <span
                          key={p.label}
                          className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-2 py-0.5 text-[10px] text-black/55 whitespace-nowrap truncate max-w-[120px]"
                          title={p.label}
                        >
                          {PillIcon ? (
                            <PillIcon className="h-3 w-3 text-black/45 shrink-0" />
                          ) : null}
                          <span className="truncate">{p.label}</span>
                        </span>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}