// React page components imports
import { Suspense, lazy, useEffect, useState } from "react";
import axios from "axios";
import { Params, useParams } from "react-router-dom";
const EnrollButton = lazy(() => import("../components/EnrollButton"));
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));

/**
 * Page Details Fête
 * @returns
 */
function FestivalDetails() {
  // evenement state with it's setter
  const [evenement, setEvenement] = useState<Object>({});

  /**
   * Fetch call that gets the festival of given Id from
   * the backend API.
   * @returns { JSON } Evenement JSON Object.
   */
  const fetchEvenement = async () => {
    // Configuring the API call options and API path
    const params: Readonly<Params<string>> = useParams();
    console.log(params);
    const axiosConfig: Object = {
      method: "GET",
      url: `http://localhost:3000/api/fetes/${params.id}`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
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
          console.error({ error });
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
    fetchEvenement;
  }, []);

  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
        </Suspense>
      </div>
      <div className="flex flex-col items-end gap-2 mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 bg-festa-beige">
        <FestivalCard event={evenement} withDescription={true} />
        <EnrollButton />
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
