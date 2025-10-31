"use server";

import { Instructions } from "@/ui/instructions/instructions";
import { Steps } from "@/ui/steps/steps";
import { defaultErrorMessage } from "@/default-values";
import { ErrorMessage } from "@/types";
import { Tooltip } from "./ui/tooltip";

export default async function Home(): Promise<React.JSX.Element> {
  const errorMessage: ErrorMessage = defaultErrorMessage;

  return (
    <div className="p-3 flex justify-center">
      <div className="w-full max-w-150">
        <Tooltip text="visit the Saved page to check out the results of other users' translations" />

        <Instructions />

        {errorMessage && <p>error: {errorMessage}</p>}

        <Steps />
      </div>
    </div>
  );
}
