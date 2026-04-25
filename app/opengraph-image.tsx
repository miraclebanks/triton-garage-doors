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
          background: "#1a1a2e",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Orange left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 12, background: "#f97316", display: "flex" }} />

        {/* Tag */}
        <div style={{ color: "#f97316", fontSize: 24, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 28, display: "flex" }}>
          Orange County, CA · Est. 2016
        </div>

        {/* Title */}
        <div style={{ color: "#ffffff", fontSize: 96, fontWeight: 900, lineHeight: 1, textTransform: "uppercase", marginBottom: 32, display: "flex", flexDirection: "column" }}>
          <span>Triton</span>
          <span style={{ color: "#f97316" }}>Garage</span>
          <span>Doors</span>
        </div>

        {/* Divider */}
        <div style={{ width: 80, height: 4, background: "#f97316", marginBottom: 32, display: "flex" }} />

        {/* Subtext */}
        <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 32, fontWeight: 700, display: "flex" }}>
          Repair · Installation · Motor Services
        </div>

        {/* Phone */}
        <div style={{ position: "absolute", bottom: 60, right: 80, color: "rgba(255,255,255,0.4)", fontSize: 28, fontWeight: 700, display: "flex" }}>
          949-463-0500
        </div>
      </div>
    ),
    { ...size }
  )
}
