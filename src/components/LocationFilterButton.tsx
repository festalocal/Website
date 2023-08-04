import { useState } from "react";

interface Props {
  toggled: boolean;
  townLocation: string | null | undefined;
}

function LocationFilterButton({ toggled, townLocation }: Props): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <div
        className={`py-3 md:py-4 pr-4 
          hover:text-white hover:cursor-pointer hover:bg-festa-pink hover:rounded-full
            hover:transition hover:ease-out hover:delay-75 hover:duration-300 h-full
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
            hidden min-w-min px-2 md:flex items-center gap-2  h-full
            ${
              hovered || toggled
                ? "border-none"
                : "border-festa-light-blue border-l-2"
            }
            `}
        >
          <span className="material-symbols-outlined">location_on</span>
          <div className="flex flex-col whitespace-nowrap justify-center items-center">
            <p>Localisation</p>
            {townLocation !== null && townLocation !== "" && (
              <p className="font-bold">{townLocation}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default LocationFilterButton;
