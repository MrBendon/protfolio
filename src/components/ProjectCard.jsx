import { motion } from "framer-motion";
import { cardsVariants } from "../animation/animation";

const ProjectCard = ({ project, setAciveProjectId, index }) => {
  // const CardRef = useRef(null);
  // const isInView = useInView(CardRef, { once: true });
  function handleClickCard() {
    setAciveProjectId(project.id);
  }
  return (
    <motion.div
      className="2xl:h-[400px] xl:h-[320px] xl:aspect-[3/4] md:min-h-[200px] min-h-[120px]  aspect-[2/3]  bg-white/20 rounded-2xl place-self-center xl:p-2 p-1 cursor-pointer hover:skew-y-3  shadow-2xl shadow-black/75 relative overflow-hidden group"
      variants={cardsVariants}
      initial={cardsVariants.initial}
      whileInView={cardsVariants.animate}
      transition={{ delay: index * 0.25, duration: 0.5 }}
      viewport={{ once: true }}
      onClick={() => handleClickCard()}
    >
      <img
        className="w-full h-full object-cover rounded-2xl saturate-[15%] group-hover:saturate-100 transition-all"
        src={project.websiteImage}
        alt={project.projectName}
      />
      <div className="absolute -bottom-20 left-0 w-full xl:group-hover:bottom-4 group-hover:bottom-2 transition-all h-max bg-black/20 xl:px-8 xl:py-4 py-2 px-2">
        <p className="text-white text-base md:text-xl lg:text-4xl ">{project.projectName}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
