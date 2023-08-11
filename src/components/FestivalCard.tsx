import { lazy, useState } from "react";
import { Link } from "react-router-dom";
import { getRandomImageOfCategory } from "../utils/ImagesByCategory";

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
export const getDayName: Function = (date: string): string => {
  const dateValues = date.split("/");
  const dateObject: Date = new Date(
    parseInt(dateValues[2]),
    parseInt(dateValues[1]),
    parseInt(dateValues[0])
  );
  return dateObject.toLocaleString("fr", { weekday: "long" });
};

/**
 * Displays correctly info about the festival duration
 * @param { string } firstDate - The festival starting date
 * @param { string } secondDate - The festival ending date
 * @returns { string } Display the info about the Festival duration
 */
export const displayDates: Function = (
  firstDate: string,
  secondDate: string
): string => {
  if (firstDate !== undefined) {
    if (secondDate !== undefined && secondDate !== firstDate) {
      return `Du ${getDayName(firstDate)} ${firstDate} au ${getDayName(
        secondDate
      )} ${secondDate}`;
    }
    return `Le ${getDayName(firstDate)} ${firstDate}`;
  }
  return "";
};

/**
 * React Component that represents
 * a Product card for a Festival.
 * @returns
 */
function FestivalCard({ event, withDescription }: Props): JSX.Element {
  const [images, _] = useState<string[]>([
    getRandomImageOfCategory(event.categorie),
  ]);
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
              {displayDates(
                event.date_debut_french_format,
                event.date_fin_french_format
              )}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default FestivalCard;
