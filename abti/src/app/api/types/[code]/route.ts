import { NextRequest, NextResponse } from "next/server";
import { getTypeByCode } from "@/data/types";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ code: string }> }
) {
  const { code } = await params;
  const typeInfo = getTypeByCode(code);

  if (!typeInfo) {
    return NextResponse.json(
      {
        error: `Unknown ABTI type: ${code.toUpperCase()}`,
        hint: "Valid codes are 4-letter combinations of E/I, G/S, L/V, O/C (e.g., EGLO, ISVC)",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(typeInfo);
}
