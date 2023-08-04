import {
  lazy,
  useState,
  useContext,
  useRef,
  createContext,
  useEffect,
} from "react";
import { urlToFormData } from "./../pages/FestivalsCatalogue";
import SearchBarFilterMobilePad from "./SearchBarFilterMobilePad";
// import { CITY_TITLE_REGEX } from "../RegExPatterns";
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
  // boolean state to define if the device viewport is mobile or not
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  const formData = useContext(urlToFormData);
  const dateParamInput = useRef(null);
  const dateDebutInput = useRef(null);
  const dateFinInput = useRef(null);
  const [dateDebutText, setDateDebutText] = useState<string | null | undefined>(
    formData.dateDebut
  );
  const [dateFinText, setDateFinText] = useState<string | null | undefined>(
    formData.dateFin
  );
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
  const [mobileFiltersPad, setMobileFiltersPad] = useState<boolean>(false);
  const [titleSearch, setTitleSearch] = useState<string | null | undefined>(
    formData.titre
  );
  const [villeSearch, setVilleSearch] = useState<string | null | undefined>(
    formData.ville
  );

  const updateViewport = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
  });

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
          <button
            type="button"
            onClick={() => {
              setMobileFiltersPad(!mobileFiltersPad);
            }}
          >
            <span className="material-symbols-outlined min-w-min px-2 flex md:hidden items-center gap-2">
              {mobileFiltersPad ? "close" : "tune"}
            </span>
          </button>
          <input
            className="w-full focus:outline-festa-blue py-3 md:py-4"
            type="text"
            name="q"
            value={titleSearch !== null ? (titleSearch as string) : ""}
            placeholder="Cherchez votre prochaine fête..."
            onChange={(event) => setTitleSearch(event.target.value)}
          />
          <input
            type="hidden"
            name="dateParam"
            value={
              formData.dateParam !== null ? (formData.dateParam as string) : ""
            }
            ref={dateParamInput}
          />
          <input
            type="hidden"
            name="dateDebut"
            value={
              formData.dateDebut !== null ? (formData.dateDebut as string) : ""
            }
            ref={dateDebutInput}
          />
          <input
            type="hidden"
            name="dateFin"
            value={
              formData.dateFin !== null ? (formData.dateFin as string) : ""
            }
            ref={dateFinInput}
          />
          {/* DESKTOP form filters controls */}
          {!isMobile && (
            <>
              {/* Filtre Date A partir de */}
              <div
                onClick={(_) => {
                  clickDateFilterHandler(_, "startingFrom");
                }}
              >
                <DateFilterButton
                  dateValue={dateDebutText}
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
                  dateValue={dateFinText}
                  buttonText={"Jusqu'au ?"}
                  toggled={
                    toggledDateFilterPad &&
                    lastDateFilterButtonClicked === "until"
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
                <LocationFilterButton
                  toggled={toggledVilleFilterPad}
                  townLocation={villeSearch}
                />
              </div>
            </>
          )}

          <button name="submit-filters" type="submit">
            <span className="material-symbols-outlined rounded-full border border-1 p-2 shadow-lg">
              search
            </span>
          </button>
        </div>

        <div
          className={`${
            toggledDateFilterPad || toggledVilleFilterPad || mobileFiltersPad
              ? ""
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
            {!isMobile && (
              <SearchBarFilterPad
                setDateDebutText={setDateDebutText}
                setDateFinText={setDateFinText}
                setVilleButtonText={setVilleSearch}
                dateFilterPad={toggledDateFilterPad ? true : false}
                villeFilterPad={toggledVilleFilterPad ? true : false}
              />
            )}
            {isMobile && (
              <SearchBarFilterMobilePad
                dateDebutDefault={formData.dateDebut}
                dateFinDefault={formData.dateFin}
                mobileFiltersToggled={mobileFiltersPad}
              />
            )}
          </hiddenFormData.Provider>
        </div>
      </form>
    </>
  );
}

export default FestivalSearchBar;
