// Importing React for lazy loading
import { Suspense, lazy } from "react";
// Page components imports
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const HeroBanner = lazy(() => import("../components/HeroBanner"));

/**
 * Home page
 * @returns
 */
function Home() {
  return (
    <>
      <Suspense>
        <Navbar></Navbar>
        <HeroBanner></HeroBanner>
        <Footer
          fb_link="https://www.facebook.com/profile.php?id=100087768589954"
          insta_link="https://www.instagram.com/festa.local/"
          lkd_link="https://www.linkedin.com/company/festa-local/"
        ></Footer>
      </Suspense>
    </>
  );
}

export default Home;
