import { lazy } from "react";
import { Link } from "react-router-dom";
const Carousel = lazy(() => import("./Carousel"));

interface Props {
  event: any;
  withDescription: boolean;
}

/**
 * React Component that represents
 * a Product card for a Festival.
 * @returns
 */
function FestivalCard({ event, withDescription }: Props) {
  const images: string[] = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp",
  ];
  return (
    <>
      <div className="flex flex-col">
        {/* Card Carousel container for slide images */}
        <Carousel>
          {images.map((imgPath: string) => (
            <img
              key={Math.random()}
              className="shadow-inner w-full aspect-square"
              src={imgPath}
              alt="Image de la fete"
            />
          ))}
        </Carousel>
        <Link to={`/fetes/${event.id}`}>
          <p className="font-bold text-festa-blue text-2xl">
            {event.titre != undefined && event.titre}
          </p>
          {withDescription && (
            <p className="text-sm">
              {event.description != undefined && event.description}
            </p>
          )}
          <div className="mt-2">
            <span className="material-symbols-outlined float-left mr-2" style={{fontSize: "28px"}}>location_on</span>
            <p className="text-lg">{event.ville != undefined && event.ville}</p>
          </div>
          <div className="mt-1">
            <span className="material-symbols-outlined float-left mr-2" style={{fontSize: "28px", fontWeight: "600"}}>event</span>
            <p className="text-lg font-bold">
              {event.date_debut != undefined && event.date_debut.value} -{" "}
              {event.date_fin != undefined && event.date_fin.value}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FestivalCard;
