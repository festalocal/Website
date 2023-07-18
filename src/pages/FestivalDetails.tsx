// React page components imports
import { Suspense, lazy, useEffect, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { Params, useParams } from "react-router-dom";
const EnrollButton = lazy(() => import("../components/EnrollButton"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));
const FestivalGallery = lazy(() => import("../components/FestivalGallery"));
/**
 * Page Details Fête
 * @returns
 */
function FestivalDetails() {
  // boolean state to define if the device viewport is mobile or not
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
  // evenement state with it's setter
  const [evenement, setEvenement] = useState<Object>({});
  // Extracting the evend id for the url path
  const params: Readonly<Params<string>> = useParams();
  const evendId: string = params.id != undefined ? params.id : "";

  const updateViewport = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
  });

  /**
   * Fetch call that gets the festival of given Id from
   * the backend API.
   * @param { CancelTokenSource } cancelToken
   */
  const fetchEvenement: CallableFunction = async (
    cancelToken: CancelTokenSource
  ): Promise<any> => {
    // Configuring the API call options and API path
    const axiosConfig: Object = {
      method: "GET",
      url: `https://api-docker-image-km7u7kfpba-od.a.run.app/api/fetes/${evendId}`,
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
          // We update the evenement
          setEvenement(res.data);
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
      console.error("Error while Get fetch request :", error);
    }
  };

  /* 
  Effect hook that synchronize the component evenement state
  with the backend external API.
  */
  useEffect(() => {
    // To cancel API fetch request when changing component or going to
    // another page.
    const cancelToken: CancelTokenSource = axios.CancelToken.source();
    fetchEvenement(cancelToken);

    // clean up function
    return () => {
      // Signals to DOM change observers to cancel any activity
      cancelToken.cancel();
    };
  }, [evendId]);

  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
        </Suspense>
      </div>
      <div className="flex flex-col items-end gap-2 mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        {isMobile ? (
          <>
            <FestivalCard
              key={evendId}
              event={evenement}
              withDescription={true}
            />
            <EnrollButton />
          </>
        ) : (
          <>
            <FestivalGallery key={evendId} event={evenement} />
          </>
        )}
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

export default FestivalDetails;
