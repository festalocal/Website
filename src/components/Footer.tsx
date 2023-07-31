import { NavLink } from "react-router-dom";

/**
 * Props interface that takes the links
 * to the social networks for redirection
 * on the social network icon links.
 */
export interface Props {
  // Facebook link
  fb_link: string;
  // Instagram link
  insta_link: string;
  // Linkedin link
  lkd_link: string;
}

/**
 * REACT component that represents the Footer of the website
 * IT contains the links to different social networks
 * and links to the legal notice.
 * Static stateless component.
 * @returns
 */
function Footer({ fb_link, insta_link, lkd_link }: Props): JSX.Element {
  return (
    <>
      <footer className="z-20 absolute md:fixed md:bottom-0 flex flex-col gap-2 sm:flex-row px-2 sm:px-4 md:px-14 py-2 sm:py-1 w-full shadow-inner justify-between items-center bg-white border-black border-t-[1px]">
        {/* Social network icon links container */}
        <div>
          <ul className="flex flex-row gap-2">
            <li>
              <a href={fb_link}>
                <img
                  className="max-h-6 sm:max-h-4 md:max-h-6 drop-shadow-lg"
                  src="/facebook_logo.svg"
                  alt="Icone Facebook pour le lien de la page Festa Local"
                ></img>
              </a>
            </li>
            <li className="ml-2 md:ml-4">
              <a href={insta_link}>
                <img
                  className="max-h-6 sm:max-h-4 md:max-h-6 drop-shadow-lg"
                  src="/instagram_logo.svg"
                  alt="Icone Instagram pour le lien de la page Festa Local"
                ></img>
              </a>
            </li>
            <li className="ml-2 md:ml-4">
              <a href={lkd_link}>
                <img
                  className="max-h-6 sm:max-h-4 md:max-h-6 drop-shadow-lg"
                  src="/linkedin_logo.svg"
                  alt="Icone Linkedin pour le lien de la page Festa Local"
                ></img>
              </a>
            </li>
          </ul>
        </div>
        {/* Copyright and legal notice container */}
        <div>
          <p className="font-light text-xs md:text-sm">
            Copyright &copy; 2023 Festa Local |{" "}
            <NavLink
              className="text-festa-dark-blue hover:festa-dark-blue hover:underline"
              to="/mentions_legales"
            >
              mentions légales
            </NavLink>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
