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
      <nav className="flex flex-row justify-between shadow-lg w-full px-14 py-2 z-20 bg-festa-light-blue">
        {/* Clickable logo container */}
        <div className="rounded-full">
          <NavLink to="/">
            <div className="flex items-center">
              <img
                className="rounded-full shadow-md h-20"
                src="/festa_local_logo.jpg"
              ></img>
            </div>
          </NavLink>
        </div>
        {/* Sections links container */}
        <div className="flex grow items-center justify-center pr-28">
          <ul className="p-4 flex flex-row place-content-evenly w-full">
            <li className="inline ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/fetes"
              >
                Trouv'Ta fête
              </NavLink>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/carte"
              >
                Carte
              </NavLink>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/organisateur"
              >
                Organisateur
              </NavLink>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <NavLink
                className={({ isActive }) => activeLink(isActive)}
                to="/about"
              >
                A propos?
              </NavLink>
            </li>
          </ul>
        </div>
        {/* Profile buttons section container */}
        <div className="flex items-center justify-between">
          <div className="">
            <a href="">
              <div className="flex">
                <img className="mr-1" src="/user_connect.svg"></img>
                <p className="text-black">connexion</p>
              </div>
            </a>
          </div>
          <div className="rounded-full m-4 shadow-md shadow-slate-500">
            <button className="rounded-full bg-festa-blue px-5 py-3 text-festa-beige my-auto hover:bg-festa-dark-blue">
              <a href="">Inscription</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
