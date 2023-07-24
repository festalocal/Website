import { lazy, useEffect, useRef, useState } from "react";
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
  const sliderContainer = useRef<HTMLDivElement>(null);
  // boolean state to define if the device viewport is mobile or not
  // We want to disable the swipe features for browser events
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  /* ---- Swipe Utilities : States - Variables - Handlers ---- */
  const [swipeStart, setSwipeStart] = useState<number | null>(null);
  const [swipeEnd, setSwipeEnd] = useState<number | null>(null);
  // number of pixels covered to detect a swipe
  const swipeThreshold: number = 50;

  const onSwipeStart: React.TouchEventHandler | React.MouseEventHandler = (
    e: any
  ) => {
    // we are begining a new swipe event
    setSwipeEnd(null);
    // setting the swipe start x axis (column) pixel from the first
    // touch finger
    setSwipeStart(e.pageX);
  };
  const onSwipeEnd: React.TouchEventHandler | React.MouseEventHandler = (
    e: any
  ) => {
    setSwipeEnd(e.pageX);
    console.log(swipeEnd);
    //if (swipeStart == null || swipeEnd == null) return;
    if (swipeStart != null) {
      const distanceCovered: number = Math.abs(swipeStart - e.pageX);
      // console.log(`distance covered : ${distanceCovered}`);
      if (distanceCovered > swipeThreshold) {
        if (swipeStart > e.pageX) {
          next(e);
        } else {
          previous(e);
        }
      }
    }
  };

  // const swipping: React.TouchEventHandler | React.MouseEventHandler = (
  //   event: any
  // ) => {
  //   if (swipeStart != null && swipeEnd == null) {
  //     //console.log(event.pageX);
  //     // const distanceCovered: number = Math.abs(swipeStart - event.pageX);
  //     // const translateDistance: number | null = null;
  //     // if (swipeStart > event.pageX) {
  //     //   translateDistance =
  //     //     (-distanceCovered / sliderContainer.current?.clientWidth) * 100;
  //     // } else {
  //     //   translateDistance =
  //     //     (distanceCovered / sliderContainer.current?.clientWidth) * 100;
  //     // }
  //     // console.log(translateDistance);
  //     // sliderContainer.style.top = `${translateDistance}`;
  //   }
  // };
  /* -- END Swipe Utilities : States - Variables - Handlers -- */

  const [hovered, setHovered] = useState<boolean>(false);

  /**
   * Interface for the handling of the Carousel controls
   * when clicking either on previous or next slide button.
   */
  const [curr, setCurr] = useState<number>(0);
  // Handler function to come back to the previous slide
  const previous: React.MouseEventHandler<HTMLButtonElement> = () =>
    setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
  // Handler function to pass to the next slide.
  const next: React.MouseEventHandler<HTMLButtonElement> = () =>
    setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));

  const updateViewport = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
  });

  return (
    <>
      {/* Carousel global container */}
      <div
        className="transition ease-out duration-150 hover:ease-in hover:drop-shadow-2xl rounded-2xl drop-shadow-lg shadow-inner relative max-w-lg overflow-hidden"
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        {/* Images flex container */}
        <div
          key={Math.random()}
          className="rounded-2xl flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          ref={sliderContainer}
          onTouchStart={onSwipeStart as React.TouchEventHandler} // for mobile support
          //onTouchMove={swipping as React.TouchEventHandler} // for mobile support
          onTouchEnd={onSwipeEnd as React.TouchEventHandler} // for mobile support
          onMouseDown={onSwipeStart as React.MouseEventHandler} // for browser support
          //onMouseMove={swipping as React.MouseEventHandler} // for browser support
          onMouseUp={onSwipeEnd as React.MouseEventHandler} // for browser support
          //onTouchMove={dragging}
        >
          {children}
        </div>

        {/* Button slider controls */}
        {hovered !== false && isMobile == false && (
          <div
            key={Math.random()}
            className="fade-in hover:opacity-100 absolute inset-0 flex items-center justify-between p-4"
          >
            <button key={Math.random()} onClick={previous}>
              <ChevronLeft key={Math.random()} />
            </button>
            <button key={Math.random()} onClick={next}>
              <ChevronRight key={Math.random()} />
            </button>
          </div>
        )}

        {/* Indicators for the current position of the displayed slide */}
        <div key={Math.random()} className="absolute bottom-4 right-0 left-0">
          <div
            key={Math.random()}
            className="flex items-center justify-center gap-2"
          >
            {children.map((_, i: number) => (
              <div
                key={Math.random()}
                onClick={() => setCurr(i)}
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
