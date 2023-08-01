import { lazy, useState, useContext } from "react";
import { generateDate } from "../utils/calendar";
import { urlToFormData } from "../pages/FestivalsCatalogue";
import { hiddenFormData } from "./FestivalSearchBar";
import dayjs from "dayjs";
import { DateFilterParameter } from "./FestivalSearchBar";

const ChevronLeft = lazy(() => import("./ChevronLeft"));
const ChevronRight = lazy(() => import("./ChevronRight"));

interface Props {
  startingFrom: boolean;
}

function AgendaDateInput({ startingFrom }: Props): JSX.Element {
  const formData = useContext(urlToFormData);
  const hiddenFormDataInputs = useContext(hiddenFormData);
  const days: string[] = [
    "Lun.",
    "Mar.",
    "Mer.",
    "Jeu.",
    "Ven.",
    "Sam.",
    "Dim.",
  ];

  const [today, setToday] = useState(dayjs());
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(null);
  const selectDayHandler: Function = (day: any): void => {
    setSelectedDay(day.date);

    if (startingFrom) {
      formData.dateDebut = `${day.date.format("DD-MM-YYYY")}`;
    } else {
      formData.dateFin = `${day.date.format("DD-MM-YYYY")}`;
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
  const areSameDate: Function = (inputDate: dayjs.Dayjs): boolean => {
    if (selectedDay !== null) {
      return (
        inputDate.toDate().toDateString() ===
        selectedDay.toDate().toDateString()
      );
    }

    return false;
  };

  return (
    <>
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-bold">
            {today.toDate().toLocaleString("fr", { month: "long" })},{" "}
            {today.toDate().toLocaleString("fr", { year: "numeric" })}
          </p>
          <div className="flex items-center gap-2">
            <a
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            >
              <ChevronLeft />
            </a>

            <p
              className="font-semibold cursor-pointer"
              onClick={() => {
                setToday(dayjs());
              }}
            >
              Aujourd'hui
            </p>
            <a
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            >
              <ChevronRight />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-7 text-sm">
          {days.map((day: string, index: number) => {
            return (
              <p key={index} className="w-14 h-14 grid place-content-center">
                {day}
              </p>
            );
          })}
        </div>
        <div className="grid grid-cols-7 text-sm">
          {generateDate(today.month(), today.year())[0].map(
            (day: any, index: number) => {
              return (
                <div key={index} className="w-14 h-14">
                  <p
                    className={`
										w-10 h-10 grid place-content-center rounded-full font-bold 
										${day.currentMonth ? "" : "text-gray-400"} 
										${
                      areSameDate(day.date)
                        ? `${startingFrom ? "bg-festa-blue" : "bg-festa-red"}`
                        : ""
                    }
                    ${
                      day.today && !areSameDate(day.date)
                        ? "border border-festa-yellow rounded-full"
                        : ""
                    }
										${!day.currentMonth ? "hidden" : ""}
									hover:bg-festa-pink cursor-pointer transition-all
									`}
                    onClick={() => selectDayHandler(day)}
                  >
                    {day.date.date()}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}

export default AgendaDateInput;
