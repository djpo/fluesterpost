"use client";

interface Props {
  labelText: string;
  descriptionText: string;
}

export const Tooltip = ({
  labelText,
  descriptionText,
}: Props): React.JSX.Element => (
  <div
    className="flex p-3 bg-(--highlight) border-solid border-red rounded p-3 shadow-md w-80 max-w-80"
    aria-label="tooltip"
  >
    <p className="text-blue">{labelText}</p>
    <p className="ml-2 text-(--dark-gray) text-sm">{descriptionText}</p>
  </div>
);
