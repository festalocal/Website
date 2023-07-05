// React page components imports
import { Suspense, lazy } from "react";
const Navbar = lazy(() => import("../components/Navbar"));
const Footer = lazy(() => import("../components/Footer"));
const FestivalCard = lazy(() => import("../components/FestivalCard"));
// Imports event data

interface Props {
  title: string;
  description: string;
  localisation: string;
  dateDebut: Date;
  dateFin: Date;
  images: string[];
}

/**
 * Page Details Fête
 * @returns
 */
function FestivalDetails({
  title,
  description,
  localisation,
  dateDebut,
  dateFin,
  images,
}: Props) {
  return (
    <>
      <div className="w-full flex flex-col sticky top-0 z-10 drop-shadow-lg">
        <Suspense>
          <Navbar />
        </Suspense>
      </div>
      <div className="flex flex-row">
        <FestivalCard
          event={{
            title: title,
            localisation: localisation,
            dateDebut: dateDebut,
            dateFin: dateFin,
            images: images,
          }}
        />
        <p>{description}</p>
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
