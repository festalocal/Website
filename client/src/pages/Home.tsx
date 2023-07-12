// Importing React for lazy loading
import { Suspense, lazy } from "react";
// Importing block for higher order component
// with faster rendering times thanks to million
// import { block } from "million/react";
// Page components imports
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const HeroBanner = lazy(() => import("../components/HeroBanner"));

/**
 * Home page
 * @returns
 */
// wrapping component around millionjs block HOC in order to
// block reactjs virtual DOM and use millionjs faster virtual DOM
// ADD THIS FEATURE AFTER
const Home = () => {
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
};
export default Home;
