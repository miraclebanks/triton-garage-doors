import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Triton Garage Doors | Orange County CA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "80px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Orange left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: "#f97316", display: "flex" }} />

        {/* Icon mark */}
        <div style={{
          width: 160,
          height: 160,
          borderRadius: 20,
          background: "#1B2848",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginRight: 72,
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Garage door panel */}
          <div style={{ position: "absolute", left: 20, top: 24, right: 20, bottom: 14, borderRadius: 6, background: "rgba(255,255,255,0.10)", display: "flex" }} />
          {/* Panel lines */}
          <div style={{ position: "absolute", left: 20, right: 20, top: 53, height: 2, background: "rgba(255,255,255,0.15)", display: "flex" }} />
          <div style={{ position: "absolute", left: 20, right: 20, top: 82, height: 2, background: "rgba(255,255,255,0.15)", display: "flex" }} />
          <div style={{ position: "absolute", left: 20, right: 20, top: 111, height: 2, background: "rgba(255,255,255,0.15)", display: "flex" }} />
          {/* Trident — three prongs + crossbar + stem */}
          {/* Left prong */}
          <div style={{ position: "absolute", left: 46, top: 36, width: 10, height: 30, background: "#C87830", borderRadius: 3, display: "flex" }} />
          <div style={{ position: "absolute", left: 40, top: 28, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "14px solid #C87830", display: "flex" }} />
          {/* Center prong */}
          <div style={{ position: "absolute", left: 75, top: 28, width: 10, height: 70, background: "#C87830", borderRadius: 3, display: "flex" }} />
          <div style={{ position: "absolute", left: 69, top: 18, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "16px solid #C87830", display: "flex" }} />
          {/* Right prong */}
          <div style={{ position: "absolute", left: 104, top: 36, width: 10, height: 30, background: "#C87830", borderRadius: 3, display: "flex" }} />
          <div style={{ position: "absolute", left: 98, top: 28, width: 0, height: 0, borderLeft: "8px solid transparent", borderRight: "8px solid transparent", borderBottom: "14px solid #C87830", display: "flex" }} />
          {/* Crossbar */}
          <div style={{ position: "absolute", left: 40, top: 64, right: 10, height: 6, background: "#C87830", borderRadius: 3, display: "flex" }} />
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ color: "#ffffff", fontSize: 120, fontWeight: 800, lineHeight: 1, letterSpacing: "-2px", display: "flex" }}>
            TRITON
          </div>
          <div style={{ color: "#C8D8F0", fontSize: 32, fontWeight: 600, letterSpacing: "10px", display: "flex", marginTop: 8 }}>
            GARAGE DOORS
          </div>
          <div style={{ color: "rgba(255,255,255,0.35)", fontSize: 24, fontWeight: 600, display: "flex", marginTop: 28 }}>
            Orange County, CA · 949-463-0500
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
