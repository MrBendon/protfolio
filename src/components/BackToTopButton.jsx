import GoUpPng from "../assets/images/arrow-up.png";

const BackToTopButton = () => {
  function handleClick() {
    window.scrollTo(0, 0);
  }

  return (
    <div
      className="fixed right-5 bottom-5 lg:w-16 lg:h-16 w-10 h-10 bg-white/50 rounded-full z-[500] cursor-pointer opacity-50 hover:opacity-100 hover:scale-110 transition-all duration-300"
      onClick={handleClick}
    >
      <img className="w-full h-full object-cover" src={GoUpPng} alt="" />
    </div>
  );
};

export default BackToTopButton;
