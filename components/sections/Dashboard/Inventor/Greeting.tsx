"use client";

import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  FilePlus,
  Search,
  ClipboardCheck,
  FileText,
  Send,
} from "lucide-react";

type Chip = {
  label: string;
  icon?: LucideIcon; // ✅ pass the component, not <Icon />
  onClick?: () => void;
};

type Props = {
  name?: string;
  placeholder?: string;
  chips?: Chip[];
};

export default function DashboardGreeting({
  name = "Jane",
  placeholder = "Ask ttOS…",
  chips,
}: Props) {
  const defaultChips: Chip[] = [
    { label: "Create disclosure", icon: FilePlus },
    { label: "Run prior art search", icon: Search },
    { label: "Status on <insert>", icon: ClipboardCheck },
    { label: "Report on activities", icon: FileText },
    // { label: "Schedule a meeting", icon: Calendar },
  ];

  const chipItems = chips?.length ? chips : defaultChips;

  return (
    <div className="mx-auto w-full max-w-[760px] px-2 pt-2">
      {/* Title */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center gap-2 text-[22px] font-semibold tracking-tight text-black">
          {/* <Sparkles className="h-4 w-4 text-black/70" /> */}
          Hi, {name}.
        </div>
        <div className="mt-1 text-sm text-black/50">How can I help you?</div>
      </div>

      {/* Input */}
      <div className="mt-5 flex w-full items-center gap-2 rounded-2xl border border-black/10 bg-white px-3 py-2 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
        <input
          className="h-9 w-full bg-transparent text-sm text-black/80 outline-none placeholder:text-black/30"
          placeholder={placeholder}
        />
        <button
          type="button"
          className="inline-flex h-9 items-center gap-2 rounded-xl bg-black px-3 text-xs font-medium text-white shadow-sm hover:bg-black/90"
        >
          <Send className="h-3.5 w-3.5" />
          Send
        </button>
      </div>

      {/* Chips */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        {chipItems.map((chip) => {
          const Icon = chip.icon;
          return (
            <button
              key={chip.label}
              type="button"
              onClick={chip.onClick}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-[11px] text-black/70 shadow-[0_6px_14px_rgba(0,0,0,0.04)] hover:bg-black/[0.02]"
            >
              {Icon ? <Icon className="h-3.5 w-3.5 text-black/55" /> : null}
              <span className="truncate">{chip.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}