function FestivalSearchBar() {
  return (
    <>
      <div className="w-full left-0 px-14 py-3 z-10 bg-festa-beige">
        <div className="bg-white rounded-full border-2 border-festa-blue drop-shadow-lg py-4 px-4 flex flex-row justify-between gap-4">
          <input
            className="w-full"
            type="string"
            name="festival-search"
            placeholder="Cherchez votre prochaine fête..."
          />
          <button className="min-w-min px-2 flex gap-2 mr-8 border-festa-light-blue border-l-2">
            <img src="/calendar.svg" />
            <p className="my-auto">Dates</p>
          </button>
          <button className="min-w-min px-2 flex gap-2 mr-16 border-festa-light-blue border-l-2">
            <img src="/mark.svg" />
            <p className="my-auto">Localisation</p>
          </button>
          <button className="rounded-full border border-1 p-2 shadow-inner shadow-lg">
            <img className="h-full" src="/search_icon.svg" />
          </button>
        </div>
      </div>
    </>
  );
}

export default FestivalSearchBar;
