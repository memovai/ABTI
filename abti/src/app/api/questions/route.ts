import { NextResponse } from "next/server";
import { getQuestions } from "@/data/questions";

export async function GET() {
  const questions = getQuestions();

  return NextResponse.json({
    total: questions.length,
    dimensions: {
      E_I: { name: "Execute vs. Improvise", name_cn: "执行 vs. 即兴", count: 10 },
      G_S: { name: "Grind vs. Slack", name_cn: "卷 vs. 躺", count: 10 },
      L_V: { name: "Logic vs. Vibe", name_cn: "逻辑 vs. 氛围", count: 10 },
      O_C: { name: "Order vs. Chaos", name_cn: "秩序 vs. 混沌", count: 10 },
    },
    questions,
  });
}
