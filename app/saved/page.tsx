"use server";

import { SavedCycle } from "@/ui/saved-cycles/saved-cycle";
import { Cycle } from "@/types";
import { getCycles } from "@/lib/savedCycles";

export default async function Saved(): Promise<React.JSX.Element> {
  const cycles: Cycle[] = await getCycles();

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <h1 className="text-lg mb-5">Users&apos; saved cycles</h1>

        {cycles.map((cycle: Cycle, cycleIndex: number) => {
          return (
            <SavedCycle
              key={cycleIndex}
              cycleNumber={cycle.id}
              date={cycle.createdAt}
              steps={cycle.steps}
            />
          );
        })}
      </div>
    </div>
  );
}
