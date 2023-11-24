import { useState } from "react";
import image1 from "../assets/images/galleryimages/1.jpg";
import image2 from "../assets/images/galleryimages/2.jpg";
import image3 from "../assets/images/galleryimages/3.jpg";
import image4 from "../assets/images/galleryimages/4.jpg";
import image5 from "../assets/images/galleryimages/5.jpg";
import GalleryCard from "../components/GalleryCard";
import useClickOutSide from "../hooks/useClickOutSide";
// import useClickOutSide from "../hooks/useClickOutSide";

const images = [
  { id: 1, image: image1, title: "title01", description: "123", url: "1" },
  { id: 2, image: image2, title: "title02", description: "222", url: "2" },
  { id: 3, image: image3, title: "title03", description: "323", url: "3" },
  { id: 4, image: image4, title: "title04", description: "444", url: "4" },
  { id: 5, image: image5, title: "title05", description: "555555", url: "5" },
];

const Gallery = () => {
  const [activeId, setActiveId] = useState(images.at(0).id);
  const [isOpen, setIsOpen] = useState(false);
  const targetIndex = images.findIndex((image) => image.id === activeId);
  const newfrontArray = images.slice(targetIndex + 1);
  const newafterArray = images.slice(0, targetIndex + 1);
  const newImagesArray = newfrontArray.concat(newafterArray);
  // console.log(newImagesArray);
  const ref = useClickOutSide(() => setIsOpen(false));

  function handleClickToggle() {
    // console.log(isOpen);
    setIsOpen((prev) => !prev);
  }

  function handleMinus() {
    const lastImageId = newImagesArray.at(-1).id;
    setActiveId(lastImageId);
  }
  //因為目前的照片一定是新陣列中的第一個,透過新的陣列直接找下一個物件的id
  function handlePlus() {
    const nextimmageId = newImagesArray.at(1).id;
    setActiveId(nextimmageId);
  }

  return (
    <div className="w-full h-screen relative overflow-hidden snap-start " id="gallery">
      {/* === */}
      {/* 大圖盒子 */}
      <div className="w-full h-full  relative ">
        {images.map((image) => {
          return (
            <div
              className={`${
                image.id === activeId
                  ? "w-full h-full absolute top-0 right-0 opacity-100"
                  : "w-0 h-0 absolute top-[75%] right-[20%] opacity-0"
              } transition-all duration-500 `}
              key={image.id}
            >
              <div
                className={`${
                  image.id === activeId || "hidden"
                } flex flex-col absolute xl:top-[20%] top-[10%] left-[10%] w-max bg-black/20 xl:p-8 p-4 xl:rounded-3xl rounded-2xl`}
              >
                <p className="lg:text-8xl text-3xl tracking-wider font-bold animate-showTitle text-white">
                  {image.title}
                </p>
                <p className="lg:text-3xl text-xl mt-4 font-semibold animate-showDes text-white">
                  {image.description}
                </p>
                <button className="w-max h-max lg:py-4 lg:px-12 py-2 px-4 bg-white rounded-full mt-12 animate-showButton ">
                  See More..
                </button>
              </div>
              <img className="w-full h-full object-cover" src={image.image} alt={image.title} />
            </div>
          );
        })}
      </div>
      {/* === */}
      {/* 小卡片盒子 */}
      <div
        className={`w-1/4 h-1/4 absolute top-[60%]  ${
          isOpen ? "right-4" : "-right-[20%]"
        } flex gap-4 items-center transition-all ease-in-out duration-700 `}
        ref={ref}
      >
        <div
          className="absolute lg:-left-28 -left-14 lg:top-[50%] top-[47.5%] -translate-y-[50%] -rotate-90 bg-blue-300 lg:w-36 lg:h-16 w-16 h-8 z-20 lg:text-3xl text-xl flex items-center rounded-t-2xl cursor-pointer justify-center"
          onClick={() => handleClickToggle()}
        >
          {isOpen ? "Close" : "Open"}
        </div>
        {newImagesArray.map((image) => {
          return <GalleryCard key={image.id} image={image} setActiveId={setActiveId} />;
        })}
      </div>
      {/* === */}
      {/* 按鈕盒子 */}
      <div className="w-max h-max absolute bottom-4 left-[50%] -translate-x-[50%]  flex gap-4  ">
        <button
          className="lg:w-16 lg:h-16 w-8 h-8 bg-gray-300/50 rounded-full flex items-center justify-center lg:text-4xl text-2xl"
          onClick={() => handleMinus()}
        >
          -
        </button>
        <button
          className="lg:w-16 lg:h-16 w-8 h-8 bg-gray-300/50 rounded-full flex items-center justify-center  lg:text-4xl text-2xl"
          onClick={() => handlePlus()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Gallery;
