"use server";

import { createClient } from "@supabase/supabase-js";
import { NewCycleButton } from "@/saved/new-cycle-button";
import { defaultSavedSteps } from "@/default-values";
import { Cycle, CycleReceived, SavedStep } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default async function Saved(): Promise<React.JSX.Element> {
  async function getCycles(): Promise<CycleReceived[]> {
    "use server";
    const { data, error } = await supabaseClient.from("cycles").select();
    if (error) throw error;
    return data;
  }

  async function addCycle(): Promise<void> {
    "use server";
    const { data, error } = await supabaseClient
      .from("cycles")
      .insert({ cycle_json: JSON.stringify(defaultSavedSteps) })
      .select();
    if (error) throw error;
  }

  const cyclesReceived: CycleReceived[] = await getCycles();
  const cycles: Cycle[] = cyclesReceived.map((cycle) => ({
    id: cycle.id,
    created_at: cycle.created_at,
    steps: JSON.parse(cycle.cycle_json) as SavedStep[],
  }));

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        <NewCycleButton handler={addCycle} />

        {cycles.map((cycle: Cycle, cycleIndex: number) => {
          return (
            <div key={cycleIndex} className="mb-3 border p-2">
              <ul>
                {cycle.steps.map((step: SavedStep, stepIndex: number) => {
                  return (
                    <li key={stepIndex} className="mb-1">
                      {step.lang}: {step.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
