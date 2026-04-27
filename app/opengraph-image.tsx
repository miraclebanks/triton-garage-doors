import { ImageResponse } from "next/og"

export const alt = "Triton Garage Doors | Orange County CA"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect width="80" height="80" rx="10" fill="#1B2848"/><rect width="80" height="80" rx="10" fill="white" fill-opacity="0.07"/><rect x="10" y="12" width="60" height="58" rx="3" fill="white" fill-opacity="0.13"/><line x1="10" y1="26.5" x2="70" y2="26.5" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><line x1="10" y1="41" x2="70" y2="41" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><line x1="10" y1="55.5" x2="70" y2="55.5" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><path d="M29.5 19 L32 24 L32 34 L38 34 L38 21 L40.5 16 L43 21 L43 34 L49 34 L49 24 L51.5 19 L54 24 L54 36 L43 36 L43 68 Q43 70 40.5 70 Q38 70 38 68 L38 36 L27 36 L27 24 Z" fill="#C87830"/></svg>`
  const iconSrc = `data:image/svg+xml;base64,${Buffer.from(iconSvg).toString("base64")}`

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

        {/* Icon + text column */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} alt="" width={140} height={140} style={{ flexShrink: 0, marginTop: 42 }} />
          <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {/* Est tag — left aligned with TRITON */}
            <div style={{ color: "#f97316", fontSize: 22, fontWeight: 700, letterSpacing: "6px", marginBottom: 16, display: "flex" }}>
              ORANGE COUNTY, CA · EST. 2018
            </div>
            <div style={{ color: "#ffffff", fontSize: 148, fontWeight: 900, lineHeight: 0.9, letterSpacing: "-4px", display: "flex" }}>
              TRITON
            </div>
            <div style={{ color: "#f97316", fontSize: 64, fontWeight: 900, lineHeight: 1, letterSpacing: "-1px", display: "flex", marginTop: 8 }}>
              GARAGE DOORS
            </div>
            {/* Divider ends with text column */}
            <div style={{ width: 560, height: 5, background: "#f97316", marginTop: 40, marginBottom: 40, display: "flex", borderRadius: 4 }} />
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 30, fontWeight: 600, display: "flex" }}>
              Repair · Installation · Motor Services
            </div>
            <div style={{ display: "flex", alignItems: "center", marginTop: 32, gap: 16 }}>
              <div style={{
                background: "#f97316",
                color: "#ffffff",
                fontSize: 26,
                fontWeight: 800,
                letterSpacing: "1px",
                padding: "12px 32px",
                borderRadius: 8,
                display: "flex",
              }}>
                Call Now
              </div>
              <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 26, fontWeight: 600, display: "flex" }}>
                (949) 463-0500
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
