import { lazy } from "react";
import { displayDates } from "../components/FestivalCard";
const EnrollButton = lazy(() => import("./EnrollButton"));

interface Props {
  event: any;
}

function FestivalGallery({ event }: Props): JSX.Element {
  const images: string[] = [
    "/image1.webp",
    "/image2.webp",
    "/image3.webp",
    "/image4.webp",
    "/image5.webp",
  ];
  return (
    <>
      <div className="grid grid-cols-5 items-center gap-5 lg:gap-7 xl:gap-8 2xl:gap-10">
        {/* Festival information left section container*/}
        <div className="flex flex-col gap-6 col-span-2">
          {/* Festival title and description container */}
          <h1 className="text-4xl lg:text-6xl xl:text-8xl text-festa-dark-blue font-bold">
            {event.titre != undefined && event.titre}
          </h1>
          <p className="text-md lg:text-xl xl:text-2xl text-festa-blue">
            {event.description != undefined && event.description}
          </p>

          {/* Festival location container */}
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined float-left mr-2 text-4xl lg:text-5xl xl:text-6xl">
              location_on
            </span>
            <div>
              <h4 className="text-xl lg:text-2xl xl:text-4xl text-festa-dark-blue font-semibold">
                Région
              </h4>
              <p className="text-md lg:text-xl xl:text-2xl text-festa-blue">
                {event.ville != undefined && event.ville}
              </p>
            </div>
          </div>

          {/* Festival dates container */}
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined float-left mr-2 text-4xl lg:text-5xl xl:text-6xl">
              event
            </span>
            <div>
              <h4 className="text-xl lg:text-2xl xl:text-4xl text-festa-dark-blue font-semibold">
                Dates
              </h4>
              <p className="text-md lg:text-xl xl:text-2xl text-festa-blue">
                {displayDates(
                  event.date_debut_french_format,
                  event.date_fin_french_format
                )}
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <EnrollButton />
          </div>
        </div>

        {/* Festival images gallery container */}
        <div className="col-span-3 uppercase">
          <p className="text-festa-dark-blue text-2xl font-semibold text-right">
            {event.ville != undefined && event.ville}
          </p>
          <div className="uppercase flex">
            <p
              className="text-festa-dark-blue text-2xl rotate-180 font-semibold"
              style={{ writingMode: "vertical-rl" }}
            >
              {event.titre != undefined && event.titre}
            </p>
            <div className="rounded-4xl md:columns-3 lg:columns-4">
              {images.map((imgPath: string) => (
                <img
                  className="mb-4 shadow-inner drop-shadow-xl"
                  src={imgPath}
                  alt="Image de la fete"
                />
              ))}
            </div>
            <p
              className="text-festa-dark-blue text-2xl font-semibold"
              style={{ writingMode: "vertical-rl" }}
            >
              {event.ville != undefined && event.ville}
            </p>
          </div>
          <p className="text-festa-dark-blue text-2xl font-semibold">
            {event.date_debut != undefined && event.date_debut.value} -{" "}
            {event.date_fin != undefined && event.date_fin.value}
          </p>
        </div>
      </div>
    </>
  );
}

export default FestivalGallery;
