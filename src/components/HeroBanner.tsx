import FindFestivalButton from "./FindFestivalButton";

function HeroBanner() {
  return (
    <>
      <div className="bg-cover bg-hero-image bg-center w-full h-screen fixed"></div>
      <div className="w-full drop-shadow-lg z-10 backdrop-blur text-white">
        <div className="max-w-lg xl:max-w-2xl px-4 mx-auto flex flex-col justify-center align-center h-screen items-center gap-4">
          <div>
            <h1 className="font-medium text-4xl lg:text-5xl xl:text-6xl">
              FestaLocal votre guide préferé des fêtes
            </h1>
          </div>
          <div>
            <p className="font-normal lg:text-xl xl:text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere,
              aliquid, quia maiores expedita veniam voluptas corporis distinctio
              ea exercitationem quo dolores reprehenderit aperiam, eaque numquam
              sit asperiores amet? Explicabo, omnis.
            </p>
          </div>
          <div>
            <FindFestivalButton></FindFestivalButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
