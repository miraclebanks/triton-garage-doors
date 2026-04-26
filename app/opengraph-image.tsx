import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const alt = "Triton Garage Doors | Orange County CA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  const iconData = readFileSync(join(process.cwd(), "public/logo-icon-white.png"))
  const iconSrc = `data:image/png;base64,${iconData.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 100px",
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          position: "relative",
        }}
      >
        {/* Orange left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: "#f97316", display: "flex" }} />

        {/* Orange top accent line */}
        <div style={{ position: "absolute", top: 0, left: 16, right: 0, height: 6, background: "#f97316", opacity: 0.3, display: "flex" }} />

        {/* Est tag */}
        <div style={{ color: "#f97316", fontSize: 22, fontWeight: 700, letterSpacing: "6px", marginBottom: 32, display: "flex" }}>
          ORANGE COUNTY, CA · EST. 2016
        </div>

        {/* Icon + text column */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} alt="" width={140} height={140} style={{ flexShrink: 0 }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ color: "#ffffff", fontSize: 148, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-4px", display: "flex" }}>
              TRITON
            </div>
            <div style={{ color: "#f97316", fontSize: 64, fontWeight: 900, lineHeight: 1, letterSpacing: "-1px", display: "flex", marginTop: 8 }}>
              GARAGE DOORS
            </div>
          </div>
        </div>

        {/* Divider + tagline left-aligned to container */}
        <div style={{ width: "100%", height: 5, background: "#f97316", marginTop: 40, marginBottom: 40, display: "flex", borderRadius: 4 }} />
        <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 30, fontWeight: 600, display: "flex" }}>
          Repair · Installation · Motor Services · 949-463-0500
        </div>
      </div>
    ),
    { ...size }
  )
}
