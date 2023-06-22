/**
 * REACT component that represents the Footer of the website
 * IT contains the links to different social networks
 * and links to the legal notice.
 * Static stateless component.
 * FOR NOW NOT RESPONSIVE.
 * @returns
 */

/**
 * Props interface that takes the links
 * to the social networks for redirection
 * on the social network icon links.
 */
interface Props {
  // Facebook link
  fb_link: string;
  // Instagram link
  insta_link: string;
  // Linkedin link
  lkd_link: string;
}

function Footer({ fb_link, insta_link, lkd_link }: Props) {
  return (
    <>
      <footer className="z-100 absolute bottom-0 left-0 flex flex-row px-14 py-2 w-full shadow-inner justify-between items-center">
        {/* Copyright and legal notice container */}
        <div>
          <p className="font-light">
            Copyright &copy; 2023 Festa Local |{" "}
            <a
              className="text-festa-blue hover:festa-dark-blue hover:underline"
              href="#"
            >
              mentions légales
            </a>
          </p>
        </div>
        {/* Social network icon links container */}
        <div>
          <ul className="flex flex-row">
            <li className="ml-4">
              <a href={fb_link}>
                <img
                  className="max-h-8 drop-shadow-lg"
                  src="/facebook_logo.svg"
                ></img>
              </a>
            </li>
            <li className="ml-4">
              <a href={insta_link}>
                <img
                  className="max-h-8 drop-shadow-lg"
                  src="/instagram_logo.svg"
                ></img>
              </a>
            </li>
            <li className="ml-4">
              <a href={lkd_link}>
                <img
                  className="max-h-8 drop-shadow-lg"
                  src="/linkedin_logo.svg"
                ></img>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
