import { NextRequest, NextResponse } from "next/server";
import { validateAnswers, scoreTest } from "@/lib/scoring";
import { ABTI_TYPES } from "@/data/types";
import { generateAsciiCard, generateCompactCard } from "@/lib/ascii-card";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { answers } = body;

    const validation = validateAnswers(answers);
    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const result = scoreTest(validation.answers);

    const typeInfo = ABTI_TYPES[result.type];
    const host = request.headers.get("host") || "abti-seven.vercel.app";
    const protocol = host.includes("localhost") ? "http" : "https";
    const base = `${protocol}://${host}`;

    const qs = `ei=${result.scores.E_I}&gs=${result.scores.G_S}&lv=${result.scores.L_V}&oc=${result.scores.O_C}&conf=${result.confidence}`;
    const resultUrl = `${base}/result/${result.type}?${qs}`;
    const cardImageUrl = `${base}/api/card/${result.type}?${qs}`;

    const asciiCard = typeInfo
      ? generateAsciiCard(typeInfo, result.scores, result.radar, result.confidence, resultUrl)
      : "";

    const compactCard = typeInfo
      ? generateCompactCard(typeInfo, result.scores, result.confidence)
      : "";

    return NextResponse.json({
      ...result,
      ascii_card: asciiCard,
      compact_card: compactCard,
      card_url: cardImageUrl,
      result_url: resultUrl,
    });
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }
}
