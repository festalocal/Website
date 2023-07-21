import 'material-icons/iconfont/material-icons.css';
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
    const baseClassList: string = "block w-full py-4";
    if (active) {
      return `${baseClassList} text-festa-beige font-bold bg-festa-dark-blue`;
    }
    return `${baseClassList} text-festa-blue`;
  }
  return (
    <>
      <div className="md:hidden absolute -top-18 w-screen h-screen z-10 bg-[#0000007a]"></div>
      <nav className="md:hidden sticky top-0 w-full bg-white z-30 shadow-lg">
        <ul className="flex flex-col space-evenly items-center">
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <Suspense>
              <NavLink
                className={({ isActive }) => activeLinkHamburger(isActive)}
                to="/"
              >
                <span className="material-symbols-outlined">
                  home
                </span>
              </NavLink>
            </Suspense>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <Suspense>
              <NavLink
                className={({ isActive }) => activeLinkHamburger(isActive)}
                to="/fetes"
              >
                <span className="material-symbols-outlined">
                  search
                </span>
              </NavLink>
            </Suspense>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/carte"
            >
              <span className="material-symbols-outlined">
                  map
              </span>
            </NavLink>
          </li>
          
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/about"
            >
              <span className="material-symbols-outlined">
                info
              </span>
            </NavLink>
          </li>
          <li className="text-2xl text-festa-blue border-b-2 mx-auto w-full text-center drop-shadow-xl">
            <NavLink
              className={({ isActive }) => activeLinkHamburger(isActive)}
              to="/organisateur"
            >
              <span className="material-symbols-outlined">
                publish
              </span>
              <span className="material-symbols-outlined">
                celebration
              </span>
            </NavLink>
          </li>
          <li>
            {/* Profile buttons section container for hamburger menu container*/}       
            <button className="rounded-full m-4 flex items-center md:justify-between shadow-md shadow-slate-500">    
              <span className="material-symbols-outlined rounded-full bg-festa-blue p-3 text-white my-auto hover:bg-festa-dark-blue">
                person
              </span>
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default HamburgerMenuOverlay;
