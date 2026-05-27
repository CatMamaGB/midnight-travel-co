import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const logoMarkUrl = new URL("/logo-mark.svg", SITE_URL).toString();

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at top left, rgba(239,190,183,0.22), transparent 32%), linear-gradient(135deg, #0B132B 0%, #151d3a 55%, #0B132B 100%)",
          color: "white",
          padding: "72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 56,
            right: 72,
            color: "#EFBEB7",
            fontSize: 36,
            letterSpacing: 6,
            opacity: 0.8,
          }}
        >
          ✦ ✦ ✦
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          <div
            style={{
              width: 152,
              height: 152,
              borderRadius: 24,
              backgroundColor: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 14,
            }}
          >
            <img
              src={logoMarkUrl}
              width={124}
              height={124}
              alt={`${SITE_NAME} logo`}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 20,
                textTransform: "uppercase",
                letterSpacing: 5,
                color: "#EFBEB7",
              }}
            >
              Curated Travel Planning
            </div>
            <div
              style={{
                fontSize: 82,
                lineHeight: 1.05,
                fontWeight: 700,
                maxWidth: 830,
              }}
            >
              {SITE_NAME}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 20,
            fontSize: 24,
            color: "#EFBEB7",
          }}
        >
          <div style={{ display: "flex", gap: 18 }}>
            <span>Disney</span>
            <span>Universal</span>
            <span>VIP Concierge</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
