function HeroBanner() {
  return (
    <>
      <div className="w-full bg-festa-beige drop-shadow-lg">
        <div className="max-w-lg xl:max-w-2xl px-4 mx-auto flex flex-col justify-center align-center min-h-[85vh] mt-24 items-center gap-4">
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
            <a href="#">
              <button className="flex flex-row px-9 py-6 bg-festa-pink hover:bg-festa-light-blue rounded-full drop-shadow-lg">
                <img src="/search_icon.svg"></img>
                <p className="px-4 text-black">trouv'Ta fête</p>
                <img src="/right_arrow.svg"></img>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
