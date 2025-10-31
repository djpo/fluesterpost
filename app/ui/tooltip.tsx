"use client";

import { useState } from "react";

interface Props {
  text: string;
}

export const Tooltip = ({ text }: Props): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative">
      <div
        className="fixed top-15 right-2 z-50 w-72 p-3 bg-slate-700 border border-solid border-white rounded-lg shadow-xl shadow-black/25 cursor-pointer"
        aria-label="tooltip"
        onClick={() => setIsVisible(false)}
        style={{ display: isVisible ? "block" : "none" }}
      >
        <p className="text-white text-sm">{text}</p>
      </div>
    </div>
  );
};
