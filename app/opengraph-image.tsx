import { ImageResponse } from "next/og"

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
          padding: "80px 100px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Orange left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: "#f97316", display: "flex" }} />

        {/* Icon mark */}
        <div style={{ position: "relative", width: 200, height: 200, borderRadius: 24, background: "#1B2848", flexShrink: 0, marginRight: 80, display: "flex" }}>
          {/* Garage door panel */}
          <div style={{ position: "absolute", left: 25, top: 30, right: 25, bottom: 18, borderRadius: 8, background: "rgba(255,255,255,0.13)", display: "flex" }} />
          {/* Panel lines */}
          <div style={{ position: "absolute", left: 25, right: 25, top: 67, height: 2, background: "rgba(255,255,255,0.18)", display: "flex" }} />
          <div style={{ position: "absolute", left: 25, right: 25, top: 103, height: 2, background: "rgba(255,255,255,0.18)", display: "flex" }} />
          <div style={{ position: "absolute", left: 25, right: 25, top: 139, height: 2, background: "rgba(255,255,255,0.18)", display: "flex" }} />
          {/* Trident */}
          <svg viewBox="0 0 80 80" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
            <path
              d="M 29.5 19 L 32 24 L 32 34 L 38 34 L 38 21 L 40.5 16 L 43 21 L 43 34 L 49 34 L 49 24 L 51.5 19 L 54 24 L 54 36 L 43 36 L 43 68 Q 43 70 40.5 70 Q 38 70 38 68 L 38 36 L 27 36 L 27 24 Z"
              fill="#C87830"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#ffffff", fontSize: 120, fontWeight: 800, lineHeight: 1, letterSpacing: "-3px", display: "flex" }}>
            TRITON
          </div>
          <div style={{ color: "#C8D8F0", fontSize: 30, fontWeight: 600, letterSpacing: "8px", marginTop: 8, display: "flex" }}>
            GARAGE DOORS
          </div>
          <div style={{ width: 80, height: 5, background: "#f97316", borderRadius: 4, marginTop: 40, marginBottom: 36, display: "flex" }} />
          <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 26, fontWeight: 600, display: "flex" }}>
            Orange County, CA · 949-463-0500
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
