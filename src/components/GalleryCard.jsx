const GalleryCard = ({ image, setActiveId }) => {
  //   const calcResult = calcXmove(targetIndex);
  //   console.log(calcResult);
  function handleClickImg() {
    // if (index === 0) return;

    setActiveId(image.id);
  }
  return (
    <div
      className={`lg:min-w-[125px] lg:h-[200px] min-w-[60px] md:h-[160px] h-[100px] relative group hover:-translate-x-1 hover:-translate-y-1 lg:rounded-3xl rounded-md `}
      onClick={() => handleClickImg()}
    >
      <div className="w-full h-[99%]  lg:rounded-3xl rounded-md border-4 lg:border-8 border-black/80 absolute top-[2px] -right-[2px] lg:top-2 lg:-right-1 group-hover:border-[10px] group-hover:h-full group-hover:-right-2"></div>
      <div className="w-full h-full lg:rounded-3xl rounded-md shadow-lg shadow-black/50 overflow-hidden cursor-pointer">
        <img
          src={image.image}
          alt={image.title}
          className="h-full object-cover  saturate-0  hover:saturate-100 hover:scale-110 transition-all"
        />
      </div>
    </div>
  );
};

export default GalleryCard;
