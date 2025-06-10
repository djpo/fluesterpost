"use client";

import { useState } from "react";
import { defaultAreInstructionsVisible } from "@/default-values";

const instructionsText1 =
  "hello! see what happens when you translate text through multiple languages, then back into the original.";
const instructionsText2 = "1. modify the input text – try a fun phrase!";
const instructionsText3 =
  "2. add, remove, and edit the language steps through which the phrase will pass";
const instructionsText4 =
  "3. press translate – see how the result differs from the input!";

const Instructions = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(defaultAreInstructionsVisible);

  const handleDismiss = (): void => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className="mb-1 bg-(--gray-translucent) border border-white rounded text-white p-3">
      <p className="mb-3">{instructionsText1}</p>
      <p className="mb-1">{instructionsText2}</p>
      <p className="mb-1">{instructionsText3}</p>
      <p className="mb-3">{instructionsText4}</p>

      <div className="flex flex-row-reverse">
        <button
          className="rounded bg-orange-500 p-1 shadow-md hover:bg-orange-600"
          onClick={handleDismiss}
        >
          dismiss
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { Instructions };
