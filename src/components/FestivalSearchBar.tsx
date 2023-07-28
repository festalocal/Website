import React, { useState } from "react";

function FestivalSearchBar() {
  const [townSearch, setTownSearch] = useState<string>("");
  return (
    <>
      <form className="w-full px-2 sm:px-4 md:px-14 py-2 md:py-3 z-10 bg-white">
        <div className="bg-white rounded-full border-2 border-festa-blue drop-shadow-lg py-3 px-3 md:py-4 md:px-4 flex flex-row justify-between gap-0 sm:gap-2 md:gap-4">
          <button>
            <span className="material-symbols-outlined min-w-min px-2 flex md:hidden items-center gap-2">
              tune
            </span>
          </button>
          <input
            className="w-full focus:outline-festa-blue"
            type="text"
            name="ville"
            placeholder="Cherchez votreprochaine fête..."
            onChange={(event) => setTownSearch(event.target.value)}
          />
          <button className="hidden min-w-min px-2 md:flex items-center gap-2 mr-8 border-festa-light-blue border-l-2">
            <span className="material-symbols-outlined">event</span>
            <p className="my-auto">Dates</p>
          </button>
          <button className="hidden min-w-min px-2 md:flex items-center gap-2 mr-16 border-festa-light-blue border-l-2">
            <span className="material-symbols-outlined">location_on</span>
            <p className="my-auto">Localisation</p>
          </button>
          <button type="submit">
            <span className="material-symbols-outlined rounded-full border border-1 p-2 shadow-inner shadow-lg">
              search
            </span>
          </button>
        </div>
      </form>
    </>
  );
}

export default FestivalSearchBar;
