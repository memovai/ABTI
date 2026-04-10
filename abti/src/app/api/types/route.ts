import { NextResponse } from "next/server";
import { getAllTypes } from "@/data/types";

export async function GET() {
  const types = getAllTypes().map((t) => ({
    code: t.code,
    name: t.name,
    cn_name: t.cn_name,
    tagline: t.tagline,
    archetype: t.archetype,
  }));

  return NextResponse.json({ total: types.length, types });
}
