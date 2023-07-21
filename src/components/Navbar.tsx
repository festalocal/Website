import { Suspense, lazy, useState } from "react";
import { NavLink } from "react-router-dom";
const HamburgerMenuOverlay = lazy(() => import("./HamburgerMenuOverlay"));

/**
 * REACT component that represents the top sticky Navbar
 * with the different website sections.
 * FOR NOW NOT RESPONSIVE.
 * @returns
 */
function Navbar() {
  // State hook for managing toggle of the hamburger menu list
  let [toggledHamburger, setToggledHamburger]: Array<any> = useState(false);
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

  /**
   * Toggles the hamburger menu
   */
  function toggleHamburgerMenu(): void {
    toggledHamburger ? setToggledHamburger(false) : setToggledHamburger(true);
  }

  /**
   * Open the overlay hamburger menu list.
   * @param toggled
   * @returns
   */
  function openHamburgerMenuOverlay(toggled: Boolean): string {
    if (toggled) {
      return "slide-in-left";
    } else {
      return "hidden overflow-hidden relative left-[-100%]";
    }
  }

  return (
    <>
      {/* --------- Responsive Navbar for full container --------- */}
      <nav className="flex flex-row justify-between items-center shadow-lg w-full p-1.5 sm:px-4 md:px-14 z-20 bg-white">
        {/* Clickable logo container */}
        <div className="rounded-full">
          <Suspense>
            <NavLink to="/">
              <div className="flex items-center justify-center w-20">
                <img
                  className="rounded-full shadow-md h-14 md:h-16"
                  src="/festa_local_logo.webp"
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
                to="/about"
              >
                A propos?
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
          </ul>
        </div>
        {/* Profile buttons section container for full container*/}
        <button className="hidden md:flex md:items-center md:justify-between rounded-full m-1 shadow-md shadow-slate-500">    
          <span className="material-symbols-outlined rounded-full bg-festa-blue p-3 text-white my-auto hover:bg-festa-dark-blue">
            person
          </span>
        </button>
        <div
          id="toggleMenu"
          className="hover:cursor-pointer grid md:hidden place-content-center w-20 h-14"
          onClick={toggleHamburgerMenu}
        >
          <span className={`material-symbols-outlined ${toggledHamburger ? "text-festa-red" : "text-black"}`} style={{fontSize: "50px"}}>
            {toggledHamburger ? "close" : "menu"}
          </span>
        </div>
      </nav>
      {/* --------- Responsive Navbar for full container --------- */}

      {/* --------- Hamburger menu list for mobile containers --------- */}
      <div
        id="HamburgerMenuList"
        className={openHamburgerMenuOverlay(toggledHamburger)}
      >
        <HamburgerMenuOverlay />
      </div>
      {/* --------- Hamburger menu list for mobile containers --------- */}
    </>
  );
}

export default Navbar;
