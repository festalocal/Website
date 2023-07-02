function FestivalSearchBar() {
  return (
    <>
      <div className="w-full px-2 sm:px-4 md:px-14 py-3 z-10 bg-white">
        <div className="bg-white rounded-full border-2 border-festa-blue drop-shadow-lg py-4 px-4 flex flex-row justify-between gap-4">
          <button className="min-w-min px-2 flex md:hidden items-center gap-2">
            <img className="" src="/settings.svg" alt="Icone de paramètres" />
          </button>
          <input
            className="w-full focus:outline-festa-blue"
            type="string"
            name="festival-search"
            placeholder="Cherchez votre prochaine fête..."
          />
          <button className="hidden min-w-min px-2 md:flex items-center gap-2 mr-8 border-festa-light-blue border-l-2">
            <img src="/calendar.svg" alt="Icone de calendrier" />
            <p className="my-auto">Dates</p>
          </button>
          <button className="hidden min-w-min px-2 md:flex items-center gap-2 mr-16 border-festa-light-blue border-l-2">
            <img src="/mark.svg" alt="Icone balise de localisation de carte" />
            <p className="my-auto">Localisation</p>
          </button>
          <button className="rounded-full border border-1 p-2 shadow-inner shadow-lg">
            <img
              className="h-full"
              src="/search_icon.svg"
              alt="Icone loupe de recherche"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default FestivalSearchBar;
