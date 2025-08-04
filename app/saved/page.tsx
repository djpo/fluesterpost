"use server";

import { createClient } from "@supabase/supabase-js";
import { NewCycleButton } from "@/saved/new-cycle-button";
import { Name } from "@/types";

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

  async function addName(): Promise<void> {
    "use server";
    const { error } = await supabaseClient
      .from("names")
      .insert({ name: "Another Classic Solid Name" });
    if (error) throw error;
  }

  const names: Name[] = await getNames();

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        <NewCycleButton handler={addName} />

        {names.map((name: Name, nameIndex: number) => {
          return (
            <div key={nameIndex} className="mb-3 border p-2">
              <p>id: {name.id}</p>
              <p>{name.created_at}</p>
              <p>{name.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
