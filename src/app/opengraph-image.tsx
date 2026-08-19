import { ImageResponse } from "next/og";

export const alt = "Atlas VIP Eğitim Kurumu — LGS hazırlık Denizli Gerzele";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f1e8",
          color: "#1a2330",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 22, color: "#c41e2a" }}>Atlas VIP · Gerzele</div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.95,
            maxWidth: 980,
          }}
        >
          Kalabalık sınıfta LGS olmaz.
        </div>
        <div style={{ fontSize: 28, color: "#5e6774" }}>5–8. sınıf · küçük grup · haftalık deneme</div>
      </div>
    ),
    { ...size },
  );
}
