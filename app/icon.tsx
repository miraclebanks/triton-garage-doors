import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  const tridentSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="none"><path d="M29.5 19 L32 24 L32 34 L38 34 L38 21 L40.5 16 L43 21 L43 34 L49 34 L49 24 L51.5 19 L54 24 L54 36 L43 36 L43 68 Q43 70 40.5 70 Q38 70 38 68 L38 36 L27 36 L27 24 Z" fill="#C87830"/></svg>`
  const tridentSrc = `data:image/svg+xml;base64,${Buffer.from(tridentSvg).toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#1B2848",
          borderRadius: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={tridentSrc} width={22} height={22} alt="" />
      </div>
    ),
    { ...size }
  )
}
