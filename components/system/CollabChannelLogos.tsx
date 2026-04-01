import Image from "next/image"
import { cn } from "@/lib/utils"

/**
 * Microsoft Teams mark: official 2025 icon from Wikimedia Commons (public domain textlogo;
 * trademark Microsoft). Source file copied to /public/logos — see
 * https://commons.wikimedia.org/wiki/File:Microsoft_Office_Teams_%282025%E2%80%93present%29.svg
 */
export function TeamsLogo({
  className,
  alt = "",
}: {
  className?: string
  alt?: string
}) {
  return (
    <Image
      src="/logos/microsoft-teams-2025.svg"
      alt={alt}
      width={32}
      height={34}
      className={cn("h-8 w-8 shrink-0 object-contain", className)}
    />
  )
}

/**
 * Slack octothorpe only (wordmark cropped out). Derived from Wikimedia
 * https://commons.wikimedia.org/wiki/File:Slack_Technologies_Logo.svg — see /public/logos/slack-mark.svg
 */
export function SlackLogo({
  className,
  alt = "",
}: {
  className?: string
  alt?: string
}) {
  return (
    <Image
      src="/logos/slack-mark.svg"
      alt={alt}
      width={32}
      height={32}
      className={cn("h-8 w-8 shrink-0 object-contain", className)}
    />
  )
}
