// React page components imports
import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalSearchBar = lazy(() => import("../components/FestivalSearchBar"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));
// Imports events data
import et from "../assets/events.json";

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue() {
  let cardId: number = -1;
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
          <FestivalSearchBar />
        </Suspense>
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 bg-festa-beige">
        {et.map((eventGroup) =>
          eventGroup.events.map((eventCard) => {
            if (eventCard != null) {
              cardId++;
              return (
                <>
                  <Suspense>
                    <FestivalCard key={cardId} event={eventCard} />
                  </Suspense>
                </>
              );
            }
          })
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

export default FestivalsCatalogue;
