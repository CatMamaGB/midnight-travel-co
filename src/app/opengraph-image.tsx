import { ImageResponse } from "next/og";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
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
            top: 52,
            right: 68,
            color: "#EFBEB7",
            fontSize: 44,
            letterSpacing: 8,
          }}
        >
          ✦ ✦ ✦
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "999px",
              border: "2px solid rgba(239,190,183,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#EFBEB7",
              fontSize: 48,
            }}
          >
            ☾
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 22,
                textTransform: "uppercase",
                letterSpacing: 6,
                color: "#EFBEB7",
              }}
            >
              Curated Travel Planning
            </div>
            <div
              style={{
                fontSize: 64,
                lineHeight: 1.05,
                fontWeight: 700,
                maxWidth: 760,
              }}
            >
              {SITE_NAME}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          <div
            style={{
              maxWidth: 860,
              fontSize: 30,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.88)",
            }}
          >
            {SITE_DESCRIPTION}
          </div>
          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 22,
              color: "#EFBEB7",
            }}
          >
            <span>Disney</span>
            <span>Universal</span>
            <span>VIP Concierge</span>
            <span>Special Events</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
