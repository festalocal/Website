// React page components imports
import { Suspense, lazy, useEffect, useState } from "react";
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
  // festivals state array with it's setter
  const [festivals, setFestivals] = useState<Array<any>>([]);

  /**
   * Fetch call that gets all the festivals from
   * the backend API.
   * @param { CancelTokenSource } cancelToken
   */
  const fetchAllFestivals: CallableFunction = async (
    cancelToken: CancelTokenSource
  ): Promise<any> => {
    // Configuring the API call options and API path
    const axiosConfig: Object = {
      method: "GET",
      url: "http://localhost:3000/api/fetes",
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
          setFestivals(res.data);
        })
        .catch((error) => {
          // In case we have an error
          if (axios.isCancel(error)) {
            console.log("cancelled");
          } else {
            console.error({ error });
          }
        })
        .finally(() => {
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
    const cancelToken: CancelTokenSource = axios.CancelToken.source();

    fetchAllFestivals(cancelToken);

    // Clean up function
    return () => {
      cancelToken.cancel();
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
          <FestivalSearchBar />
        </Suspense>
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 bg-festa-beige">
        {festivals.map((festival) => (
          <Suspense>
            <FestivalCard event={festival} withDescription={false} />
          </Suspense>
        ))}
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
