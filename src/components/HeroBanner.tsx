import { lazy } from "react";
const FindFestivalButton = lazy(() => import("./FindFestivalButton"));

function HeroBanner() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-cover bg-hero-image bg-center w-full h-full fixed"></div>
        <div className="w-full drop-shadow-lg z-10 backdrop-blur text-white h-screen fixed">
          <div className="max-w-lg xl:max-w-2xl px-4 mx-auto flex flex-col justify-center align-center h-full items-center gap-4 my-auto">
            <div>
              <h1 className="font-medium text-4xl lg:text-5xl xl:text-6xl">
                FestaLocal votre guide préferé des fêtes
              </h1>
            </div>
            <div>
              <p className="font-normal lg:text-xl xl:text-2xl">
                Découvrez toutes les festivités populaires de France sur une application 
                Web exhaustive. Explorez aisément les célébrations et événements culturels 
                du pays grâce à une mine d'informations complète et visualisez-les facilement 
                sur une carte interactive.
              </p>
            </div>
            <div>
              <FindFestivalButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
