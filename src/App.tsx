// Page components imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
      <Footer
        fb_link="https://www.facebook.com/profile.php?id=100087768589954"
        insta_link="https://www.instagram.com/festa.local/"
        lkd_link="https://www.linkedin.com/company/festa-local/"
      ></Footer>
    </>
  );
}

export default App;
