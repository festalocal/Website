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

function LegalNotice(): JSX.Element {
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
      <div className="flex flex-col gap-4 mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <h1 className="text-festa-dark-blue text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl text-center">
          <b>Mentions légales</b>
        </h1>
        <ul>
          <li>
            <b>Forme de la société : </b> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </li>
          <li>
            <b>Capital social : </b> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </li>
          <li>
            <b>Siège social : </b> xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
          </li>
          <li>
            <b>Numéros d'appel (standard du siège social) : Tél : </b>{" "}
            xxxxxxxxxxxxx
          </li>
          <li>
            <b>Numéro de TVA : </b>xxxxxxxxxxxxxxxxx
          </li>
          <li>
            <b>Garantie financière : </b>xxxxxxxxxxxxx
          </li>
        </ul>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Mention 1</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            tenetur iure vero sit beatae aspernatur ea voluptas praesentium
            doloribus voluptate commodi sed illum quod eveniet pariatur aliquid,
            tempora impedit blanditiis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Delectus tenetur iure vero sit beatae aspernatur
            ea voluptas praesentium doloribus voluptate commodi sed illum quod
            eveniet pariatur aliquid, tempora impedit blanditiis! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Delectus tenetur iure
            vero sit beatae aspernatur ea voluptas praesentium doloribus
            voluptate commodi sed illum quod eveniet pariatur aliquid, tempora
            impedit blanditiis!
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Mention 2</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            tenetur iure vero sit beatae aspernatur ea voluptas praesentium
            doloribus voluptate commodi sed illum quod eveniet pariatur aliquid,
            tempora impedit blanditiis! Lorem ipsum dolor sit amet consectetur,
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Mention 3</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            tenetur iure vero sit beatae aspernatur ea voluptas praesentium
            doloribus voluptate commodi sed illum quod eveniet pariatur aliquid,
            tempora impedit blanditiis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Delectus tenetur iure vero sit beatae aspernatur
            ea voluptas praesentium doloribus voluptate commodi sed illum quod
            eveniet pariatur aliquid, tempora impedit blanditiis! Lorem ipsum
            voluptate commodi sed illum quod eveniet pariatur aliquid, tempora
            impedit blanditiis!
          </p>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            <b>Mention 4</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            tenetur iure vero sit beatae aspernatur ea voluptas praesentium
            doloribus voluptate commodi sed illum quod eveniet pariatur aliquid,
            tempora impedit blanditiis! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Delectus tenetur iure vero sit beatae aspernatur
            ea voluptas praesentium doloribus voluptate commodi sed illum quod
            eveniet pariatur aliquid, tempora impedit blanditiis! Lorem ipsum
            voluptate commodi sed illum quod eveniet pariatur aliquid, tempora
            impedit blanditiis!
          </p>
          <ul>
            <li>
              <b>element 1 : </b>xxxxxxxxxxxxxxxxx
            </li>
            <li>
              <b>element 2 : </b>xxxxxxxxxxxxx
            </li>
          </ul>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            consequuntur tempora temporibus excepturi magni tenetur dignissimos
            unde illum, porro dolorem facere nihil aliquid delectus facilis quae
            nobis eos error blanditiis?
          </p>
        </section>
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

export default LegalNotice;
