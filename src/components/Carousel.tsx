import { lazy, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
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
function Carousel({ children }: Props): JSX.Element {
  //const sliderContainer = useRef<HTMLDivElement>(null);
  // boolean state to define if the device viewport is mobile or not
  // We want to disable the swipe features for browser events
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  /* ---- Swipe Utilities : States - Variables - Handlers ---- */
  // const [swipeStart, setSwipeStart] = useState<number | null>(null);
  // const [swipeEnd, setSwipeEnd] = useState<number | null>(null);
  // // number of pixels covered to detect a swipe
  // const swipeThreshold: number = 50;

  // const onSwipeStart:
  //   | React.TouchEventHandler
  //   | React.MouseEventHandler
  //   | TouchEvent = (e: any) => {
  //   // we are begining a new swipe event
  //   setSwipeEnd(null);
  //   // setting the swipe start x axis (column) pixel from the first
  //   // touch finger
  //   if (isMobile) {
  //     setSwipeStart(e.touches[0].pageX);
  //   } else {
  //     setSwipeStart(e.pageX);
  //   }
  //   // console.log(e);
  // };
  // const onSwipeEnd:
  //   | React.TouchEventHandler
  //   | React.MouseEventHandler
  //   | TouchEvent = (e: any) => {
  //   let stopSwipe: number | null = null;
  //   if (isMobile) {
  //     stopSwipe = e.touches[0].pageX;
  //   } else {
  //     stopSwipe = e.pageX;
  //   }
  //   setSwipeEnd(stopSwipe);
  //   console.log(e);
  //   //if (swipeStart == null || swipeEnd == null) return;
  //   if (swipeStart != null && stopSwipe != null) {
  //     const distanceCovered: number = Math.abs(swipeStart - stopSwipe);
  //     // console.log(`distance covered : ${distanceCovered}`);
  //     if (distanceCovered > swipeThreshold) {
  //       if (swipeStart > stopSwipe) {
  //         next(e);
  //       } else {
  //         previous(e);
  //       }
  //     }
  //   }
  // };

  // const swipping:
  //   | React.TouchEventHandler
  //   | React.MouseEventHandler
  //   | Function = (event: any) => {
  //   //console.log(event);
  //   // if (swipeStart != null && swipeEnd == null) {
  //   //   console.log(event.pageX);
  //   //   const distanceCovered: number = Math.abs(swipeStart - event.pageX);
  //   //   const translateDistance: number | null = null;
  //   //   if (swipeStart > event.pageX) {
  //   //     translateDistance =
  //   //       (-distanceCovered / sliderContainer.current?.clientWidth) * 100;
  //   //   } else {
  //   //     translateDistance =
  //   //       (distanceCovered / sliderContainer.current?.clientWidth) * 100;
  //   //   }
  //   //   console.log(translateDistance);
  //   //   sliderContainer.style.top = `${translateDistance}`;
  //   // }
  // };
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

  const updateViewport = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurr((curr) => (curr === children.length - 1 ? 0 : curr + 1));
    },
    onSwipedRight: () => {
      setCurr((curr) => (curr === 0 ? children.length - 1 : curr - 1));
    },
  });
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
          key={"carousel"}
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
          //ref={sliderContainer}
          {...handlers}
          // onTouchStart={onSwipeStart as React.TouchEventHandler} // for mobile support
          // onTouchMove={swipping as React.TouchEventHandler} // for mobile support
          // onTouchEnd={onSwipeEnd as React.TouchEventHandler} // for mobile support
          // onMouseDown={onSwipeStart as React.MouseEventHandler} // for browser support
          // onMouseMove={swipping as React.MouseEventHandler} // for browser support
          // onMouseUp={onSwipeEnd as React.MouseEventHandler} // for browser support
        >
          {children}
        </div>

        {/* Button slider controls */}
        {hovered && !isMobile && children.length > 1 && (
          <div
            key={"buttons"}
            className="hover:fade-in absolute inset-0 flex items-center justify-between p-4"
          >
            <button
              key={Math.random()}
              onClick={previous as React.MouseEventHandler}
            >
              <ChevronLeft key={Math.random()} />
            </button>
            <button
              key={Math.random()}
              onClick={next as React.MouseEventHandler}
            >
              <ChevronRight key={Math.random()} />
            </button>
          </div>
        )}

        {/* Indicators for the current position of the displayed slide */}
        {children.length > 1 && (
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
        )}
      </div>
    </>
  );
}

export default Carousel;
