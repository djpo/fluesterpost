"use server";

import { createClient } from "@supabase/supabase-js";
import { defaultSavedSteps } from "@/default-values";
import { Cycle, CycleReceived, SavedStep } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

async function fetchCycles(): Promise<CycleReceived[]> {
  "use server";
  const { data, error } = await supabaseClient.from("cycles").select();
  if (error) throw error;
  return data;
}

export async function getCycles(): Promise<Cycle[]> {
  const cyclesReceived: CycleReceived[] = await fetchCycles();
  return cyclesReceived.map((cycle) => ({
    id: cycle.id,
    createdAt: cycle.created_at,
    steps: JSON.parse(cycle.cycle_json) as SavedStep[],
  }));
}

export async function addCycle(): Promise<void> {
  "use server";
  const { data, error } = await supabaseClient
    .from("cycles")
    .insert({ cycle_json: JSON.stringify(defaultSavedSteps) })
    .select();
  if (error) throw error;
}
