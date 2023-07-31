import { lazy } from "react";
import CITY_TITLE_REGEX from "../RegExPatterns";
const AgendaDateInput = lazy(() => import("./AgendaDateInput"));

function SearchBarFilterPad(): JSX.Element {
  return (
    <>
      <div className="bg-white p-3 md:p-4 flex flex-col justify-center items-center max-w-fit mx-auto">
        <div className="flex flex-row gap-8">
          <div>
            <p className="font-bold">A partir de ?</p>
            <AgendaDateInput />
          </div>
          <div>
            <p className="font-bold">Jusqu'au ?</p>
            <AgendaDateInput />
          </div>
        </div>
        <div>
          <input
            type="text"
            name="ville"
            pattern={CITY_TITLE_REGEX}
            placeholder="Cherchez votre ville..."
          ></input>
        </div>
      </div>
    </>
  );
}

export default SearchBarFilterPad;
