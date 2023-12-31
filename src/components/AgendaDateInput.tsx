import { lazy, useState, useContext } from "react";
import { generateDate } from "../utils/calendar";
import { urlToFormData } from "../pages/FestivalsCatalogue";
import { hiddenFormData } from "./FestivalSearchBar";
import dayjs from "dayjs";
import { DateFilterParameter } from "./FestivalSearchBar";

const ChevronLeft = lazy(() => import("./ChevronLeft"));
const ChevronRight = lazy(() => import("./ChevronRight"));

interface Props {
  setDateDebutText: Function;
  setDateFinText: Function;
  startingFrom: boolean;
}

export const whichDateParamIsSet: Function = (
  firstDate: string | null,
  secondDate: string | null
): DateFilterParameter => {
  if (
    firstDate !== null &&
    firstDate !== "" &&
    secondDate !== null &&
    secondDate !== ""
  ) {
    return DateFilterParameter.IN_PERIOD;
  }
  if (
    firstDate !== null &&
    firstDate !== "" &&
    (secondDate === null || secondDate === "")
  ) {
    return DateFilterParameter.AFTER;
  }
  if (
    (firstDate === null || firstDate === "") &&
    secondDate !== null &&
    secondDate !== ""
  ) {
    return DateFilterParameter.BEFORE;
  }
  return DateFilterParameter.IN_PERIOD;
};

function AgendaDateInput({
  setDateDebutText,
  setDateFinText,
  startingFrom,
}: Props): JSX.Element {
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
  const [selectedDay, setSelectedDay] = useState<dayjs.Dayjs | null>(() => {
    if (startingFrom) {
      if (
        formData.dateDebut !== "" &&
        formData.dateDebut !== null &&
        formData.dateDebut !== undefined
      ) {
        const dateValues: string[] = formData.dateDebut.split("-");
        setToday(dayjs(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`));
        return dayjs(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`);
      }
    } else {
      if (
        formData.dateFin !== "" &&
        formData.dateFin !== null &&
        formData.dateFin !== undefined
      ) {
        const dateValues: string[] = formData.dateFin.split("-");
        setToday(dayjs(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`));
        return dayjs(`${dateValues[2]}-${dateValues[1]}-${dateValues[0]}`);
      }
    }
    return null;
  });

  const selectDayHandler: Function = (day: any): void => {
    setSelectedDay(day.date);

    if (startingFrom) {
      formData.dateDebut = `${day.date.format("DD-MM-YYYY")}`;
      setDateDebutText(`${day.date.format("DD/MM/YYYY")}`);
    } else {
      formData.dateFin = `${day.date.format("DD-MM-YYYY")}`;
      setDateFinText(`${day.date.format("DD/MM/YYYY")}`);
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
  const areSameDate: Function = (inputDate: dayjs.Dayjs): boolean => {
    //console.log(selectedDay);
    if (selectedDay !== null) {
      return (
        inputDate.toDate().toDateString() ===
        selectedDay.toDate().toDateString()
      );
    }

    return false;
  };

  const selectedDayLineDisplay: Function = (
    agendaTypeIsStart: boolean
  ): JSX.Element => {
    if (agendaTypeIsStart) {
      return (
        <p className="font-bold">
          A partir du{" "}
          {formData.dateDebut !== null ? (
            <b className="text-festa-blue">{formData.dateDebut}</b>
          ) : (
            ". . ."
          )}
        </p>
      );
    }
    return (
      <p className="font-bold">
        Jusqu'au{" "}
        {formData.dateFin !== null ? (
          <b className="text-festa-red">{formData.dateFin}</b>
        ) : (
          ". . ."
        )}
      </p>
    );
  };

  return (
    <>
      {selectedDayLineDisplay(startingFrom)}
      <div>
        <div className="flex justify-between">
          <p className="text-lg font-bold">
            {today.toDate().toLocaleString("fr", { month: "long" })},{" "}
            {today.toDate().toLocaleString("fr", { year: "numeric" })}
          </p>
          <div className="flex items-center gap-2">
            <div
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            >
              <ChevronLeft />
            </div>

            <p
              className="font-semibold cursor-pointer"
              onClick={() => {
                setToday(dayjs());
              }}
            >
              Aujourd'hui
            </p>
            <div
              className="cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            >
              <ChevronRight />
            </div>
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
