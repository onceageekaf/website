import { cn } from "@/lib/utils"

type FlagSize = "sm" | "md"

const SIZES = {
  sm: "h-4 w-4 text-[14px]", // 16px container
  md: "h-5 w-5 text-[16px]", // 20px container
}

export default function CountryFlag({
  country,
  size = "md",
  className,
}: {
  country: "us" | "gb" | "ch" | "ca" | "jp" | "eu"
  size?: FlagSize
  className?: string
}) {
  const FLAG_EMOJI: Record<"us" | "gb" | "ch" | "ca" | "jp" | "eu", string> = {
    us: "🇺🇸",
    gb: "🇬🇧",
    ch: "🇨🇭",
    ca: "🇨🇦",
    jp: "🇯🇵",
    eu: "🇪🇺",
  }

  return (
    <span
      role="img"
      aria-label={country === "eu" ? "European Union flag" : `${country} flag`}
      className={cn(
        "inline-flex items-center justify-center rounded-full leading-none",
        SIZES[size],
        className
      )}
    >
      {FLAG_EMOJI[country]}
    </span>
  )
}