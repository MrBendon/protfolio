import { useState } from "react";
import Logo from "../assets/images/web.png";
import useClickOutSide from "../hooks/useClickOutSide";
import { motion } from "framer-motion";

const navbarList = [
  { id: "gallery", title: "圖片集 Gallery" },
  { id: "projects", title: "作品 Projects" },
  { id: "contact", title: "與我聯繫 Contact" },
];

const StyleLi = ({ item }) => {
  return (
    <a
      href={`#${item.id}`}
      className={`h-full flex items-center relative text-white after:w-0 after:absolute after:bottom-0 after:right-0 after:border-b-4 after:border-white hover:after:w-full hover:after:left-0 after:transition-all after:duration-500  after:ease-in-out`}
    >
      <li className="h-full flex items-center px-4 transition-all ">{item.title}</li>
    </a>
  );
};

const MobileLiVariants = {
  hidden: { opacity: 0, x: -300 },
  show: {
    opacity: 1,
    x: 0,
  },
};

const MobileLi = ({ item, isOpenNav, index }) => {
  return (
    <motion.a
      variants={MobileLiVariants}
      initial={MobileLiVariants.hidden}
      animate={isOpenNav ? MobileLiVariants.show : ""}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      href={`#${item.id}`}
      className={`flex items-center relative ${
        isOpenNav ? "h-16 rounded-t-xl hover:bg-slate-200 font-black" : "h-16 text-white"
      }  after:w-0 after:absolute after:bottom-0 after:right-0 after:border-b-4 after:border-blue-800 hover:after:w-full hover:after:left-0 after:transition-all after:duration-500  after:ease-in-out`}
    >
      <li className="h-full flex items-center px-4 transition-all text-md">{item.title}</li>
    </motion.a>
  );
};

const Navbar = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const ref = useClickOutSide(() => setIsOpenNav(false));

  return (
    <div className="absolute top-4 left-0 flex items-center w-full justify-between bg-transparent h-20 xl:pl-8 pl-2 z-[200]">
      <a href="#top" className="flex items-center cursor-pointer">
        <img src={Logo} alt="logo" className="xl:w-16 w-12 mr-2" />
        <p className="text-2xl font-bold text-white"> | Mr.Bendon</p>
      </a>

      {/* 一般選單 */}
      <ul className="hidden lg:flex gap-5 text-xl h-full items-center ">
        {navbarList.map((item) => {
          return <StyleLi key={item.id} item={item} />;
        })}
      </ul>

      {/* 手機選單 */}
      <ul
        className="lg:hidden flex items-center group cursor-pointer h-full mr-4"
        onClick={() => setIsOpenNav((prev) => !prev)}
        ref={ref}
      >
        <div className="relative w-12 border-b-4 border-blue-400 after:absolute after:w-full after:-top-2 after:border-b-4 after:border-blue-400 before:absolute before:w-full md:before:top-[10px] before:top-[8px] before:border-b-4 before:border-blue-400 group-hover:after:-top-4 group-hover:before:top-4 after:transition-all before:transition-all"></div>
        <div
          className={`${
            isOpenNav ? "flex opacity-100 flex-col bg-white" : " top-1/2 opacity-0 invisible flex-row"
          } z-10 transition-all duration-350 absolute top-full right-4  p-4 rounded-lg overflow-hidden`}
        >
          {navbarList.map((item, index) => {
            return <MobileLi key={item.id} item={item} isOpenNav={isOpenNav} index={index} />;
          })}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
