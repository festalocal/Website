import { lazy } from "react";
import CITY_TITLE_REGEX from "../RegExPatterns";
const AgendaDateInput = lazy(() => import("./AgendaDateInput"));

interface Props {
  dateFilterPad: boolean;
  villeFilterPad: boolean;
}

function SearchBarFilterPad({
  dateFilterPad,
  villeFilterPad,
}: Props): JSX.Element {
  return (
    <>
      <div
        style={{ display: dateFilterPad || villeFilterPad ? "flex" : "none" }}
        className="relative bg-white p-3 md:p-4 flex flex-row justify-center items-center max-w-fit mx-auto"
      >
        <div
          style={{ display: dateFilterPad ? "flex" : "none" }}
          className="flex gap-8"
        >
          <div>
            <p className="font-bold">A partir de ?</p>
            <AgendaDateInput />
          </div>
          <div>
            <p className="font-bold">Jusqu'au ?</p>
            <AgendaDateInput />
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
          />
        </div>
      </div>
    </>
  );
}

export default SearchBarFilterPad;
