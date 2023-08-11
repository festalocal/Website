import { Link } from "react-router-dom";

/**
 * React component button
 * Trouv'Ta fête button
 */
function FindFestivalButton(): JSX.Element {
  return (
    <>
      <Link to="/fetes">
        <button className="flex flex-row px-8 py-5 bg-festa-dark-blue hover:bg-festa-light-blue rounded-full drop-shadow-lg">
          <p className="px-4 text-white text-base">Trouv'ta fête</p>
          <span className="material-symbols-outlined">search</span>
        </button>
      </Link>
    </>
  );
}

export default FindFestivalButton;
