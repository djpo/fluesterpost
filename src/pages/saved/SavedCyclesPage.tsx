import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectSavedCycles } from "../../redux/selectors";
import type { SavedCycle, SavedCycleStep } from "../../types";
import "./SavedCyclePage.css";

const SavedCyclesPage = (): JSX.Element => {
  const savedCycles: SavedCycle[] = useSelector(selectSavedCycles);

  return (
    <>
      <Link to="/">HomePage</Link>
      <p />

      {savedCycles ? (
        <>
          {savedCycles.map(({ _id, originLang, originText, steps }: SavedCycle) => (
            <div key={_id} className="saved-cycle">
              <p className="step-lang-box-origin">
                ({originLang}) {originText}
              </p>
              {steps.map((step: SavedCycleStep, stepIndex: number) =>
                stepIndex === steps.length - 1 ? (
                  <div key={stepIndex}>
                    <p className="step-lang-box-origin">
                      ({step.lang}) {step.text}
                    </p>
                  </div>
                ) : (
                  <div key={stepIndex}>
                    <p>
                      ({step.lang}) {step.text}
                    </p>
                  </div>
                )
              )}
            </div>
          ))}
        </>
      ) : (
        <p>...no saved cycles</p>
      )}
    </>
  );
};

export { SavedCyclesPage };
