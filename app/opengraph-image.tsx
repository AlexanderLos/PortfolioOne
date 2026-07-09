import { ImageResponse } from "next/og";

export const alt = "Alexander De Los Santos — AI Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0c10",
          color: "#e8eaee",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          borderTop: "6px solid #4a9e8e",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 22,
            color: "#7d838d",
            fontFamily: "monospace",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 12,
              height: 12,
              borderRadius: 12,
              background: "#4a9e8e",
            }}
          />
          <span style={{ display: "flex" }}>
            AI Product Engineer — Full-Stack SaaS
          </span>
        </div>

        <div
          style={{
            fontSize: 104,
            lineHeight: 1.02,
            letterSpacing: -4,
            fontWeight: 700,
            color: "#e8eaee",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ display: "flex" }}>Alexander</span>
          <span style={{ display: "flex" }}>De Los Santos</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 20,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#7d838d",
            borderTop: "1px solid #23252d",
            paddingTop: 28,
          }}
        >
          <span style={{ display: "flex" }}>
            Founder ·{" "}
            <span
              style={{ display: "flex", color: "#64c0ae", marginLeft: 12 }}
            >
              Oakrift
            </span>
          </span>
          <span style={{ display: "flex", color: "#d17162" }}>
            Revenue-generating AI SaaS
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
