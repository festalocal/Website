import { lazy, useRef, useState } from "react";
const ChevronLeft = lazy(() => import("./ChevronLeft"));
const ChevronRight = lazy(() => import("./ChevronRight"));

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
  /* ---- Swipe Utilities : States - Variables - Handlers ---- */
  // const [swipeStart, setSwipeStart] = useState<number | null>(null);
  // const [swipeEnd, setSwipeEnd] = useState<number | null>(null);
  // // number of pixels covered to detect a swipe
  // const swipeThreshold: number = 50;

  // const onSwipeStart:Function = (e) => {
  //   // we are begining a new swipe event
  //   setSwipeEnd(null);
  //   // setting the swipe start x axis (column) pixel
  //   setSwipeStart(e.pageX);
  // }

  // const onSwipeEnd:Function = (e) => {
  //   if(!swipeStart || !swipeEnd) return;
  //   const distanceCovered: number = swipeStart - swipeEnd;
  //   if()
  // }
  /* -- END Swipe Utilities : States - Variables - Handlers -- */

  const [hovered, setHovered] = useState<boolean>(false);
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
  // const dragging:Function = (event: any) => {
  //   //console.log(event.target);
  //   console.log(event.pageX);
  // }


  return (
    <>
      {/* Carousel global container */}
      <div 
        className="transition ease-out duration-150 hover:ease-in hover:drop-shadow-2xl rounded-2xl drop-shadow-lg shadow-inner relative max-w-lg overflow-hidden"  
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {/* Images flex container */}
        <div
          key={Math.random()}
          className="rounded-2xl flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          //onMouseMove={dragging as React.MouseEventHandler<HTMLDivElement>}
        >
          {children}
        </div>
        {/* Button slider controls */}
        {hovered && 
          <div 
            key={Math.random()}
            className="opacity-0 transition-opacity ease-in duration-150 hover:opacity-100 absolute inset-0 flex items-center justify-between p-4"
          >
            <button
              key={Math.random()}
              onClick={previous}
              className="bg-white/80 w-6 h-6 hover:bg-white shadow rounded-full p-1.5"
            >
              <ChevronLeft key={Math.random()}/>
            </button>
            <button
              key={Math.random()}
              onClick={next}
              className="bg-white/80 w-6 h-6 hover:bg-white shadow rounded-full p-1.5"
            >
              <ChevronRight key={Math.random()}/>
            </button>
          </div>
        }
        
        {/* Indicators for the current position of the displayed slide */}
        <div key={Math.random()} className="absolute bottom-4 right-0 left-0">
          <div key={Math.random()} className="flex items-center justify-center gap-2">
            {children.map((_, i: number) => (
              <div
                key={Math.random()}
                className={`transition-all w-2 h-2 bg-white rounded-full ${
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
