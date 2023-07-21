import { Link } from "react-router-dom";

/**
 * React component button
 * Trouv'Ta fête button
 */
function FindFestivalButton() {
  return (
    <>
      <Link to="/fetes">
        <button className="flex flex-row px-9 py-6 bg-festa-pink hover:bg-festa-light-blue rounded-full drop-shadow-lg">
          <img src="/search_icon.svg" alt="Icone loupe de recherche"></img>
          <p className="px-4 text-black">trouv'Ta fête</p>
          <img 
            src="/right_arrow.svg"
            alt="fleche vers droite"
          ></img>
        </button>
      </Link>
    </>
  );
}

export default FindFestivalButton;
