// React page components imports
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FestivalSearchBar from "../components/FestivalSearchBar";

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue() {
  return (
    <>
      <div className="w-full flex flex-col">
        <Navbar />
        <FestivalSearchBar />
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
