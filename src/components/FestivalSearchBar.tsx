import { ChangeEvent, lazy, useState } from "react";
import { searchFilters } from "../pages/FestivalsCatalogue";
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

function FestivalSearchBar({
  titre,
  ville,
}: // dateParam,
// dateDebut,
// dateFin,
searchFilters): JSX.Element {
  const [isAfterOrBeforeSwitchDisabled, setIsAfterOrBeforeSwitchDisabled] =
    useState<boolean>(false);
  const [afterOrBeforeSwitch, setAfterOrBeforeSwitch] =
    useState<boolean>(false);
  const [dateParamInput, setDateParamInput] = useState<string>(
    DateFilterParameter.AFTER
  );

  const [periodSwitch, setPeriodSwitch] = useState<boolean>(false);
  const periodSwitchHandler: Function = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setPeriodSwitch(!periodSwitch);
    if (e.target.checked) {
      setDateParamInput(DateFilterParameter.IN_PERIOD);
    } else {
      if (afterOrBeforeSwitch) {
        setDateParamInput(DateFilterParameter.BEFORE);
      } else {
        setDateParamInput(DateFilterParameter.AFTER);
      }
    }

    setIsAfterOrBeforeSwitchDisabled(!isAfterOrBeforeSwitchDisabled);
  };

  const afterOrBeforeSwitchHandler: Function = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setAfterOrBeforeSwitch(!afterOrBeforeSwitch);
    if (e.target.checked) {
      setDateParamInput(DateFilterParameter.BEFORE);
    } else {
      setDateParamInput(DateFilterParameter.AFTER);
    }
  };

  const [clikedDateFilterButton, setClikedDateFilterButton] =
    useState<boolean>(false);
  const [clickedVilleFilterButton, setClickedVilleFilterButton] =
    useState<boolean>(false);
  const [titleSearch, setTitleSearch] = useState<string | null | undefined>(
    titre
  );
  const [villeSearch, setVilleSearch] = useState<string | null | undefined>(
    ville
  );

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
        <div className="bg-white rounded-full border-2 border-festa-blue drop-shadow-lg px-3 md:px-4 flex flex-row justify-between items-stretch gap-0 sm:gap-2 md:gap-4">
          <button>
            <span className="material-symbols-outlined min-w-min px-2 flex md:hidden items-center gap-2">
              tune
            </span>
          </button>
          <input
            className="w-full focus:outline-festa-blue py-3 md:py-4"
            type="text"
            name="titre"
            pattern={CITY_TITLE_REGEX}
            value={titleSearch as string}
            placeholder="Cherchez votre prochaine fête..."
            onChange={(event) => setTitleSearch(event.target.value)}
          />

          {/* Filtre Date A partir de */}
          <div
            onClick={() => {
              setClikedDateFilterButton(!clikedDateFilterButton);
            }}
          >
            <DateFilterButton buttonText={"A partir de ?"} />
          </div>

          {/* Filtre Date Jusqu'au */}
          <div
            onClick={() => {
              setClikedDateFilterButton(!clikedDateFilterButton);
            }}
          >
            <DateFilterButton buttonText={"Jusqu'au ?"} />
          </div>

          <div
            onClick={() => {
              setClickedVilleFilterButton(!clickedVilleFilterButton);
            }}
          >
            <LocationFilterButton />
          </div>

          <div>
            <input
              style={{ display: clickedVilleFilterButton ? "block" : "none" }}
              type="text"
              name="ville"
              pattern={CITY_TITLE_REGEX}
              value={villeSearch as string}
              placeholder="Cherchez votre ville..."
              onChange={(event) => setVilleSearch(event.target.value)}
            />
          </div>

          <button type="submit">
            <span className="material-symbols-outlined rounded-full border border-1 p-2 shadow-inner shadow-lg">
              search
            </span>
          </button>
        </div>
        {/* <div style={{ display: clikedDateFilterButton ? "block" : "none" }}>
          <input type="hidden" name="dateParamInput" value={dateParamInput} />
          <label htmlFor="periodSwitch">Vous cherchez une periode ?</label>
          <input
            type="checkbox"
            id="periodSwitch"
            checked={periodSwitch}
            onChange={(e) => periodSwitchHandler(e)}
          />
          {!periodSwitch && (
            <>
              <label htmlFor="afterOrBeforeSwitch">
                Vous cherchez les evenements{" "}
                {dateParamInput === DateFilterParameter.AFTER
                  ? "avant"
                  : "apres"}{" "}
                ?
              </label>
              <input
                type="checkbox"
                id="afterOrBeforeSwitch"
                disabled={isAfterOrBeforeSwitchDisabled}
                checked={afterOrBeforeSwitch}
                onChange={(e) => afterOrBeforeSwitchHandler(e)}
              />
            </>
          )}
          <input type="date" name="dateDebut" />
          {periodSwitch && <input type="date" name="dateFin" />}
        </div> */}
        {clikedDateFilterButton && <SearchBarFilterPad />}
      </form>
    </>
  );
}

export default FestivalSearchBar;
