"use client";

import { useState } from "react";
import { CycleStep } from "@/types";
import { getLangLabel } from "@/l10n/getLangLabel";

interface Props {
  cycleNumber: number;
  date: string;
  steps: CycleStep[];
}

export const SavedCycle = ({
  cycleNumber,
  date,
  steps,
}: Props): React.JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpand = (): void => {
    setIsExpanded(!isExpanded);
  };

  const dateFormatted = date.split("T")[0];

  return (
    <div className="mb-2 bg-(--white-translucent) rounded p-2">
      {isExpanded ? (
        <div>
          <div className="flex direction-row justify-between">
            <p className="text-sm font-semibold">
              cycle #{cycleNumber} // {dateFormatted}
            </p>
            <button
              className="rounded bg-orange-500 p-1 shadow-md text-sm hover:bg-orange-600"
              onClick={handleToggleExpand}
            >
              collapse
            </button>
          </div>

          {steps.map((step, stepIndex: number) => (
            <div className="mt-1 flex direction-row">
              <div className="h-7 mr-2 bg-gray-400 rounded border pl-1 pr-1">
                <p>{getLangLabel(step.lang)}</p>
              </div>
              <div className="min-h-7 border rounded bg-gray-200 px-1">
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="flex direction-row justify-between">
            <p className="text-sm font-semibold">
              cycle #{cycleNumber} // {dateFormatted} //{" "}
              {getLangLabel(steps[0].lang)}
            </p>
            <button
              className="rounded bg-orange-500 p-1 shadow-md text-sm hover:bg-orange-600"
              onClick={handleToggleExpand}
            >
              expand
            </button>
          </div>

          <div className="mt-1 flex">
            <div className="min-h-7 border rounded bg-gray-200 px-1">
              <p>{steps[0].text}</p>
            </div>
          </div>
          <div className="mt-1 flex">
            <div className="min-h-7 border rounded bg-gray-200 px-1">
              <p>{steps[steps.length - 1].text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
