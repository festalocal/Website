// React modules imports
import {
  Suspense,
  lazy,
  useEffect,
  useState,
  useRef,
  createContext,
} from "react";
// Importing block for higher order component
// with faster rendering times thanks to million
// import { block } from "million/react";
import axios, { CancelTokenSource } from "axios";
import { useSearchParams } from "react-router-dom";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalSearchBar = lazy(() => import("../components/FestivalSearchBar"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));

/**
 * Interface that contains
 * all the data of filters that can
 * be sent to the API
 */
export interface searchFilters {
  titre?: string | null;
  ville?: string | null;
  dateParam?: string | null;
  dateDebut?: string | null;
  dateFin?: string | null;
}

export let urlToFormData = createContext<searchFilters>({});

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue(): JSX.Element {
  /* ------------------ FETCHING FILTER PARAMETERS ------------------ */
  // Query hook that is used to read the parameters of a query
  // from the current URL
  const [searchParams] = useSearchParams();
  let searchFiltersValues: searchFilters = {
    titre: searchParams.get("q"),
    ville: searchParams.get("ville"),
    dateParam: searchParams.get("dateParam"),
    dateDebut: searchParams.get("dateDebut"),
    dateFin: searchParams.get("dateFin"),
  };
  /* ---------------- END FETCHING FILTER PARAMETERS ---------------- */

  /* ---------------- INFINITE SCROLL STATES ---------------- */
  // festivals state array with it's setter
  const [festivals, setFestivals] = useState<Array<any>>([]);
  // isLoading state to notify if we are loading new festivals
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // hasMore state to notify if we still have data available to fetch from the API
  const [hasMore, setHasMore] = useState<boolean>(true);
  // state error if there's any issues when fetching data from the API
  const [error, setError] = useState<any>(null);
  // state of the current number page of festival (packets of festivals)
  // See documentation of the API, it's packets of 20 festivals by default
  const [page, setPage] = useState<number>(0);
  /* ---------------- END INFINITE SCROLL STATES ---------------- */
  // Reference for the observer target that detects intersection
  const observerTargert = useRef<
    React.MutableRefObject<any> | Element | React.LegacyRef<HTMLDivElement>
  >(null);

  // boolean state to define if the device viewport is mobile or not
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  // Handler function to determine if wether the current viewport is a mobile or not
  const updateViewport: EventListener = () => {
    setIsMobile(window.innerWidth <= 768);
    setFestivalsPacketSize(isMobile ? 4 : 15);
  };
  // State for the festival packet size per API request
  const [festivalsPacketSize, setFestivalsPacketSize] = useState<number>(
    isMobile ? 4 : 15
  );
  /**
   * Fetch call that gets all the festivals from
   * the backend API.
   * @param { CancelTokenSource } cancelToken
   */
  const fetchAllFestivals: CallableFunction = async (
    cancelToken: CancelTokenSource,
    page: number,
    festivalsPacketSize: number
  ): Promise<any> => {
    // Indicating that we are currently fetching data => loading
    setIsLoading(true);
    // Starting the fetch with no errors
    setError(null);
    let apiPath = `https://api-docker-image-km7u7kfpba-od.a.run.app/api/fetes/?offset=${page}&limit=${festivalsPacketSize}`;
    if (searchFiltersValues.titre !== null) {
      apiPath += `&q=${searchFiltersValues.titre}`;
    }
    if (searchFiltersValues.ville !== null) {
      apiPath += `&ville=${searchFiltersValues.ville}`;
    }
    if (searchFiltersValues.dateParam !== null) {
      apiPath += `&dateParam=${searchFiltersValues.dateParam}`;
    }
    if (
      searchFiltersValues.dateDebut !== null &&
      searchFiltersValues.dateDebut !== undefined
    ) {
      apiPath += `&dateStart=${searchFiltersValues.dateDebut}`;
    }
    if (
      searchFiltersValues.dateFin !== null &&
      searchFiltersValues.dateFin !== undefined
    ) {
      apiPath += `&dateEnd=${searchFiltersValues.dateFin}`;
    }
    // Configuring the API call options and API path
    let axiosConfig: Object = {
      method: "GET",
      url: apiPath,
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
          console.log(res.data);
          if (res.data.events.length === 0) {
            setHasMore(false);
          } else {
            setPage((prevPage) => prevPage + festivalsPacketSize);
            setFestivals((previousFestival) => [
              ...previousFestival,
              ...res.data.events,
            ]);
          }
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
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
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
      if (observerTargert.current) {
        observer.unobserve(observerTargert.current as Element);
      }
      cancelToken.cancel();
    };
  }, [observerTargert, page, festivalsPacketSize, hasMore]);

  return (
    <>
      <div
        key={Math.random()}
        className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg"
      >
        <Suspense>
          <Navbar key={Math.random()} />
          <urlToFormData.Provider
            value={{
              titre: searchFiltersValues.titre,
              ville: searchFiltersValues.ville,
              dateParam: searchFiltersValues.dateParam,
              dateDebut: searchFiltersValues.dateDebut,
              dateFin: searchFiltersValues.dateFin,
            }}
          >
            <FestivalSearchBar key={Math.random()} />
          </urlToFormData.Provider>
        </Suspense>
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {festivals.map((festival) => (
          <Suspense key={festival.id}>
            <FestivalCard
              key={festival.id}
              event={festival}
              withDescription={false}
            />
          </Suspense>
        ))}

        <div ref={observerTargert as React.LegacyRef<HTMLDivElement>}></div>
        {isLoading && (
          <p className="col-span-full text-center mx-auto">Chargement . . .</p>
        )}
        {!isLoading && festivals.length === 0 && (
          <p className="col-span-full text-center mx-auto">
            Nous n'avons pas trouvé de résultats suivants vos critères.
          </p>
        )}
      </div>

      {error && "Error: {error.message}"}
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
