import { Link } from "react-router-dom";

interface Props {
  event: any;
}

/**
 * React Component that represents
 * a Product card for a Festival.
 * @returns
 */
function FestivalCard({ event }: Props) {
  return (
    <>
      <Link to="#">
        <div className="flex flex-col">
          <div className="shadow-inner drop-shadow-xl">
            <img
              className="rounded-lg shadow-inner drop-shadow-xl w-full aspect-square"
              src={event.image.base + event.image.variants[1].filename}
              alt="Image de la fete"
            />
          </div>

          <p className="font-bold text-festa-blue text-2xl">{event.title.fr}</p>
          <div className="mt-2">
            <img
              className="float-left mr-2"
              src="/mark.svg"
              alt="Icone balise de localisation de carte"
            />
            <p className="text-lg">{event.location.address}</p>
          </div>
          <div className="mt-1">
            <img
              className="float-left mr-2"
              src="/calendar.svg"
              alt="Icone de calendrier"
            />
            <p className="text-lg font-bold">{event.dateRange.fr}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default FestivalCard;
