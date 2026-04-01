// src/components/sections/dashboard/caseview/pipelineData.ts
export type StageKey = "evaluation" | "protection" | "marketing" | "licensing"
export type StepIndex = 0 | 1 | 2 | 3

export const PIPELINE: Record<
  StageKey,
  { label: string; steps: readonly [string, string, string, string] }
> = {
  evaluation: {
    label: "Evaluation",
    steps: ["Due diligence", "Prior art", "Market research", "Financial model"],
  },
  protection: {
    label: "Protection",
    steps: ["Provisional", "Patent drafting", "Inventor review", "Filing data"],
  },
  marketing: {
    label: "Marketing",
    steps: ["Invention summary", "Campaign Data", "Deal Model", "Data room"],
  },
  licensing: {
    label: "Licensing",
    steps: ["Strategy", "Tech diligence", "Negotiation", "Execution"],
  },
} as const