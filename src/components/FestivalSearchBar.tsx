import { lazy, useState, useContext, useRef, createContext } from "react";
import { urlToFormData } from "./../pages/FestivalsCatalogue";
import { CITY_TITLE_REGEX } from "../RegExPatterns";
const SearchBarFilterPad = lazy(() => import("./SearchBarFilterPad"));
const DateFilterButton = lazy(() => import("./DateFilterButton"));
const LocationFilterButton = lazy(() => import("./LocationFilterButton"));

// Enumeration of values
// that is used to tweak the dates filter.
export enum DateFilterParameter {
  BEFORE = "BEFORE", // In case we want Evenements before a date
  AFTER = "AFTER", // In case we want Evenements after a date
  IN_PERIOD = "IN-PERIOD", // In case we want Evenements of a given period between 2 dates
  // to be inclued another period
}

export const hiddenFormData = createContext<any>({});

function FestivalSearchBar(): JSX.Element {
  const formData = useContext(urlToFormData);
  const dateParamInput = useRef(null);
  const dateDebutInput = useRef(null);
  const dateFinInput = useRef(null);
  const [toggledDateFilterPad, setToggledDateFilterPad] =
    useState<boolean>(false);
  const [lastDateFilterButtonClicked, setLastDateFilterButtonClicked] =
    useState<string>("");
  const clickDateFilterHandler: Function = (_: any, source: string): void => {
    setLastDateFilterButtonClicked(source);
    if (toggledVilleFilterPad) {
      setToggledVilleFilterPad(false);
    }
    if (
      lastDateFilterButtonClicked === "" ||
      lastDateFilterButtonClicked === source ||
      !toggledDateFilterPad
    ) {
      setToggledDateFilterPad(!toggledDateFilterPad);
    }
  };
  const [toggledVilleFilterPad, setToggledVilleFilterPad] =
    useState<boolean>(false);
  const [titleSearch, setTitleSearch] = useState<string | null | undefined>(
    formData.titre
  );
  // const [villeSearch, setVilleSearch] = useState<string | null | undefined>(
  //   ville
  // );

  return (
    <>
      {/* Unfortunately can't use the react router Form because it only works with
      Data Router type in the root at main.tsx file
      */}
      <form
        method="GET"
        action="/fetes"
        role="search"
        className="w-full px-2 sm:px-4 md:px-14 py-2 md:py-3 z-10 bg-white"
      >
        <div className="relative z-20 bg-white rounded-full border-2 border-festa-blue drop-shadow-lg px-3 md:px-4 flex flex-row justify-between items-stretch gap-0 sm:gap-2 md:gap-4">
          <button>
            <span className="material-symbols-outlined min-w-min px-2 flex md:hidden items-center gap-2">
              tune
            </span>
          </button>
          <input
            className="w-full focus:outline-festa-blue py-3 md:py-4"
            type="text"
            name="q"
            pattern={CITY_TITLE_REGEX}
            value={titleSearch as string}
            placeholder="Cherchez votre prochaine fête..."
            onChange={(event) => setTitleSearch(event.target.value)}
          />
          <input
            type="hidden"
            name="dateParam"
            value={formData.dateParam as string}
            ref={dateParamInput}
          />
          <input
            type="hidden"
            name="dateDebut"
            value={formData.dateDebut as string}
            ref={dateDebutInput}
          />
          <input
            type="hidden"
            name="dateFin"
            value={formData.dateFin as string}
            ref={dateFinInput}
          />
          {/* Filtre Date A partir de */}
          <div
            onClick={(_) => {
              clickDateFilterHandler(_, "startingFrom");
            }}
          >
            <DateFilterButton
              buttonText={"A partir de ?"}
              toggled={
                toggledDateFilterPad &&
                lastDateFilterButtonClicked === "startingFrom"
              }
            />
          </div>
          {/* Filtre Date Jusqu'au */}
          <div
            onClick={(_) => {
              clickDateFilterHandler(_, "until");
            }}
          >
            <DateFilterButton
              buttonText={"Jusqu'au ?"}
              toggled={
                toggledDateFilterPad && lastDateFilterButtonClicked === "until"
              }
            />
          </div>
          <div
            onClick={() => {
              if (toggledDateFilterPad) {
                setToggledDateFilterPad(false);
              }
              setToggledVilleFilterPad(!toggledVilleFilterPad);
            }}
          >
            <LocationFilterButton toggled={toggledVilleFilterPad} />
          </div>
          <button type="submit">
            <span className="material-symbols-outlined rounded-full border border-1 p-2 shadow-inner shadow-lg">
              search
            </span>
          </button>
        </div>
        <div
          className={`${
            toggledDateFilterPad || toggledVilleFilterPad
              ? " "
              : "relative -translate-y-full h-0"
          }
          relative z-10
          transition-transform ease-in-out duration-150
          `}
        >
          <hiddenFormData.Provider
            value={{
              dateParamInput: dateParamInput,
              dateDebutInput: dateDebutInput,
              dateFinInput: dateFinInput,
            }}
          >
            <SearchBarFilterPad
              dateFilterPad={toggledDateFilterPad ? true : false}
              villeFilterPad={toggledVilleFilterPad ? true : false}
            />
          </hiddenFormData.Provider>
        </div>
      </form>
    </>
  );
}

export default FestivalSearchBar;
