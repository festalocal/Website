import { useState } from "react";
import ChevronLeft from "./ChevronLeft";
import ChevronRight from "./ChevronRight";

// Fixing the type of the JSX child elements of the Carousel component
type Props = {
  children: JSX.Element[]; // We an pass here an array of JSX elements of image containers
};

/**
 * Images Carousel React component
 * that has control elements on hover and indicators
 * of the current slide.
 *
 */
function Carousel({ children }: Props) {
  /**
   * Interface for the handling of the Carousel controls
   * when clicking either on previous or next slide button.
   */
  const [curr, setCurr] = useState<number>(0);
  // Handler function to come back to the previous slide
  const previous = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  // Handler function to pass to the next slide.
  const next = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  return (
    <>
      {/* Carousel global container */}
      <div className="shadow-inner drop-shadow-xl relative max-w-lg overflow-hidden">
        {/* Images flex container */}
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {children}
        </div>
        {/* Button slider controls */}
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={previous}
            className="bg-white/80 w-6 h-6 hover:bg-white shadow rounded-full p-1.5"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="bg-white/80 w-6 h-6 hover:bg-white shadow rounded-full p-1.5"
          >
            <ChevronRight />
          </button>
        </div>
        {/* Indicators for the current position of the displayed slide */}
        <div className="absolute bottom-4 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {children.map((_, i: number) => (
              <div
                className={`transition-all w-3 h-3 bg-white rounded-full ${
                  curr === i ? "p-1" : "bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
