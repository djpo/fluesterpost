import { useDispatch } from "react-redux";
import { dismissInstructions } from "./redux/actions";
import "./Instructions.css";

const instructionsText1 =
  "hello! see what happens when you translate text through multiple languages, then back into the original.";
const instructionsText2 = "1. modify the input text – try a fun phrase!";
const instructionsText3 =
  "2. add, remove, and edit the language steps through which the phrase will pass";
const instructionsText4 = "[r]: randomize, [x]: remove step";
const instructionsText5 = "3. press translate – see how the result differs from the input!";

function Instructions(): JSX.Element {
  const dispatch = useDispatch();
  const handleDismiss = (): void => {
    dispatch(dismissInstructions());
  };

  return (
    <div className="instructions">
      <p>{instructionsText1}</p>
      <p>{instructionsText2}</p>
      <p className="instruction-with-substep">{instructionsText3}</p>
      <p className="substep">{instructionsText4}</p>
      <p>{instructionsText5}</p>

      <div className="instructions-button-row">
        <button className="primary-button" onClick={handleDismiss}>
          dismiss
        </button>
      </div>
    </div>
  );
}

export { Instructions };
