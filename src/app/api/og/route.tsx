import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

// Brand fonts bundled as static assets so preview cards match the site.
// Satori needs static instances (no variable fonts): Fraunces 72pt SemiBold
// for display, DM Sans Regular for body. Passing `fonts` replaces Satori's
// default entirely, so both roles must be supplied.
const frauncesSemiBold = fetch(
  new URL("./Fraunces72pt-SemiBold.otf", import.meta.url)
).then((res) => res.arrayBuffer());
const dmSansRegular = fetch(
  new URL("./DMSans-Regular.woff", import.meta.url)
).then((res) => res.arrayBuffer());

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Sawyer Varner";
  const subtitle =
    searchParams.get("subtitle") ||
    "Student developer building at the intersection of technology and business, from AI automation to privacy-first genome analysis.";

  const [frauncesData, dmSansData] = await Promise.all([
    frauncesSemiBold,
    dmSansRegular,
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "#f2ede4",
          fontFamily: "DM Sans",
        }}
      >
        {/* Top accent rule */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#0f766e",
          }}
        />

        {/* Wordmark lockup */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "#0e0e10",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: "#0f766e",
                fontSize: "26px",
                fontWeight: 700,
                fontFamily: "Fraunces",
              }}
            >
              SV
            </span>
          </div>
          <span
            style={{
              color: "#0e0e10",
              fontSize: "28px",
              fontWeight: 600,
              fontFamily: "Fraunces",
            }}
          >
            Sawyer Varner
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            color: "#0e0e10",
            fontSize: "60px",
            fontWeight: 600,
            fontFamily: "Fraunces",
            lineHeight: 1.1,
            marginBottom: "22px",
            maxWidth: "980px",
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            color: "#4a4a4e",
            fontSize: "25px",
            lineHeight: 1.5,
            maxWidth: "820px",
          }}
        >
          {subtitle}
        </div>

        {/* Bottom mono spine */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginTop: "auto",
            paddingTop: "40px",
            borderTop: "1px solid rgba(201, 192, 170, 0.9)",
            color: "#646b76",
            fontSize: "18px",
            letterSpacing: "0.06em",
          }}
        >
          <div
            style={{
              width: "10px",
              height: "10px",
              borderRadius: "2px",
              background: "#0f766e",
            }}
          />
          <span>traitmap.vercel.app</span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Fraunces", data: frauncesData, weight: 600, style: "normal" },
        { name: "DM Sans", data: dmSansData, weight: 400, style: "normal" },
      ],
      headers: {
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
      },
    }
  );
}
