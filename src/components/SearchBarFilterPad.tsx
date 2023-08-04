import { lazy, useContext, useState } from "react";
import CITY_TITLE_REGEX from "../RegExPatterns";
import { urlToFormData } from "../pages/FestivalsCatalogue";
// import { DateFilterParameter } from "./FestivalSearchBar";
const AgendaDateInput = lazy(() => import("./AgendaDateInput"));

interface Props {
  setDateDebutText: Function;
  setDateFinText: Function;
  setVilleButtonText: Function;
  dateFilterPad: boolean;
  villeFilterPad: boolean;
}

function SearchBarFilterPad({
  setDateDebutText,
  setDateFinText,
  setVilleButtonText,
  dateFilterPad,
  villeFilterPad,
}: Props): JSX.Element {
  const formData = useContext(urlToFormData);
  const [villeInput, setVilleInput] = useState<string>(
    formData.ville as string
  );
  return (
    <>
      <div
        style={{
          display: dateFilterPad || villeFilterPad ? "flex" : "none",
        }}
        className="relative bg-white p-3 md:p-4 flex justify-center items-center max-w-fit mx-auto gap-2 flex-col"
      >
        <div
          style={{ display: dateFilterPad ? "flex" : "none" }}
          className="flex gap-8"
        >
          <div>
            <AgendaDateInput
              setDateDebutText={setDateDebutText}
              setDateFinText={setDateFinText}
              startingFrom={true}
            />
          </div>
          <div>
            <AgendaDateInput
              setDateDebutText={setDateDebutText}
              setDateFinText={setDateFinText}
              startingFrom={false}
            />
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{ display: villeFilterPad ? "flex" : "none" }}
        >
          <label htmlFor="ville" className="font-bold">
            Vous cherchez une fete dans une ville particuliere ?
          </label>
          <input
            className="border-festa-blue drop-shadow-lg border-2 rounded-full px-2"
            id="ville"
            type="text"
            name="ville"
            pattern={CITY_TITLE_REGEX}
            placeholder="Cherchez votre ville..."
            value={villeInput !== null ? villeInput : ""}
            onChange={(e) => {
              setVilleInput(e.target.value);
              setVilleButtonText(e.target.value);
            }}
          />
        </div>

        <button
          name="submit-filters"
          className="rounded-full border border-1 p-2 shadow-lg hover:bg-festa-light-blue"
          type="submit"
        >
          Appliquer
        </button>
      </div>
    </>
  );
}

export default SearchBarFilterPad;
