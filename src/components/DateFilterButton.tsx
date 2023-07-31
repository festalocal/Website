import { useState } from "react";

interface Props {
  buttonText: string;
}

function DateFilterButton({ buttonText }: Props): JSX.Element {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <>
      <div
        className="py-3 md:py-4 pr-4 hover:text-white hover:cursor-pointer hover:bg-festa-blue/100 hover:rounded-full
            hover:transition hover:ease-out hover:delay-75 hover:duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <a
          className={`
            hidden min-w-min px-2 md:flex items-center gap-2  
            ${hovered ? "border-none" : "border-festa-light-blue border-l-2"}
            `}
        >
          <span className="material-symbols-outlined">event</span>
          <div className="flex flex-col whitespace-nowrap justify-center items-center">
            <p>{buttonText}</p>
            <p>Date</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default DateFilterButton;
