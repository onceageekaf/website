/**
 * Generates public/dashboard-hero.png from the live homepage dashboard section.
 * Run: PORT=3999 npm run start   (in another terminal)
 * Then: BASE_URL=http://127.0.0.1:3999 node scripts/capture-dashboard.mjs
 */
import { chromium } from "playwright"
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")
const out = join(root, "public", "dashboard-hero.png")
const base = process.env.BASE_URL || "http://127.0.0.1:3999"

async function main() {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage({
    viewport: { width: 1280, height: 1800 },
    deviceScaleFactor: 2,
  })
  await page.goto(`${base.replace(/\/$/, "")}/`, {
    waitUntil: "domcontentloaded",
    timeout: 120000,
  })
  await page.waitForSelector("#dashboard-preview", { state: "visible", timeout: 60000 })
  await new Promise((r) => setTimeout(r, 1500))
  const el = await page.$("#dashboard-preview")
  if (!el) {
    await browser.close()
    throw new Error("Missing #dashboard-preview on homepage")
  }
  await el.screenshot({ path: out, type: "png" })
  await browser.close()
  console.log("Wrote", out)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
