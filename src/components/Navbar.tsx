/**
 * REACT component that represents the top sticky Navbar
 * with the different website sections.
 * FOR NOW NOT RESPONSIVE.
 * @returns
 */
function Navbar() {
  return (
    <>
      <nav className="bg-white flex flex-row justify-between fixed shadow-lg w-full top-0 left-0 px-14 py-2">
        {/* Clickable logo container */}
        <div className="rounded-full">
          <a href="#" className="flex items-center">
            <img
              className="rounded-full shadow-md h-20"
              src="/festa_local_logo.jpg"
            ></img>
          </a>
        </div>
        {/* Sections links container */}
        <div className="flex grow items-center justify-center pr-28">
          <ul className="p-4 flex flex-row place-content-evenly w-full">
            <li className="inline ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <a href="#">Trouv'Ta fête</a>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <a href="#">Carte</a>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <a href="#">Organisateur</a>
            </li>
            <li className="inline  ml-16 md:text-md xl:text-xl hover:festa-dark-blue hover:underline hover:underline-offset-4">
              <a href="#">A propos?</a>
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
