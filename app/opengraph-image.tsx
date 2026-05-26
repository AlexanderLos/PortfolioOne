import { ImageResponse } from "next/og";

export const alt = "Alexander De Los Santos — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#ededed",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 22,
            color: "#8a8a85",
            fontFamily: "monospace",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span style={{ display: "flex", color: "#f97316" }}>●</span>
          <span style={{ display: "flex" }}>Alexander De Los Santos</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 120,
              lineHeight: 0.95,
              letterSpacing: -2,
              color: "#ededed",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={{ display: "flex" }}>Software engineer.</span>
            <span style={{ display: "flex", color: "#8a8a85" }}>Miami, FL.</span>
          </div>

          <div
            style={{
              marginTop: 36,
              fontSize: 26,
              lineHeight: 1.4,
              color: "#bdbdb8",
              fontFamily: "sans-serif",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Healthcare infrastructure at Optum. Building Oakrift on the side.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
