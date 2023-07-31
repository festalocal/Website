import { useState } from "react";

function LocationFilterButton(): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <>
      <div
        className="py-3 md:py-4 pr-4 hover:text-white hover:cursor-pointer hover:bg-festa-blue/100 hover:rounded-full
            hover:transition hover:ease-out hover:delay-75 hover:duration-300 h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a
          className={`
            hidden min-w-min px-2 md:flex items-center gap-2  h-full
            ${hovered ? "border-none" : "border-festa-light-blue border-l-2"}
            `}
        >
          <span className="material-symbols-outlined">location_on</span>

          <p>Date</p>
        </a>
      </div>
    </>
  );
}

export default LocationFilterButton;
