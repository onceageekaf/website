

export default function DotBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 opacity-50"
      style={{
        backgroundImage:
          "radial-gradient(rgba(25, 25, 26, 0.18) 1px, transparent 1px)",
        backgroundSize: "10px 10px",
      }}
    />
  )
}