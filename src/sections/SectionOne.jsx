import { motion } from "framer-motion";
import Mouse from "../components/Mouse";
import ComputerCanvas from "../model/ComputerCanvas";
import { homeVariants } from "../animation/animation.js";

const SectionOne = () => {
  // console.log({ homeVariants });
  return (
    <motion.div
      variants={homeVariants}
      initial={homeVariants.initial}
      animate={homeVariants.animate}
      transition={{ duration: 1 }}
    >
      <div className="w-full h-dvh pt-36 bg-backgroundImage1 bg-cover bg-center snap-start relative px-4">
        {/* <div className="w-[90%] mx-auto flex flex-wrap relative"> */}
        <div className="flex relative">
          {/* 圖形 */}
          <div className="absolute top-0 left-0 w-5 h-5 rounded-full bg-blue-600"></div>
          <div className="absolute top-0 left-2 w-1 h-[300px] bg-gradient-to-b from-blue-600 to-blue-200/0"></div>
          {/* 文字內容 */}
          <div className="pl-8 min-h-[300px]">
            <p className="xl:text-6xl text-4xl pt-2 text-white">
              Hi,I&apos;m <span className="font-bold text-blue-600">Mr.Bendon</span>
            </p>
            <p className="xltext-4xl text-2xl font-semibold text-white mt-8">
              I love to develop 2D/3D visuals, beautiful user interface and web applications.
            </p>
          </div>
        </div>
        <div className="mx-auto w-4/5 lg:h-[800px] h-[500px]">{<ComputerCanvas></ComputerCanvas>}</div>
        <div className="absolute bottom-4 left-[50%] translate-x-[-50%] cursor-pointer">
          <Mouse></Mouse>
        </div>
        {/* </div> */}
      </div>
    </motion.div>
  );
};

export default SectionOne;
