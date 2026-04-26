import { ImageResponse } from "next/og"
import { readFileSync } from "fs"
import { join } from "path"

export const alt = "Triton Garage Doors | Orange County CA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  const logoSvg = readFileSync(join(process.cwd(), "public/logo-white.svg"))
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString("base64")}`

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
          alignItems: "flex-start",
          padding: "80px 100px",
          position: "relative",
        }}
      >
        {/* Orange left bar */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 16, background: "#f97316", display: "flex" }} />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="Triton Garage Doors" style={{ height: 120, width: "auto" }} />

        {/* Divider */}
        <div style={{ width: 80, height: 5, background: "#f97316", marginTop: 48, marginBottom: 40, display: "flex", borderRadius: 4 }} />

        {/* Tagline */}
        <div style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: 30,
          fontWeight: 600,
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          display: "flex",
        }}>
          Repair · Installation · Motor Services · 949-463-0500
        </div>
      </div>
    ),
    { ...size }
  )
}
