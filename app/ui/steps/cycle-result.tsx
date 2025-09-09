import type { CycleStep } from "@/types";
import { StepFinal } from "@/ui/steps/step-final";

interface Props {
  steps: CycleStep[];
  handleEdit: () => void;
  handleSave: () => void;
}

export const CycleResult = ({
  steps,
  handleEdit,
  handleSave,
}: Props): React.JSX.Element => (
  <div>
    <button
      className="mb-2 px-3 py-2 bg-(--gray-translucent) border rounded cursor-pointer"
      onClick={handleEdit}
    >
      edit
    </button>

    <button
      className="mb-2 ml-3 px-3 py-2 bg-(--gray-translucent) border rounded cursor-pointer"
      onClick={handleSave}
    >
      save
    </button>

    {steps.map((step: CycleStep, stepIndex: number) => (
      <StepFinal
        key={stepIndex}
        isTranslating={false}
        lang={step.lang}
        text={step.text}
      />
    ))}
  </div>
);
