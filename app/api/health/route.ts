import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET() { return NextResponse.json({ ok: true, service: "osa-global-intelligence", version: "2.0.0", timestamp: new Date().toISOString(), capabilities: { interactiveCourse: true, localProgress: true, externalMedia: false, persistentUserAccounts: false } }, { headers: { "Cache-Control": "no-store" } }); }
