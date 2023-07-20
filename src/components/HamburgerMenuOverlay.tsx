import { Suspense } from "react";
import { NavLink } from "react-router-dom";

function HamburgerMenuOverlay() {
  /**
   * Choose the color of a nav link text
   * Gives the white color on a festa dark blue background
   * for the Hamburger menu, or festa blue text otherwise.
   * @param { Boolean } active the state of the NavLink
   * @returns { String } Gives the style for the link
   */
  function activeLinkHamburger(active: Boolean): string {
    const baseClassList: string = "block w-full py-6";
    if (active) {
      return `${baseClassList} text-festa-beige font-bold bg-festa-dark-blue`;
    }
    return `${baseClassList} text-festa-blue`;
  }
  return (
    <>
      <div className="absolute -top-20 w-screen h-screen z-10 bg-[#0000007a]"></div>
      <nav className="sticky top-0 w-full bg-white z-30 shadow-lg">
        <ul className="flex flex-col space-evenly items-center">
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <Suspense>
              <NavLink
                className={({ isActive }) => activeLinkHamburger(isActive)}
                to="/"
              >
                Accueil
              </NavLink>
            </Suspense>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <Suspense>
              <NavLink
                className={({ isActive }) => activeLinkHamburger(isActive)}
                to="/fetes"
              >
                Trouv'Ta fête
              </NavLink>
            </Suspense>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/carte"
            >
              Carte
            </NavLink>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/organisateur"
            >
              Organisateur
            </NavLink>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/about"
            >
              A propos?
            </NavLink>
          </li>
          <li>
            {/* Profile buttons section container for hamburger menu container*/}
            <div className="rounded-full m-4 shadow-md shadow-slate-500">
              <button className="w-full rounded-full bg-festa-blue px-3 py-3 text-white my-auto hover:bg-festa-dark-blue">
                <a href="#">
                  <img
                    src="/user_connect.svg"
                    alt="Icône profil utilisateur"
                  ></img>
                </a>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenuOverlay;
