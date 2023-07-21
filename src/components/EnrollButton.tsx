import { Link } from "react-router-dom";

/**
 * Enroll Button React component
 * @returns JSX.Element Enroll Button
 */
function EnrollButton() {
  return (
    <>
      <Link to="/">
        <button className="bg-festa-blue hover:bg-festa-dark-blue flex items-center gap-2 justify-center rounded-full shadow inner-shadow px-5 py-3 md:px-7 md:py-5 xl:px-16 xl:py-6">
          <p className="text-xl text-md md:text-xl lg:text-2xl text-white">
            Participer
          </p>
          <span
            className="material-symbols-outlined text-white"
            style={{ fontSize: "32px" }}
          >
            arrow_outward
          </span>
        </button>
      </Link>
    </>
  );
}

export default EnrollButton;
