import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectDetails from "../components/ProjectDetails";
import ProjectsData from "../data/ProjectData";
import { motion } from "framer-motion";

const Projects = () => {
  const [activeProjectId, setAciveProjectId] = useState(1);
  const [targetDetail] = ProjectsData.filter((project) => project.id === activeProjectId);
  // console.log(targetDetail);

  return (
    <motion.div initial={{ opacity: 0.1, x: 0 }} animate={{ opacity: 1, x: 0 }}>
      <div
        className="w-full h-dvh bg-gradient-to-br from-gray-900 to-black flex flex-col overflow-hidden snap-start"
        id="projects"
      >
        {/* 上方文字 */}
        <div className="flex h-[20%] flex-col gap-4 p-4">
          <p className="xl:text-5xl text-3xl text-white ">作品列表 Project List</p>
          <p className="xl:text-xl text-md text-white">
            作品為自學期間，透過實作來練習並熟練所學，部分為完整網站，部分則為小功能實作練習．
          </p>
        </div>
        <div className="w-full h-[80%] flex ">
          {/* 左邊專案列表塊 */}
          <div className="xl:w-[50%] w-[25%] h-[97%] gap-x-8  gap-y-4 py-2 xl:py-16 xl:px-8 px-0 overflow-auto justify-between my-scrollbar flex flex-col xl:grid xl:grid-cols-2 4xl:grid-cols-3">
            {ProjectsData.map((project, index) => {
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  setAciveProjectId={setAciveProjectId}
                  index={index}
                />
              );
            })}
          </div>

          {/* 中間間隔線 */}
          {/* <div className="mt-8 w-[2px] h-[90%] bg-gradient-to-b from-blue-600 to-white"></div> */}
          {/* 右邊專案詳細資料塊 */}
          <div className="xl:w-[50%] w-[75%]  h-[95%]  ">
            <ProjectDetails project={targetDetail} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
