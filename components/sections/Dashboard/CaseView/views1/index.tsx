"use client"

import * as React from "react"
import {
  FileText,
  ClipboardList,
  ShieldPlus,
  Globe,
  ReceiptText,
  User,
  Tag,
  BadgeCheck,
  ScanSearch,
  Search,
  Send,
  FolderLock,
  Handshake,
  CalendarClock,
} from "lucide-react"

import ViewCard, { type ViewCardItem } from "../cards/ViewCard"

// You can swap this for a dedicated layout later (CaseGrid/CaseLayout/etc).
// For now: simple 5-card grid so you can validate the card system.
export default function CaseCardsSection() {
  const cards = React.useMemo(
    () => [
      {
        key: "disclosure" as const,
        title: "Disclosure",
        icon: <FileText className="h-4 w-4 text-white" />,
        iconClassName: "bg-sky-500/80 text-sky-600",
        items: [
          { label: "Details of the Invention", icon: <FileText /> },
          { label: "Inventor(s) Details", icon: <User /> },
          { label: "Keywords", icon: <Tag /> },
        ] satisfies ViewCardItem[],
        footer: { label: "+ more attributes" },
      },
      {
        key: "evaluation" as const,
        title: "Evaluation",
        icon: <ClipboardList className="h-4 w-4 text-white" />,
        iconClassName: "bg-cyan-500/80 text-cyan-600",
        items: [
          { label: "Due Diligence", icon: <BadgeCheck /> },
          { label: "Prior art search", icon: <Search /> },
          { label: "Market Research", icon: <ScanSearch /> },
        ] satisfies ViewCardItem[],
        footer: { label: "+ more attributes" },
      },
      {
        key: "protection" as const,
        title: "Protection",
        icon: <ShieldPlus className="h-4 w-4 text-white" />,
        iconClassName: "bg-emerald-500/80 text-emerald-600",
        items: [
          { label: "Send Evaluation to patent", icon: <Send /> },
          { label: "Draft provisional patent", icon: <FileText /> },
          { label: "Update CRM", icon: <User /> },
        ] satisfies ViewCardItem[],
        footer: { label: "+ more attributes" },
      },
      {
        key: "marketing" as const,
        title: "Marketing",
        icon: <Globe className="h-4 w-4 text-white" />,
        iconClassName: "bg-blue-500/80 text-blue-600",
        items: [
          { label: "Webpage for invention", icon: <Globe /> },
          { label: "Deal room", icon: <FolderLock /> },
          { label: "NDA / MTA access", icon: <FileText /> },
        ] satisfies ViewCardItem[],
        footer: { label: "+ more attributes" },
      },
      {
        key: "licensing" as const,
        title: "Licensing",
        icon: <ReceiptText className="h-4 w-4 text-white" />,
        iconClassName: "bg-amber-500/80 text-amber-600",
        items: [
          { label: "Draft term sheet", icon: <ReceiptText /> },
          { label: "Full license", icon: <Handshake /> },
          { label: "Post-agreement follow-up", icon: <CalendarClock /> },
        ] satisfies ViewCardItem[],
        footer: { label: "+ more attributes" },
      },
      {
        key: "extra-1" as const,
        title: "Extra 1",
        icon: <FileText className="h-4 w-4 text-white" />,
        iconClassName: "bg-black/60 text-black",
        items: [{ label: "Placeholder", icon: <FileText /> }] satisfies ViewCardItem[],
        footer: { label: "+ more" },
      },
      {
        key: "extra-2" as const,
        title: "Extra 2",
        icon: <FileText className="h-4 w-4 text-white" />,
        iconClassName: "bg-black/60 text-black",
        items: [{ label: "Placeholder", icon: <FileText /> }] satisfies ViewCardItem[],
        footer: { label: "+ more" },
      },
      {
        key: "extra-3" as const,
        title: "Extra 3",
        icon: <FileText className="h-4 w-4 text-white" />,
        iconClassName: "bg-black/60 text-black",
        items: [{ label: "Placeholder", icon: <FileText /> }] satisfies ViewCardItem[],
        footer: { label: "+ more" },
      },
    ],
    []
  )

  return (
    <section className="w-full">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* Row 1 (4 cards) */}
        {cards.slice(0, 8).map((c, idx) => (
          <div key={`${c.key}-${idx}`} className="flex">
            <ViewCard
              title={c.title}
              icon={c.icon}
              iconClassName={c.iconClassName}
              items={c.items}
              footer={c.footer}
              widthClassName="w-full"
              variant="compact"
              className="h-full"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
