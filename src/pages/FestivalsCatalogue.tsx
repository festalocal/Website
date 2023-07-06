// React page components imports
import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalSearchBar = lazy(() => import("../components/FestivalSearchBar"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));

/**
 * Page Trouve ta fête
 * @returns
 */
function FestivalsCatalogue() {
  const fetchedEvent: Object = {
    title: "Coachella 2023",
    localisation: "1515 Sixth Street Coachella CA 92236 United States",
    dateDebut: "05/07/2023",
    dateFin: "10/07/2023",
    images: [
      "/src/assets/image1.png",
      "/src/assets/image2.png",
      "/src/assets/image3.png",
      "/src/assets/image4.png",
      "/src/assets/image5.png",
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis, tellus a maximus malesuada, velit tellus venenatis purus, nec bibendum elit sapien nec ipsum. Vivamus ultricies urna nec erat lacinia, vel posuere diam venenatis. Cras at nunc pellentesque, finibus mauris id, porta nisl. Vestibulum tincidunt orci non nunc sagittis luctus. Fusce a tellus vel leo euismod ultrices vitae sit amet quam. Maecenas ac mauris et enim malesuada tristique. Donec non turpis ut sapien venenatis volutpat. Aenean enim nunc, condimentum eget iaculis ac, vehicula et felis. Aliquam dapibus urna nibh, vitae commodo erat auctor suscipit. Integer iaculis libero et commodo feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  };
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
          <FestivalSearchBar />
        </Suspense>
      </div>
      <div className="mx-auto pb-14 py-8 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 grid gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 bg-festa-beige">
        {Array(20)
          .fill(1)
          .map((el, i) => (
            <Suspense>
              <FestivalCard
                key={i}
                event={fetchedEvent}
                withDescription={false}
              />
            </Suspense>
          ))}
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
