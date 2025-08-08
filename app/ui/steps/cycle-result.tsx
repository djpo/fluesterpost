import type { SavedStep } from "@/types";
import { StepFinal } from "@/ui/steps/step-final";

interface Props {
  steps: SavedStep[];
}

export const CycleResult = ({ steps }: Props): React.JSX.Element => {
  const handleEdit = (): void => {
    console.log("handleEdit");
  };
  const handleSave = (): void => {
    console.log("handleSave");
  };

  return (
    <div>
      <button
        className="mb-3 p-3 bg-(--gray-translucent) border rounded cursor-pointer"
        onClick={handleEdit}
      >
        edit
      </button>

      <button
        className="mb-3 p-3 bg-(--gray-translucent) border rounded cursor-pointer"
        onClick={handleSave}
      >
        save
      </button>

      {steps.map((step: SavedStep, stepIndex: number) => (
        <StepFinal
          key={stepIndex}
          isTranslating={false}
          lang={step.lang}
          text={step.text}
        />
      ))}
    </div>
  );
};
