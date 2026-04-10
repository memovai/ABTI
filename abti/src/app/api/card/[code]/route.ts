import { NextRequest, NextResponse } from "next/server";
import { getTypeByCode, ABTI_TYPES } from "@/data/types";
import { generateAsciiCard } from "@/lib/ascii-card";
import { type DimensionScores, type RadarScores, calculateRadar } from "@/lib/scoring";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const typeInfo = getTypeByCode(code);

  if (!typeInfo) {
    return NextResponse.json({ error: `Unknown type: ${code}` }, { status: 404 });
  }

  const url = request.nextUrl;
  const scores: DimensionScores = {
    E_I: Number(url.searchParams.get("ei")) || typeInfo.dimensions.E_I,
    G_S: Number(url.searchParams.get("gs")) || typeInfo.dimensions.G_S,
    L_V: Number(url.searchParams.get("lv")) || typeInfo.dimensions.L_V,
    O_C: Number(url.searchParams.get("oc")) || typeInfo.dimensions.O_C,
  };
  const confidence = Number(url.searchParams.get("conf")) || 75;
  const radar = calculateRadar(scores);

  const card = generateAsciiCard(typeInfo, scores, radar, confidence);
  const lines = card.split("\n");

  const charWidth = 9.6;
  const lineHeight = 20;
  const paddingX = 40;
  const paddingY = 30;
  const maxLineLen = Math.max(...lines.map((l) => l.length));
  const svgWidth = maxLineLen * charWidth + paddingX * 2;
  const svgHeight = lines.length * lineHeight + paddingY * 2;

  const textLines = lines
    .map(
      (line, i) =>
        `<text x="${paddingX}" y="${paddingY + 16 + i * lineHeight}" fill="#1a1a1a">${escapeXml(line)}</text>`
    )
    .join("\n    ");

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgWidth}" height="${svgHeight}" viewBox="0 0 ${svgWidth} ${svgHeight}">
  <rect width="100%" height="100%" fill="#f4f3ef" rx="12"/>
  <rect x="16" y="16" width="${svgWidth - 32}" height="${svgHeight - 32}" fill="#ffffff" rx="8" stroke="#e0dfdb" stroke-width="1"/>
  <style>
    text {
      font-family: "SF Mono", "Cascadia Code", "Fira Code", "Menlo", monospace;
      font-size: 14px;
      white-space: pre;
    }
  </style>
  <g>
    ${textLines}
  </g>
</svg>`;

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
