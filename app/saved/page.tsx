"use server";

import { createClient } from "@supabase/supabase-js";
import { defaultSavedSteps } from "@/default-values";
import { SavedStep } from "@/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default async function Saved(): Promise<React.JSX.Element> {
  const savedCycles: SavedStep[][] = [
    defaultSavedSteps,
    defaultSavedSteps,
    defaultSavedSteps,
  ];

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        {savedCycles.map((cycle: SavedStep[], cycleIndex: number) => {
          return (
            <div key={cycleIndex} className="mb-3 border p-2">
              <ul>
                {cycle.map((step: SavedStep, stepIndex: number) => {
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
