"use server";

import { createClient } from "@supabase/supabase-js";
import { NewCycleButton } from "@/saved/new-cycle-button";
import { Cycle, CycleReceived, Name, SavedStep, TextArray } from "@/types";
import { defaultSavedSteps } from "@/default-values";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default async function Saved(): Promise<React.JSX.Element> {
  async function getNames(): Promise<Name[]> {
    "use server";
    const { data, error } = await supabaseClient.from("names").select();
    if (error) throw error;
    return data;
  }

  async function getTextArrays(): Promise<TextArray[]> {
    "use server";
    const { data, error } = await supabaseClient.from("arraytest").select();
    if (error) throw error;
    return data;
  }

  async function getCycles(): Promise<CycleReceived[]> {
    "use server";
    const { data, error } = await supabaseClient.from("cycles").select();
    if (error) throw error;
    return data;
  }

  async function addTextArray(): Promise<void> {
    "use server";
    const { data, error } = await supabaseClient
      .from("arraytest")
      .insert([
        { textarray: [defaultSavedSteps[3].lang, defaultSavedSteps[3].text] },
      ])
      .select();

    console.log("Added textarray:", data);
    if (error) throw error;
  }

  async function addCycle(): Promise<void> {
    "use server";
    const { data, error } = await supabaseClient
      .from("cycles")
      .insert({ cycle_json: JSON.stringify(defaultSavedSteps) })
      .select();
    console.log("Added cycle:", data);
    if (error) throw error;
  }

  const names: Name[] = await getNames();
  console.log("Fetched names:", names);

  const textArrays: TextArray[] = await getTextArrays();
  console.log("Fetched textarrays:", textArrays);

  const cyclesReceived: CycleReceived[] = await getCycles();
  console.log("cyclesReceieved:");
  console.log(cyclesReceived);

  const cycles: Cycle[] = cyclesReceived.map((cycle) => ({
    id: cycle.id,
    created_at: cycle.created_at,
    steps: JSON.parse(cycle.cycle_json) as SavedStep[],
  }));

  console.log("Fetched cycles:", cycles);

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        <NewCycleButton handler={addCycle} />

        {textArrays.map((textArray: TextArray, textArrayIndex: number) => {
          return (
            <div key={textArrayIndex} className="mb-3 border p-2">
              <ul>
                <li>
                  {textArray.textarray[0]}: {textArray.textarray[1]}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
