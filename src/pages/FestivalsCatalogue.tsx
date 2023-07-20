// React page components imports
import { Suspense, lazy, useEffect, useState, useRef } from "react";
// Importing block for higher order component
// with faster rendering times thanks to million
// import { block } from "million/react";
import axios, { CancelTokenSource } from "axios";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalSearchBar = lazy(() => import("../components/FestivalSearchBar"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue() { 
  /* ------------------ INFINITE SCROLL STATES ------------------ */
  // festivals state array with it's setter
  const [festivals, setFestivals] = useState<Array<any>>([]);
  // isLoading state to notify if we are loading new festivals
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // state error if there's any issues when fetching data from the API
  const [error, setError] = useState<any>(null);
  // state of the current number page of festival (packets of festivals)
  // See documentation of the API, it's packets of 20 festivals by default
  const [page, setPage] = useState<number>(0)
  /* ---------------- END INFINITE SCROLL STATES ---------------- */
  // Reference for the observer target that detects intersection
  const observerTargert = useRef<React.MutableRefObject<any> | Element | React.LegacyRef<HTMLDivElement>>(null);

  // boolean state to define if the device viewport is mobile or not
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  // Handler function to determine if wether the current viewport is a mobile or not
  const updateViewport:EventListener = () => {
    setIsMobile(window.innerWidth <= 768);
    setFestivalsPacketSize(isMobile ? 4 : 15);
  }
  // State for the festival packet size per API request
  const [festivalsPacketSize, setFestivalsPacketSize] = useState<number>(isMobile ? 4 : 15);
  /**
   * Fetch call that gets all the festivals from
   * the backend API.
   * @param { CancelTokenSource } cancelToken
   */
  const fetchAllFestivals: CallableFunction = async (
    cancelToken: CancelTokenSource, page: number, festivalsPacketSize: number
  ): Promise<any> => {
    // Indicating that we are currently fetching data => loading
    setIsLoading(true);
    // Starting the fetch with no errors
    setError(null);

    // Configuring the API call options and API path
    let axiosConfig: Object = {
      method: "GET",
      url: `https://api-docker-image-km7u7kfpba-od.a.run.app/api/fetes?offset=${page}&limit=${festivalsPacketSize}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      cancelToken: cancelToken.token,
    };
    try {
      // Axios API HTTP call
      await axios(axiosConfig)
        .then((res) => {
          // In case we receive the data
          // We update the festival state array
          // We pass to the next packet of festivals for the next API request
          setPage(prevPage => prevPage + festivalsPacketSize);
          setFestivals((previousFestival) => [...previousFestival, ...res.data]);
        })
        .catch((error) => {
          // In case we have an error
          if (axios.isCancel(error)) {
            console.log("cancelled");
          } else {
            // Updating the error state
            setError(error);
            // Loading abruptly stopped
            setIsLoading(false);
            console.error({ error });
          }
        })
        .finally(() => {
           // We've finished loading
           setIsLoading(false);
          console.log("finished request successfully");
        });
    } catch (error) {
      console.error("Error while Get fetch request");
    }
  };

  /* 
  Effect hook that synchronize the component festival state array
  with the backend external API.
  */
  useEffect(() => {
    window.addEventListener("resize", updateViewport);

    const cancelToken: CancelTokenSource = axios.CancelToken.source();

    const observer: IntersectionObserver = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          
          fetchAllFestivals(cancelToken, page, festivalsPacketSize);
        }
      },
      { threshold: 1 }
    );

    if (observerTargert.current) {
      observer.observe(observerTargert.current as Element);
    }

    // fetchAllFestivals(cancelToken);

    // Clean up function
    return () => {
      if(observerTargert.current) {
        observer.unobserve(observerTargert.current as Element);
      }
      cancelToken.cancel();
    };
  }, [observerTargert, page, festivalsPacketSize]);

  return (
    <>
      <div key={Math.random()} className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar key={Math.random()}/>
          <FestivalSearchBar key={Math.random()}/>
        </Suspense>
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 bg-festa-beige">
        {festivals.map((festival) => (
          <Suspense>
              <FestivalCard
                key={festival.id}
                event={festival}
                withDescription={false}
              />
          </Suspense>
        ))}
                 
        {isLoading && "<p>Loading...<p/>"}
        {error && "<p>Error: {error.message}<p/>"}
        <div ref={observerTargert as React.LegacyRef<HTMLDivElement>}></div>
      </div>
      <Suspense>
        <Footer
          fb_link="https://www.facebook.com/profile.php?id=100087768589954"
          insta_link="https://www.instagram.com/festa.local/"
          lkd_link="https://www.linkedin.com/company/festa-local/"
        ></Footer>
      </Suspense>
    </>
  );
}

export default FestivalsCatalogue;
