// React page components imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FestivalSearchBar from "../components/FestivalSearchBar";
import FestivalCard from "../components/FestivalCard";
// Imports events data
import et from "../assets/events.json";

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue() {
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Navbar />
        <FestivalSearchBar />
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {et.map((eventGroup) =>
          eventGroup.events.map((eventCard) => {
            if (eventCard != null) {
              return <FestivalCard key={eventCard.uid} event={eventCard} />;
            }
          })
        )}
      </div>
      <Footer
        fb_link="https://www.facebook.com/profile.php?id=100087768589954"
        insta_link="https://www.instagram.com/festa.local/"
        lkd_link="https://www.linkedin.com/company/festa-local/"
      ></Footer>
    </>
  );
}

export default FestivalsCatalogue;
