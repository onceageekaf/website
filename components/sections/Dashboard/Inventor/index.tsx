// src/components/sections/Dashboard/Inventor/index.tsx
import Greeting from "./Greeting"
import StatusPanel from "./StatusPanel"
import AttentionBoxes from "./AttentionBoxes"

export default function InventorDashboard() {
  return (
    <div className="space-y-5">
      <div className="mt-20 mb-30"><Greeting name="Jane" /></div>
      <StatusPanel />
      <AttentionBoxes />
    </div>
  )
}