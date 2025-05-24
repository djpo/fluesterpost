import { NextRequest, NextResponse } from "next/server";
import { fetchTranslation } from "@/lib/fetchTranslation";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const translation = await fetchTranslation(body.from, body.to, body.text);

  return NextResponse.json({
    translation,
  });
}
