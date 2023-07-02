import { Suspense } from "react";
import { NavLink } from "react-router-dom";

/**
 * REACT component that represents the top sticky Navbar
 * with the different website sections.
 * FOR NOW NOT RESPONSIVE.
 * @returns
 */
function Navbar() {
  /**
   * Choose the coresponding color of a nav link text
   * Gives the red color to the active link, black otherwise
   * @param { Boolean } active the state of the NavLink
   * @returns { String } Gives the red color to the active link, black otherwise.
   */
  function activeLink(active: Boolean): string {
    if (active) {
      return "text-festa-red font-bold";
    }
    return "text-black";
  }

  return (
    <>
      <nav className="flex flex-row justify-between shadow-lg w-full px-2 sm:px-4 md:px-14 py-2 z-20 bg-white">
        {/* Clickable logo container */}
        <div className="rounded-full">
          <Suspense>
            <NavLink to="/">
              <div className="flex items-center">
                <img
                  className="rounded-full shadow-md h-16 md:h-20"
                  src="/festa_local_logo.jpg"
                  alt="Logo Festa Local"
                ></img>
              </div>
            </NavLink>
          </Suspense>
        </div>
        {/* Sections links container for full navbar*/}
        <div className="hidden md:flex md:grow md:items-center md:justify-center md:sm:pr-0 lg:pr-28">
          <ul className="p-4 flex flex-row place-content-evenly w-full">
            <li className="inline md:ml-8 lg:ml-16 sm:text-base md:text-lg xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <Suspense>
                <NavLink
                  className={({ isActive }) => activeLink(isActive)}
                  to="/fetes"
                >
                  Trouv'Ta fête
                </NavLink>
              </Suspense>
            </li>
            <li className="inline md:ml-8 lg:ml-16 sm:text-base md:text-lg xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/carte"
              >
                Carte
              </NavLink>
            </li>
            <li className="inline md:ml-8 lg:ml-16 sm:text-base md:text-lg xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/organisateur"
              >
                Organisateur
              </NavLink>
            </li>
            <li className="inline md:ml-8 lg:ml-16 sm:text-base md:text-lg xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/about"
              >
                A propos?
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Profile buttons section container for full container*/}
        <div className="hidden md:flex md:items-center md:justify-between">
          <div className="rounded-full m-4 shadow-md shadow-slate-500">
            <button className="rounded-full bg-festa-blue px-3 py-3 text-white my-auto hover:bg-festa-dark-blue">
              <a href="#">
                <img
                  className="mr-1"
                  src="/user_connect.svg"
                  alt="Icône profil utilisateur"
                ></img>
              </a>
            </button>
          </div>
        </div>
        <div
          id="toggleMenu"
          className=":hover:cursor grid md:hidden place-content-center w-20 h-16 md:h-20"
        >
          <div className="w-10 h-1.5 bg-black rounded-full transition-all duration-150 befire:content-[''] before:absolute before:w-10 before:h-1.5 before:bg-black before:rounded-full before:-translate-y-4 before:transition-all before:duration:150 after:content-[''] after:absolute after:w-10 after:h-1.5 after:bg-black after:rounded-full after:translate-y-4 after:transition-all after:duration-150"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
