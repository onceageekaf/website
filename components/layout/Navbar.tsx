"use client";

import * as React from "react";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Logo from "@/components/elements/Logo";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "System", href: "/#product-features" },
  { label: "Atomfactory", href: "/#manufacturing" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
      <PageShell width="cards" className="relative flex h-14 items-center">
        {/* LEFT — brand */}
        <Link href="/" className="flex items-center gap-2">
          <Logo width={24} height={24} />
          <span className="text-sm font-semibold text-black">ttOS</span>
        </Link>

        {/* CENTER — nav (desktop only, unchanged) */}
        <nav
          className={cn(
            "absolute left-1/2 -translate-x-1/2",
            "hidden md:flex items-center gap-6"
          )}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-black/60 hover:text-black transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — CTA + hamburger */}
        <div className="ml-auto flex items-center gap-2">
          {/* CTA stays visible on all sizes */}
          <Link
            href="mailto:ash@ttos.ai"
            className="inline-flex h-9 items-center rounded-xl bg-[#2f3137] px-4 text-sm font-medium text-white shadow-[0_1px_0_rgba(0,0,0,.08),0_8px_24px_rgba(47,49,55,.28)] transition hover:bg-[#212329]"
          >
            Contact us
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-black/10 text-black/70 hover:bg-black/[0.04]"
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {open ? (
          <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-black/10 bg-white shadow-lg md:hidden">
            <nav className="flex flex-col py-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-black/70 hover:bg-black/[0.04] hover:text-black"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
      </PageShell>
    </header>
  );
}