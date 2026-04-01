export type TimelineStage = {
  dayRange: string
  title: string
  /** Each entry is a paragraph; renders with spacing — use multiple lines without HTML */
  paragraphs: string[]
  imageSrc?: string
  imageAlt?: string
}

export const TIMELINE_STAGES: TimelineStage[] = [
  {
    dayRange: "1. Signature routing",
    title: "Set rules and delegate",
    paragraphs: [
      "The people who need to authorize are invariably the busiest.",
      "Automatic routing to delegate after timeout.",
    ],
    imageSrc: "/timeline/stage-1-2.png",
    imageAlt: "Signature routing illustration",
  },
  {
    dayRange: "2. Automatic CRM",
    title: "Update CRM is not additional task",
    paragraphs: [
      "The CRM update is not additional work done after the work is done, but updated automatically when the work is completed.",
    ],
    imageSrc: "/timeline/stage-3.png",
    imageAlt: "Automatic CRM illustration",
  },
  {
    dayRange: "3. Manual updates",
    title: "Status updates from dashboard",
    paragraphs: [
      "What's the status of [x]?",
      "Dashboard are single source of truth. Engage with the inventors directly. Manage all workflows from a single place.",
    ],
    imageSrc: "/timeline/stage-4-10.png",
    imageAlt: "Manual updates illustration",
  },
  {
    dayRange: "4. Legal contracts",
    title: "Legal contracts",
    paragraphs: [
      "Whose template to use is dependent on whose legal is faster.",
      "Set rules. Acceptable range. Empower licensing managers to negotiate. Escalate the clauses that are outside acceptable range.",
    ],
    imageSrc: "/timeline/stage-11.png",
    imageAlt: "Legal contracts illustration",
  },
  {
    dayRange: "5. Marketing",
    title: "No more static 1 Pagers",
    paragraphs: [
      "Static non-condential summaries are not marketable.",
      "SEO optimized interactive landing pages for each invention.",
      "Data room for confidential information",
      "NDA and MTA signatures for access control",
      "Digitally sign NDA after checking credentials",
    ],
    imageSrc: "/timeline/stage-11.png",
    imageAlt: "Marketing illustration",
  },
]
