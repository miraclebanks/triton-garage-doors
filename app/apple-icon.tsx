import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  const tridentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><rect x="10" y="12" width="60" height="58" rx="3" fill="white" fill-opacity="0.13"/><line x1="10" y1="26.5" x2="70" y2="26.5" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><line x1="10" y1="41" x2="70" y2="41" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><line x1="10" y1="55.5" x2="70" y2="55.5" stroke="white" stroke-opacity="0.18" stroke-width="1.5"/><path d="M29.5 19 L32 24 L32 34 L38 34 L38 21 L40.5 16 L43 21 L43 34 L49 34 L49 24 L51.5 19 L54 24 L54 36 L43 36 L43 68 Q43 70 40.5 70 Q38 70 38 68 L38 36 L27 36 L27 24 Z" fill="#C87830"/></svg>`
  const tridentSrc = `data:image/svg+xml;base64,${Buffer.from(tridentSvg).toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: "#1B2848",
          borderRadius: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tridentSrc} width={128} height={128} alt="" />
      </div>
    ),
    { ...size }
  )
}
