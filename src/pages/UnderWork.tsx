// Importing React for lazy loading
import { LazyExoticComponent, Suspense, lazy } from "react";
// Importing block for higher order component
// with faster rendering times thanks to million
// import { block } from "million/react";
// Page components imports
const Navbar: LazyExoticComponent<() => JSX.Element> = lazy(
  () => import("../components/Navbar")
);
import { Props } from "./../components/Footer";
const Footer: LazyExoticComponent<
  ({ fb_link, insta_link, lkd_link }: Props) => JSX.Element
> = lazy(() => import("../components/Footer"));

/**
 * Under work page
 * @returns
 */
function UnderWork(): JSX.Element {
  return (
    <>
      <div
        key={Math.random()}
        className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg"
      >
        <Suspense>
          <Navbar key={Math.random()} />
        </Suspense>
      </div>
      <div className="m-4 gap-4 flex justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
        <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
          construction
        </span>
        <h1 className="whitespace-normal">
          Cette page est en cours de construction
        </h1>
        <span className="material-symbols-outlined text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl">
          construction
        </span>
      </div>
      <img
        src="https://cdn.dribbble.com/users/330915/screenshots/3587000/10_coding_dribbble.gif"
        className="block mx-auto"
      ></img>
      <Suspense>
        <Footer
          fb_link="https://www.facebook.com/profile.php?id=100087768589954"
          insta_link="https://www.instagram.com/festa.local/"
          lkd_link="https://www.linkedin.com/company/festa-local/"
        />
      </Suspense>
    </>
  );
}

export default UnderWork;
