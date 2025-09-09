"use client";

interface Props {
  handler: () => Promise<void>;
}

export const NewCycleButton = ({ handler }: Props): React.JSX.Element => {
  const handleAddCycle = async (): Promise<void> => {
    await handler();
    alert("a new name has been saved to the shared bucket");
  };

  return (
    <button
      className="mb-3 p-3 bg-(--gray-translucent) border rounded cursor-pointer"
      onClick={handleAddCycle}
    >
      add cycle
    </button>
  );
};
