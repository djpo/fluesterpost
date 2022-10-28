import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectErrorMessage,
  selectSavedCycles,
  selectIsFetchingSavedCycles,
} from "../../redux/selectors";
import { fetchSavedCycles } from "../../redux/actions";
import { SavedCycle } from "../../components/SavedCycle";
import type { SavedCycle as SavedCycleType, SavedCycleStep, ErrorMessage } from "../../types";

const SavedCyclesPage = (): JSX.Element => {
  const savedCycles: SavedCycleType[] = useSelector(selectSavedCycles);
  const isFetchingSavedCycles: boolean = useSelector(selectIsFetchingSavedCycles);
  const errorMessage: ErrorMessage = useSelector(selectErrorMessage);

  const dispatch = useDispatch();

  const handleGetSavedCycles = (): void => {
    dispatch(fetchSavedCycles());
  };

  useEffect(() => {
    handleGetSavedCycles();
  }, []);

  return (
    <>
      <Link to="/">HomePage</Link>
      <p />

      {isFetchingSavedCycles && <p>loading saved cycles...</p>}

      {errorMessage && <p>error: {errorMessage}</p>}

      {savedCycles.length > 0 ? (
        <>
          {savedCycles.map(({ _id, originLang, originText, steps }: SavedCycleType) => (
            <SavedCycle key={_id} originLang={originLang} originText={originText} steps={steps} />
          ))}
        </>
      ) : (
        <p>no saved cycles</p>
      )}
    </>
  );
};

export { SavedCyclesPage };
