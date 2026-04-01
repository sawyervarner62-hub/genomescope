import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

function getSupabase(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

// GET — return the total unique genome count
export async function GET(): Promise<NextResponse> {
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ count: 0 });

  try {
    const { count, error } = await supabase
      .from("genome_uploads")
      .select("*", { count: "exact", head: true });

    if (error) throw error;
    return NextResponse.json({ count: count ?? 0 });
  } catch {
    return NextResponse.json({ count: 0 });
  }
}

// POST — record a new unique genome hash, return whether it was new
export async function POST(request: NextRequest): Promise<NextResponse> {
  const supabase = getSupabase();
  if (!supabase) return NextResponse.json({ isNew: false, count: 0 });

  try {
    const { hash } = await request.json();

    if (!hash || typeof hash !== "string" || hash.length !== 64) {
      return NextResponse.json({ error: "Invalid hash" }, { status: 400 });
    }

    // Check if this hash already exists
    const { data: existing } = await supabase
      .from("genome_uploads")
      .select("id")
      .eq("genome_hash", hash)
      .limit(1);

    if (existing && existing.length > 0) {
      const { count } = await supabase
        .from("genome_uploads")
        .select("*", { count: "exact", head: true });
      return NextResponse.json({ isNew: false, count: count ?? 0 });
    }

    // Insert new unique genome
    const { error: insertError } = await supabase
      .from("genome_uploads")
      .insert({ genome_hash: hash });

    if (insertError) throw insertError;

    const { count } = await supabase
      .from("genome_uploads")
      .select("*", { count: "exact", head: true });

    return NextResponse.json({ isNew: true, count: count ?? 0 });
  } catch {
    return NextResponse.json({ error: "Failed to record" }, { status: 500 });
  }
}
