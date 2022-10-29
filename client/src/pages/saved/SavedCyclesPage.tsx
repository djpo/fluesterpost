import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectErrorMessage,
  selectSavedCycles,
  selectIsFetchingSavedCycles,
} from "../../redux/selectors";
import { fetchSavedCycles } from "../../redux/actions";
import type { SavedCycle, SavedCycleStep, ErrorMessage } from "../../types";
import "./SavedCyclePage.css";

const SavedCyclesPage = (): JSX.Element => {
  const savedCycles: SavedCycle[] = useSelector(selectSavedCycles);
  const isFetchingSavedCycles: boolean = useSelector(selectIsFetchingSavedCycles);
  const errorMessage: ErrorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const handleGetSavedCycles = (): void => {
    dispatch(fetchSavedCycles());
  };

  const buttonClassName = isFetchingSavedCycles ? "test-button" : "";

  return (
    <>
      <Link to="/">HomePage</Link>
      <p />

      {errorMessage && <p>error: {errorMessage}</p>}

      <button
        disabled={isFetchingSavedCycles}
        className={`primary-button ${buttonClassName}`}
        onClick={() => handleGetSavedCycles()}
      >
        {isFetchingSavedCycles ? "getting..." : "get saved cycles"}
      </button>
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
