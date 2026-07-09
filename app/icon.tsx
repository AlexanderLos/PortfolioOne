import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c10",
          color: "#e8eaee",
          fontFamily: "monospace",
          fontSize: 20,
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        <span style={{ display: "flex" }}>A</span>
        <span style={{ display: "flex", color: "#4a9e8e" }}>.</span>
      </div>
    ),
    { ...size }
  );
}
