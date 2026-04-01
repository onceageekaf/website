import { DM_Serif_Display } from "next/font/google"

export const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
  variable: "--font-dm-serif-display",
  display: "swap",
})
