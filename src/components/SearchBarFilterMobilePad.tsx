import { useContext, useState } from "react";
import { urlToFormData } from "../pages/FestivalsCatalogue";
import { hiddenFormData } from "./FestivalSearchBar";
import { DateFilterParameter } from "./FestivalSearchBar";
import { whichDateParamIsSet } from "./AgendaDateInput";
interface Props {
  dateDebutDefault: string | null | undefined;
  dateFinDefault: string | null | undefined;
  mobileFiltersToggled: boolean;
}

function SearchBarFilterMobilePad({
  dateDebutDefault,
  dateFinDefault,
  mobileFiltersToggled,
}: Props): JSX.Element {
  const formData = useContext(urlToFormData);
  const hiddenFormDataInputs = useContext(hiddenFormData);
  const [villeInput, setVilleInput] = useState<string>(
    formData.ville as string
  );
  const selectDayHandler: Function = (e: any): void => {
    const dateValues: string[] = e.target.value.split("-");
    if (e.target.id === "dateDebutInput") {
      formData.dateDebut = `${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`;
    }
    if (e.target.id === "dateFinInput") {
      formData.dateFin = `${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`;
    }
    switch (whichDateParamIsSet(formData.dateDebut, formData.dateFin)) {
      case DateFilterParameter.IN_PERIOD:
        formData.dateParam = DateFilterParameter.IN_PERIOD;
        break;
      case DateFilterParameter.AFTER:
        formData.dateParam = DateFilterParameter.AFTER;
        break;
      case DateFilterParameter.BEFORE:
        formData.dateParam = DateFilterParameter.BEFORE;
        formData.dateDebut = formData.dateFin;
        formData.dateFin = "";
    }
    hiddenFormDataInputs.dateParamInput.current.value = formData.dateParam;
    hiddenFormDataInputs.dateDebutInput.current.value = formData.dateDebut;
    hiddenFormDataInputs.dateFinInput.current.value = formData.dateFin;
  };

  const defaultOrCurrentDateValue: Function = (dateDefault: string): string => {
    const today: Date = new Date();
    if (
      dateDefault !== null &&
      dateDefault !== undefined &&
      dateDefault !== ""
    ) {
      const dateValues: string[] = dateDefault.split("-");
      return `${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`;
    }
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(today.getDay()).padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        display: mobileFiltersToggled ? "flex" : "none",
      }}
      className="relative bg-white p-3 md:p-4 flex justify-center items-center max-w-fit mx-auto gap-2 flex-col"
    >
      <label htmlFor="ville" className="font-bold">
        Vous cherchez une fete dans une ville particuliere ?
      </label>
      <input
        className="border-festa-blue drop-shadow-lg border-2 rounded-full py-1 px-2"
        id="ville"
        type="text"
        name="ville"
        placeholder="Cherchez votre ville..."
        value={villeInput !== null ? villeInput : ""}
        onChange={(e) => setVilleInput(e.target.value)}
      />
      <label htmlFor="dateDebutInput" className="font-bold">
        A partir du ?
      </label>
      <input
        id="dateDebutInput"
        type="date"
        //name="dateDebut"
        className="border-festa-blue drop-shadow-lg border-2 rounded-full py-1 px-2"
        placeholder="DD/MM/YYYY"
        onChange={(e) => selectDayHandler(e)}
        defaultValue={defaultOrCurrentDateValue(dateDebutDefault)}
      />
      <label htmlFor="dateFinInput" className="font-bold">
        Jusqu'au ?
      </label>
      <input
        id="dateFinInput"
        type="date"
        //name="dateFin"
        className="border-festa-blue drop-shadow-lg border-2 rounded-full py-1 px-2"
        placeholder="DD/MM/YYYY"
        onChange={(e) => selectDayHandler(e)}
        defaultValue={defaultOrCurrentDateValue(dateFinDefault)}
      />
      <button
        name="submit-filters"
        className="rounded-full border border-1 p-2 shadow-lg bg-festa-blue text-white focus:bg-festa-light-blue"
        type="submit"
      >
        Appliquer
      </button>
    </div>
  );
}

export default SearchBarFilterMobilePad;
