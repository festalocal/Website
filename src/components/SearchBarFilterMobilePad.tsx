import { useContext, useState } from "react";
import { urlToFormData } from "../pages/FestivalsCatalogue";
import { hiddenFormData } from "./FestivalSearchBar";
import { DateFilterParameter } from "./FestivalSearchBar";
interface Props {
  mobileFiltersToggled: boolean;
}

function SearchBarFilterMobilePad({
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
    if (formData.dateDebut !== null && formData.dateFin !== null) {
      formData.dateParam = DateFilterParameter.IN_PERIOD;
    }
    if (formData.dateDebut !== null && formData.dateFin === null) {
      formData.dateParam = DateFilterParameter.AFTER;
    }
    if (formData.dateDebut === null && formData.dateFin !== null) {
      formData.dateParam = DateFilterParameter.BEFORE;
      formData.dateDebut = formData.dateFin;
      formData.dateFin = "";
    }
    hiddenFormDataInputs.dateParamInput.current.value = formData.dateParam;
    hiddenFormDataInputs.dateDebutInput.current.value = formData.dateDebut;
    hiddenFormDataInputs.dateFinInput.current.value = formData.dateFin;
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
