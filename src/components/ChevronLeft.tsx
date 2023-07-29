/**
 * Chevron Left React component
 */
function ChevronLeft() {
  return (
    <span
      className={`
    flex items-center justify-center 
    text-base sm:text-xl w-7 h-7 material-symbols-outlined float-left 
    bg-white/80 p-1 hover:bg-white 
    hover:transition-transform hover:ease-out hover:delay-75 hover:duration-500 hover:scale-110
    active:transition-transform active:ease-out active:duration-300 active:scale-100
    shadow rounded-full`}
    >
      keyboard_arrow_left
    </span>
  );
}

export default ChevronLeft;
