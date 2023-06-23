/**
 * React component button
 * Trouv'Ta fête button
 */
function FindFestivalButton() {
  return (
    <>
      <a href="/fetes">
        <button className="flex flex-row px-9 py-6 bg-festa-pink hover:bg-festa-light-blue rounded-full drop-shadow-lg">
          <img src="/search_icon.svg"></img>
          <p className="px-4 text-black">trouv'Ta fête</p>
          <img src="/right_arrow.svg"></img>
        </button>
      </a>
    </>
  );
}

export default FindFestivalButton;
