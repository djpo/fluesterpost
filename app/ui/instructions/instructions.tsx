"use client";

import { useState } from "react";
import { defaultAreInstructionsVisible } from "@/default-values";
import styles from "@/ui/instructions/instructions.module.css";

const instructionsText1 =
  "hello! see what happens when you translate text through multiple languages, then back into the original.";
const instructionsText2 = "1. modify the input text – try a fun phrase!";
const instructionsText3 =
  "2. add, remove, and edit the language steps through which the phrase will pass";
const instructionsText4 = "[r]: randomize, [x]: remove step";
const instructionsText5 =
  "3. press translate – see how the result differs from the input!";

const Instructions = (): React.JSX.Element => {
  const [isVisible, setIsVisible] = useState(defaultAreInstructionsVisible);

  const handleDismiss = (): void => {
    setIsVisible(false);
  };

  return isVisible ? (
    <div className={styles.instructions}>
      <p>{instructionsText1}</p>
      <p>{instructionsText2}</p>
      <p className={styles.instructionWithSubstep}>{instructionsText3}</p>
      <p className={styles.substep}>{instructionsText4}</p>
      <p>{instructionsText5}</p>

      <div className={styles.buttonRow}>
        <button className={styles.button} onClick={handleDismiss}>
          dismiss
        </button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export { Instructions };
