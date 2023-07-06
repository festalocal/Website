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
  return (
    <>
      <div className="flex flex-col">
        {/* Card Carousel container for slide images */}
        <Carousel>
          {event.images.map((imgPath: string) => (
            <img
              className="rounded-2xl shadow-inner drop-shadow-xl w-full aspect-square"
              src={imgPath}
              alt="Image de la fete"
            />
          ))}
        </Carousel>
        <Link to={`/fetes/1`}>
          <p className="font-bold text-festa-blue text-2xl">{event.title}</p>
          {withDescription && <p className="text-sm">{event.description}</p>}
          <div className="mt-2">
            <img
              className="float-left mr-2"
              src="/mark.svg"
              alt="Icône balise de localisation de carte"
            />
            <p className="text-lg">{event.localisation}</p>
          </div>
          <div className="mt-1">
            <img
              className="float-left mr-2"
              src="/calendar.svg"
              alt="Icone de calendrier"
            />
            <p className="text-lg font-bold">
              {event.dateDebut}
              {event.dateFin}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FestivalCard;
