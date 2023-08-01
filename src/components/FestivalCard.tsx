import { lazy } from "react";
import { Link } from "react-router-dom";
const Carousel = lazy(() => import("./Carousel"));
interface Props {
  event: any;
  withDescription: boolean;
}

/**
 * Gets the name of the day from the given date
 * @param { string } date - The date
 * @returns { string } The name of the day
 */
const getDayName: Function = (date: string): string => {
  const dateValues = date.split("/");
  const dateObject: Date = new Date(
    parseInt(dateValues[2]),
    parseInt(dateValues[1]),
    parseInt(dateValues[0])
  );
  return dateObject.toLocaleString("fr", { weekday: "long" });
};

/**
 * React Component that represents
 * a Product card for a Festival.
 * @returns
 */
function FestivalCard({ event, withDescription }: Props): JSX.Element {
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
              className="shadow-inner aspect-square"
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
          <div className="mt-2 text-lg">
            <span className="material-symbols-outlined float-left mr-2 font-extrabold">
              location_on
            </span>
            <p className="text-lg">{event.ville != undefined && event.ville}</p>
          </div>
          <div className="mt-1 text-lg font-bold">
            <span className="material-symbols-outlined float-left mr-2">
              event
            </span>
            <p>
              {/* {event.date_debut != undefined &&
                getDayName(event.date_debut) + " " + event.date_debut}{" "}
              && {event.date_fin !== event.date} && -{" "}
              {event.date_fin != undefined &&
                getDayName(event.date_fin) + " " + event.date_fin} */}
              {event.date_debut !== undefined &&
                getDayName(event.date_debut) + " " + event.date_debut}
              {event.date_fin !== undefined &&
                event.date_debut !== event.date_fin &&
                " " + getDayName(event.date_fin) + " " + event.date_fin}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FestivalCard;
