import { useState } from "react";
interface Props {
  dateValue: string | null | undefined;
  buttonText: string;
  toggled: boolean;
}

function DateFilterButton({
  dateValue,
  buttonText,
  toggled,
}: Props): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <div
        className={`py-3 md:py-4 pr-4 hover:text-white hover:cursor-pointer hover:bg-festa-pink hover:rounded-full
            hover:transition hover:ease-out hover:delay-75 hover:duration-300
            ${
              toggled
                ? "text-white cursor-pointer bg-festa-blue/100 rounded-full"
                : ""
            }
            `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`
            hidden min-w-min px-2 md:flex items-center gap-2  
            ${
              hovered || toggled
                ? "border-none"
                : "border-festa-light-blue border-l-2"
            }
            `}
        >
          <span className="material-symbols-outlined">event</span>
          <div className="flex flex-col whitespace-nowrap justify-center items-center">
            <p>{buttonText}</p>
            {dateValue !== null &&
            dateValue !== undefined &&
            dateValue !== "" ? (
              <p className="font-bold">{dateValue}</p>
            ) : (
              <p>Date</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DateFilterButton;
