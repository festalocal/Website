import { lazy, useState } from "react";
import { generateDate } from "../utils/calendar";
import dayjs from "dayjs";
const ChevronLeft = lazy(() => import("./ChevronLeft"));
const ChevronRight = lazy(() => import("./ChevronRight"));

function AgendaDateInput(): JSX.Element {
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
  const [selectedDay, setSelectedDay] = useState(today);

  const areSameDate: Function = (inputDate: dayjs.Dayjs): boolean => {
    console.log({ dateInput: inputDate });
    console.log({ selcedtedDay: selectedDay.date });
    return (
      inputDate.toDate().toDateString() === selectedDay.toDate().toDateString()
    );
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
										${day.today ? "bg-festa-light-blue" : ""}
										${areSameDate(day.date) ? "bg-festa-blue" : ""}
										${!day.currentMonth ? "hidden" : ""}
									hover:bg-festa-pink cursor-pointer transition-all
									`}
                    onClick={() => setSelectedDay(day.date)}
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
