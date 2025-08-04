"use server";

import { createClient } from "@supabase/supabase-js";
import { NewCycleButton } from "@/saved/new-cycle-button";
import { Name, TextArray } from "@/types";
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

  const names: Name[] = await getNames();
  console.log("Fetched names:", names);

  const textArrays: TextArray[] = await getTextArrays();
  console.log("Fetched textarrays:", textArrays);
  // console.log(JSON.stringify(textArrays, null, 2));

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        <NewCycleButton handler={addTextArray} />

        {names.map((name: Name, nameIndex: number) => {
          return (
            <div key={nameIndex} className="mb-3 border p-2">
              <p>id: {name.id}</p>
              <p>{name.created_at}</p>
              <p>{name.name}</p>
            </div>
          );
        })}

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
